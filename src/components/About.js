import React from "react";
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
} from "react-icons/fa";
import about1 from "../assets/about1.jpg";
//import home3 from "../assets/home3.jpg";
//import nakuru from "../assets/nakuru.jpg";
//import image16 from "../assets/image16.jpg";
//import image4 from "../assets/image4.jpg";
//import image2 from "../assets/image2.jpg";
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
import home1 from "../assets/home1.jpg";
//import kenya from "../assets/kenya.jpg";
//import image17 from "../assets/image17.jpg";


function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <img
          src={home1}
          alt="About Savanna Crown Safaris"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37] uppercase tracking-widest text-xs">
            Welcome to Savanna Crown Safaris
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
              to="/upcomingtrips"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative">
            <img
  src={about1}
  alt="About Savanna Crown Safaris"
  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
/>

            <div className="absolute -bottom-6 -right-6 bg-[#0B6E4F] text-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-4xl font-black text-[#D4AF37]">100+</h3>
              <p className="text-sm uppercase tracking-widest">
                Happy Travelers
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div>

            <span className="text-[#D4AF37] uppercase tracking-[0.3em] font-semibold">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#06261D] leading-tight">
              Creating Unforgettable Safari Experiences
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Savanna Crown Safaris is a proudly Kenyan tour and travel
              company offering unforgettable adventures across Kenya and
              East Africa. We specialize in wildlife safaris, beach
              holidays, road trips, corporate travel, school trips,
              honeymoons, airport transfers and tailor-made travel
              experiences.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Our experienced team is passionate about helping travelers
              discover Africa's beauty while providing exceptional
              customer service, comfortable travel, competitive pricing,
              and personalized itineraries that create lifelong memories.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#F8F8F8] rounded-2xl p-5 hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-[#0B6E4F]">50+</h3>
                <p className="text-gray-600 mt-2">Safari Packages</p>
              </div>

              <div className="bg-[#F8F8F8] rounded-2xl p-5 hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-[#0B6E4F]">24/7</h3>
                <p className="text-gray-600 mt-2">Customer Support</p>
              </div>

              <div className="bg-[#F8F8F8] rounded-2xl p-5 hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-[#0B6E4F]">100%</h3>
                <p className="text-gray-600 mt-2">Tailor-Made Trips</p>
              </div>

              <div className="bg-[#F8F8F8] rounded-2xl p-5 hover:shadow-lg transition">
                <h3 className="text-3xl font-bold text-[#0B6E4F]">5★</h3>
                <p className="text-gray-600 mt-2">Customer Experience</p>
              </div>

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

<section className="py-24 bg-gradient-to-r from-[#06261D] via-[#0B6E4F] to-[#06261D]">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
      Start Your Adventure
    </span>

    <h2 className="mt-6 text-5xl font-black text-white leading-tight">

      Ready For Your Next
      <br />
      African Adventure?

    </h2>

    <p className="mt-8 text-green-100 text-lg leading-8">

      Whether you're planning a dream safari, beach holiday,
      honeymoon or corporate retreat, our team is ready to
      create a journey you'll never forget.

    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-5">

      <Link
        to="/contact"
        className="px-8 py-4 rounded-full bg-[#D4AF37] text-black font-bold hover:scale-105 transition"
      >
        Contact Us
      </Link>

      <a
        href="https://wa.me/254720524627"
        target="_blank"
        rel="noreferrer"
        className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
      >
        Chat on WhatsApp
      </a>

    </div>

  </div>

</section> {/* ================= TESTIMONIALS ================= */}



{/* ================= CONTACT ================= */}

<section className="py-24 bg-[#06261D] text-white">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <span className="uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
      Contact Us
    </span>

    <h2 className="mt-5 text-5xl font-black">
      Let's Plan Your Next Adventure
    </h2>

    <p className="mt-8 text-green-100 max-w-3xl mx-auto leading-8">
      Our travel experts are ready to help you plan your dream safari,
      beach holiday or customized East African adventure.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      <div className="bg-white/10 rounded-3xl p-8">
        <h3 className="text-[#D4AF37] font-bold text-xl">
          Call Us
        </h3>

        <p className="mt-4">
          +254 720 524 627
        </p>

        <p>
          +254 140 322 304
        </p>
      </div>

      <div className="bg-white/10 rounded-3xl p-8">
        <h3 className="text-[#D4AF37] font-bold text-xl">
          Email
        </h3>

        <p className="mt-4 break-all">
          info@savannacrownsafarisafrica.co.ke
        </p>
      </div>

      <div className="bg-white/10 rounded-3xl p-8">
        <h3 className="text-[#D4AF37] font-bold text-xl">
          Follow Us
        </h3>

        <p className="mt-4">
          @savannacrownsafarisafrica
        </p>
      </div>

    </div>

    <div className="mt-14">

      <Link
        to="/contact"
        className="inline-block bg-[#D4AF37] text-black font-bold px-10 py-4 rounded-full hover:scale-105 transition"
      >
        Get In Touch
      </Link>

    </div>

  </div>

</section>
{/* ================= PREMIUM FOOTER ================= */}

{/* ================= FOOTER ================= */}
<footer className="relative overflow-hidden bg-[#050505] text-white">

  {/* Top Accent Line */}
  <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

  {/* Background Glow */}
  <div className="absolute -top-32 -left-20 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[170px]" />
  <div className="absolute -bottom-32 -right-20 w-[450px] h-[450px] bg-yellow-400/10 rounded-full blur-[170px]" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-14">

      {/* ================= Company ================= */}

      <div>

        <h2 className="text-4xl font-black">
          Savanna
          <span className="text-[#D4AF37]"> Crown</span>
        </h2>

        <div className="w-20 h-1 bg-[#D4AF37] rounded-full mt-4"></div>

        <p className="mt-6 text-gray-400 leading-8">
          Discover Kenya and East Africa through unforgettable safaris,
          group adventures, road trips and tailor-made travel experiences.
          We create journeys filled with wildlife, culture, comfort and
          lifelong memories.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">

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
              link: "https://wa.me/254720524627",
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
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#0B6E4F] hover:border-[#0B6E4F] hover:-translate-y-2 transition duration-500"
            >
              {item.icon}
            </a>

          ))}

        </div>

      </div>

      {/* ================= Quick Links ================= */}

      <div>

        <h3 className="text-2xl font-bold mb-8">
          Quick Links
        </h3>

        <div className="space-y-5">

          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Upcoming Trips", path: "/upcomingtrips" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] hover:translate-x-2 transition-all duration-300"
            >

              <FaArrowRight className="text-xs" />

              {item.name}

            </Link>

          ))}

        </div>

      </div>

      {/* ================= Contact ================= */}

      <div>

        <h3 className="text-2xl font-bold mb-8">
          Contact Us
        </h3>

        <div className="space-y-6">

          {/* Phone */}

          <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#0B6E4F]/20 transition">

            <div className="w-12 h-12 rounded-xl bg-[#0B6E4F] flex items-center justify-center">
              <FaPhoneAlt />
            </div>

            <div>

              <p className="font-semibold">
                Call Us
              </p>

              <a
                href="tel:+254720524627"
                className="text-gray-400 hover:text-white"
              >
                +254 720 524 627
              </a>

            </div>

          </div>

          {/* Email */}

          <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#0B6E4F]/20 transition">

            <div className="w-12 h-12 rounded-xl bg-[#0B6E4F] flex items-center justify-center">
              <FaEnvelope />
            </div>

            <div>

              <p className="font-semibold">
                Email
              </p>

              <a
                href="mailto:info@savannacrownsafarisafrica.co.ke"
                className="text-gray-400 hover:text-white break-all"
              >
                info@savannacrownsafarisafrica.co.ke
              </a>

            </div>

          </div>

          {/* Location */}

          <div className="flex gap-4 p-4 rounded-2xl bg-white/5 hover:bg-[#0B6E4F]/20 transition">

            <div className="w-12 h-12 rounded-xl bg-[#0B6E4F] flex items-center justify-center">
              <FaMapMarkerAlt />
            </div>

            <div>

              <p className="font-semibold">
                Office
              </p>

              <p className="text-gray-400">
                Nairobi, Kenya
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* ================= Bottom ================= */}

    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

      <p className="text-gray-500 text-center md:text-left">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#D4AF37] font-semibold">
          Savanna Crown Safaris Africa
        </span>
        . All Rights Reserved.
      </p>

      <div className="flex items-center gap-6 text-sm">

        <Link
          to="/"
          className="text-gray-500 hover:text-[#D4AF37] transition"
        >
          Privacy Policy
        </Link>

        <span className="text-white/20">|</span>

        <Link
          to="/"
          className="text-gray-500 hover:text-[#D4AF37] transition"
        >
          Terms & Conditions
        </Link>

      </div>

    </div>

  </div>

  {/* Scroll To Top */}

  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#D4AF37] text-black shadow-2xl hover:scale-110 transition duration-300"
  >
    <FaChevronUp />
  </button>

</footer>
    </>
  );
}

export default About;