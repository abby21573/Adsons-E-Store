'use client';

import DefaultLayout from "../layouts/default";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const ;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const CountUp = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return <>{count.toLocaleString()}+</>;
};

export default function AboutPage() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ WORKING ICON URLs (static PNG)
  const iconDelivery = "https://cdn-icons-png.flaticon.com/512/3082/3082033.png";
  const iconSecurity = "https://cdn-icons-png.flaticon.com/512/2917/2917995.png";
  const iconHeart = "https://cdn-icons-png.flaticon.com/512/2589/2589175.png";
  const iconSmile = "https://cdn-icons-png.flaticon.com/512/2917/2917292.png";
  const iconBox = "https://cdn-icons-png.flaticon.com/512/1000/1000978.png";
  const iconHeadset = "https://cdn-icons-png.flaticon.com/512/3627/3627659.png";
  const iconLock = "https://cdn-icons-png.flaticon.com/512/891/891502.png";

  // Team photos (real Unsplash portraits)
  const teamPhotos = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  ];

  // Testimonial avatars (real random user images)
  const testimonialAvatars = [
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
  ];

  const testimonials = [
    { name: "Sarah K.", role: "Tech Entrepreneur", text: "Adsons transformed my shopping experience. The quality and speed are unmatched!", rating: 5, avatar: testimonialAvatars[0] },
    { name: "James M.", role: "Product Designer", text: "Customer support went above and beyond to help me. Highly recommend!", rating: 5, avatar: testimonialAvatars[1] },
    { name: "Linda W.", role: "Small Business Owner", text: "Reliable, fast, and great prices. My go-to store for everything.", rating: 4, avatar: testimonialAvatars[2] },
  ];

  const team = [
    { name: "Alex Johnson", role: "CEO & Founder", bio: "10+ years in e-commerce innovation", avatar: teamPhotos[0] },
    { name: "Maria Garcia", role: "Head of Product", bio: "Passionate about quality curation", avatar: teamPhotos[1] },
    { name: "David Kim", role: "Customer Success", bio: "Here to ensure your happiness", avatar: teamPhotos[2] },
  ];

  const timeline = [
    { year: "2024", title: "Company Founded", desc: "Adsons launched with a mission to redefine online shopping." },
    { year: "2024", title: "First 10K Customers", desc: "Reached 10,000 happy customers within 6 months." },
    { year: "2025", title: "Expansion", desc: "Opened fulfillment centers across the country." },
  ];

  const certifications = [
    { name: "Certified E-commerce", icon: "https://cdn-icons-png.flaticon.com/512/1903/1903301.png" },
    { name: "PCI Compliant", icon: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png" },
    { name: "Google Premier Partner", icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png" },
    { name: "Global Shipping Alliance", icon: "https://cdn-icons-png.flaticon.com/512/3114/3114986.png" },
  ];

  const socialIcons = [
    { href: "https://wa.me/254700123456", icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png", label: "WhatsApp" },
    { href: "https://twitter.com/adsons", icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png", label: "Twitter" },
    { href: "https://instagram.com/adsons", icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png", label: "Instagram" },
  ];

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 py-32 md:py-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0%", "100%"] }}
              transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
            >
              About Adsons
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-purple-100 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Quality products, seamless experience, and a passion for serving you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Story</h2>
            <div className="mt-3 h-1 w-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border border-purple-100 dark:border-purple-800/30"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
              Founded in <span className="font-bold text-purple-600">2024</span>, Adsons began with a simple idea: bring together carefully curated,
              high‑quality products at fair prices. From cutting‑edge electronics to everyday
              essentials, we handpick every item to ensure you get the best value.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              We believe shopping should be delightful, not daunting. That’s why we’ve built a
              seamless, secure, and fast e‑commerce experience. Whether you are upgrading your
              workspace or finding the perfect gift, <span className="font-semibold text-purple-600">Adsons is here for you.</span>
            </p>
            <div className="mt-8 flex justify-end">
              <div className="h-12 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values / Highlights – WORKING ICONS */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Why Shop With Us</h2>
            <div className="mt-3 h-1 w-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
            <p className="mt-4 text-gray-600 dark:text-gray-300">Experience the difference of premium service and quality</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: iconDelivery, title: "Fast Delivery", description: "Nationwide shipping within 2‑4 days. Free on orders over $100.", gradient: "from-blue-500 to-cyan-500" },
              { icon: iconSecurity, title: "Secure Payments", description: "Your transactions are 100% safe and encrypted with bank-grade security.", gradient: "from-purple-500 to-pink-500" },
              { icon: iconHeart, title: "Satisfaction Guarantee", description: "30‑day returns, no questions asked. Your happiness is our priority.", gradient: "from-orange-500 to-red-500" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="group relative cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl from-purple-500 to-pink-500" />
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-purple-200 text-center">
                  <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center">
                    <img src={item.icon} alt={item.title} className="w-14 h-14 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${item.gradient} rounded-full mx-auto transition-all duration-300 group-hover:w-24`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators – WORKING ICONS */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { value: 10000, label: "Happy Customers", icon: iconSmile, suffix: "+" },
              { value: 500, label: "Products", icon: iconBox, suffix: "+" },
              { value: 24, label: "Support", icon: iconHeadset, suffix: "/7" },
              { value: 100, label: "Secure Payments", icon: iconLock, suffix: "%" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3">
                  <img src={stat.icon} alt={stat.label} className="w-full h-full object-contain" />
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value < 1000 ? <CountUp target={stat.value} /> : <CountUp target={stat.value / 1000} />}{stat.suffix}
                  {stat.value >= 1000 && "K"}
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Our Journey</h2>
            <div className="mt-3 h-1 w-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border-l-4 border-purple-500">
                  <div className="text-2xl font-bold text-purple-600">{item.year}</div>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Meet the Team</h2>
            <div className="mt-3 h-1 w-28 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
            <p className="mt-4 text-gray-600 dark:text-gray-300">Passionate people behind Adsons</p>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div key={member.name} variants={fadeInUp} className="group perspective">
                <div className="relative w-full h-80 transition-all duration-500 transform-style-3d group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
                    <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-purple-600 font-semibold">{member.role}</p>
                    <p className="text-gray-500 mt-2 text-sm">{member.bio}</p>
                  </div>
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center rotate-y-180">
                    <div className="text-4xl mb-2">🌟</div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm mt-2">“Dedicated to making your day better.”</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" className="text-4xl font-bold text-white">What Our Customers Say</motion.h2>
          <div className="mt-3 h-1 w-28 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto" />
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mt-12 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white">
                <img src={testimonials[testimonialIndex].avatar} alt={testimonials[testimonialIndex].name} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-center gap-1 text-yellow-400 text-xl mb-4">
                {"★".repeat(testimonials[testimonialIndex].rating)}{"☆".repeat(5 - testimonials[testimonialIndex].rating)}
              </div>
              <p className="text-white text-xl italic">"{testimonials[testimonialIndex].text}"</p>
              <h4 className="mt-6 font-bold text-white text-lg">{testimonials[testimonialIndex].name}</h4>
              <p className="text-purple-200">{testimonials[testimonialIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setTestimonialIndex(idx)} className={`w-3 h-3 rounded-full transition-all ${idx === testimonialIndex ? 'bg-white w-6' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3 variants={fadeInUp} initial="hidden" whileInView="visible" className="text-2xl font-semibold text-gray-600 dark:text-gray-400">Trusted By Industry Leaders</motion.h3>
          <motion.div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-12">
            {certifications.map((badge, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-2">
                <img src={badge.icon} alt={badge.name} className="w-12 h-12 object-contain" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <div ref={contactRef} className="scroll-mt-24">
        <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse -top-20 -left-20" />
            <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-1000 bottom-20 right-20" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="backdrop-blur-xl bg-white/10 dark:bg-black/20 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h2>
              <div className="mt-3 h-1 w-28 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto" />
              <p className="mt-6 text-purple-100 text-lg">We’re here to help! Reach out anytime.</p>
              <motion.div className="mt-10" whileHover={{ scale: 1.02 }}>
                <a href="tel:+254700123456" className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent hover:from-white hover:to-purple-200 transition-all">
                  <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="phone" className="w-8 h-8 invert" />
                  +254 700 123 456
                </a>
                <p className="text-sm text-purple-200 mt-2">(Mon–Fri, 9am–6pm EAT)</p>
              </motion.div>
              <div className="flex justify-center gap-8 mt-10">
                {socialIcons.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="transition-all"
                    aria-label={social.label}
                  >
                    <img src={social.icon} alt={social.label} className="w-8 h-8 brightness-0 invert" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* CTA Button */}
      <div className="pb-20 pt-10 text-center relative">
        <motion.button
          onClick={scrollToContact}
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <img src="https://cdn-icons-png.flaticon.com/512/1834/1834838.png" alt="contact" className="w-5 h-5 invert" />
            Contact Us Now
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
          </span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↑
      </motion.button>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .perspective { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </DefaultLayout>
  );
}