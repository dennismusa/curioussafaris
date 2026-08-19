/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaChevronUp,
  FaGlobe,
} from "react-icons/fa";

import home3 from "../assets/home3.jpg";
import airbaloon from "../assets/airbaloon.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await emailjs.send(
      "service_0dmdh7d",
      "template_alghgyr",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      "PQQ88KH3r05vTWQ5j"
    );

    console.log("EmailJS success:", result);

    alert("Message sent successfully! We will get back to you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
 } catch (error) {
  console.log(error);

  alert(
    `Status: ${error.status}\nMessage: ${error.text}`
  );
}
};

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative h-[60vh] overflow-hidden">

        <img
          src={airbaloon}
          alt="Contact Curious Safaris"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative h-full flex items-center justify-center">

          <div className="text-center text-white px-6">

            <span className="uppercase tracking-[5px] text-yellow-400 font-semibold">
              We're Here To Help
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black">
              Contact Us
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-200">
              Ready to join our next adventure? Reach out today and let us
              help you plan your perfect safari, road trip or holiday.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CONTACT CARDS ================= */}

      <section className="-mt-20 relative z-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Phone */}

            <div className="bg-white rounded-[30px] shadow-xl p-8 text-center hover:-translate-y-2 transition duration-500">

              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">

                <FaPhoneAlt className="text-3xl text-[#0B6E4F]" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Call Us
              </h3>

              <p className="mt-4 text-gray-600">
                +254745861688
              </p>

              <p className="text-gray-600">
                +254745861688
              </p>

            </div>

            {/* Email */}

            <div className="bg-white rounded-[30px] shadow-xl p-8 text-center hover:-translate-y-2 transition duration-500">

              <div className="w-20 h-20 mx-auto rounded-full bg-yellow-100 flex items-center justify-center">

                <FaEnvelope className="text-3xl text-yellow-600" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Email
              </h3>

              <p className="mt-4 text-gray-600 break-all">
                curioussafariss@gmail.com
              </p>

            </div>

            {/* Office */}

            <div className="bg-white rounded-[30px] shadow-xl p-8 text-center hover:-translate-y-2 transition duration-500">

              <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center">

                <FaMapMarkerAlt className="text-3xl text-blue-600" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Office
              </h3>

              <p className="mt-4 text-gray-600">
                Nairobi, Kenya
              </p>

            </div>

            {/* WhatsApp */}

            <div className="bg-white rounded-[30px] shadow-xl p-8 text-center hover:-translate-y-2 transition duration-500">

              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">

                <FaWhatsapp className="text-3xl text-green-600" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                WhatsApp
              </h3>

              <a
                href="https://wa.me/254745861688"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[#0B6E4F] font-semibold hover:text-yellow-600"
              >
                Chat With Us →
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT FORM ================= */}

<section className="relative py-28 overflow-hidden">

  {/* Safari Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url(${home3})`,
    }}
  />

  {/* Dark Safari Overlay */}
  <div className="absolute inset-0 bg-[#04140E]/85" />

  {/* Green Glow */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px]" />

  {/* Gold Glow */}
  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[150px]" />

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="text-white">

        <span className="inline-flex px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 uppercase tracking-[3px] text-sm font-semibold">
          Get In Touch
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          Let's Plan Your
          <span className="block text-yellow-400">
            Next Adventure
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-8 max-w-xl">
          Whether you're planning a group road trip, corporate retreat,
          wildlife safari or a custom holiday, our travel experts are
          ready to help you create an unforgettable experience.
        </p>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
              ✓
            </div>

            <span className="text-gray-200">
              Fast Response
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/20 flex items-center justify-center text-yellow-300">
              ✓
            </div>

            <span className="text-gray-200">
              Tailor-Made Packages
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white">
              ✓
            </div>

            <span className="text-gray-200">
              Professional Travel Consultants
            </span>
          </div>

        </div>

      </div>

      {/* FORM */}
      <div className="bg-white/95 backdrop-blur-xl rounded-[35px] shadow-2xl p-6 md:p-10">

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your trip..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition resize-none"
            required
          />

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[#0B6E4F] text-white font-bold text-lg hover:bg-[#09543D] hover:-translate-y-1 shadow-lg transition-all duration-300"
          >
            Send Message →
          </button>

        </form>

      </div>

    </div>

  </div>

</section>   
      
         {/* ================= MAP & OFFICE INFO ================= */}

      {/* ================= MAP & OFFICE ================= */}

<section className="relative py-28 bg-gradient-to-b from-white via-[#F7F9F6] to-[#EEF4EF] overflow-hidden">

  {/* Background Effects */}
  <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-emerald-200/30 rounded-full blur-[150px]" />
  <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-yellow-200/20 rounded-full blur-[150px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] uppercase tracking-[3px] text-xs font-bold">
        📍 Find Us
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
        Visit Our
        <span className="block text-[#0B6E4F]">
          Nairobi Office
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Planning your next adventure? Visit us, give us a call or connect
        with our travel team. We're ready to help you plan your perfect
        safari, road trip or holiday across Kenya and East Africa.
      </p>

    </div>


    {/* Main Grid */}
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">

      {/* ================= MAP ================= */}

      <div className="relative min-h-[550px] rounded-[35px] overflow-hidden shadow-2xl border border-white">

        {/* Map */}
        <iframe
          title="Curious Safaris Ruiru Office"
          src="https://www.google.com/maps?q=Nairobi,Kenya&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />

        {/* Map Label */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-[#0B6E4F] text-white flex items-center justify-center">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Our Location
              </p>

              <p className="font-bold text-gray-900">
                Nairobi, Kenya
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* ================= OFFICE INFORMATION ================= */}

      <div className="bg-white rounded-[35px] shadow-2xl p-8 md:p-10 lg:p-12">

        <span className="inline-flex px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 uppercase tracking-[3px] text-xs font-bold">
          Our Office
        </span>

        <h3 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          We'd Love To
          <span className="block text-[#0B6E4F]">
            Meet You
          </span>
        </h3>

        <p className="mt-6 text-gray-600 text-lg leading-8">
          Our friendly travel consultants are available to help you choose
          destinations, organize group adventures and create tailor-made
          travel experiences.
        </p>


        {/* Contact Details */}

        <div className="mt-10 space-y-5">

          {/* Address */}
          <div className="group flex gap-5 p-5 rounded-2xl bg-[#F7F9F7] hover:bg-emerald-50 transition duration-300">

            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-100 text-[#0B6E4F] flex items-center justify-center text-xl group-hover:scale-110 transition">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4 className="font-bold text-gray-900 text-lg">
                Office Address
              </h4>

              <p className="mt-1 text-gray-600">
                Nairobi, Kenya
              </p>
            </div>

          </div>


          {/* Email */}
          <div className="group flex gap-5 p-5 rounded-2xl bg-[#F7F9F7] hover:bg-blue-50 transition duration-300">

            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl group-hover:scale-110 transition">
              <FaEnvelope />
            </div>

            <div className="min-w-0">

              <h4 className="font-bold text-gray-900 text-lg">
                Email Address
              </h4>

              <a
                href="mailto:curioussafariss@gmail.com"
                className="mt-1 text-gray-600 hover:text-[#0B6E4F] break-all transition"
              >
                curioussafariss@gmail.com
              </a>

            </div>

          </div>


          {/* Phone */}
          <div className="group flex gap-5 p-5 rounded-2xl bg-[#F7F9F7] hover:bg-green-50 transition duration-300">

            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-xl group-hover:scale-110 transition">
              <FaPhoneAlt />
            </div>

            <div>

              <h4 className="font-bold text-gray-900 text-lg">
                Phone Number
              </h4>

              <a
                href="tel:+254745861688"
                className="block mt-1 text-gray-600 hover:text-[#0B6E4F] transition"
              >
                +254745861688
              </a>

              <a
                href="tel:+254745861688"
                className="block text-gray-600 hover:text-[#0B6E4F] transition"
              >
                +254745861688
              </a>

            </div>

          </div>

        </div>


        {/* ================= BUSINESS HOURS ================= */}

        <div className="mt-8 p-6 rounded-2xl bg-[#0B6E4F] text-white">

          <div className="flex items-center justify-between mb-5">

            <h4 className="text-xl font-bold">
              Business Hours
            </h4>

            <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-100 text-xs">
              Available
            </span>

          </div>

          <div className="space-y-3 text-sm">

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-gray-200">
                Monday - Friday
              </span>

              <span className="font-semibold">
                8:00 AM - 6:00 PM
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-gray-200">
                Saturday
              </span>

              <span className="font-semibold">
                9:00 AM - 4:00 PM
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-200">
                Sunday
              </span>

              <span className="font-semibold text-yellow-300">
                Closed
              </span>
            </div>

          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}

        <div className="grid sm:grid-cols-2 gap-4 mt-6">

          <a
            href="tel:+254745861688"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gray-100 text-gray-900 font-bold hover:bg-[#0B6E4F] hover:text-white transition-all duration-300"
          >
            <FaPhoneAlt />
            Call Us
          </a>

          <a
            href="https://wa.me/+254745861688"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <FaWhatsapp />
            WhatsApp Us
          </a>

        </div>

      </div>

    </div>

  </div>

</section>       {/* ================= FAQ ================= */}

      

      {/* ================= WHY CHOOSE US ================= */}

{/* ================= PREMIUM FOOTER ================= */}

{/* ================= FOOTER ================= */}
<footer className="relative overflow-hidden bg-[#050505] text-white">
  {/* Top Accent Line */}

  <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C8A94C] to-transparent" />

  {/* Background Glow */}

  <div className="absolute -top-32 -left-20 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[170px]" />

  <div className="absolute -bottom-32 -right-20 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[170px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
    <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">
      {/* Company */}

      <div>
        <h2 className="text-4xl font-black">
          Curious
          <span className="text-[#C8A94C]"> Safaris</span>
        </h2>

        <div className="mt-4 h-1 w-20 rounded-full bg-[#C8A94C]" />

        <p className="mt-6 leading-8 text-gray-400">
          Curious Safaris is an Africa-based travel company
          offering private, customized, and unforgettable
          journeys across Africa.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          Explore wildlife safaris, luxury tours, beach holidays,
          horse-riding adventures, photography trips, cultural
          experiences, and tailor-made journeys across the
          continent.
        </p>

        {/* Social Icons */}

        <div className="mt-8 flex gap-4">
          {[
            {
              icon: <FaFacebookF />,
              link: "https://facebook.com",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com",
            },
            {
              icon: <FaWhatsapp />,
              link: "https://wa.me/254745861688",
            },
            {
              icon: <FaYoutube />,
              link: "https://youtube.com",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-emerald-700 hover:bg-emerald-700"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}

      <div>
        <h3 className="mb-8 text-2xl font-bold">
          Quick Links
        </h3>

        <div className="space-y-5">
          {[
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            
            { name: "Gallery", path: "/gallery" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-[#C8A94C]"
            >
              <FaArrowRight className="text-xs" />

              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}

      <div>
        <h3 className="mb-8 text-2xl font-bold">
          Contact Us
        </h3>

        <div className="space-y-6">
          {/* WhatsApp */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700">
              <FaWhatsapp />
            </div>

            <div>
              <p className="font-semibold">
                WhatsApp
              </p>

              <a
                href="https://wa.me/254745861688"
                className="text-gray-400 hover:text-white"
              >
                +254 745 861 688
              </a>
            </div>
          </div>

          {/* Africa */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700">
              <FaGlobe />
            </div>

            <div>
              <p className="font-semibold">
                Destinations
              </p>

              <p className="text-gray-400">
                East, West, North, Central & Southern Africa
              </p>
            </div>
          </div>

          {/* Location */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="font-semibold">
                Based In
              </p>

              <p className="text-gray-400">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom */}

    <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
      <p className="text-center text-gray-500 md:text-left">
        © {new Date().getFullYear()}

        <span className="font-semibold text-[#C8A94C]">
          {" "}
          Curious Safaris
        </span>

        . All Rights Reserved.
      </p>

      <div className="flex items-center gap-6 text-sm">
        <Link
          to="/privacy"
          className="text-gray-500 transition hover:text-[#C8A94C]"
        >
          Privacy Policy
        </Link>

        <span className="text-white/20">|</span>

        <Link
          to="/terms"
          className="text-gray-500 transition hover:text-[#C8A94C]"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  </div>

  {/* Scroll To Top */}

  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A94C] text-black shadow-2xl transition duration-300 hover:scale-110"
  >
    <FaChevronUp />
  </button>
</footer>
    </div>
  );
}

export default Contact;