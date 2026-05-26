// const express = require('express');
// const axios = require('axios');
// const moment = require('moment');
// const pool = require('./db');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PORT = process.env.PORT || 3000;

// // ---------------------------
// // 1. Helper: Get Access Token
// // ---------------------------
// const getAccessToken = async () => {
//     const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString('base64');
//     const response = await axios.get(
//         'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
//         { headers: { Authorization: `Basic ${auth}` } }
//     );
//     return response.data.access_token;
// };

// // ---------------------------
// // 2. Helper: Generate STK Password
// // ---------------------------
// const generatePassword = (shortCode, passkey, timestamp) => {
//     const str = shortCode + passkey + timestamp;
//     return Buffer.from(str).toString('base64');
// };

// // ---------------------------
// // 3. Endpoint: Initiate STK Push
// // ---------------------------
// app.post('/api/mpesa/stk-push', async (req, res) => {
//     const { phoneNumber, amount, accountReference = 'TestPayment', transactionDesc = 'Payment for goods' } = req.body;

//     // Basic validation
//     if (!phoneNumber || !amount) {
//         return res.status(400).json({ error: 'Phone number and amount are required' });
//     }

//     const shortCode = process.env.MPESA_SHORTCODE;
//     const passkey = process.env.MPESA_PASSKEY;
//     const timestamp = moment().format('YYYYMMDDHHmmss');
//     const password = generatePassword(shortCode, passkey, timestamp);

//     try {
//         const token = await getAccessToken();

//         const requestBody = {
//             BusinessShortCode: shortCode,
//             Password: password,
//             Timestamp: timestamp,
//             TransactionType: 'CustomerPayBillOnline',
//             Amount: amount,
//             PartyA: phoneNumber,
//             PartyB: shortCode,
//             PhoneNumber: phoneNumber,
//             CallBackURL: process.env.CALLBACK_URL,
//             AccountReference: accountReference,
//             TransactionDesc: transactionDesc
//         };

//         const response = await axios.post(
//             'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
//             requestBody,
//             { headers: { Authorization: `Bearer ${token}` } }
//         );

//         const { MerchantRequestID, CheckoutRequestID, ResponseCode, ResponseDescription } = response.data;

//         if (ResponseCode === '0') {
//             // Insert pending transaction into database
//             await pool.query(
//                 `INSERT INTO transactions 
//                 (merchant_request_id, checkout_request_id, phone_number, amount, account_reference, transaction_desc, status) 
//                 VALUES (?, ?, ?, ?, ?, ?, 'PENDING')`,
//                 [MerchantRequestID, CheckoutRequestID, phoneNumber, amount, accountReference, transactionDesc]
//             );

//             return res.status(200).json({
//                 success: true,
//                 message: 'STK Push sent successfully',
//                 merchantRequestID: MerchantRequestID,
//                 checkoutRequestID: CheckoutRequestID
//             });
//         } else {
//             return res.status(400).json({ success: false, message: ResponseDescription });
//         }
//     } catch (error) {
//         console.error('STK Push error:', error.response?.data || error.message);
//         return res.status(500).json({ success: false, error: 'Internal server error' });
//     }
// });

// // ---------------------------
// // 4. Endpoint: Callback (Safaricom calls this)
// // ---------------------------
// app.post('/api/mpesa/callback', async (req, res) => {
//     console.log('Callback received:', JSON.stringify(req.body, null, 2));

//     const { Body } = req.body;
//     const { stkCallback } = Body;
//     const {
//         MerchantRequestID,
//         CheckoutRequestID,
//         ResultCode,
//         ResultDesc,
//         CallbackMetadata
//     } = stkCallback;

//     try {
//         // Find the transaction by merchant_request_id or checkout_request_id
//         const [rows] = await pool.query(
//             'SELECT id, status FROM transactions WHERE merchant_request_id = ? OR checkout_request_id = ?',
//             [MerchantRequestID, CheckoutRequestID]
//         );

//         if (rows.length === 0) {
//             console.error('Transaction not found for MerchantRequestID:', MerchantRequestID);
//             return res.status(404).json({ ResultCode: 1, ResultDesc: 'Transaction not found' });
//         }

//         const transactionId = rows[0].id;
//         let status = 'FAILED';
//         let mpesaReceiptNumber = null;
//         let resultCode = ResultCode;
//         let resultDesc = ResultDesc;

//         if (ResultCode === 0) {
//             status = 'SUCCESS';
//             // Extract MpesaReceiptNumber from metadata
//             if (CallbackMetadata && CallbackMetadata.Item) {
//                 const receiptItem = CallbackMetadata.Item.find(item => item.Name === 'MpesaReceiptNumber');
//                 if (receiptItem) mpesaReceiptNumber = receiptItem.Value;
//             }
//         }

//         // Update the transaction
//         await pool.query(
//             `UPDATE transactions 
//             SET status = ?, mpesa_receipt_number = ?, result_code = ?, result_desc = ?, updated_at = NOW()
//             WHERE id = ?`,
//             [status, mpesaReceiptNumber, resultCode, resultDesc, transactionId]
//         );

//         console.log(`Transaction ${transactionId} updated to ${status}`);
//         return res.status(200).json({ ResultCode: 0, ResultDesc: 'Callback processed successfully' });
//     } catch (error) {
//         console.error('Callback processing error:', error);
//         return res.status(500).json({ ResultCode: 1, ResultDesc: 'Internal server error' });
//     }
// });

// // ---------------------------
// // 5. (Optional) Endpoint: Check transaction status (for polling)
// // ---------------------------
// app.get('/api/transaction/:merchantRequestId', async (req, res) => {
//     const { merchantRequestId } = req.params;
//     try {
//         const [rows] = await pool.query(
//             'SELECT status, mpesa_receipt_number, result_code, result_desc FROM transactions WHERE merchant_request_id = ?',
//             [merchantRequestId]
//         );
//         if (rows.length === 0) return res.status(404).json({ error: 'Transaction not found' });
//         return res.json(rows[0]);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Database error' });
//     }
// });

// // ---------------------------
// // Start server
// // ---------------------------
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });