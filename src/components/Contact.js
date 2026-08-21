/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
//import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,  FaInstagram,FaTiktok,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,  FaSearch,} from "react-icons/fa";

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
const { t, i18n } = useTranslation();
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}

      <section className="relative h-[60vh] overflow-hidden">

  <img
    src={airbaloon}
    alt={t("contactHero.imageAlt")}
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/65" />

  <div className="relative h-full flex items-center justify-center">

    <div className="text-center text-white px-6">

      <span className="uppercase tracking-[5px] text-yellow-400 font-semibold">
        {t("contactHero.badge")}
      </span>

      <h1 className="mt-6 text-5xl md:text-7xl font-black">
        {t("contactHero.title")}
      </h1>

      <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-200">
        {t("contactHero.description")}
      </p>

    </div>

  </div>

</section>

      {/* ================= CONTACT CARDS ================= */}

      {/* ================= CONTACT INFORMATION ================= */}

<section className="-mt-20 relative z-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Phone */}
      <div className="bg-white rounded-[30px] shadow-xl p-8 text-center hover:-translate-y-2 transition duration-500">

        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
          <FaPhoneAlt className="text-3xl text-[#0B6E4F]" />
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          {t("contactInfo.phone.title")}
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
          {t("contactInfo.email.title")}
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
          {t("contactInfo.office.title")}
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
          {t("contactInfo.whatsapp.title")}
        </h3>

        <a
          href="https://wa.me/254745861688"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-[#0B6E4F] font-semibold hover:text-yellow-600"
        >
          {t("contactInfo.whatsapp.button")} →
        </a>

      </div>

    </div>

  </div>

</section>


{/* ================= CONTACT FORM ================= */}

<section className="relative py-28 overflow-hidden">

  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url(${home3})`,
    }}
  />

  <div className="absolute inset-0 bg-[#04140E]/85" />

  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[150px]" />

  <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[150px]" />

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div className="text-white">

        <span className="inline-flex px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 uppercase tracking-[3px] text-sm font-semibold">
          {t("contactForm.badge")}
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
          {t("contactForm.title")}
          <span className="block text-yellow-400">
            {t("contactForm.titleHighlight")}
          </span>
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-8 max-w-xl">
          {t("contactForm.description")}
        </p>

        <div className="mt-10 space-y-6">

          {[
            ["fastResponse", "✓"],
            ["tailorMade", "✓"],
            ["professional", "✓"],
          ].map(([key, icon]) => (

            <div key={key} className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-emerald-300">
                {icon}
              </div>

              <span className="text-gray-200">
                {t(`contactForm.features.${key}`)}
              </span>

            </div>

          ))}

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
            placeholder={t("contactForm.form.name")}
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("contactForm.form.email")}
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder={t("contactForm.form.phone")}
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
          />

          <input
            type="text"
            name="subject"
            placeholder={t("contactForm.form.subject")}
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition"
          />

          <textarea
            rows="6"
            name="message"
            placeholder={t("contactForm.form.message")}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-2xl p-4 outline-none focus:border-[#0B6E4F] focus:ring-2 focus:ring-emerald-100 transition resize-none"
            required
          />

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[#0B6E4F] text-white font-bold text-lg hover:bg-[#09543D] hover:-translate-y-1 shadow-lg transition-all duration-300"
          >
            {t("contactForm.form.button")} →
          </button>

        </form>

      </div>

    </div>

  </div>

</section>
      
         {/* ================= MAP & OFFICE INFO ================= */}

      {/* ================= MAP & OFFICE ================= */}

<section className="relative py-28 bg-gradient-to-b from-white via-[#F7F9F6] to-[#EEF4EF] overflow-hidden">

  {/* ================= BACKGROUND EFFECTS ================= */}
  <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-emerald-200/30 rounded-full blur-[150px]" />

  <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-yellow-200/20 rounded-full blur-[150px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* ================= SECTION HEADING ================= */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] uppercase tracking-[3px] text-xs font-bold">
        📍 {t("office.badge")}
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
        {t("office.title")}

        <span className="block text-[#0B6E4F]">
          {t("office.titleHighlight")}
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        {t("office.description")}
      </p>

    </div>


    {/* ================= MAIN GRID ================= */}
    <div className="grid lg:grid-cols-2 gap-12 items-stretch">


      {/* ================= MAP ================= */}
      <div className="relative min-h-[550px] rounded-[35px] overflow-hidden shadow-2xl border border-white">

        <iframe
          title={t("office.map.title")}
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
                {t("office.map.title")}
              </p>

              <p className="font-bold text-gray-900">
                {t("office.map.location")}
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= OFFICE INFORMATION ================= */}
      <div className="bg-white rounded-[35px] shadow-2xl p-8 md:p-10 lg:p-12">

        {/* Office Badge */}
        <span className="inline-flex px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 uppercase tracking-[3px] text-xs font-bold">
          {t("office.officeInfo.badge")}
        </span>


        {/* Office Heading */}
        <h3 className="mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight">

          {t("office.officeInfo.title")}

          <span className="block text-[#0B6E4F]">
            {t("office.officeInfo.titleHighlight")}
          </span>

        </h3>


        {/* Office Description */}
        <p className="mt-6 text-gray-600 text-lg leading-8">
          {t("office.officeInfo.description")}
        </p>


        {/* ================= CONTACT DETAILS ================= */}
        <div className="mt-10 space-y-5">


          {/* Address */}
          <div className="group flex gap-5 p-5 rounded-2xl bg-[#F7F9F7] hover:bg-emerald-50 transition duration-300">

            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-100 text-[#0B6E4F] flex items-center justify-center text-xl group-hover:scale-110 transition">

              <FaMapMarkerAlt />

            </div>

            <div>

              <h4 className="font-bold text-gray-900 text-lg">
                {t("office.contact.address")}
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
                {t("office.contact.email")}
              </h4>

              <a
                href="mailto:curioussafariss@gmail.com"
                className="mt-1 block text-gray-600 hover:text-[#0B6E4F] break-all transition"
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
                {t("office.contact.phone")}
              </h4>

              <a
                href="tel:+254745861688"
                className="block mt-1 text-gray-600 hover:text-[#0B6E4F] transition"
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
              {t("office.hours.title")}
            </h4>

            <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-100 text-xs">
              {t("office.hours.available")}
            </span>

          </div>


          <div className="space-y-3 text-sm">


            {/* Monday - Friday */}
            <div className="flex justify-between border-b border-white/10 pb-3">

              <span className="text-gray-200">
                {t("office.hours.mondayFriday")}
              </span>

              <span className="font-semibold">
                {t("office.hours.mondayFridayTime")}
              </span>

            </div>


            {/* Saturday */}
            <div className="flex justify-between border-b border-white/10 pb-3">

              <span className="text-gray-200">
                {t("office.hours.saturday")}
              </span>

              <span className="font-semibold">
                {t("office.hours.saturdayTime")}
              </span>

            </div>


            {/* Sunday */}
            <div className="flex justify-between">

              <span className="text-gray-200">
                {t("office.hours.sunday")}
              </span>

              <span className="font-semibold text-yellow-300">
                {t("office.hours.closed")}
              </span>

            </div>

          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">


          {/* Call */}
          <a
            href="tel:+254745861688"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gray-100 text-gray-900 font-bold hover:bg-[#0B6E4F] hover:text-white transition-all duration-300"
          >

            <FaPhoneAlt />

            {t("office.actions.call")}

          </a>


          {/* WhatsApp */}
          <a
            href="https://wa.me/254745861688"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >

            <FaWhatsapp />

            {t("office.actions.whatsapp")}

          </a>

        </div>

      </div>

    </div>

  </div>

</section> {/* ================= FAQ ================= */}

    {/* ================= PREMIUM PAYMENT SECTION ================= */}
<section className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32">

  {/* Background */}
  <div className="absolute inset-0 pointer-events-none">

    <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C8A94C]/10 blur-[140px]" />

    <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B7A98A]/10 blur-[140px]" />

    <div className="absolute right-[8%] top-20 h-32 w-32 rounded-full border border-[#C8A94C]/10" />

    <div className="absolute right-[10%] top-24 h-24 w-24 rounded-full border border-[#C8A94C]/10" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* HEADER */}
    <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">

      <div>

        <div className="flex items-center gap-4">

          <span className="h-px w-12 bg-[#B28B2C]" />

          <span className="text-xs font-bold uppercase tracking-[4px] text-[#96731F]">
            {t("payment.badge")}
          </span>

        </div>

        <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[1.05] text-[#171510] md:text-6xl">

          {t("payment.title")}

          <span className="block text-[#B28B2C]">
            {t("payment.titleHighlight")}
          </span>

        </h2>

      </div>

      <p className="max-w-xl text-base leading-8 text-[#6B6559] lg:justify-self-end">
        {t("payment.description")}
      </p>

    </div>


    {/* MAIN PAYMENT AREA */}
    <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">


      {/* BANK ACCOUNT */}
      <div className="group relative overflow-hidden rounded-[36px] bg-[#171510] p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.12)] md:p-10">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8A94C]/10 blur-[80px] transition duration-700 group-hover:bg-[#C8A94C]/20" />

        <div className="relative flex items-start justify-between">

          <div>

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
              {t("payment.bank.badge")}
            </span>

            <h3 className="mt-3 text-3xl font-black">
              {t("payment.bank.title")}
            </h3>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110">
            🏦
          </div>

        </div>


        {/* Account Number */}
        <div className="relative mt-10 rounded-3xl border border-[#C8A94C]/20 bg-white/[0.05] p-6">

          <p className="text-xs uppercase tracking-[2px] text-gray-500">
            {t("payment.bank.accountNumber")}
          </p>

          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <span className="text-3xl font-black tracking-[3px] text-[#E0C878]">
              5559865001
            </span>

            <button
              type="button"
              onClick={() =>
                navigator.clipboard.writeText("5559865001")
              }
              className="rounded-xl border border-white/10 px-4 py-2 text-xs font-bold text-gray-300 transition duration-300 hover:border-[#C8A94C] hover:text-[#C8A94C]"
            >
              {t("payment.bank.copy")}
            </button>

          </div>

        </div>


        {/* Bank Details */}
        <div className="relative mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">

          {[
            [
              t("payment.bank.bankName"),
              t("payment.bank.bankNameValue")
            ],
            [
              t("payment.bank.accountName"),
              t("payment.bank.accountNameValue")
            ],
            [
              t("payment.bank.country"),
              t("payment.bank.countryValue")
            ],
            [
              t("payment.bank.bankCode"),
              "63"
            ],
            [
              t("payment.bank.swiftCode"),
              "DTKEKENA"
            ],
          ].map(([label, value]) => (

            <div
              key={label}
              className="border-b border-white/10 pb-4 transition duration-300 hover:border-[#C8A94C]/40"
            >

              <p className="text-xs uppercase tracking-[1.5px] text-gray-500">
                {label}
              </p>

              <p className="mt-2 font-semibold text-gray-200">
                {value}
              </p>

            </div>

          ))}

        </div>


        {/* Security Message */}
        <div className="relative mt-8 flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">

          <span className="text-xl">
            🔒
          </span>

          <p className="text-sm leading-6 text-gray-400">
            {t("payment.bank.security")}
          </p>

        </div>

      </div>


      {/* PAYMENT PLAN */}
      <div className="rounded-[36px] border border-[#D8CFBD] bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.07)] md:p-10">

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("payment.plan.badge")}
          </span>

          <h3 className="mt-3 text-3xl font-black text-[#171510]">
            {t("payment.plan.title")}
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#6B6559]">
            {t("payment.plan.description")}
          </p>

        </div>


        {/* Timeline */}
        <div className="relative mt-10">

          <div className="absolute left-[17px] top-5 h-[calc(100%-40px)] w-px bg-[#D8CFBD]" />

          <div className="space-y-8">


            {/* Step 1 */}
            <div className="group relative flex gap-5">

              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B28B2C] text-sm font-black text-white shadow-lg transition duration-300 group-hover:scale-110">
                01
              </div>

              <div>

                <h4 className="font-black text-[#171510]">
                  {t("payment.plan.steps.step1.title")}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#6B6559]">
                  {t("payment.plan.steps.step1.description")}
                </p>

              </div>

            </div>


            {/* Step 2 */}
            <div className="group relative flex gap-5">

              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#171510] text-sm font-black text-white transition duration-300 group-hover:scale-110">
                02
              </div>

              <div>

                <h4 className="font-black text-[#171510]">
                  {t("payment.plan.steps.step2.title")}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#6B6559]">
                  {t("payment.plan.steps.step2.description")}
                </p>

              </div>

            </div>


            {/* Step 3 */}
            <div className="group relative flex gap-5">

              <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#171510] text-sm font-black text-white transition duration-300 group-hover:scale-110">
                03
              </div>

              <div>

                <h4 className="font-black text-[#171510]">
                  {t("payment.plan.steps.step3.title")}
                </h4>

                <p className="mt-1 text-sm leading-6 text-[#6B6559]">
                  {t("payment.plan.steps.step3.description")}
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Cancellation */}
        <div className="mt-10 rounded-3xl bg-[#F7F3EA] p-6">

          <div className="flex items-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8A94C]/15">
              📜
            </span>

            <h4 className="font-black text-[#171510]">
              {t("payment.cancellation.title")}
            </h4>

          </div>


          <div className="mt-5 space-y-3">

            {[
              t("payment.cancellation.items.0"),
              t("payment.cancellation.items.1"),
              t("payment.cancellation.items.2"),
            ].map((item) => (

              <div
                key={item}
                className="flex gap-3 text-sm leading-6 text-[#6B6559]"
              >

                <span className="mt-1 text-[#B28B2C]">
                  ✓
                </span>

                <span>
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>


    {/* BOTTOM CTA */}
    <div className="relative mt-10 overflow-hidden rounded-[32px] bg-[#C8A94C] px-8 py-10 md:px-12">

      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border-[30px] border-white/10" />

      <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

        <div className="max-w-2xl">

          <p className="text-xs font-black uppercase tracking-[3px] text-[#5F4A13]">
            {t("payment.cta.badge")}
          </p>

          <h3 className="mt-2 text-2xl font-black text-[#171510] md:text-3xl">
            {t("payment.cta.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#5F4A13]">
            {t("payment.cta.description")}
          </p>

        </div>


        <div className="flex flex-wrap gap-3">

          <a
            href="https://wa.me/254745861688"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#171510] px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-xl"
          >
            {t("payment.cta.whatsapp")}
          </a>

          <a
            href="mailto:info@curioussafaris.com"
            className="rounded-xl border border-[#171510]/20 bg-white/40 px-6 py-3 font-bold text-[#171510] transition duration-300 hover:-translate-y-1 hover:bg-white/70"
          >
            {t("payment.cta.email")}
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* ================= WHY CHOOSE US ================= */}

{/* ================= PREMIUM FOOTER ================= */}

{/* ================= FOOTER ================= */}
{/* FOOTER */}
<footer className="relative overflow-hidden bg-[#050505] text-white">

  {/* Top Accent Line */}
  <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C8A94C] to-transparent" />

  {/* Background Glow */}
  <div className="absolute -top-32 -left-20 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[170px]" />

  <div className="absolute -bottom-32 -right-20 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[170px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

    <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

      {/* ================= COMPANY ================= */}

      <div>

        <h2 className="text-4xl font-black">
          Curious
          <span className="text-[#C8A94C]"> Safaris</span>
        </h2>

        <div className="mt-4 h-1 w-20 rounded-full bg-[#C8A94C]" />

        <p className="mt-6 leading-8 text-gray-400">
          {t("footer.description1")}
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          {t("footer.description2")}
        </p>

        {/* Social Icons */}

        <div className="mt-8 flex gap-4">
  {[
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com/CuriousSafaris",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/curioussafaris",
      label: "Instagram",
    },
    {
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@curioussafaris",
      label: "TikTok",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/254745861688",
      label: "WhatsApp",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@CuriousSafaris",
      label: "YouTube",
    },
  ].map((item) => (
    <a
      key={item.label}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-emerald-700 hover:bg-emerald-700"
    >
      {item.icon}
    </a>
  ))}
</div>

      </div>


      {/* ================= QUICK LINKS ================= */}

      <div>

        <h3 className="mb-8 text-2xl font-bold">
          {t("footer.quickLinks")}
        </h3>

        <div className="space-y-5">

          {[
            {
              name: t("footer.home"),
              path: "/",
            },
            {
              name: t("footer.destinations"),
              path: "/destinations",
            },
            {
              name: t("footer.gallery"),
              path: "/gallery",
            },
            {
              name: t("footer.about"),
              path: "/about",
            },
            {
              name: t("footer.contact"),
              path: "/contact",
            },
          ].map((item) => (

            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-[#C8A94C]"
            >

              <FaArrowRight className="text-xs" />

              {item.name}

            </Link>

          ))}

        </div>

      </div>


      {/* ================= CONTACT ================= */}

      <div>

        <h3 className="mb-8 text-2xl font-bold">
          {t("footer.contactUs")}
        </h3>

        <div className="space-y-6">

          {/* WhatsApp */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700">
              <FaWhatsapp />
            </div>

            <div>

              <p className="font-semibold">
                {t("footer.whatsapp")}
              </p>

              <a
                href="https://wa.me/254745861688"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white"
              >
                +254 745 861 688
              </a>

            </div>

          </div>


          {/* Destinations */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700">
              <FaGlobe />
            </div>

            <div>

              <p className="font-semibold">
                {t("footer.destinationLabel")}
              </p>

              <p className="text-gray-400">
                {t("footer.destinationText")}
              </p>

            </div>

          </div>


          {/* Location */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-700">
              <FaMapMarkerAlt />
            </div>

            <div>

              <p className="font-semibold">
                {t("footer.basedIn")}
              </p>

              <p className="text-gray-400">
                {t("footer.location")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ================= BOTTOM ================= */}

    <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

      <p className="text-center text-gray-500 md:text-left">

        © {new Date().getFullYear()}

        <span className="font-semibold text-[#C8A94C]">
          {" "}Curious Safaris
        </span>

        . {t("footer.rights")}

      </p>


      <div className="flex items-center gap-6 text-sm">

        <Link
          to="/privacy"
          className="text-gray-500 transition hover:text-[#C8A94C]"
        >
          {t("footer.privacy")}
        </Link>

        <span className="text-white/20">
          |
        </span>

        <Link
          to="/terms"
          className="text-gray-500 transition hover:text-[#C8A94C]"
        >
          {t("footer.terms")}
        </Link>

      </div>

    </div>

  </div>


  {/* ================= SCROLL TO TOP ================= */}

  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    aria-label="Scroll to top"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A94C] text-black shadow-2xl transition duration-300 hover:scale-110"
  >
    <FaChevronUp />
  </button>

</footer>
    </div>
  );
}

export default Contact;