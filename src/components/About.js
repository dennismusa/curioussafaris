import React from "react";
import { Link } from "react-router-dom";
import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";
import { useTranslation } from "react-i18next";
//import founder from "../assets/founder.jpg";
import airbaloon from "../assets/airbaloon.jpg";
import discover1 from "../assets/discover1.jpg";
//import destination from "../assets/destination.jpg";
//import home2 from "../assets/home2.jpg";
//import home5 from "../assets/home5.jpg";
//import climbingkenya from "../assets/climbingkenya.jpg";
//import climbinglongonot from "../assets/climbinglongonot.jpg";
//import climbingkili from "../assets/climbingkili.jpg";
//import home4 from "../assets/home4.jpg";
//import hellsgate from "../assets/hellsgate.jpg";
//import gorilla from "../assets/gorilla.jpg";
//import serengeti from "../assets/serengeti.jpg";
//import tanzania from "../assets/tanzania.jpg";

//import kenya from "../assets/kenya.jpg";
//import image17 from "../assets/image17.jpg";
import useLanguageSync from "../hooks/useLanguageSync";

function About() {
 useLanguageSync();

  const { t, i18n } = useTranslation();


  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[65vh] items-center justify-center overflow-hidden">

  {/* Background Image */}
  <img
    src={airbaloon}
    alt={t("aboutHero.badge")}
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6 text-center">

    {/* Badge */}
    <span className="inline-block rounded-full border border-[#D4AF37] bg-[#D4AF37]/20 px-4 py-2 text-xs uppercase tracking-widest text-[#D4AF37]">
      {t("aboutHero.badge")}
    </span>

    {/* Heading */}
    <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
      {t("aboutHero.title")}{" "}
      <span className="text-[#D4AF37]">
        {t("aboutHero.titleHighlight")}
      </span>
    </h1>

    {/* Description */}
    <p className="mt-6 text-lg leading-8 text-gray-200">
      {t("aboutHero.description")}
    </p>

    {/* Buttons */}
    <div className="mt-10 flex justify-center gap-4">

      <Link
        to="/destinations"
        className="rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black transition hover:scale-105"
      >
        {t("aboutHero.explore")}
      </Link>

      <Link
        to="/contact"
        className="rounded-full border border-white px-8 py-4 text-white transition hover:bg-white hover:text-black"
      >
        {t("aboutHero.contact")}
      </Link>

    </div>

  </div>

</section>
          {/* About Company */}
      
      






{/* ================= Founder Section ================= */}
{/* ================= TourGuideOmbima Founder Section ================= */}
<section className="relative overflow-hidden bg-[#F5F0E6] py-20 md:py-24">

  {/* Background Decoration */}
  <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#C8A94C]/10 blur-[100px]" />
  <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#D6B98C]/15 blur-[100px]" />

  <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

    <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

      {/* FOUNDER IMAGE */}
      <div className="group relative mx-auto w-full max-w-md">

        <div className="absolute -inset-3 rounded-[35px] bg-[#C8A94C]/20 blur-xl opacity-60 transition duration-700 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-[30px] border border-[#C8A94C]/20 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

          <div className="relative overflow-hidden rounded-[24px]">

            <img
              src={require("../assets/founder.jpg")}
              alt={t("founder.eyebrow")}
              className="h-[400px] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">

              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#E4CA72]">
                {t("founder.role")}
              </p>

              <h3 className="mt-1 text-2xl font-black text-white">
                Curious Safaris
              </h3>

            </div>

          </div>

        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#C8A94C]/20 bg-white px-5 py-4 shadow-xl">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
            {t("founder.philosophy")}
          </p>

          <p className="mt-1 text-sm font-bold text-[#8A6B20]">
            {t("founder.travelDifferently")}
          </p>

        </div>

      </div>


      {/* FOUNDER CONTENT */}
      <div>

        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">

          <span className="h-px w-10 bg-[#C8A94C]" />

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#9B7925]">
            {t("founder.eyebrow")}
          </span>

        </div>


        {/* Heading */}
        <h2 className="text-4xl font-black leading-tight text-[#171510] md:text-5xl">

          {t("founder.title")}

          <span className="block text-[#B28B2C]">
            {t("founder.titleHighlight")}
          </span>

        </h2>


        {/* Introduction */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4F4A40]">

          {t("founder.intro")}

        </p>


        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6559]">

          {t("founder.description")}

        </p>


        {/* Quote */}
        <div className="mt-7 border-l-2 border-[#C8A94C] pl-5">

          <p className="text-base font-medium italic leading-7 text-[#4F4A40]">
            “{t("founder.quote")}”
          </p>

        </div>


        {/* Experience Tags */}
        <div className="mt-8 flex flex-wrap gap-3">

          {[
            t("founder.tags.wildlife"),
            t("founder.tags.culture"),
            t("founder.tags.adventure"),
            t("founder.tags.photography"),
            t("founder.tags.beach"),
          ].map((item) => (

            <div
              key={item}
              className="rounded-full border border-[#C8A94C]/30 bg-white/70 px-4 py-2 text-xs font-semibold text-[#62542F] shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </div>


    {/* Bottom Statement */}
    <div className="mt-16 border-t border-[#C8A94C]/20 pt-6">

      <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">

        <p className="text-xs uppercase tracking-[3px] text-[#9B7925]">
          {t("founder.bottomLabel")}
        </p>

        <p className="text-sm text-[#756F63]">
          {t("founder.bottomText")}
        </p>

      </div>

    </div>

  </div>

</section>


      {/* ABOUT SECTION */}

{/* ================= DISCOVER CURIOUS SAFARIS ================= */}
<section className="relative overflow-hidden bg-[#F8F6F1] py-28">

  {/* Background Effects */}

  <div className="absolute -top-40 left-0 h-[450px] w-[450px] rounded-full bg-emerald-100/60 blur-3xl" />

  <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-yellow-100/60 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* ================= IMAGE ================= */}

      <div className="relative">

        <div className="overflow-hidden rounded-[40px] shadow-2xl">

          <img
            src={discover1}
            alt={t("discover.imageAlt")}
            className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
          />

        </div>

        {/* Floating Card */}

        <div className="absolute -bottom-8 -right-8 hidden rounded-[30px] bg-white p-8 shadow-xl md:block">

          <h3 className="text-4xl font-black text-emerald-600">
            {t("discover.imageTitle")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("discover.subtitle")}
          </p>

        </div>

      </div>


      {/* ================= CONTENT ================= */}

      <div>

        {/* Eyebrow */}

        <span className="rounded-full bg-emerald-100 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-emerald-700">
          {t("discover.destinations")}
        </span>


        {/* Heading */}

        <h2 className="mt-8 text-5xl font-black leading-tight text-gray-900 md:text-6xl">

          {t("discover.title")}

          <span className="block text-[#C8A94C]">
            {t("discover.subtitle")}
          </span>

        </h2>


        {/* Description 1 */}

        <p className="mt-8 text-lg leading-8 text-gray-600">
          {t("discover.description1")}
        </p>


        {/* Description 2 */}

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {t("discover.description2")}
        </p>


        {/* ================= FEATURES ================= */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2">

          {/* Wildlife */}

          <div className="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <h3 className="text-xl font-bold">
              🦁 {t("discover.features.wildlife.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {t("discover.features.wildlife.description")}
            </p>

          </div>


          {/* Gorilla */}

          <div className="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <h3 className="text-xl font-bold">
              🦍 {t("discover.features.gorilla.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {t("discover.features.gorilla.description")}
            </p>

          </div>


          {/* Culture */}

          <div className="rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2">

            <h3 className="text-xl font-bold">
              🌍 {t("discover.features.culture.title")}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {t("discover.features.culture.description")}
            </p>

          </div>

        </div>


        {/* ================= BUTTONS ================= */}

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/contact"
            className="rounded-full bg-[#0B6E4F] px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#095A41] hover:shadow-xl"
          >
            {t("discover.plan")}
          </Link>

          <Link
            to="/destinations"
            className="rounded-full border-2 border-[#0B6E4F] px-8 py-4 font-bold text-[#0B6E4F] transition duration-300 hover:-translate-y-1 hover:bg-[#0B6E4F] hover:text-white"
          >
            {t("discover.explore")}
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>


        {/* Vision, Mission & Core Values */}
      {/* ================= VISION, MISSION & CORE VALUES ================= */}
<section className="py-24 bg-[#F8FAF9]">
  <div className="max-w-7xl mx-auto px-6">

    {/* ================= HEADING ================= */}
    <div className="text-center mb-16">
      <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">
        {t("about.purpose.eyebrow")}
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#06261D]">
        {t("about.purpose.title")}
      </h2>

      <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
        {t("about.purpose.description")}
      </p>
    </div>

    {/* ================= VISION & MISSION ================= */}
    <div className="grid md:grid-cols-2 gap-8 mb-16">

      {/* Vision */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text-3xl mb-6">
          👁️
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] mb-4">
          {t("about.purpose.vision.title")}
        </h3>

        <p className="text-gray-600 leading-8">
          {t("about.purpose.vision.description")}
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-3xl mb-6">
          🎯
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] mb-4">
          {t("about.purpose.mission.title")}
        </h3>

        <p className="text-gray-600 leading-8">
          {t("about.purpose.mission.description")}
        </p>
      </div>

    </div>

    {/* ================= CORE VALUES ================= */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Integrity */}
      <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
        <div className="text-5xl mb-4">🤝</div>

        <h3 className="font-bold text-xl text-[#06261D]">
          {t("about.purpose.values.integrity.title")}
        </h3>

        <p className="mt-3 text-gray-600">
          {t("about.purpose.values.integrity.description")}
        </p>
      </div>

      {/* Excellence */}
      <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
        <div className="text-5xl mb-4">⭐</div>

        <h3 className="font-bold text-xl text-[#06261D]">
          {t("about.purpose.values.excellence.title")}
        </h3>

        <p className="mt-3 text-gray-600">
          {t("about.purpose.values.excellence.description")}
        </p>
      </div>

      {/* Safety */}
      <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
        <div className="text-5xl mb-4">🛡️</div>

        <h3 className="font-bold text-xl text-[#06261D]">
          {t("about.purpose.values.safety.title")}
        </h3>

        <p className="mt-3 text-gray-600">
          {t("about.purpose.values.safety.description")}
        </p>
      </div>

      {/* Sustainability */}
      <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
        <div className="text-5xl mb-4">🌿</div>

        <h3 className="font-bold text-xl text-[#06261D]">
          {t("about.purpose.values.sustainability.title")}
        </h3>

        <p className="mt-3 text-gray-600">
          {t("about.purpose.values.sustainability.description")}
        </p>
      </div>

      {/* Customer First */}
      <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
        <div className="text-5xl mb-4">❤️</div>

        <h3 className="font-bold text-xl text-[#06261D]">
          {t("about.purpose.values.customerFirst.title")}
        </h3>

        <p className="mt-3 text-gray-600">
          {t("about.purpose.values.customerFirst.description")}
        </p>
      </div>

      {/* Experience */}
      <div className="bg-gradient-to-br from-[#0B6E4F] to-[#06261D] rounded-2xl p-8 text-center text-white shadow-xl">
        <div className="text-5xl mb-4">🦁</div>

        <h3 className="font-bold text-2xl">
          {t("about.purpose.values.experience.title")}
        </h3>

        <p className="mt-3 text-green-100">
          {t("about.purpose.values.experience.description")}
        </p>
      </div>

    </div>

  </div>
</section>
      
       {/* ================= WHY CHOOSE US ================= */}
{/* ================= WHY CHOOSE US ================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
        {t("whyChooseUs.badge")}
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#06261D]">
        {t("whyChooseUs.title")}
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        {t("whyChooseUs.description")}
      </p>

    </div>


    {/* Features */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Tailor-Made */}

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          🏕️
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          {t("whyChooseUs.features.tailor.title")}
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          {t("whyChooseUs.features.tailor.description")}
        </p>

      </div>


      {/* Affordable */}

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          💰
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          {t("whyChooseUs.features.affordable.title")}
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          {t("whyChooseUs.features.affordable.description")}
        </p>

      </div>


      {/* Comfortable Travel */}

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          🚐
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          {t("whyChooseUs.features.comfortable.title")}
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          {t("whyChooseUs.features.comfortable.description")}
        </p>

      </div>


      {/* Local Expertise */}

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          🦁
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          {t("whyChooseUs.features.expertise.title")}
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          {t("whyChooseUs.features.expertise.description")}
        </p>

      </div>


      {/* Support */}

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          📞
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          {t("whyChooseUs.features.support.title")}
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          {t("whyChooseUs.features.support.description")}
        </p>

      </div>


      {/* Exceptional Experience */}

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          ⭐
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          {t("whyChooseUs.features.experience.title")}
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          {t("whyChooseUs.features.experience.description")}
        </p>

      </div>

    </div>


    {/* ================= STATISTICS ================= */}

    <div className="mt-24 rounded-[40px] bg-gradient-to-r from-[#06261D] via-[#0B6E4F] to-[#06261D] p-12">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {/* Travelers */}

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            100+
          </h2>

          <p className="mt-3 text-green-100">
            {t("whyChooseUs.stats.travelers")}
          </p>

        </div>


        {/* Packages */}

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            50+
          </h2>

          <p className="mt-3 text-green-100">
            {t("whyChooseUs.stats.packages")}
          </p>

        </div>


        {/* Destinations */}

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            20+
          </h2>

          <p className="mt-3 text-green-100">
            {t("whyChooseUs.stats.destinations")}
          </p>

        </div>


        {/* Satisfaction */}

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            100%
          </h2>

          <p className="mt-3 text-green-100">
            {t("whyChooseUs.stats.satisfaction")}
          </p>

        </div>

      </div>

    </div>

  </div>
</section> {/* ================= OUR SERVICES ================= */}

{/* ================= OUR SERVICES ================= */}

<section className="py-24 bg-[#F8FAF9]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
        {t("services.badge")}
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#06261D]">
        {t("services.title")}
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        {t("services.description")}
      </p>

    </div>


    {/* Services Grid */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "🦁",
          key: "wildlife"
        },
        {
          icon: "🏖️",
          key: "beach"
        },
        {
          icon: "🏨",
          key: "hotel"
        },
        {
          icon: "👨‍👩‍👧",
          key: "group"
        },
        {
          icon: "💼",
          key: "corporate"
        },
        {
          icon: "🤝",
          key: "team"
        },
        {
          icon: "✈️",
          key: "airport"
        },
        {
          icon: "❤️",
          key: "honeymoon"
        },
        {
          icon: "🧭",
          key: "consultation"
        }
      ].map((service) => (

        <div
          key={service.key}
          className="group bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
        >

          <div className="text-5xl mb-6">
            {service.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-[#0B6E4F] transition">
            {t(`services.items.${service.key}.title`)}
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            {t(`services.items.${service.key}.description`)}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

{/* ================= CALL TO ACTION ================= */}

<section className="py-24 bg-[#F8FAF8]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] uppercase tracking-[3px] text-sm font-semibold">
        {t("faq.badge")}
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">
        {t("faq.title")}
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        {t("faq.description")}
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {[
        "booking",
        "customize",
        "countries",
        "privateGroup",
        "transport",
        "bestTime",
        "accommodation",
        "honeymoon"
      ].map((item) => (

        <div
          key={item}
          className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
        >

          <h3 className="text-xl font-bold text-[#0B6E4F]">
            {t(`faq.items.${item}.question`)}
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            {t(`faq.items.${item}.answer`)}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>
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
              link: "https://facebook.com",
              label: "Facebook",
            },
            {
              icon: <FaInstagram />,
              link: "https://instagram.com",
              label: "Instagram",
            },
            {
              icon: <FaWhatsapp />,
              link: "https://wa.me/254745861688",
              label: "WhatsApp",
            },
            {
              icon: <FaYoutube />,
              link: "https://youtube.com",
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
    </>
  );
}

export default About;