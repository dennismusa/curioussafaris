/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF, FaTiktok, FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,  FaSearch,} from "react-icons/fa";

import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";

// ================= IMAGES =================

import cruiser2 from "../assets/cruiser2.jpg";
import krugerpark from "../assets/krugerpark.jpg";
import etoshapark from "../assets/etoshapark.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import image16 from "../assets/image16.jpg";
import image4 from "../assets/image4.jpg";
import image2 from "../assets/image2.jpg";
import okavango from "../assets/okavango.jpg";
import west from "../assets/west.jpg";
import amboseli from "../assets/amboseli.jpg";
import discover1 from "../assets/discover1.jpg";
import discover2 from "../assets/discover2.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import uganda from "../assets/uganda.jpg";
import meru from "../assets/meru.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import diani from "../assets/diani.jpg";
import serengeti from "../assets/serengeti.jpg";

import tanzania from "../assets/tanzania.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";

import victoria1 from "../assets/victoria1.jpg";
import zambezi from "../assets/zambezi.jpg";
import luangwa from "../assets/luangwa.jpg";
import ngorongoro from "../assets/ngorongoro.jpg";

import kenya from "../assets/kenya.jpg";

import airbaloon from "../assets/airbaloon.jpg";
import morocco from "../assets/morocco.jpg";
import egypt from "../assets/egypt.jpg";

import image10 from "../assets/image10.jpg";
import destination1 from "../assets/destination1.jpg";

// If these files exist, use them.
// Otherwise temporarily replace them with existing images.



// ======================================================
// HOME COMPONENT
// ======================================================

function Home() {

  useLanguageSync();

  const { t, i18n } = useTranslation();

  // ======================================================
  // HERO SLIDER
  // ======================================================

  const images = [
    airbaloon,
    egypt,
    morocco,
    uganda,
    image10,
  ];

  const [index, setIndex] = useState(0);


  // ======================================================
  // ABOUT SLIDER
  // ======================================================

  const aboutImages = [
    airbaloon,
    egypt,
    morocco,
    image10,
    west,
    amboseli,
  ];

  const [aboutIndex, setAboutIndex] = useState(0);
  const [smallAboutIndex, setSmallAboutIndex] = useState(1);


  // ======================================================
  // DESTINATION SEARCH
  // ======================================================

  const [searchTerm, setSearchTerm] = useState("");


  // ======================================================
  // REVIEWS STATE
  // ======================================================

  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [success, setSuccess] = useState(false);


  // ======================================================
  // SAFARI DESTINATIONS
  // ======================================================

  const safariDestinations = [
  {
    country: "Uganda",
    title: "7-Day Uganda Safari",
    subtitle: "Gorillas, Chimpanzees & Wildlife",
    description:
      "Journey through Uganda's ancient rainforests and vast savannahs. Track endangered mountain gorillas in Bwindi, encounter chimpanzees in Kibale Forest, and discover incredible wildlife in Queen Elizabeth National Park.",

    highlights: [
      "Mountain Gorilla Trekking",
      "Chimpanzee Tracking",
      "Queen Elizabeth National Park",
      "Kazinga Channel Boat Safari",
    ],

    duration: "7 Days / 6 Nights",
    region: "East Africa",
    image: kenya,
    category: "Primate Safari",
    sectionId: "uganda-safari",
    slug: "uganda",
    featured: true,
  },

  {
    country: "Rwanda",
    title: "7-Day Rwanda Safari",
    subtitle: "Gorillas, Wildlife & African Culture",
    description:
      "Experience the Land of a Thousand Hills through unforgettable gorilla encounters, breathtaking landscapes, cultural experiences, and wildlife adventures in one of Africa's most beautiful destinations.",

    highlights: [
      "Volcanoes National Park",
      "Gorilla Trekking",
      "Golden Monkey Tracking",
      "Lake Kivu",
    ],

    duration: "7 Days / 6 Nights",
    region: "East Africa",
    image: kenya,
    category: "Luxury Safari",
    sectionId: "rwanda-safari",
    slug: "rwanda",
    featured: true,
  },

  {
    country: "Kenya",
    title: "7-Day Kenya Safari",
    subtitle: "Maasai Mara, Amboseli & Lake Nakuru",
    description:
      "Discover Kenya's legendary wildlife destinations, from the endless plains of the Maasai Mara to the elephant herds of Amboseli and the spectacular landscapes of Lake Nakuru.",

    highlights: [
      "Big Five Safari",
      "Maasai Mara",
      "Amboseli National Park",
      "Lake Nakuru",
    ],

    duration: "7 Days / 6 Nights",
    region: "East Africa",
    image: kenya,
    category: "Wildlife Safari",
    sectionId: "kenya-safari",
    slug: "kenya",
    featured: true,
  },

  {
    country: "Tanzania",
    title: "7-Day Tanzania Safari",
    subtitle: "Serengeti, Ngorongoro & Tarangire",
    description:
      "Explore Tanzania's most iconic landscapes, including the Serengeti, the Ngorongoro Crater, and Tarangire National Park, while experiencing extraordinary wildlife encounters.",

    highlights: [
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Tarangire National Park",
      "Great Migration",
    ],

    duration: "7 Days / 6 Nights",
    region: "East Africa",
    image: tanzania,
    category: "Classic Safari",
    sectionId: "tanzania-safari",
    slug: "tanzania",
    featured: true,
  },

  {
    country: "Zimbabwe",
    title: "7-Day Zimbabwe Safari",
    subtitle: "Victoria Falls & Hwange National Park",
    description:
      "Witness the magnificent Victoria Falls, explore Hwange National Park, and discover one of Southern Africa's most remarkable wildlife destinations.",

    highlights: [
      "Victoria Falls",
      "Hwange National Park",
      "Zambezi River Cruise",
      "Wildlife Encounters",
    ],

    duration: "7 Days / 6 Nights",
    region: "Southern Africa",
    image: victoria1,
    category: "Adventure Safari",
    sectionId: "zimbabwe-safari",
    slug: "zimbabwe",
    featured: false,
  },

  {
    country: "Zambia",
    title: "7-Day Zambia Safari",
    subtitle: "South Luangwa & Zambezi River",
    description:
      "Experience authentic African wilderness through walking safaris, exceptional wildlife viewing, and unforgettable adventures along the mighty Zambezi River.",

    highlights: [
      "South Luangwa",
      "Walking Safaris",
      "Zambezi River",
      "Wildlife Photography",
    ],

    duration: "7 Days / 6 Nights",
    region: "Southern Africa",
    image: luangwa,
    category: "Walking Safari",
    sectionId: "zambia-safari",
    slug: "zambia",
    featured: false,
  },

  {
    country: "Morocco",
    title: "Morocco Adventure",
    subtitle: "Desert, Culture & Ancient Cities",
    description:
      "Explore Morocco's colorful cities, cross the Atlas Mountains, experience the Sahara Desert, and immerse yourself in centuries of history and culture.",

    highlights: [
      "Marrakech",
      "Atlas Mountains",
      "Sahara Desert",
      "Ancient Medinas",
    ],

    duration: "7 Days / 6 Nights",
    region: "North Africa",
    image: morocco,
    category: "Cultural Experience",
    sectionId: "morocco-safari",
    slug: "morocco",
    featured: false,
  },

  {
    country: "Egypt",
    title: "Egypt Adventure",
    subtitle: "Pyramids, Nile & Ancient Wonders",
    description:
      "Travel through ancient Egypt and discover the pyramids, historic temples, the Nile River, and one of the world's greatest civilizations.",

    highlights: [
      "Great Pyramids",
      "The Nile",
      "Ancient Temples",
      "Luxor",
    ],

    duration: "7 Days / 6 Nights",
    region: "North Africa",
    image: egypt,
    category: "Historical Journey",
    sectionId: "egypt-safari",
    slug: "egypt",
    featured: false,
  },

  {
    country: "Botswana",
    title: "Botswana Safari",
    subtitle: "Okavango Delta & Wildlife",
    description:
      "Explore one of Africa's most exclusive safari destinations and experience the extraordinary biodiversity of the Okavango Delta.",

    highlights: [
      "Okavango Delta",
      "Mokoro Excursions",
      "Luxury Camps",
      "Wildlife Viewing",
    ],

    duration: "7 Days / 6 Nights",
    region: "Southern Africa",
    image: okavango,
    category: "Luxury Wilderness",
    sectionId: "botswana-safari",
    slug: "botswana",
    featured: false,
  },
    {
    country: "South Africa",
    title: "7-Day South Africa Safari",
    subtitle: "Safari & City Adventure",
    description:
      "Experience the best of South Africa in one unforgettable journey, from the iconic landscapes of Cape Town and Table Mountain to thrilling Big Five encounters in Kruger National Park and the vibrant energy of Johannesburg.",

    highlights: [
      "Table Mountain",
      "Cape Peninsula",
      "Boulders Beach",
      "Big Five Safari",
      "Kruger National Park",
      "Johannesburg",
    ],

    duration: "7 Days / 6 Nights",
    region: "Southern Africa",
    image: krugerpark,
    category: "Wildlife & City Adventure",
    sectionId: "southafrica-safari",
    slug: "south-africa",
    featured: false,
  },

  {
    country: "Namibia",
    title: "7-Day Namibia Adventure",
    subtitle: "Desert, Wildlife & Coastal Wonders",
    description:
      "Journey across Namibia's extraordinary landscapes, from the towering red dunes of Sossusvlei and the coastal charm of Swakopmund to the rugged wilderness of Damaraland and the wildlife-rich plains of Etosha National Park.",

    highlights: [
      "Sossusvlei & Deadvlei",
      "Swakopmund",
      "Damaraland",
      "Etosha National Park",
      "Namib Desert",
      "Desert-Adapted Wildlife",
    ],

    duration: "7 Days / 6 Nights",
    region: "Southern Africa",
    image: etoshapark,
    category: "Desert Adventure",
    sectionId: "namibia-safari",
    slug: "namibia",
    featured: false,
  },
];


  // ======================================================
  // FILTER DESTINATIONS
  // ======================================================

  const filteredDestinations = safariDestinations.filter(
    (destination) => {

      const search = searchTerm
        .toLowerCase()
        .trim();

      if (!search) {
        return true;
      }

      return (
        destination.country
          .toLowerCase()
          .includes(search) ||

        destination.title
          .toLowerCase()
          .includes(search) ||

        destination.subtitle
          .toLowerCase()
          .includes(search) ||

        destination.category
          .toLowerCase()
          .includes(search)
      );

    }
  );


  // ======================================================
  // HERO & ABOUT SLIDER
  // ======================================================

  useEffect(() => {

    const slider = setInterval(() => {

      // HERO
      setIndex(
        (prev) =>
          (prev + 1) % images.length
      );


      // ABOUT
      setAboutIndex(
        (prev) =>
          (prev + 1) % aboutImages.length
      );


      // SMALL ABOUT
      setSmallAboutIndex(
        (prev) =>
          (prev + 1) % aboutImages.length
      );

    }, 4000);


    return () => clearInterval(slider);

  }, [images.length, aboutImages.length]);


  // ======================================================
  // RETURN
  // ======================================================

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">


      
<section
  id="destinations"
  className="relative flex min-h-[560px] items-center overflow-hidden bg-black sm:min-h-[620px] lg:min-h-[680px]"
>
  {/* ================= BACKGROUND SLIDES ================= */}
  <div className="absolute inset-0">
    {[airbaloon, egypt, morocco, diani].map((img, i) => (
      <div
        key={i}
        className="absolute inset-0 transition-all duration-[1800ms] ease-out"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: i === index ? 1 : 0,
          transform: i === index ? "scale(1)" : "scale(1.05)",
        }}
      />
    ))}
  </div>

  {/* ================= CINEMATIC OVERLAYS ================= */}
  <div className="absolute inset-0 bg-black/35" />

  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

  <div className="absolute -bottom-32 right-[-100px] h-[350px] w-[350px] rounded-full bg-amber-400/10 blur-[100px]" />

  {/* ================= HERO CONTENT ================= */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
    <div className="max-w-2xl">

      {/* ================= BRAND ================= */}
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-yellow-400" />

        <span className="text-[9px] font-bold uppercase tracking-[3px] text-yellow-300 sm:text-[10px]">
          {t("hero.brand")}
        </span>
      </div>

      {/* ================= HEADING ================= */}
      <h1
        dir="auto"
        className="text-[2.1rem] font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl"
      >
        {t("hero.title")}
        <br />

        <span className="text-yellow-400">
          {t("hero.subtitle")}
        </span>
      </h1>

      {/* ================= DESCRIPTION ================= */}
      <p
        dir="auto"
        className="mt-4 max-w-lg text-[13px] leading-6 text-white/80 sm:text-sm sm:leading-7 md:text-base"
      >
        {t("hero.description")}
      </p>

      {/* ================= CTA ================= */}
      <div className="mt-6 flex flex-wrap gap-2.5">

        {/* Explore */}
        <Link
          to="/Destinations"
          className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 sm:px-6 sm:py-3 sm:text-sm"
        >
          {t("hero.explore")}

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* Plan */}
        <Link
          to="/Contact"
          className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm"
        >
          {t("hero.plan")}
        </Link>

      </div>

      {/* ================= TRUST POINTS ================= */}
      <div
        dir="auto"
        className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-medium text-white/70 sm:text-[10px]"
      >

        <span className="inline-flex items-center">
          <span className="mr-1 text-yellow-400">✓</span>
          {t("hero.trust.tailor")}
        </span>

        <span className="inline-flex items-center">
          <span className="mr-1 text-yellow-400">✓</span>
          {t("hero.trust.guides")}
        </span>

        <span className="inline-flex items-center">
          <span className="mr-1 text-yellow-400">✓</span>
          {t("hero.trust.private")}
        </span>

      </div>
    </div>
  </div>

  {/* ================= SLIDER CONTROLS ================= */}
  <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3 sm:bottom-7 sm:right-8">

    <span className="text-[10px] font-bold text-white/70">
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="flex items-center gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={t("hero.slide", {
            number: i + 1,
          })}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === index
              ? "w-7 bg-yellow-400"
              : "w-1.5 bg-white/40 hover:bg-white"
          }`}
        />
      ))}
    </div>

    <span className="text-[10px] text-white/40">
      04
    </span>

  </div>

  {/* ================= MOBILE / DESKTOP SCROLL ================= */}
  <div className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 md:block">
    <span className="text-[8px] font-semibold uppercase tracking-[3px] text-white/40">
      {t("hero.exploreLabel")}
    </span>
  </div>
</section>

{/* ================= DESTINATION SEARCH ================= */}

<section className="relative z-20 -mt-8 px-4 sm:px-6">
  <div className="mx-auto max-w-5xl">

    <div className="rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:p-5">

      {/* Heading */}
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#0B6E4F]">
            {t("search.findAdventure")}
          </p>

          <h2 className="text-lg font-black text-gray-900 sm:text-xl">
            {t("search.whereGo")}
          </h2>
        </div>

        <span className="hidden text-xs text-gray-400 sm:block">
          {t("search.exploreAfrica")}
        </span>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-2 sm:flex-row">

        <div className="relative flex-1">

          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base">
            🔍
          </span>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t("search.placeholder")}
            className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-10 text-sm outline-none transition focus:border-[#0B6E4F] focus:bg-white focus:ring-2 focus:ring-emerald-100"
          />

          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              aria-label={t("search.clear")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
            >
              ✕
            </button>
          )}

        </div>

        <button
          className="h-12 rounded-xl bg-[#0B6E4F] px-6 text-sm font-bold text-white transition hover:bg-[#095c42] sm:px-7"
        >
          {t("search.button")}
        </button>

      </div>

      {/* Popular */}
      <div className="mt-3">

        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
          {t("search.popular")}
        </p>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">

          {[
            "Kenya",
            "Tanzania",
            "Uganda",
            "Rwanda",
            "Zimbabwe",
            "Zambia",
            "Botswana",
            "Namibia",
            "South Africa",
            "Morocco",
            "Egypt",
          ].map((destination) => {

            const active =
              searchTerm.toLowerCase() === destination.toLowerCase();

            return (
              <button
                key={destination}
                onClick={() => setSearchTerm(destination)}
                className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[10px] font-semibold transition ${
                  active
                    ? "border-[#0B6E4F] bg-[#0B6E4F] text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#0B6E4F] hover:text-[#0B6E4F]"
                }`}
              >
                {destination}
              </button>
            );

          })}

        </div>

      </div>

    </div>

  </div>
</section>
{/* ================= SEARCH RESULTS ================= */}

{searchTerm.trim() && (
  <section className="bg-[#F8FAF8] px-6 py-16">

    <div className="mx-auto max-w-7xl">

      {/* Results Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#0B6E4F]">
            Safari Experiences
          </p>

          <h2 className="mt-2 text-3xl font-black text-gray-900">
            Results for "{searchTerm}"
          </h2>
        </div>

        <button
          onClick={() => setSearchTerm("")}
          className="text-sm font-bold text-[#0B6E4F] hover:underline"
        >
          Clear Search
        </button>

      </div>


      {/* Results */}

      {filteredDestinations.length > 0 ? (

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredDestinations.map((destination) => (

            <div
              key={destination.slug}
              className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <img
                  src={destination.image}
                  alt={destination.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[2px] text-[#0B6E4F]">
                  {destination.country}
                </span>

                <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-black text-white">
                  {destination.title}
                </h3>

              </div>


              {/* Content */}

              <div className="p-6">

                <p className="font-bold text-gray-900">
                  {destination.subtitle}
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {destination.description}
                </p>


                {/* EXACT SECTION BUTTON */}

<Link
  to={`/${i18n.language}/Destinations#${destination.sectionId}`}
  className="mt-5 inline-flex items-center font-bold text-[#0B6E4F]"
>
  Explore Safari

  <FaArrowRight className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="rounded-[28px] bg-white p-12 text-center shadow-lg">

          <div className="text-5xl">
            🦁
          </div>

          <h3 className="mt-4 text-2xl font-black">
            No destination found
          </h3>

          <p className="mt-2 text-gray-500">
            Try searching for Kenya, Tanzania, Uganda,
            Rwanda or another destination.
          </p>

        </div>

      )}

    </div>

  </section>
)}

      {/* ABOUT / EXPERIENCE SECTION */}
{/* ABOUT / EXPERIENCE SECTION */}
<section className="relative overflow-hidden bg-[#F6FAF8] py-20 sm:py-24 lg:py-28">

  {/* Background Effects */}
  <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-3xl" />
  <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-50 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

      {/* ================= IMAGE SIDE ================= */}

      <div className="relative">

        {/* Decorative Gold Frame */}
        <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[36px] border-2 border-[#C8A94C]/30" />

        {/* Image Container */}
        <div className="group relative h-[520px] overflow-hidden rounded-[36px] bg-gray-100 shadow-2xl sm:h-[600px] lg:h-[680px]">

          <img
            src={discover2}
            alt={t("discover.imageAlt")}
            className="h-full w-full object-cover object-center transition-transform duration-[2000ms] group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Image Caption */}
          <div className="absolute bottom-8 left-8 right-8">

            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-white/70">
              Curious Safaris
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {t("discover.imageTitle")}
            </h3>

          </div>

        </div>

        {/* Floating Destination Badge */}
        <div className="absolute left-5 top-6 rounded-2xl border border-white/70 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-md sm:left-7 sm:top-8">

          <h2 className="text-3xl font-black text-[#0B6E4F]">
            15+
          </h2>

          <p className="text-xs font-medium text-gray-600">
            {t("discover.destinations")}
          </p>

        </div>

      </div>


      {/* ================= CONTENT SIDE ================= */}

      <div>

        {/* Eyebrow */}
        <span className="text-xs font-bold uppercase tracking-[4px] text-[#0B6E4F]">
          Curious Safaris
        </span>

        {/* Heading */}
        <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">

          {t("discover.title")}

          <span className="mt-3 block text-[#0B6E4F]">
            {t("discover.subtitle")}
          </span>

        </h2>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">
          {t("discover.description1")}
        </p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">
          {t("discover.description2")}
        </p>


        {/* ================= FEATURES ================= */}

        <div className="mt-9 space-y-6">

          {/* Wildlife */}
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
              🦁
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                {t("discover.features.wildlife.title")}
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                {t("discover.features.wildlife.description")}
              </p>

            </div>

          </div>


          {/* Gorilla */}
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
              🦍
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                {t("discover.features.gorilla.title")}
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                {t("discover.features.gorilla.description")}
              </p>

            </div>

          </div>


          {/* Culture */}
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
              🌍
            </div>

            <div>

              <h3 className="font-bold text-gray-900">
                {t("discover.features.culture.title")}
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                {t("discover.features.culture.description")}
              </p>

            </div>

          </div>

        </div>


        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/contact"
            className="rounded-full bg-[#0B6E4F] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#09583F]"
          >
            {t("discover.plan")}
          </Link>

          <Link
            to="/destinations"
            className="rounded-full border-2 border-[#0B6E4F] px-7 py-3.5 text-sm font-bold text-[#0B6E4F] transition duration-300 hover:bg-[#0B6E4F] hover:text-white"
          >
            {t("discover.explore")}
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>




{/* ================= PREMIUM SERVICES ================= */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F1] via-[#FCFBF8] to-[#EFE9DE] py-32">

  {/* Background Effects */}

  <div className="absolute -top-44 left-0 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-[140px]" />

  <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-yellow-300/20 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* Header */}

    <div className="mx-auto mb-20 max-w-4xl text-center">

      <span className="inline-flex items-center rounded-full bg-emerald-100 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-emerald-700">
        {t("destinations.eyebrow")}
      </span>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">

        {t("destinations.title")}

        <span className="block text-[#C8A94C]">
          {t("destinations.titleHighlight")}
        </span>

      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        {t("destinations.description")}
      </p>

    </div>


    {/* Destination Cards */}

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "Kenya",
          image: kenya,
          desc: t("destinations.countries.kenya"),
        },

        {
          title: "Tanzania",
          image: tanzania,
          desc: t("destinations.countries.tanzania"),
        },

        {
          title: "Uganda",
          image: uganda,
          desc: t("destinations.countries.uganda"),
        },

        {
          title: "Rwanda",
          image: luangwa,
          desc: t("destinations.countries.rwanda"),
        },

        {
          title: "Botswana",
          image: victoria1,
          desc: t("destinations.countries.botswana"),
        },

        {
          title: "Zimbabwe",
          image: zambezi,
          desc: t("destinations.countries.zimbabwe"),
        },

      ].map((destination, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-[35px] bg-white shadow-xl transition duration-700 hover:-translate-y-3 hover:shadow-2xl"
        >

          <div className="overflow-hidden">

            <img
              src={destination.image}
              alt={destination.title}
              className="h-[280px] w-full object-cover transition duration-1000 hover:scale-110"
            />

          </div>

          <div className="p-8">

            <h3 className="text-3xl font-black text-gray-900">
              {destination.title}
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              {destination.desc}
            </p>

          </div>

        </div>

      ))}

    </div>


    {/* Why Travel With Us */}

    <div className="mt-24 rounded-[40px] bg-white p-12 shadow-2xl md:p-16">

      <h2 className="text-center text-4xl font-black text-gray-900">
        {t("destinations.why.title")}
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Private Safaris */}

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">🛻</div>

          <h3 className="mt-5 text-xl font-bold">
            {t("destinations.why.private.title")}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {t("destinations.why.private.description")}
          </p>

        </div>


        {/* Multiple Destinations */}

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">🌍</div>

          <h3 className="mt-5 text-xl font-bold">
            {t("destinations.why.multiple.title")}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {t("destinations.why.multiple.description")}
          </p>

        </div>


        {/* Authentic Experiences */}

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">📸</div>

          <h3 className="mt-5 text-xl font-bold">
            {t("destinations.why.authentic.title")}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {t("destinations.why.authentic.description")}
          </p>

        </div>


        {/* Tailor Made */}

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">🤝</div>

          <h3 className="mt-5 text-xl font-bold">
            {t("destinations.why.tailor.title")}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {t("destinations.why.tailor.description")}
          </p>

        </div>

      </div>

    </div>


    {/* Bottom CTA */}

    <div className="mt-24">

      <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#092517] via-[#123B25] to-[#092517] p-12 shadow-2xl md:p-16">

        <div className="grid items-center gap-10 lg:grid-cols-2">

          <div>

            <span className="text-sm font-bold uppercase tracking-[4px] text-yellow-400">
              {t("destinations.cta.eyebrow")}
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              {t("destinations.cta.title")}
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t("destinations.cta.description")}
            </p>

          </div>


          <div className="grid grid-cols-2 gap-6">

            {/* 15+ */}

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                15+
              </h3>

              <p className="mt-3 text-gray-300">
                {t("numbers.stats.destinations.title")}
              </p>

            </div>


            {/* 20+ */}

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                20+
              </h3>

              <p className="mt-3 text-gray-300">
                {t("numbers.stats.experiences.title")}
              </p>

            </div>


            {/* 24/7 */}

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                24/7
              </h3>

              <p className="mt-3 text-gray-300">
                {t("numbers.stats.support.title")}
              </p>

            </div>


            {/* 100% */}

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                100%
              </h3>

              <p className="mt-3 text-gray-300">
                {t("numbers.stats.tours.title")}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* FEATURED DESTINATIONS */}


{/* ================= AFRICA BY NUMBERS ================= */}
<section className="relative overflow-hidden bg-[#0B1F1A] py-24 sm:py-28">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#D4A017] blur-3xl" />
    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#0B6E4F] blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}
    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
        {t("numbers.eyebrow")}
      </span>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {t("numbers.title")}
      </h2>

      <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
        {t("numbers.description")}
      </p>

    </div>

    {/* Statistics */}
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

      {[
        {
          number: "15+",
          title: t("numbers.stats.destinations.title"),
          desc: t("numbers.stats.destinations.desc"),
        },
        {
          number: "20+",
          title: t("numbers.stats.experiences.title"),
          desc: t("numbers.stats.experiences.desc"),
        },
        {
          number: "100%",
          title: t("numbers.stats.tours.title"),
          desc: t("numbers.stats.tours.desc"),
        },
        {
          number: "24/7",
          title: t("numbers.stats.support.title"),
          desc: t("numbers.stats.support.desc"),
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="group rounded-[28px] border border-white/10 bg-white/[0.05] p-7 text-center backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:bg-white/[0.09] sm:p-9"
        >

          <div className="text-4xl font-bold tracking-tight text-[#D4A017] sm:text-5xl">
            {stat.number}
          </div>

          <h3 className="mt-4 text-lg font-bold text-white">
            {stat.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/60">
            {stat.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

{/* ================= SAFARI PLANNING PROCESS ================= */}
<section className="bg-[#F8F6F0] py-24 sm:py-28">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.3em] text-[#0B6E4F]">
        {t("planning.eyebrow")}
      </span>

      <h2 className="text-4xl font-bold tracking-tight text-[#17231F] sm:text-5xl">
        {t("planning.title")}
        <span className="block text-[#0B6E4F]">
          {t("planning.titleHighlight")}
        </span>
      </h2>

      <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
        {t("planning.description")}
      </p>

    </div>

    {/* Steps */}
    <div className="relative">

      {/* Desktop connecting line */}
      <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-[#0B6E4F]/20 lg:block" />

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

        {[
          {
            number: "01",
            title: t("planning.steps.destination.title"),
            desc: t("planning.steps.destination.description"),
          },
          {
            number: "02",
            title: t("planning.steps.itinerary.title"),
            desc: t("planning.steps.itinerary.description"),
          },
          {
            number: "03",
            title: t("planning.steps.booking.title"),
            desc: t("planning.steps.booking.description"),
          },
          {
            number: "04",
            title: t("planning.steps.travel.title"),
            desc: t("planning.steps.travel.description"),
          },
        ].map((step, index) => (
          <div
            key={index}
            className="group relative text-center"
          >

            {/* Number */}
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#0B6E4F]/20 bg-[#F8F6F0] shadow-sm transition duration-500 group-hover:-translate-y-2 group-hover:border-[#D4A017] group-hover:shadow-lg">
              <span className="text-2xl font-bold text-[#0B6E4F] transition duration-500 group-hover:text-[#D4A017]">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div className="mt-7">

              <h3 className="text-xl font-bold text-[#17231F]">
                {step.title}
              </h3>

              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-gray-600">
                {step.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">

      <a
        href="contact"
        className="inline-flex items-center justify-center rounded-full bg-[#0B6E4F] px-8 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#095A41] hover:shadow-xl"
      >
        {t("planning.cta")}
        <span className="ml-2 text-lg">→</span>
      </a>

    </div>

  </div>
</section>



{/* DESTINATIONS & EXPERIENCES */}

{/* WHY TRAVEL WITH US */}
<section className="py-24 bg-[#102315] text-white relative overflow-hidden">

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-[#D4AF37] font-semibold">
        {t("why.eyebrow")}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {t("why.title")}{" "}
        <span className="text-[#D4AF37]">
          {t("why.titleHighlight")}
        </span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
        {t("why.description")}
      </p>

    </div>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🦁</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("why.expertGuidesTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("why.expertGuidesDesc")}
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🚙</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("why.luxuryTravelTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("why.luxuryTravelDesc")}
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🌍</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("why.ecoTourismTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("why.ecoTourismDesc")}
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">⭐</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("why.trustedServiceTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("why.trustedServiceDesc")}
        </p>

      </div>

    </div>

  </div>

</section>


{/* ===================== REVIEWSS ===================== */}
<section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F1] via-white to-[#F2EEE5] py-32">

  {/* Background Effects */}

  <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[140px]" />

  <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-xs font-bold uppercase tracking-[4px] text-emerald-700">
        {t("reviews.badge")}
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">

        {t("reviews.title")}

        <span className="block text-[#C8A94C]">
          {t("reviews.titleHighlight")}
        </span>

      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {t("reviews.description")}
      </p>

    </div>


    {/* Rating Card */}

    <div className="mt-16 flex justify-center">

      <div className="rounded-[35px] bg-white px-12 py-10 shadow-2xl">

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-12">

          <div className="text-center">

            <h3 className="text-7xl font-black text-emerald-700">
              5.0
            </h3>

            <div className="mt-2 text-3xl text-yellow-400">
              ★★★★★
            </div>

            <p className="mt-3 text-gray-500">
              {t("reviews.basedOn")}
            </p>

          </div>

          <div className="hidden h-24 w-px bg-gray-200 md:block"></div>

          <div>

            <h3 className="text-2xl font-bold">
              {t("reviews.trustedTitle")}
            </h3>

            <p className="mt-4 max-w-lg leading-8 text-gray-600">
              {t("reviews.trustedDescription")}
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* Reviews */}

    <div className="mt-20 grid gap-8 md:grid-cols-2">

      {/* Review 1 */}

      <div className="group rounded-[35px] border border-gray-100 bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>

        <p className="mt-8 text-lg italic leading-9 text-gray-600">
          "{t("reviews.review1.text")}"
        </p>

        <div className="mt-10 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 text-xl font-bold text-white">
            J
          </div>

          <div>

            <h4 className="font-bold text-gray-900">
              Juicy Drinks
            </h4>

            <p className="text-sm text-gray-500">
              {t("reviews.googleReview")}
            </p>

          </div>

        </div>

      </div>


      {/* Review 2 */}

      <div className="group rounded-[35px] border border-gray-100 bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>

        <p className="mt-8 text-lg italic leading-9 text-gray-600">
          "{t("reviews.review2.text")}"
        </p>

        <div className="mt-10 flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 text-xl font-bold text-white">
            J
          </div>

          <div>

            <h4 className="font-bold text-gray-900">
              Joshua Ndwiga
            </h4>

            <p className="text-sm text-gray-500">
              {t("reviews.googleReview")}
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* Statistics */}

    <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          5.0
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.rating")}
        </p>

      </div>


      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          2+
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.verified")}
        </p>

      </div>


      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          100%
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.personalized")}
        </p>

      </div>


      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          24/7
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.support")}
        </p>

      </div>

    </div>


    {/* Buttons */}

    <div className="mt-20 flex flex-wrap justify-center gap-6">

      <a
        href="https://search.google.com/local/writereview?placeid=ChIJ5WRKPtUTLxgR3jaUiiu327U"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-2xl bg-[#0B6E4F] text-white font-bold hover:bg-[#08523B] hover:-translate-y-1 transition duration-300 shadow-lg"
      >
        ⭐ {t("reviews.writeReview")}
      </a>


      <a
        href="https://www.google.com/maps/search/?api=1&query=Curious+Safaris,+Ruiru,+Kenya&query_place_id=ChIJ5WRKPtUTLxgR3jaUiiu327U"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-2xl border-2 border-[#0B6E4F] text-[#0B6E4F] font-bold hover:bg-[#0B6E4F] hover:text-white hover:-translate-y-1 transition duration-300"
      >
        💬 {t("reviews.viewProfile")}
      </a>

    </div>

  </div>

</section>

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

export default Home;
