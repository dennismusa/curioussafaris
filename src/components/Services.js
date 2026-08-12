import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaPhoneAlt,  FaEnvelope,  FaMapMarkerAlt,  FaArrowRight,  FaChevronUp,} from "react-icons/fa";
import {
  FaCheckCircle,  FaShieldAlt,  FaUsers,  FaGlobeAfrica,  FaAward,  FaHeadset,  FaPlay,} from "react-icons/fa";

import video1 from "../assets/video1.mp4";
import home1 from "../assets/home1.jpg";
import about1 from "../assets/about1.jpg";
import school from "../assets/school.jpg";
import diani from "../assets/diani.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import adventure from "../assets/adventure.jpg";
import team from "../assets/team.jpg";
//import home3 from "../assets/home3.jpg";
import wilderbeast from "../assets/Wilderbeast.jpg";
//import diani from "../assets/diani.jpg";
import amboseli from "../assets/amboseli.jpg";
import nakuru from "../assets/nakuru.jpg";
//import image17 from "../assets/image17.jpg";

export default function Services() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative min-h-[65vh] sm:min-h-[75vh] lg:h-[80vh] flex items-center overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#031A12]/95 via-[#031A12]/70 to-transparent"></div>

        {/* Glow */}
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] bg-green-500/20 blur-[160px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-yellow-400/10 blur-[180px] rounded-full"></div>

        {/* Content */}

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full text-emerald-200 uppercase tracking-[3px] text-xs font-bold">

              Premium Safari Experiences

            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">

              Our
              <span className="block text-[#D4AF37]">
                Travel Services
              </span>

            </h1>

            <p className="mt-8 text-lg md:text-xl leading-9 text-gray-200 max-w-2xl">

              From unforgettable wildlife safaris and beach holidays to
              educational trips, corporate retreats and customized adventures,
              Savanna Crown Safaris Africa creates journeys that leave lasting
              memories.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/upcomingtrips"
                className="group inline-flex items-center gap-3 bg-[#0B6E4F] hover:bg-[#09553d] px-8 py-4 rounded-full font-semibold text-white transition duration-300"
              >
                Explore Packages

                <FaArrowRight className="group-hover:translate-x-1 transition" />

              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-white transition duration-300"
              >
                <FaPlay />

                Contact Us

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#F8F9F6] to-white overflow-hidden">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-green-100 rounded-full blur-[150px]"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-100 rounded-full blur-[150px]"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}

            <div className="relative">

              <img
                src={about1}
                alt=""
                className="rounded-[35px] shadow-2xl w-full h-[650px] object-cover"
              />

              <div className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl p-8">

                <h2 className="text-5xl font-black text-[#0B6E4F]">
                  5+
                </h2>

                <p className="text-gray-600 mt-2">
                  Years Creating Amazing Experiences
                </p>

              </div>

            </div>

            {/* Right */}

            <div>

              <span className="inline-block bg-green-100 text-[#0B6E4F] px-5 py-2 rounded-full uppercase tracking-[3px] text-xs font-bold">

                Why Choose Us

              </span>

              <h2 className="mt-6 text-5xl font-black text-gray-900">

                Your Trusted
                <span className="block text-[#0B6E4F]">
                  Travel Partner
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">

                We are passionate about creating memorable travel experiences
                across Kenya. Every trip is carefully planned to offer comfort,
                safety, adventure and exceptional value.

              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">

                {[
                  {
                    icon: <FaShieldAlt />,
                    title: "Safe Travel",
                    desc: "Licensed and reliable travel services.",
                  },
                  {
                    icon: <FaUsers />,
                    title: "Expert Guides",
                    desc: "Friendly local professionals.",
                  },
                  {
                    icon: <FaAward />,
                    title: "Premium Service",
                    desc: "Quality experiences every trip.",
                  },
                  {
                    icon: <FaGlobeAfrica />,
                    title: "Unique Destinations",
                    desc: "Discover Kenya's hidden gems.",
                  },
                  {
                    icon: <FaHeadset />,
                    title: "24/7 Support",
                    desc: "Always available to assist you.",
                  },
                  {
                    icon: <FaCheckCircle />,
                    title: "Best Value",
                    desc: "Affordable packages with quality.",
                  },
                ].map((item) => (

                  <div
                    key={item.title}
                    className="group bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-500"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-[#0B6E4F] text-white flex items-center justify-center text-2xl group-hover:bg-[#D4AF37] group-hover:text-black transition">

                      {item.icon}

                    </div>

                    <h3 className="mt-5 text-xl font-bold">

                      {item.title}

                    </h3>

                    <p className="mt-3 text-gray-600 leading-7">

                      {item.desc}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>        {/* ================= OUR SERVICES ================= */}

      <section className="relative py-28 bg-gradient-to-b from-white via-[#F8FAF8] to-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-yellow-200/30 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-200/30 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="inline-flex px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] uppercase tracking-[3px] text-xs font-bold">

              Our Premium Services

            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-gray-900">

              Experiences Designed For
              <span className="block text-[#0B6E4F]">
                Every Traveler
              </span>

            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Whether you're planning a luxury safari, school trip,
              family vacation or corporate retreat, our professional
              team ensures every journey is comfortable, memorable
              and perfectly organized.

            </p>

          </div>

          {/* Services */}

          <div className="grid lg:grid-cols-2 gap-10">

            {[
              {
                title: "Wildlife Safaris",
                image: amboseli,
                badge: "Most Popular",
                icon: "🦁",
                description:
                  "Experience Kenya's breathtaking wildlife through expertly guided safaris in Maasai Mara, Amboseli, Samburu, Tsavo and Lake Nakuru National Parks.",

                features: [
                  "Big Five Game Drives",
                  "Luxury Lodges & Camps",
                  "Professional Safari Guides",
                  "Photography Tours",
                ],
              },

              {
                title: "Group Road Trips",
                image: adventure,
                badge: "Budget Friendly",
                icon: "🚌",
                description:
                  "Travel with fellow adventurers to Kenya's top destinations while enjoying affordable packages, fun activities and unforgettable memories.",

                features: [
                  "Weekend Adventures",
                  "Affordable Packages",
                  "Fun Group Activities",
                  "Comfortable Transport",
                ],
              },

              {
                title: "Beach Holidays",
                image: diani,
                badge: "Luxury",
                icon: "🏖️",
                description:
                  "Relax on Kenya's beautiful coastline with carefully planned holidays to Diani, Watamu, Malindi and Mombasa.",

                features: [
                  "Luxury Beach Resorts",
                  "Marine Park Excursions",
                  "Boat Cruises",
                  "Snorkeling & Swimming",
                ],
              },

              {
                title: "Mountain Hiking",
                image: climbingkili,
                badge: "Adventure",
                icon: "🥾",
                description:
                  "Explore Kenya's scenic mountains and nature trails with experienced hiking guides and organized group expeditions.",

                features: [
                  "Mt Kenya",
                  "Longonot",
                  "Elephant Hill",
                  "Aberdares Trails",
                ],
              },

              {
                title: "School Educational Tours",
                image: school,
                badge: "school",
                icon: "🎒",
                description:
                  "Educational travel experiences designed for schools, colleges and universities combining learning, exploration and adventure.",

                features: [
                  "Museums",
                  "Wildlife Conservation",
                  "Historical Sites",
                  "Educational Activities",
                ],
              },

              {
                title: "Corporate Team Building",
                image: team,
                badge: "Corporate",
                icon: "🤝",
                description:
                  "Professional outdoor team-building events that improve leadership, teamwork and communication in a fun environment.",

                features: [
                  "Leadership Activities",
                  "Outdoor Games",
                  "Conference Facilities",
                  "Professional Facilitators",
                ],
              },

            ].map((service) => (

              <div
                key={service.title}
                className="group bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-all duration-700 hover:-translate-y-3"
              >

                {/* Image */}

                <div className="relative h-[300px] overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  <span className="absolute top-6 left-6 bg-white/20 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-white text-xs uppercase tracking-[3px]">

                    {service.badge}

                  </span>

                  <div className="absolute bottom-6 left-6 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-3xl">

                    {service.icon}

                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <h3 className="text-3xl font-black text-gray-900">

                    {service.title}

                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">

                    {service.description}

                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-8">

                    {service.features.map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 bg-[#F8F9F6] rounded-2xl px-4 py-3 hover:bg-emerald-50 transition"
                      >

                        <div className="w-8 h-8 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text-sm">

                          ✓

                        </div>

                        <span className="font-medium text-gray-700">

                          {item}

                        </span>

                      </div>

                    ))}

                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">

                    <span className="font-semibold text-[#0B6E4F]">

                      Fully Customizable Packages

                    </span>

                    <span className="text-[#D4AF37] font-bold uppercase tracking-[2px]">

                      Premium Service

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>         {/* ================= POPULAR DESTINATIONS ================= */}

      <section className="relative py-28 bg-[#031A12] overflow-hidden">

        {/* Background Effects */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[180px]" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[180px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="inline-flex px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl text-[#D4AF37] uppercase tracking-[3px] text-xs font-bold">

              Top Destinations

            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">

              Discover Kenya's
              <span className="block text-[#D4AF37]">
                Most Beautiful Places
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">

              Explore breathtaking wildlife parks, pristine beaches,
              mountains, lakes and hidden gems with professionally
              organized safari experiences.

            </p>

          </div>

          {/* Destinations */}

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                name: "Maasai Mara",
                image: wilderbeast,
                days: "3 Days",
                
              },

              {
                name: "Amboseli",
                image: amboseli,
                days: "2 Days",
                
              },

              {
                name: "Lake Nakuru",
                image: nakuru,
                days: "Day Trip",
                
              },

              {
                name: "Diani Beach",
                image: diani,
                days: "3 Days",
                
              },

            ].map((place) => (

              <div
                key={place.name}
                className="group relative overflow-hidden rounded-[30px] h-[500px] cursor-pointer"
              >

                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-8">

                  <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-xs font-bold uppercase">

                    {place.days}

                  </span>

                  <h3 className="mt-5 text-3xl font-black text-white">

                    {place.name}

                  </h3>

                  <p className="mt-3 text-gray-300 leading-7">

                    Experience breathtaking scenery, wildlife,
                    luxurious accommodation and unforgettable adventures.

                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <h4 className="text-[#D4AF37] text-xl font-bold">

                      {place.price}

                    </h4>

                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">

                      →

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= HOW BOOKING WORKS ================= */}

      <section className="relative py-28 bg-gradient-to-b from-[#F8F9F6] to-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="inline-flex bg-green-100 text-[#0B6E4F] px-5 py-2 rounded-full uppercase tracking-[3px] text-xs font-bold">

              Easy Booking Process

            </span>

            <h2 className="mt-6 text-5xl font-black">

              Book Your Safari
              <span className="block text-[#0B6E4F]">
                In Four Simple Steps
              </span>

            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Planning your dream safari has never been easier.
              Our team guides you through every step until
              your adventure begins.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                number: "01",
                title: "Choose a Destination",
                desc: "Browse our safari packages and select your preferred destination.",
                color: "bg-green-600",
              },

              {
                number: "02",
                title: "Request a Quote",
                desc: "Receive a personalized quotation based on your travel preferences.",
                color: "bg-yellow-500",
              },

              {
                number: "03",
                title: "Confirm Booking",
                desc: "Secure your seat with an easy booking confirmation process.",
                color: "bg-blue-600",
              },

              {
                number: "04",
                title: "Travel & Enjoy",
                desc: "Pack your bags and experience unforgettable adventures with us.",
                color: "bg-red-500",
              },

            ].map((step) => (

              <div
                key={step.number}
                className="relative bg-white rounded-[30px] shadow-xl p-10 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >

                <div className={`w-20 h-20 rounded-3xl ${step.color} text-white flex items-center justify-center text-3xl font-black`}>

                  {step.number}

                </div>

                <h3 className="mt-8 text-2xl font-black">

                  {step.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

                  {step.desc}

                </p>

                <div className="absolute top-10 right-10 text-7xl font-black text-gray-100">

                  {step.number}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>       {/* ================= WHAT'S INCLUDED ================= */}

      <section className="relative py-28 bg-gradient-to-b from-white via-[#F8FAF8] to-[#F3F7F4] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute -top-24 left-0 w-[450px] h-[450px] bg-emerald-200/30 rounded-full blur-[150px]" />
        <div className="absolute -bottom-24 right-0 w-[450px] h-[450px] bg-yellow-200/30 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center max-w-3xl mx-auto mb-20">

            <span className="inline-flex bg-emerald-100 text-[#0B6E4F] px-5 py-2 rounded-full uppercase tracking-[3px] text-xs font-bold">

              What's Included

            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-black">

              Everything You Need For
              <span className="block text-[#0B6E4F]">

                A Perfect Safari

              </span>

            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Every Savanna Crown adventure is professionally organized
              to ensure comfort, safety and unforgettable memories.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                icon: "🚐",
                title: "Luxury Transport",
                desc: "Comfortable, well-maintained safari vehicles with experienced drivers."
              },
              {
                icon: "🏨",
                title: "Accommodation",
                desc: "Quality hotels, lodges and luxury tented camps."
              },
              {
                icon: "🍽️",
                title: "Meals Included",
                desc: "Breakfast, lunch and dinner depending on your package."
              },
              {
                icon: "🦁",
                title: "Game Drives",
                desc: "Professional wildlife viewing experiences with expert guides."
              },
              {
                icon: "🎫",
                title: "Park Entry",
                desc: "National park and reserve entrance fees included."
              },
              {
                icon: "📷",
                title: "Photography Stops",
                desc: "Visit the best scenic viewpoints for unforgettable photos."
              },
              {
                icon: "💧",
                title: "Refreshments",
                desc: "Complimentary bottled drinking water during travel."
              },
              {
                icon: "☎️",
                title: "24/7 Support",
                desc: "Dedicated customer support before, during and after your trip."
              }

            ].map((item) => (

              <div
                key={item.title}
                className="group bg-white rounded-[30px] p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-500"
              >

                <div className="w-20 h-20 rounded-3xl bg-[#0B6E4F] text-white text-4xl flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition">

                  {item.icon}

                </div>

                <h3 className="mt-8 text-2xl font-black">

                  {item.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="relative py-28 bg-[#031A12] overflow-hidden">

        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-yellow-400/10 rounded-full blur-[170px]" />

        <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-green-500/10 rounded-full blur-[170px]" />

        <div className="relative max-w-5xl mx-auto px-6">

          <div className="text-center">

            <span className="inline-flex bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-[#D4AF37] uppercase tracking-[3px] text-xs font-bold">

              Frequently Asked Questions

            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">

              Everything You Need
              <span className="block text-[#D4AF37]">

                To Know

              </span>

            </h2>

            <p className="mt-6 text-lg text-gray-300">

              Find answers to the most common questions about our safari
              packages and booking process.

            </p>

          </div>

          <div className="mt-20 space-y-6">

            {[
              {
                q: "How do I book a safari?",
                a: "Contact us through our website, WhatsApp or phone. Our team will guide you through the booking process."
              },
              {
                q: "Do I pay the full amount immediately?",
                a: "No. Most trips require a booking deposit, with the remaining balance paid before departure."
              },
              {
                q: "Can I customize my safari?",
                a: "Yes. We design tailor-made safaris based on your budget, destination and travel dates."
              },
              {
                q: "Are children allowed?",
                a: "Absolutely. We organize family-friendly safaris suitable for children of all ages."
              },
              {
                q: "What should I carry?",
                a: "Comfortable clothing, sunscreen, a camera, walking shoes, sunglasses and personal essentials."
              },
              {
                q: "Do you organize corporate and school trips?",
                a: "Yes. We organize educational tours, team-building events and private group adventures."
              }

            ].map((faq) => (

              <details
                key={faq.q}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[24px] p-7 transition"
              >

                <summary className="cursor-pointer flex justify-between items-center list-none">

                  <h3 className="text-xl font-bold text-white">

                    {faq.q}

                  </h3>

                  <span className="text-[#D4AF37] text-3xl group-open:rotate-45 transition">

                    +

                  </span>

                </summary>

                <p className="mt-6 text-gray-300 leading-8">

                  {faq.a}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>        {/* ================= CALL TO ACTION ================= */}

      <section className="relative py-32 overflow-hidden">

        {/* Background Image */}

        <img
          src={home1}
          alt="Savanna Crown Safaris"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#031A12]/95 via-[#031A12]/80 to-[#031A12]/70"></div>

        {/* Glow */}

        <div className="absolute -top-32 -left-32 w-[450px] h-[450px] bg-emerald-500/20 rounded-full blur-[170px] animate-pulse"></div>

        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-[180px]"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

          <span className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 uppercase tracking-[4px] text-xs font-bold text-[#D4AF37]">

            Your Adventure Starts Here

          </span>

          <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-tight">

            Ready For Your
            <span className="block text-[#D4AF37]">

              Next Safari?

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-gray-200">

            Whether you're dreaming of witnessing the Big Five, relaxing on
            Kenya's beautiful coastline, hiking breathtaking mountains or
            organizing an unforgettable group adventure, our team is ready to
            make it happen.

          </p>

          {/* Stats */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {[
              {
                number: "500+",
                title: "Happy Travelers",
              },
              {
                number: "50+",
                title: "Safari Packages",
              },
              {
                number: "24/7",
                title: "Customer Support",
              },
              {
                number: "5★",
                title: "Rated Experience",
              },

            ].map((item) => (

              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-xl rounded-[25px] border border-white/10 py-8"
              >

                <h3 className="text-4xl font-black text-[#D4AF37]">

                  {item.number}

                </h3>

                <p className="mt-3 text-gray-300">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-6 mt-16">

            <Link
              to="/contact"
              className="px-10 py-5 rounded-full bg-[#0B6E4F] hover:bg-[#0A5B42] text-white font-bold shadow-2xl hover:scale-105 transition duration-300"
            >

              Book Your Safari

            </Link>

            <a
              href="https://wa.me/254720524627"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black font-bold transition duration-300"
            >

              Chat on WhatsApp

            </a>

          </div>

        </div>

      </section>
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