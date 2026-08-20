import React from "react";
import { Link } from "react-router-dom";
import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";

import founder from "../assets/founder.jpg";
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


function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <img
          src={airbaloon}
          alt="About curious Safaris"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] uppercase tracking-widest text-xs">
            Welcome to curious Safaris
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black text-white leading-tight">
            About <span className="text-[#D4AF37]">Us</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            We create unforgettable safari adventures, beach holidays,
            road trips, and tailor-made travel experiences across Kenya
            and East Africa.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/Destinations"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Explore Tours
            </Link>

            <Link
              to="/contact"
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>    
      
          {/* About Company */}
      
      






{/* ================= Founder Section ================= */}
{/* ================= TourGuideOmbima Founder Section ================= */}
<section className="relative overflow-hidden bg-[#F5F0E6] py-20 md:py-24">

  {/* ================= Subtle Background Decoration ================= */}
  <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#C8A94C]/10 blur-[100px]" />
  <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#D6B98C]/15 blur-[100px]" />

  <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

    {/* ================= Main Content ================= */}
    <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">


      {/* ================================================= */}
      {/* FOUNDER IMAGE */}
      {/* ================================================= */}

      <div className="group relative mx-auto w-full max-w-md">

        {/* Soft Glow */}
        <div className="absolute -inset-3 rounded-[35px] bg-[#C8A94C]/20 blur-xl opacity-60 transition duration-700 group-hover:opacity-100" />

        {/* Image Container */}
        <div className="relative overflow-hidden rounded-[30px] border border-[#C8A94C]/20 bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

          <div className="relative overflow-hidden rounded-[24px]">

            <img
              src={require("../assets/founder.jpg")}
              alt="Ombima - Founder of TourGuideOmbima"
              className="h-[400px] w-full object-cover object-center transition duration-700 ease-out group-hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            {/* Image Text */}
            <div className="absolute bottom-5 left-5">

              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#E4CA72]">
                Founder & Safari Guide
              </p>

              <h3 className="mt-1 text-2xl font-black text-white">
                Ombima
              </h3>

            </div>

          </div>

        </div>

        {/* Floating Badge */}
        <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#C8A94C]/20 bg-white px-5 py-4 shadow-xl">

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
            Philosophy
          </p>

          <p className="mt-1 text-sm font-bold text-[#8A6B20]">
            Travel Differently
          </p>

        </div>

      </div>


      {/* ================================================= */}
      {/* FOUNDER CONTENT */}
      {/* ================================================= */}

      <div>

        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">

          <span className="h-px w-10 bg-[#C8A94C]" />

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#9B7925]">
            Meet the Founder
          </span>

        </div>


        {/* Heading */}
        <h2 className="text-4xl font-black leading-tight text-[#171510] md:text-5xl">

          The person behind

          <span className="block text-[#B28B2C]">
            the adventure.
          </span>

        </h2>


        {/* Introduction */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4F4A40]">

          <span className="font-bold text-[#171510]">
            TourGuideOmbima
          </span>{" "}
          is the personal safari and travel brand of an experienced African
          tour guide dedicated to creating authentic, unforgettable journeys
          across Africa.

        </p>


        {/* Detailed Description */}
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6B6559]">

          From wildlife safaris and cultural experiences to horse riding,
          photography trips, hot-air balloon adventures and beach escapes,
          every experience is designed to connect travelers with the heart
          of Africa.

        </p>


        {/* Quote */}
        <div className="mt-7 border-l-2 border-[#C8A94C] pl-5">

          <p className="text-base font-medium italic leading-7 text-[#4F4A40]">
            “Explore Africa. Get curious. Travel with Ombima.”
          </p>

        </div>


        {/* Experience Tags */}
        <div className="mt-8 flex flex-wrap gap-3">

          {[
            "Wildlife",
            "Culture",
            "Adventure",
            "Photography",
            "Beach Escapes",
          ].map((item) => (

            <div
              key={item}
              className="rounded-full border border-[#C8A94C]/30 bg-white/70 px-4 py-2 text-xs font-semibold text-[#62542F] shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
            >
              {item}
            </div>

          ))}

        </div>


        {/* Buttons */}
        

      </div>

    </div>


    {/* ================= Bottom Mini Statement ================= */}

    <div className="mt-16 border-t border-[#C8A94C]/20 pt-6">

      <div className="flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">

        <p className="text-xs uppercase tracking-[3px] text-[#9B7925]">
          TourGuideOmbima
        </p>

        <p className="text-sm text-[#756F63]">
          Personal journeys. Local knowledge. Africa, your way.
        </p>

      </div>

    </div>

  </div>

</section>


      {/* ABOUT SECTION */}

<section className="relative overflow-hidden bg-[#F8F6F1] py-28">
  {/* Background Effects */}

  <div className="absolute -top-40 left-0 h-[450px] w-[450px] rounded-full bg-emerald-100/60 blur-3xl"></div>

  <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-yellow-100/60 blur-3xl"></div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    <div className="grid items-center gap-20 lg:grid-cols-2">
      {/* IMAGE */}

      <div className="relative">
        <div className="overflow-hidden rounded-[40px] shadow-2xl">
          <img
            src={discover1}
            alt="Curious Safaris"
            className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="absolute -bottom-8 -right-8 hidden rounded-[30px] bg-white p-8 shadow-xl md:block">
          <h3 className="text-4xl font-black text-emerald-600">
            Africa
          </h3>

          <p className="mt-2 text-gray-600">
            Your journey starts here.
          </p>
        </div>
      </div>

      {/* CONTENT */}

      <div>
        <span className="rounded-full bg-emerald-100 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-emerald-700">
          About Curious Safaris
        </span>

        <h2 className="mt-8 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
          Lost in the
          <span className="block text-[#C8A94C]">
            Right Direction
          </span>
        </h2>

        <p className="mt-8 text-lg leading-8 text-gray-600">
          Curious Safaris is an Africa-based travel company
          offering private, customized, and unforgettable
          journeys across the continent.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          We organize wildlife safaris, luxury experiences,
          beach holidays, horse-riding adventures, photography
          tours, cultural experiences, and tailor-made journeys
          designed around your travel style.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          From Kenya and Tanzania to Namibia, South Africa,
          Uganda, Rwanda, Egypt, Morocco, and beyond, we help
          travelers discover Africa through authentic and
          unforgettable experiences.
        </p>

        {/* FEATURES */}

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold">🦁 Wildlife Safaris</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold">🏖️ Beach Holidays</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold">📷 Photography Tours</h3>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-xl font-bold">🌍 Tailor-Made Adventures</h3>
          </div>
        </div>

        {/* BUTTON */}

       
      </div>
    </div>
  </div>
</section>


        {/* Vision, Mission & Core Values */}
      <section className="py-24 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">
              Our Purpose
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#06261D]">
              Vision, Mission & Core Values
            </h2>

            <p className="mt-5 text-gray-600 max-w-3xl mx-auto leading-8">
              Everything we do is driven by our commitment to creating
              unforgettable journeys while delivering exceptional service,
              safety, and sustainable tourism.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text-3xl mb-6">
                👁️
              </div>

              <h3 className="text-2xl font-bold text-[#06261D] mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8">
                To become East Africa's most trusted safari and travel
                brand by delivering unforgettable journeys in royal
                comfort while showcasing Africa's natural beauty.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-3xl mb-6">
                🎯
              </div>

              <h3 className="text-2xl font-bold text-[#06261D] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8">
                To provide safe, affordable, professional and personalized
                travel experiences while promoting responsible and
                sustainable tourism throughout East Africa.
              </p>
            </div>

          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-bold text-xl text-[#06261D]">Integrity</h3>
              <p className="mt-3 text-gray-600">
                We operate with honesty, transparency and accountability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="font-bold text-xl text-[#06261D]">Excellence</h3>
              <p className="mt-3 text-gray-600">
                We strive to exceed expectations in every journey.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="font-bold text-xl text-[#06261D]">Safety</h3>
              <p className="mt-3 text-gray-600">
                Your comfort and security remain our highest priority.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="font-bold text-xl text-[#06261D]">Sustainability</h3>
              <p className="mt-3 text-gray-600">
                We support responsible tourism and environmental conservation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="font-bold text-xl text-[#06261D]">
                Customer First
              </h3>
              <p className="mt-3 text-gray-600">
                Every adventure is designed around our clients' needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0B6E4F] to-[#06261D] rounded-2xl p-8 text-center text-white shadow-xl">
              <div className="text-5xl mb-4">🦁</div>
              <h3 className="font-bold text-2xl">
                Experience the Wild
              </h3>
              <p className="mt-3 text-green-100">
                Creating unforgettable safari memories in royal comfort.
              </p>
            </div>

          </div>

        </div>
      </section>
      
       {/* ================= WHY CHOOSE US ================= */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
        Why Choose Us
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#06261D]">
        Your Trusted Safari & Travel Partner
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        We are committed to providing unforgettable travel experiences
        through exceptional service, expert planning, and personalized
        adventures across East Africa.
      </p>

    </div>

    {/* Features */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          🏕️
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          Tailor-Made Safaris
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          Every itinerary is customized to match your travel style,
          budget and dream destinations.
        </p>

      </div>

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          💰
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          Affordable Pricing
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          Competitive packages with no hidden costs while maintaining
          premium service quality.
        </p>

      </div>

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          🚐
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          Comfortable Travel
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          Modern safari vehicles, experienced drivers and comfortable
          accommodation throughout your journey.
        </p>

      </div>

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          🦁
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          Local Expertise
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          Our knowledgeable team knows Kenya's wildlife, parks,
          beaches and hidden gems.
        </p>

      </div>

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          📞
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          24/7 Support
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          Friendly customer support before, during and after every
          adventure.
        </p>

      </div>

      <div className="group bg-[#F8FAF9] rounded-3xl p-8 hover:bg-[#0B6E4F] transition duration-500">

        <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-3xl mb-6">
          ⭐
        </div>

        <h3 className="text-2xl font-bold text-[#06261D] group-hover:text-white">
          Exceptional Experience
        </h3>

        <p className="mt-4 text-gray-600 group-hover:text-green-100 leading-7">
          We focus on creating memorable moments that you'll cherish
          for a lifetime.
        </p>

      </div>

    </div>

    {/* Statistics */}

    <div className="mt-24 rounded-[40px] bg-gradient-to-r from-[#06261D] via-[#0B6E4F] to-[#06261D] p-12">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            100+
          </h2>

          <p className="mt-3 text-green-100">
            Happy Travelers
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            50+
          </h2>

          <p className="mt-3 text-green-100">
            Tour Packages
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            20+
          </h2>

          <p className="mt-3 text-green-100">
            Destinations
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-black text-[#D4AF37]">
            100%
          </h2>

          <p className="mt-3 text-green-100">
            Customer Satisfaction
          </p>

        </div>

      </div>

    </div>

  </div>
</section> {/* ================= OUR SERVICES ================= */}

<section className="py-24 bg-[#F8FAF9]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
        Our Services
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#06261D]">
        Travel Experiences Designed For Everyone
      </h2>

      <p className="mt-6 text-gray-600 leading-8">
        From wildlife safaris to corporate travel, we provide complete
        travel solutions tailored to your needs.
      </p>

    </div>

    {/* Services Grid */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        ["🦁", "Wildlife Safaris"],
        ["🏖️", "Beach Holidays"],
        ["🏨", "Hotel Bookings"],
        ["👨‍👩‍👧", "Group Tours"],
        ["💼", "Corporate Travel"],
        ["🤝", "Team Building"],
        ["✈️", "Airport Transfers"],
        ["❤️", "Honeymoon Packages"],
        ["🧭", "Travel Consultation"],
      ].map(([icon, title]) => (

        <div
          key={title}
          className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300"
        >

          <div className="text-5xl mb-6">
            {icon}
          </div>

          <h3 className="text-2xl font-bold text-[#06261D]">
            {title}
          </h3>

          <p className="mt-4 text-gray-600 leading-7">
            Professional planning and personalized experiences
            designed to make every journey unforgettable.
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
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">
        Need More Information?
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Everything you need to know before starting your African adventure.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8">

      {[
        {
          q: "How do I book a safari?",
          a: "Simply contact us through WhatsApp, phone, email or our contact form. Our travel consultants will discuss your plans and help create the perfect safari for you."
        },
        {
          q: "Can I customize my safari?",
          a: "Absolutely. Our safaris are tailor-made around your interests, budget, travel dates and preferred destinations. We can customize accommodation, activities, transport and itinerary."
        },
        {
          q: "Which African countries do you operate in?",
          a: "We arrange unforgettable journeys across Africa, including Kenya, Tanzania, Uganda, Rwanda, Botswana, Zimbabwe, Namibia, South Africa, Egypt, Morocco and other destinations."
        },
        {
          q: "Are your safaris private or group trips?",
          a: "We offer both private and group safaris. Whether you're traveling solo, as a couple, with family, friends or a larger group, we can create an experience that suits you."
        },
        {
          q: "Do you provide airport transfers and transportation?",
          a: "Yes. Depending on your itinerary, we can arrange airport transfers, private safari vehicles, tour vans and other transportation needed throughout your journey."
        },
        {
          q: "What is the best time to go on safari?",
          a: "The best time depends on your destination and the experience you want. Our travel consultants can recommend the ideal season based on wildlife, weather, migration, gorilla trekking or beach experiences."
        },
        {
          q: "Do you arrange accommodation?",
          a: "Yes. We carefully select lodges, hotels, tented camps and resorts based on your itinerary, preferences and budget to make your stay comfortable and memorable."
        },
        {
          q: "Can you arrange honeymoons and special occasions?",
          a: "Yes. We create romantic and personalized journeys for honeymoons, anniversaries, birthdays and other special occasions, including luxury safari and beach combinations."
        }
      ].map((faq, index) => (

        <div
          key={index}
          className="bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
        >

          <h3 className="text-xl font-bold text-[#0B6E4F]">
            {faq.q}
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            {faq.a}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
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
    </>
  );
}

export default About;