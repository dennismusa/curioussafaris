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

import home3 from "../assets/home3.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import image16 from "../assets/image16.jpg";
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
import home1 from "../assets/home1.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";

function Gallery() {
  const gallery = [
    { image: home1, title: "Group Adventures" },
    { image: home2, title: "Weekend Road Trips" },
    { image: home3, title: "Wildlife Safaris" },
    { image: home4, title: "Luxury Escapes" },
    { image: home5, title: "Beach Holidays" },
    { image: kenya, title: "Discover Kenya" },
    { image: nakuru, title: "Lake Nakuru" },
    { image: home4, title: "Safari Moments" },
    { image: nairobi, title: "Nature Experience" },
    { image: image1, title: "Adventure Tours" },
    { image: image2, title: "Scenic Landscapes" },
    { image: home3, title: "Amazing Destinations" },
    { image: climbingkenya, title: "Mt. Kenya Hiking" },
    { image: climbingkili, title: "Kilimanjaro Trek" },
    { image: climbinglongonot, title: "Longonot Hike" },
    { image: gorilla, title: "Gorilla Trekking" },
    { image: hellsgate, title: "Hell's Gate" },
    { image: serengeti, title: "Serengeti Safari" },
    { image: tanzania, title: "Explore Tanzania" },
  ];

  return (
    <div className="bg-white">

      {/* HERO */}

      <section className="relative min-h-[65vh] sm:min-h-[75vh] lg:h-[80vh] flex items-center overflow-hidden">

        <img
          src={home3}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative h-full flex items-center justify-center">

          <div className="text-center text-white px-6">

            <span className="uppercase tracking-[5px] text-yellow-400 font-semibold">
              Memories • Experiences • Adventures
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-6">
              Our Gallery
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-200 leading-8">
              Explore unforgettable moments from our safaris, road trips,
              hiking adventures and group tours across Kenya and East Africa.
            </p>

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

export default Gallery;