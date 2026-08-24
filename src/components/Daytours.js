/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaArrowRight, FaFileContract, FaClock,FaMobileAlt,FaUniversity, FaEnvelope, FaMapMarkerAlt,  FaCar,  FaBinoculars,  FaUtensils,  FaCamera,  FaUsers,  FaCheck,  FaWhatsapp,  FaMountain,  FaCompass,} from "react-icons/fa";
import {  FaFacebookF, FaTiktok, FaInstagram,   FaYoutube,     FaChevronUp,  FaGlobe,} from "react-icons/fa";
//import useLanguageSync from "../hooks/useLanguageSync";
/* =========================================================
   IMAGES
========================================================= */
import nairobi from "../assets/nairobi.jpg";
import nairobi1 from "../assets/nairobi1.jpg";
import morning from "../assets/morning.jpg";
import afternoon from "../assets/afternoon.jpg";
import nairobipark from "../assets/nairobipark.jpg";
import illusion from "../assets/illusion.jpg";
import kenyanfood from "../assets/kenyanfood.jpg";
import maasaimarket from "../assets/maasaimarket.jpg";
import matatu from "../assets/matatu.jpg";
import hotels from "../assets/hotels.jpg";
import culture from "../assets/culture.jpg";





const images = {
  hero:
    nairobi1,

  lion:
    "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=90",

  giraffe:
    "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1600&q=90",

  safari:
    "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=1600&q=90",

  culture:
    culture,

  landscape:
    "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=90",

  city:
    nairobi,
};

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// eslint-disable-next-line no-unused-vars
const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

// eslint-disable-next-line no-unused-vars
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const safariTimes = [
  {
    title: "Morning Safari",
    time: "6:00 AM — 10:00 AM",
    description:
      "Begin your day with an early morning game drive while Nairobi National Park is at its most active.",
    image: morning,
    tag: "BEST FOR WILDLIFE",
  },
  {
    title: "Afternoon Safari",
    time: "2:00 PM — 6:00 PM",
    description:
      "Enjoy a relaxed afternoon wildlife experience followed by beautiful golden-hour views across the park.",
    image: afternoon,
    tag: "GOLDEN HOUR",
  },
];

const itinerary = [
  {
    time: "06:00",
    title: "Nairobi National Park",
    icon: <FaBinoculars />,
    image: nairobipark,
    description:
      "Hotel pick-up followed by an early morning game drive through Nairobi National Park.",
    highlights: [
      "Lions",
      "Rhinos",
      "Giraffes",
      "Zebras",
      "Buffaloes",
    ],
  },

  {
    time: "09:30",
    title: "Return to Nairobi",
    icon: <FaCar />,
    image: nairobi,
    description:
      "Leave the park and continue into Nairobi for the cultural experiences.",
    highlights: [
      "Comfortable transfer",
      "Refreshment stop",
      "Flexible schedule",
    ],
  },

  {
    time: "10:30",
    title: "Museum of Illusions",
    icon: <FaCamera />,
    image: illusion,
    description:
      "Step into an interactive world of optical illusions and immersive rooms.",
    highlights: [
      "Interactive exhibits",
      "Photography",
      "Immersive experiences",
    ],
  },

  {
    time: "12:30",
    title: "Authentic Kenyan Lunch",
    icon: <FaUtensils />,
    image: kenyanfood,
    description:
      "Enjoy authentic Kenyan dishes and experience the country's warm food culture.",
    highlights: [
      "Nyama Choma",
      "Ugali",
      "Chapati",
      "Pilau",
    ],
  },

  {
    time: "14:00",
    title: "Maasai Market",
    icon: <FaUsers />,
    image: maasaimarket,
    description:
      "Explore handmade crafts, African fabrics, jewellery and artwork.",
    highlights: [
      "Local crafts",
      "African fabrics",
      "Art & souvenirs",
    ],
  },

  {
    time: "15:30",
    title: "Nairobi Matatu Culture",
    icon: <FaCompass />,
    image: matatu,
    description:
      "Experience Nairobi's famous matatus, graffiti, music, fashion and urban culture.",
    highlights: [
      "Matatu art",
      "Music & fashion",
      "Guided city experience",
    ],
  },

  {
    time: "17:30",
    title: "Hotel Drop-Off",
    icon: <FaMapMarkerAlt />,
    image: hotels,
    description:
      "Return to your hotel or preferred location after a full day in Nairobi.",
    highlights: [],
  },
];

const pricing = [
  {
    title: "Budget",
    price: "$120",
    description:
      "Perfect for travelers looking for an affordable way to experience Nairobi.",
    features: [
      "Transport",
      "Professional guide",
      "Game drive",
      "Museum of Illusions",
      "Local food experience",
      "Matatu experience",
    ],
  },
  {
    title: "Mid-Luxury",
    price: "$160",
    popular: true,
    description:
      "A refined experience combining comfort, flexibility and authentic experiences.",
    features: [
      "Upgraded transport",
      "Professional guide",
      "Private game drive",
      "Museum of Illusions",
      "Kenyan food experience",
      "Maasai Market",
      "Matatu culture",
    ],
  },
  {
    title: "Luxury Private",
    price: "$220",
    description:
      "A private premium experience designed around your schedule and interests.",
    features: [
      "Private premium vehicle",
      "Private guide",
      "Private game drive",
      "Museum experience",
      "Premium dining",
      "Maasai Market",
      "Private cultural experience",
      "Flexible itinerary",
    ],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function DayTrips() {
  const { t, i18n } = useTranslation();
  return (
    <div className="overflow-hidden bg-[#F7F5EF] text-[#17211D]">

      {/* =====================================================
          HERO
      ====================================================== */}
<section className="relative min-h-[80vh] overflow-hidden">
  {/* Background Image */}
  <motion.img
    src={images.hero}
    alt={t("nairobi.hero.imageAlt")}
    initial={{ scale: 1.08 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Content */}
  <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-end px-6 pb-20 pt-32 sm:px-10 lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl text-white"
    >
      {/* Small Label */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-amber-400" />

        <span className="text-xs font-semibold uppercase tracking-[3px] text-amber-300">
          {t("nairobi.hero.brand")}
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-7xl">
        {t("nairobi.hero.title")}
        <span className="block text-white/70">
          {t("nairobi.hero.titleHighlight")}
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
        {t("nairobi.hero.description")}
      </p>

      {/* Buttons */}
     

    </motion.div>
  </div>
</section>


{/* =====================================================
    FEATURED EXPERIENCE
===================================================== */}

<section
  id="nairobi-experience"
  className="relative px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Heading */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="text-[11px] font-bold uppercase tracking-[4px] text-emerald-700">
        {t("nairobi.experience.badge")}
      </span>

      <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-medium tracking-tight sm:text-6xl">
        {t("nairobi.experience.title")}
        <span className="block text-gray-400">
          {t("nairobi.experience.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-2xl leading-8 text-gray-600">
        {t("nairobi.experience.description")}
      </p>
    </motion.div>


    {/* Experience Image */}

    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative mt-16 overflow-hidden rounded-[2.5rem]"
    >
      <img
        src={nairobi}
        alt={t("nairobi.experience.imageAlt")}
        className="h-[450px] w-full object-cover sm:h-[600px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-7 left-7 right-7 flex flex-col justify-between gap-6 text-white sm:flex-row sm:items-end sm:p-5">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[3px] text-amber-300">
            {t("nairobi.experience.duration")}
          </p>

          <h3 className="mt-2 text-3xl font-medium">
            {t("nairobi.experience.location")}
          </h3>
        </div>

        <div className="flex gap-3">

          <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
            <p className="text-[9px] uppercase tracking-[2px] text-white/50">
              {t("nairobi.experience.start")}
            </p>

            <p className="mt-1 text-sm font-semibold">
              06:00 AM
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
            <p className="text-[9px] uppercase tracking-[2px] text-white/50">
              {t("nairobi.experience.finish")}
            </p>

            <p className="mt-1 text-sm font-semibold">
              05:30 PM
            </p>
          </div>

        </div>
      </div>
    </motion.div>


    {/* =================================================
        THE JOURNEY
    ================================================== */}

    <div className="mt-24">

      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-14"
      >
        <span className="text-[11px] font-bold uppercase tracking-[4px] text-emerald-700">
          {t("nairobi.journey.badge")}
        </span>

        <h3 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          {t("nairobi.journey.title")}
        </h3>

        <p className="mt-5 max-w-2xl leading-8 text-gray-600">
          {t("nairobi.journey.description")}
        </p>
      </motion.div>


      {/* Timeline */}

      <div className="relative">

        {/* Timeline Line */}

        <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gray-200 md:block" />

        <div className="space-y-8">

          {itinerary.map((item, index) => (

            <motion.div
              key={item.id || item.time || index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="relative grid gap-5 md:grid-cols-[100px_1fr]"
            >

              {/* Time */}

              <div className="relative z-10 flex items-start md:justify-start">
                <span className="rounded-full bg-[#F7F5EF] pr-4 text-sm font-bold text-emerald-700">
                  {item.time}
                </span>
              </div>


              {/* Card */}

              <div className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-2xl hover:shadow-black/5">

                <div className="grid md:grid-cols-[280px_1fr]">

                  {/* Image */}

                  <div className="relative h-64 overflow-hidden md:h-full md:min-h-[280px]">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Mobile Time */}

                    <div className="absolute bottom-5 left-5 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md md:hidden">
                      {item.time}
                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-7 sm:p-9">

                    <div className="flex gap-5">

                      {/* Icon */}

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition-all duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                        {item.icon}
                      </div>


                      {/* Text */}

                      <div className="flex-1">

                        <h4 className="text-2xl font-medium tracking-tight sm:text-3xl">
                          {item.title}
                        </h4>

                        <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                          {item.description}
                        </p>


                        {/* Highlights */}

                        {item.highlights?.length > 0 && (
                          <div className="mt-6 flex flex-wrap gap-2">

                            {item.highlights.map((highlight) => (

                              <span
                                key={highlight}
                                className="rounded-full bg-[#F7F5EF] px-4 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:bg-emerald-50 group-hover:text-emerald-800"
                              >
                                {highlight}
                              </span>

                            ))}

                          </div>
                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </div>

    </div>
  </div>
</section>
{/* =====================================================
    NAIROBI NATIONAL PARK
===================================================== */}

<section className="bg-[#18221E] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
  <div className="mx-auto max-w-7xl">

    {/* ================= HEADING ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >

      <div className="flex items-center gap-3">

        <span className="h-px w-10 bg-amber-400" />

        <span className="text-xs font-semibold uppercase tracking-[3px] text-amber-300">
          {t("nairobi.safari.badge")}
        </span>

      </div>

      <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        {t("nairobi.safari.title")}

        <span className="block text-white/40">
          {t("nairobi.safari.titleHighlight")}
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-white/60">
        {t("nairobi.safari.description")}
      </p>

    </motion.div>


    {/* ================= SAFARI CARDS ================= */}

    <div className="mt-14 grid gap-6 lg:grid-cols-2">

      {safariTimes.map((trip, index) => (

        <motion.article
          key={trip.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: index * 0.15,
          }}
          className="group relative overflow-hidden rounded-[2rem]"
        >

          {/* Image */}

          <div className="relative h-[480px] overflow-hidden sm:h-[540px]">

            <img
              src={trip.image}
              alt={`${trip.title} - ${t("nairobi.safari.badge")}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Subtle Top Gradient */}

            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

          </div>


          {/* Tag */}

          <div className="absolute left-6 top-6">

            <span className="rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white backdrop-blur-md">
              {trip.tag}
            </span>

          </div>


          {/* Content */}

          <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

            <div className="flex items-center gap-2 text-sm font-medium text-amber-300">

              <FaClock className="text-xs" />

              {trip.time}

            </div>


            <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              {trip.title}
            </h3>


            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              {trip.description}
            </p>


            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white transition-all duration-300"
            >

              {t("nairobi.safari.plan")}

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight className="text-xs" />
              </span>

            </a>

          </div>

        </motion.article>

      ))}

    </div>

  </div>
</section>


{/* =====================================================
    PRICING + PAYMENT
===================================================== */}

<section className="bg-[#18221E] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-20">

  <div className="mx-auto max-w-6xl">


    {/* ================= PRICING HEADER ================= */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >

      <span className="text-[10px] font-bold uppercase tracking-[3px] text-amber-300">
        {t("nairobi.pricing.badge")}
      </span>

      <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
        {t("nairobi.pricing.title")}
      </h2>

      <p className="mt-3 text-sm leading-6 text-white/55">
        {t("nairobi.pricing.description")}
      </p>

    </motion.div>


    {/* ================= PRICING CARDS ================= */}

    <div className="mt-10 grid gap-4 md:grid-cols-3">

      {pricing.map((plan, index) => (

        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.08,
            duration: 0.5,
          }}
          whileHover={{ y: -3 }}
          className={`rounded-2xl p-6 ${
            plan.popular
              ? "bg-white text-[#18221E]"
              : "border border-white/10 bg-white/[0.035]"
          }`}
        >

          {/* Plan Header */}

          <div className="flex items-center justify-between">

            <p
              className={`text-[9px] font-bold uppercase tracking-[2px] ${
                plan.popular
                  ? "text-emerald-700"
                  : "text-amber-300"
              }`}
            >
              {plan.title}
            </p>


            {plan.popular && (

              <span className="rounded-full bg-emerald-700 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-white">
                {t("nairobi.pricing.popular")}
              </span>

            )}

          </div>


          {/* Price */}

          <div className="mt-5">

            <span className="text-3xl font-medium">
              {plan.price}
            </span>

            <span
              className={`ml-1 text-xs ${
                plan.popular
                  ? "text-gray-400"
                  : "text-white/40"
              }`}
            >
              {t("nairobi.pricing.perPerson")}
            </span>

          </div>


          {/* Description */}

          <p
            className={`mt-3 text-xs leading-6 ${
              plan.popular
                ? "text-gray-500"
                : "text-white/50"
            }`}
          >
            {plan.description}
          </p>


          {/* Divider */}

          <div
            className={`my-5 h-px ${
              plan.popular
                ? "bg-gray-200"
                : "bg-white/10"
            }`}
          />


          {/* Features */}

          <ul className="space-y-2.5">

            {plan.features.map((feature) => (

              <li
                key={feature}
                className={`flex gap-2 text-xs ${
                  plan.popular
                    ? "text-gray-600"
                    : "text-white/60"
                }`}
              >

                <FaCheck
                  className={`mt-0.5 shrink-0 text-[10px] ${
                    plan.popular
                      ? "text-emerald-700"
                      : "text-emerald-400"
                  }`}
                />

                {feature}

              </li>

            ))}

          </ul>

        </motion.div>

      ))}

    </div>


    {/* =================================================
        PAYMENT
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >

      {/* Payment Heading */}

      <div className="mb-6">

        <span className="text-[10px] font-bold uppercase tracking-[3px] text-amber-300">
          {t("nairobi.payment.badge")}
        </span>

        <h3 className="mt-2 text-2xl font-medium">
          {t("nairobi.payment.title")}
        </h3>

      </div>


      {/* ================= PAYMENT CARDS ================= */}

      <div className="grid gap-4 md:grid-cols-2">


        {/* ================= M-PESA ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">

              <FaMobileAlt className="text-sm" />

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-[2px] text-emerald-400">
                {t("nairobi.payment.mpesa.region")}
              </p>

              <h4 className="text-base font-medium">
                {t("nairobi.payment.mpesa.title")}
              </h4>

            </div>

          </div>


          <div className="mt-5 space-y-2.5 text-xs">

            <div className="flex justify-between border-b border-white/10 pb-2">

              <span className="text-white/40">
                {t("nairobi.payment.mpesa.paybill")}
              </span>

              <span className="font-semibold">
                522533
              </span>

            </div>


            <div className="flex justify-between border-b border-white/10 pb-2">

              <span className="text-white/40">
                {t("nairobi.payment.mpesa.account")}
              </span>

              <span className="font-semibold">
                8003802
              </span>

            </div>


            <div className="flex justify-between">

              <span className="text-white/40">
                {t("nairobi.payment.mpesa.name")}
              </span>

              <span className="font-semibold">
                {t("nairobi.payment.mpesa.businessName")}
              </span>

            </div>

          </div>

        </div>


        {/* ================= BANK ================= */}

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">

              <FaUniversity className="text-sm" />

            </div>

            <div>

              <p className="text-[9px] uppercase tracking-[2px] text-amber-300">
                {t("nairobi.payment.bank.type")}
              </p>

              <h4 className="text-base font-medium">
                {t("nairobi.payment.bank.title")}
              </h4>

            </div>

          </div>


          <div className="mt-5 space-y-2.5 text-xs">

            <div className="flex justify-between border-b border-white/10 pb-2">

              <span className="text-white/40">
                {t("nairobi.payment.bank.account")}
              </span>

              <span className="font-semibold">
                1342354095
              </span>

            </div>


            <div className="flex justify-between border-b border-white/10 pb-2">

              <span className="text-white/40">
                {t("nairobi.payment.bank.name")}
              </span>

              <span className="font-semibold">
                {t("nairobi.payment.bank.businessName")}
              </span>

            </div>


            <div className="flex justify-between">

              <span className="text-white/40">
                {t("nairobi.payment.bank.swift")}
              </span>

              <span className="font-semibold">
                KCBLKENX002
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          PAYMENT POLICY
      ================================================= */}

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">


          {/* Policy Heading */}

          <div className="flex items-center gap-3">

            <FaFileContract className="text-amber-300" />

            <div>

              <h4 className="text-sm font-semibold">
                {t("nairobi.payment.policy.title")}
              </h4>

              <p className="mt-1 text-xs text-white/40">
                {t("nairobi.payment.policy.description")}
              </p>

            </div>

          </div>


          {/* Policy Items */}

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/55">

            <span className="flex items-center gap-2">

              <FaCheck className="text-[9px] text-emerald-400" />

              {t("nairobi.payment.policy.deposit")}

            </span>


            <span className="flex items-center gap-2">

              <FaCheck className="text-[9px] text-emerald-400" />

              {t("nairobi.payment.policy.balance")}

            </span>


            <span className="flex items-center gap-2">

              <FaCheck className="text-[9px] text-emerald-400" />

              {t("nairobi.payment.policy.rescheduling")}

            </span>


            <span className="flex items-center gap-2">

              <FaCheck className="text-[9px] text-emerald-400" />

              {t("nairobi.payment.policy.refunds")}

            </span>

          </div>

        </div>

      </div>


      {/* =================================================
          CONTACT
      ================================================= */}

      <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">


        <div>

          <p className="text-xs font-medium text-white/70">
            {t("nairobi.payment.contact.title")}
          </p>

          <p className="mt-1 text-xs text-white/35">
            {t("nairobi.payment.contact.description")}
          </p>

        </div>


        <div className="flex flex-wrap gap-4 text-xs">


          {/* WhatsApp */}

          <a
            href="https://wa.me/254745861688"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-white/60 transition hover:text-emerald-400"
          >

            <FaWhatsapp className="text-sm" />

            {t("nairobi.payment.contact.phone")}

          </a>


          {/* Email */}

          <a
            href="mailto:curioussafariss@gmail.com"
            className="flex items-center gap-2 text-white/60 transition hover:text-amber-300"
          >

            <FaEnvelope className="text-sm" />

            {t("nairobi.payment.contact.email")}

          </a>

        </div>

      </div>

    </motion.div>

  </div>

</section>


{/* =====================================================
    OTHER DAY EXPERIENCES
===================================================== */}

<section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

  <div className="mx-auto max-w-7xl">


    {/* Heading */}

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <span className="text-[11px] font-bold uppercase tracking-[4px] text-emerald-700">
        {t("nairobi.more.badge")}
      </span>

      <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">
        {t("nairobi.more.title")}
      </h2>

    </motion.div>


    {/* Cards */}

    <div className="mt-16 grid gap-5 md:grid-cols-3">

      {[
        {
          title: t("nairobi.more.wildlife.title"),
          text: t("nairobi.more.wildlife.text"),
          image: images.lion,
        },
        {
          title: t("nairobi.more.culture.title"),
          text: t("nairobi.more.culture.text"),
          image: images.culture,
        },
        {
          title: t("nairobi.more.adventure.title"),
          text: t("nairobi.more.adventure.text"),
          image: images.city,
        },
      ].map((card, index) => (

        <motion.article
          key={card.title}
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: index * 0.1,
          }}
          className="group relative overflow-hidden rounded-[2rem]"
        >

          <img
            src={card.image}
            alt={card.title}
            loading="lazy"
            className="h-[460px] w-full object-cover transition duration-[1200ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />


          <div className="absolute bottom-0 p-8 text-white">

            <h3 className="text-3xl font-medium">
              {card.title}
            </h3>

            <p className="mt-3 max-w-sm leading-7 text-white/65">
              {card.text}
            </p>

          </div>

        </motion.article>

      ))}

    </div>

  </div>

</section>


{/* =====================================================
    FINAL CTA
===================================================== */}

<section
  id="booking"
  className="relative overflow-hidden bg-[#EAE5D8] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
>

  {/* Background Effect */}

  <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-700/10 blur-[120px]" />


  <div className="relative mx-auto max-w-5xl text-center">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >


      {/* Badge */}

      <span className="text-[11px] font-bold uppercase tracking-[4px] text-emerald-700">
        {t("nairobi.cta.badge")}
      </span>


      {/* Heading */}

      <h2 className="mt-6 text-5xl font-medium leading-tight tracking-tight sm:text-7xl">

        {t("nairobi.cta.title")}

        <span className="block text-emerald-800">
          {t("nairobi.cta.titleHighlight")}
        </span>

      </h2>


      {/* Description */}

      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600">
        {t("nairobi.cta.description")}
      </p>


      {/* Buttons */}

      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">


        {/* WhatsApp */}

        <a
          href="https://wa.me/254745861688"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#17211D] px-8 py-4 text-sm font-bold text-white transition hover:bg-emerald-800"
        >

          <FaWhatsapp className="text-lg" />

          {t("nairobi.cta.plan")}

          <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />

        </a>


        {/* Contact */}

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-[#17211D]/20 px-8 py-4 text-sm font-bold text-[#17211D] transition hover:bg-[#17211D] hover:text-white"
        >

          {t("nairobi.cta.contact")}

        </a>

      </div>

    </motion.div>

  </div>

</section>
{/* FOOTER */}
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