
import React, { useState, useEffect } from "react";
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

import video2 from "../assets/video2.mp4";
import schoolpos from "../assets/schoolpos.jpg";
//import amboseli from "../assets/amboseli.jpg";
//import nakuru from "../assets/nakuru.jpg";
//import hellsgate from "../assets/hellsgate.jpg";
//import meru from "../assets/meru.jpg";
//import climbinglongonot from "../assets/climbinglongonot.jpg";
//import image17 from "../assets/image17.jpg";
//import image16 from "../assets/image16.jpg";
import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster5 from "../assets/poster5.jpg";


export default function UpcomingTrips() {
const monthlyTrips = [
  {
    title: "Samburu & Buffalo Springs",
    date: "15 - 16 September 2026",
    duration: "2 Days / 1 Night",
    price: "KSh 9,800",
    image: poster1,
    description:
      "Experience the wild beauty of Samburu with thrilling game drives, breathtaking landscapes and unforgettable sunsets.",
    includes: [
      "Transport",
      "Accommodation",
      "Meals",
      "Game Drives",
      "Professional Guide",
    ],
  },
  {
    title: "Budget Group Safari",
    date: "22 September 2026",
    duration: "1 Day",
    price: "KSh 3,500",
    image: poster2,
    description:
      "Perfect for adventure lovers looking for an affordable wildlife experience with fellow travelers.",
    includes: [
      "Transport",
      "Park Entry",
      "Lunch",
      "Photography Stops",
    ],
  },
  {
    title: "Mombasa Weekend Getaway",
    date: "18 - 20 September 2026",
    duration: "3 Days",
    price: "KSh 9,800",
    image: poster4,
    description:
      "Escape to the coast and enjoy white sandy beaches, exciting nightlife, marine adventures and luxury accommodation.",
    includes: [
      "Beach Hotel",
      "Breakfast",
      "Transport",
      "City Tour",
    ],
  },
  {
    title: "August Holiday Deals",
    date: "Every Weekend",
    duration: "Flexible",
    price: "From KSh 7,500",
    image: poster5,
    description:
      "Exclusive holiday offers to Kenya's best destinations with discounted group packages.",
    includes: [
      "Flexible Dates",
      "Group Discounts",
      "Luxury Hotels",
    ],
  },
];

const [tripIndex, setTripIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setTripIndex((prev) => (prev + 1) % monthlyTrips.length);
  }, 4000);

  return () => clearInterval(interval);
}, [monthlyTrips.length]);
  return (
    <div className="bg-[#f8faf8]">

{/* HERO */}
<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={video2} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />
  <div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/80 via-black/40 to-black/70" />

  {/* Content */}
  <div className="relative z-10 text-center text-white px-6 max-w-4xl">

    <span className="inline-block bg-[#0B6E4F]/90 backdrop-blur-md px-5 py-2 rounded-full uppercase tracking-[3px] text-sm font-semibold border border-white/20">
      Upcoming Group Adventures
    </span>

    <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
      Discover Kenya
      <span className="block text-[#D4AF37]">
        Together
      </span>
    </h1>

    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8 max-w-2xl mx-auto">
      Join exciting road trips, camping experiences, hiking adventures and
      unforgettable group tours across Kenya.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">
      
    </div>

  </div>

</section>

      {/* SEARCH */}

     

      {/* FEATURED */}

      <section className="py-24 bg-gradient-to-b from-[#f7f8f5] to-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="bg-emerald-100 text-[#0B6E4F] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-[3px]">
        Monthly Trips
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">
        Join Our Upcoming
        <span className="block text-[#0B6E4F]">
          Group Adventures
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Affordable group road trips carefully planned for unforgettable experiences.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div
        key={tripIndex}
        className="animate-[fadeIn_.8s_ease]"
      >

        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
          {monthlyTrips[tripIndex].date}
        </span>

        <h2 className="mt-6 text-5xl font-black">
          {monthlyTrips[tripIndex].title}
        </h2>

        <p className="mt-6 text-gray-600 leading-8 text-lg">
          {monthlyTrips[tripIndex].description}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">

          {monthlyTrips[tripIndex].includes.map((item) => (

            <div
              key={item}
              className="flex items-center gap-3"
            >

              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-[#0B6E4F] font-bold">

                ✓

              </div>

              <span className="font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

        <div className="flex flex-wrap gap-10 mt-10">

          <div>

            <p className="text-gray-500">
              Duration
            </p>

            <h3 className="text-2xl font-bold">
              {monthlyTrips[tripIndex].duration}
            </h3>

          </div>

          <div>

            <p className="text-gray-500">
              Price
            </p>

            <h3 className="text-3xl font-black text-[#0B6E4F]">
              {monthlyTrips[tripIndex].price}
            </h3>

          </div>

        </div>

        <a
  href="https://wa.me/254720524627?text=Hello%20Savanna%20Crown%20Safaris%20Africa%2C%20I%27m%20interested%20in%20reserving%20a%20seat%20on%20an%20upcoming%20trip."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex mt-10 bg-[#0B6E4F] text-white px-8 py-4 rounded-full font-bold hover:bg-[#084c39] transition"
>
  Reserve Your Seat
</a>

      </div>

      {/* RIGHT IMAGE */}

      <div className="relative">

        <div className="overflow-hidden rounded-[35px] shadow-2xl">

          <img
            src={monthlyTrips[tripIndex].image}
            alt=""
            className="w-full h-[560px] object-cover transition-all duration-700"
          />

        </div>

        {/* Floating Price */}

        <div className="absolute top-8 left-8 bg-white rounded-2xl px-6 py-4 shadow-xl">

          <p className="text-gray-500 text-sm">
            Starting From
          </p>

          <h3 className="text-3xl font-black text-[#0B6E4F]">
            {monthlyTrips[tripIndex].price}
          </h3>

        </div>

        {/* Dots */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">

          {monthlyTrips.map((_, i) => (

            <button
              key={i}
              onClick={() => setTripIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                tripIndex === i
                  ? "w-10 h-3 bg-[#0B6E4F]"
                  : "w-3 h-3 bg-white"
              }`}
            />

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

      {/* TRIPS */}

      {/* ================= UPCOMING TRIPS ================= */}
<section
  id="upcoming-trips"
  className="py-24 bg-gradient-to-b from-[#F7FAF8] to-white"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">

      <span className="inline-flex px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] font-semibold uppercase tracking-[3px] text-sm">
        Upcoming Adventures
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">
        Join Our Next
        <span className="block text-[#0B6E4F]">
          Group Road Trips
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
        Limited seats available. Reserve your space today and experience
        unforgettable adventures with fellow travelers.
      </p>

    </div>

    <div className="space-y-10">


      {/* ================= School Educational Trip ================= */}

<div className="group bg-white rounded-[35px] shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">

  <div className="grid lg:grid-cols-2">

    {/* Image */}
    <div className="overflow-hidden relative">

      <img
        src={schoolpos}
        alt="School Educational Trip"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

      <div className="absolute top-6 left-6 bg-[#D4AF37] text-black px-5 py-2 rounded-full font-bold shadow-lg">
        School Trip
      </div>

    </div>

    {/* Content */}
    <div className="p-10 flex flex-col justify-center">

      <span className="inline-flex items-center bg-emerald-100 text-[#0B6E4F] px-4 py-2 rounded-full font-bold w-fit">
        📚 Learn • Explore • Discover
      </span>

      <h3 className="mt-5 text-4xl font-black text-gray-900">
        Educational School Adventure
      </h3>

      <p className="mt-5 text-gray-600 leading-8">
        Give students an unforgettable learning experience through exciting
        educational excursions. Visit national parks, historical landmarks,
        museums, wildlife conservancies and cultural heritage sites while
        promoting teamwork, leadership and environmental conservation.
      </p>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 mt-8">

        {[
          "Wildlife Learning",
          "Museum Visits",
          "Nature Walks",
          "Historical Sites",
          "Team Building",
          "Professional Guides",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#0B6E4F] font-bold">
              ✓
            </div>

            <span className="text-gray-700 font-medium">
              {item}
            </span>

          </div>
        ))}

      </div>

      {/* Trip Details */}
      <div className="grid grid-cols-2 gap-8 mt-10">

        <div>

          <p className="text-gray-500">
            Suitable For
          </p>

          <h4 className="text-xl font-bold">
            Primary, Secondary & Colleges
          </h4>

        </div>

        <div>

          <p className="text-gray-500">
            Packages From
          </p>

          <h4 className="text-3xl font-black text-[#0B6E4F]">
            KSh 2,500
          </h4>

          <p className="text-sm text-gray-500">
            Per Student
          </p>

        </div>

      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">

        

      </div>

    </div>

  </div>

</div>

      {/* ================= Trip 1 ================= */}

      <div className="group bg-white rounded-[35px] shadow-xl hover:shadow-2xl overflow-hidden transition duration-500 hover:-translate-y-2">

        <div className="grid lg:grid-cols-2">

          <div className="overflow-hidden">

            <img
              src={poster1}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

          </div>

          <div className="p-10 flex flex-col justify-center">

            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold w-fit">
              15 - 16 September
            </span>

            <h3 className="mt-5 text-4xl font-black">
              Samburu & Buffalo Springs Safari
            </h3>

            <p className="mt-5 text-gray-600 leading-8">

              Escape to Northern Kenya for a two-day wildlife adventure.
              Experience elephants, lions, giraffes, stunning landscapes,
              evening campfire moments and unforgettable game drives.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>

                <p className="text-gray-500">
                  Duration
                </p>

                <h4 className="font-bold">
                  2 Days • 1 Night
                </h4>

              </div>

              <div>

                <p className="text-gray-500">
                  Starting From
                </p>

                <h4 className="text-3xl font-black text-[#0B6E4F]">
                  KSh 9,800
                </h4>

                <p className="text-sm text-gray-500">
                  Per Person
                </p>

              </div>

            </div>

            <div className="mt-8 flex gap-4">

              

            </div>

          </div>

        </div>

      </div>

      {/* ================= Trip 2 ================= */}

      <div className="group bg-white rounded-[35px] shadow-xl hover:shadow-2xl overflow-hidden transition duration-500 hover:-translate-y-2">

        <div className="grid lg:grid-cols-2">

          <div className="lg:order-2 overflow-hidden">

            <img
              src={poster2}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

          </div>

          <div className="lg:order-1 p-10 flex flex-col justify-center">

            <span className="inline-block bg-emerald-100 text-[#0B6E4F] px-4 py-2 rounded-full font-bold w-fit">
              Budget Friendly
            </span>

            <h3 className="mt-5 text-4xl font-black">
              Join Our Budget Group Safari
            </h3>

            <p className="mt-5 text-gray-600 leading-8">

              Looking for an affordable adventure? Join fellow travelers for
              an exciting safari packed with wildlife, photography, fun
              activities and memorable road trip experiences.

            </p>

            <div className="mt-8">

              <h4 className="text-3xl font-black text-[#0B6E4F]">
                Affordable Packages Available
              </h4>

            </div>

            

          </div>

        </div>

      </div>

      {/* ================= Trip 3 ================= */}

      <div className="group bg-white rounded-[35px] shadow-xl hover:shadow-2xl overflow-hidden transition duration-500 hover:-translate-y-2">

        <div className="grid lg:grid-cols-2">

          <div>

            <img
              src={poster3}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

          </div>

          <div className="p-10 flex flex-col justify-center">

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold w-fit">
              18 - 20 September
            </span>

            <h3 className="mt-5 text-4xl font-black">
              Tembea Mombasa Weekend Getaway
            </h3>

            <p className="mt-5 text-gray-600 leading-8">

              Spend three unforgettable days exploring the Kenyan Coast.
              Enjoy pristine beaches, Old Town tours, Fort Jesus, Swahili
              cuisine, beach games and vibrant nightlife.

            </p>

            <div className="mt-8">

              <h3 className="text-3xl font-black text-[#0B6E4F]">
                KSh 9,800
              </h3>

              <p className="text-gray-500">
                Per Person
              </p>

            </div>

            

          </div>

        </div>

      </div>

      {/* ================= Trip 4 ================= */}

      <div className="group bg-white rounded-[35px] shadow-xl hover:shadow-2xl overflow-hidden transition duration-500 hover:-translate-y-2">

        <div className="grid lg:grid-cols-2">

          <div className="lg:order-2">

            <img
              src={poster4}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

          </div>

          <div className="lg:order-1 p-10 flex flex-col justify-center">

            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-bold w-fit">
              August Holiday Special
            </span>

            <h3 className="mt-5 text-4xl font-black">
              Mombasa Holiday Deals
            </h3>

            <p className="mt-5 text-gray-600 leading-8">

              Take advantage of our exclusive holiday offers featuring beach
              resorts, marine parks, dolphin tours, luxury accommodation and
              exciting coastal adventures at discounted group rates.

            </p>

            

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
      {/* WHY US */}

      <section className="bg-[#0B6E4F] py-24">

        <div className="max-w-7xl mx-auto px-6 text-white">

          <h2 className="text-center text-5xl font-black">
            Why Travel With Savanna Crown?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
              "Professional Tour Guides",
              "Comfortable Transport",
              "Affordable Group Packages",
              "Safe & Memorable Adventures",
            ].map((item) => (

              <div
                key={item}
                className="bg-white/10 rounded-3xl p-8 backdrop-blur"
              >

                <div className="text-5xl mb-5">✓</div>

                <h3 className="font-bold text-xl">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 text-center">

        <h2 className="text-5xl font-black">
          Ready For Your Next Adventure?
        </h2>

        <p className="mt-6 text-gray-600 text-lg">
          Book your seat today and create unforgettable memories with
          Savanna Crown Safaris.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 bg-[#D4AF37] px-10 py-4 rounded-full font-bold hover:scale-105 transition"
        >
          Book Now
        </Link>

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
    </div>
  );
}