/* eslint-disable no-unused-vars */
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

import image14 from "../assets/image14.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import wilderbeast from "../assets/Wilderbeast.jpg";
import image4 from "../assets/image4.jpg";
import image2 from "../assets/image2.jpg";
import home2 from "../assets/home2.jpg";
import home5 from "../assets/home5.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import home4 from "../assets/home4.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import gorilla from "../assets/gorilla.jpg";
import nairobi from "../assets/nairobi.jpg";
import serengeti from "../assets/serengeti.jpg";
import tanzania from "../assets/tanzania.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import victoria1 from "../assets/victoria1.jpg";
import zambezi from "../assets/zambezi.jpg";
import luangwa from "../assets/luangwa.jpg";
import ngorongoro from "../assets/ngorongoro.jpg";
import kenya from "../assets/kenya.jpg";
import home1 from "../assets/home1.jpg";
import team from "../assets/team.jpg";
import diani from "../assets/diani.jpg";
import image10 from "../assets/image10.jpg";
import meru from "../assets/meru.jpg";
import weekends from "../assets/weekends.jpg";

function Gallery() {
  const gallery = [
    { image: team, title: "Group Adventures" },
    { image: home2, title: "Weekend Road Trips" },
    { image: wilderbeast, title: "Wildlife Safaris" },
    { image: weekends, title: "Luxury Escapes" },
    { image: diani, title: "Beach Holidays" },
    { image: kenya, title: "Discover Kenya" },
    { image: nakuru, title: "Lake Nakuru" },
    { image: image10, title: "Safari Moments" },
    { image: nairobi, title: "Nature Experience" },
    { image: image1, title: "Adventure Tours" },
    { image: home5, title: "Scenic Landscapes" },
    { image: meru, title: "Amazing Destinations" },
    { image: climbingkenya, title: "Mt. Kenya Hiking" },
    { image: climbingkili, title: "Kilimanjaro Trek" },
    { image: climbinglongonot, title: "Longonot Hike" },
    { image: gorilla, title: "Gorilla Trekking" },
    { image: hellsgate, title: "Hell's Gate" },
    { image: serengeti, title: "Serengeti Safari" },
    { image: image14, title: "Explore Tanzania" },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}

     <section className="relative min-h-[65vh] sm:min-h-[25vh] lg:h-[70vh] flex items-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src={wilderbeast}
    alt="Safari adventure"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/55" />

  {/* SUBTLE GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

  {/* CONTENT */}
  <div className="relative z-10 w-full">

    <div className="text-center text-white px-5 max-w-3xl mx-auto">

      <span className="inline-block uppercase tracking-[3px] text-yellow-400 font-semibold text-xs sm:text-sm">
        Memories • Experiences • Adventures
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3">
        Our Gallery
      </h1>

      <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-gray-200 leading-6">
        Explore unforgettable moments from our safaris, road trips,
        hiking adventures and group tours across Kenya and East Africa.
      </p>

      {/* SMALL ACCENT */}
      <div className="flex justify-center items-center gap-2 mt-5">
        <span className="w-10 h-[2px] bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-10 h-[2px] bg-yellow-400" />
      </div>

    </div>

  </div>

</section>

      {/* GALLERY */}

      <section className="py-24 bg-[#F8F9F6]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-[#0B6E4F] font-bold">
              Photo Collection
            </span>

            <h2 className="text-5xl font-black mt-5 text-gray-900">
              Travel Moments
            </h2>

          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

            {gallery.map((item, index) => (

              <div
                key={index}
                className="relative overflow-hidden rounded-[28px] shadow-xl break-inside-avoid group cursor-pointer"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">

                  <div className="p-6">

                    <h3 className="text-white text-2xl font-bold">
                      {item.title}
                    </h3>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= TRAVEL EXPERIENCES ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] font-semibold uppercase tracking-[3px] text-sm">
        More Than Just Photos
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">
        Every Journey Tells
        <span className="block text-[#0B6E4F]">
          A Different Story
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Every road trip is an opportunity to discover breathtaking landscapes,
        create lifelong friendships and experience unforgettable adventures
        across Kenya and East Africa.
      </p>

    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

      {[
        {
          number: "150+",
          title: "Road Trips",
          text: "Successfully organized group adventures."
        },
        {
          number: "5K+",
          title: "Happy Travelers",
          text: "Travelers who've explored with us."
        },
        {
          number: "40+",
          title: "Destinations",
          text: "Amazing places across East Africa."
        },
        {
          number: "100%",
          title: "Memorable Experiences",
          text: "Creating moments that last forever."
        }
      ].map((item) => (

        <div
          key={item.title}
          className="bg-[#F8F9F6] rounded-[30px] p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >

          <h3 className="text-5xl font-black text-[#0B6E4F]">
            {item.number}
          </h3>

          <h4 className="mt-4 text-2xl font-bold text-gray-900">
            {item.title}
          </h4>

          <p className="mt-4 text-gray-600 leading-7">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>


{/* ================= DESTINATIONS ================= */}

<section className="py-24 bg-[#F8F9F6]">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-14">

      <span className="uppercase tracking-[4px] text-[#0B6E4F] font-bold text-sm">
        Explore With Us
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-4 text-gray-900">
        Where Your Adventure
        <span className="block text-[#0B6E4F]">
          Takes You
        </span>
      </h2>

      <p className="mt-5 text-gray-600 text-lg leading-8">
        From breathtaking wildlife destinations to tropical beaches and
        unforgettable mountain adventures, discover some of the incredible
        places waiting for you across Kenya and East Africa.
      </p>

    </div>


    {/* DESTINATION GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* MAASAI MARA */}
      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={wilderbeast}
          alt="Maasai Mara safari"
          className="absolute inset-0 w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            Wildlife Safari
          </span>

          <h3 className="text-3xl font-black mt-2">
            Maasai Mara
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            Experience breathtaking wildlife, dramatic landscapes and
            unforgettable safari moments.
          </p>

        </div>

      </div>


      {/* DIANI */}
      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={diani}
          alt="Diani Beach"
          className="absolute inset-0 w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            Beach Escape
          </span>

          <h3 className="text-3xl font-black mt-2">
            Diani Beach
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            Escape to white sandy beaches, turquoise waters and
            unforgettable coastal experiences.
          </p>

        </div>

      </div>


      {/* MOUNT KENYA */}
      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={climbingkenya}
          alt="Mount Kenya hiking"
          className="absolute inset-0 w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            Mountain Adventure
          </span>

          <h3 className="text-3xl font-black mt-2">
            Mount Kenya
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            Challenge yourself with spectacular mountain trails and
            breathtaking high-altitude scenery.
          </p>

        </div>

      </div>


      {/* NAKURU */}
      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={nakuru}
          alt="Lake Nakuru"
          className="absolute inset-0 w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            Nature Experience
          </span>

          <h3 className="text-3xl font-black mt-2">
            Lake Nakuru
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            Discover spectacular landscapes, wildlife and the beauty
            of the Great Rift Valley.
          </p>

        </div>

      </div>


      {/* SERENGETI */}
      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={serengeti}
          alt="Serengeti safari"
          className="absolute inset-0 w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            East Africa
          </span>

          <h3 className="text-3xl font-black mt-2">
            Serengeti
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            Venture beyond Kenya and experience one of Africa's most
            iconic wildlife destinations.
          </p>

        </div>

      </div>


      {/* LONGONOT */}
      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={climbinglongonot}
          alt="Mount Longonot hiking"
          className="absolute inset-0 w-full h-full object-cover
                     group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            Hiking Adventure
          </span>

          <h3 className="text-3xl font-black mt-2">
            Mount Longonot
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            Take on an exciting hiking adventure with panoramic views
            across the Great Rift Valley.
          </p>

        </div>

      </div>

    </div>


    {/* BUTTON */}
    <div className="text-center mt-12">

      <Link
        to="/Destinations"
        className="
          inline-flex
          items-center
          gap-3
          px-8
          py-4
          rounded-full
          bg-[#0B6E4F]
          text-white
          font-bold
          hover:bg-[#09543D]
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Explore upcoming trips
        <FaArrowRight />
      </Link>

    </div>

  </div>

</section>



      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#0B6E4F] to-[#09543D]">

        <div className="max-w-4xl mx-auto text-center px-6 text-white">

          <span className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Ready For Your Next Adventure?
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Create Memories With Us
          </h2>

          <p className="mt-6 text-lg text-gray-200 leading-8">
            Join one of our exciting road trips, safaris or hiking adventures
            and become part of our growing travel community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/upcoming-trips"
              className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition"
            >
              View Upcoming Trips
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              Book Now
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
          Curious
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
                href="mailto:curioussafariss@gmail.com"
                className="text-gray-400 hover:text-white break-all"
              >
                curioussafariss@gmail.com
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
          Curious Safaris 
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

export default Gallery;