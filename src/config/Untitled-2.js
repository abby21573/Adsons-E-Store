export var formatKES = function (price) {
    return "KSh ".concat(price.toLocaleString('en-KE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
};
