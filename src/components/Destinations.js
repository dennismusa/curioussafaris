import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import React, { useEffect } from "react";
import {  FaFacebookF, FaTiktok, FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";
import nile from "../assets/nile.jpg";
import okavango from "../assets/okavango.jpg";
import krugerpark from "../assets/krugerpark.jpg";
import pyramids from "../assets/pyramids.jpg";
import sahara from "../assets/sahara.jpg";
import amboseli from "../assets/amboseli.jpg";
import victoria1 from "../assets/victoria1.jpg";
//import victoria from "../assets/victoria.jpg";
import zambezi from "../assets/zambezi.jpg";
import luangwa from "../assets/luangwa.jpg";
import nakuru from "../assets/nakuru.jpg";
import ngorongoro from "../assets/ngorongoro.jpg";
import destination from "../assets/destination.jpg";
import serengeti from "../assets/serengeti.jpg";
import morocco from "../assets/morocco.jpg";
import egypt from "../assets/egypt.jpg";
import barkal from "../assets/barkal.jpg";
import etoshapark from "../assets/etoshapark.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import naivasha from "../assets/naivasha.jpg";




export default function Destination() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const scrollToSection = () => {
        const section = document.getElementById(hash.substring(1));

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      setTimeout(scrollToSection, 500);
    }
  }, []);
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-white">
     {/* Hero Section */}

<section className="relative min-h-[55vh] overflow-hidden bg-[#102F27] sm:min-h-[58vh] lg:min-h-[60vh]">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={destination}
      alt={t("destinationsHero.imageAlt")}
      className="h-full w-full object-cover object-center"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/35" />

  {/* Text Protection */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

  {/* Bottom Fade */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

  {/* Content */}
  <div className="relative z-10 flex min-h-[55vh] items-center sm:min-h-[58vh] lg:min-h-[60vh]">

    <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

      <div className="max-w-2xl">

        {/* Eyebrow */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[9px] font-semibold uppercase tracking-[2.5px] text-white backdrop-blur-md sm:text-[10px]">

            <span className="h-1.5 w-1.5 rounded-full bg-[#C8A94C]" />

            {t("destinationsHero.badge")}

          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

          {t("destinationsHero.title")}

          <span className="block text-[#C8A94C]">
            {t("destinationsHero.titleHighlight")}
          </span>

        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          {t("destinationsHero.description")}
        </p>

      </div>

    </div>

  </div>

  {/* Bottom Info */}
  <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">

    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-12">

      <span className="hidden text-[9px] font-semibold uppercase tracking-[2px] text-white/60 sm:block">
        {t("destinationsHero.bottomTitle")}
      </span>

      <div className="flex flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[1.5px] text-white/60 sm:text-[10px]">

        <span>{t("destinationsHero.countries.kenya")}</span>

        <span className="text-[#C8A94C]">•</span>

        <span>{t("destinationsHero.countries.tanzania")}</span>

        <span className="text-[#C8A94C]">•</span>

        <span>{t("destinationsHero.countries.uganda")}</span>

        <span className="text-[#C8A94C]">•</span>

        <span>{t("destinationsHero.countries.rwanda")}</span>

      </div>

    </div>

  </div>

</section>

{/* ================= Kenya Safari Destination ================= */}

<section
  id="kenya-safari"
  className="relative overflow-hidden bg-white py-32"
>
  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* ================= HEADER ================= */}

    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        {t("kenyaSafari.badge")}
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
        {t("kenyaSafari.title")}

        <span className="mt-2 block text-[#C8A94C]">
          {t("kenyaSafari.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">
        {t("kenyaSafari.description")}
      </p>

    </div>

    {/* ================= DESTINATIONS ================= */}

    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          image: amboseli,
          title: t("kenyaSafari.destinations.amboseli.title"),
          description: t("kenyaSafari.destinations.amboseli.description"),
          alt: t("kenyaSafari.destinations.amboseli.alt"),
        },
        {
          image: naivasha,
          title: t("kenyaSafari.destinations.naivasha.title"),
          description: t("kenyaSafari.destinations.naivasha.description"),
          alt: t("kenyaSafari.destinations.naivasha.alt"),
        },
        {
          image: nakuru,
          title: t("kenyaSafari.destinations.nakuru.title"),
          description: t("kenyaSafari.destinations.nakuru.description"),
          alt: t("kenyaSafari.destinations.nakuru.alt"),
        },
        {
          image: Wilderbeast,
          title: t("kenyaSafari.destinations.mara.title"),
          description: t("kenyaSafari.destinations.mara.description"),
          alt: t("kenyaSafari.destinations.mara.alt"),
        },
      ].map((destination, index) => (

        <div
          key={index}
          className="group overflow-hidden rounded-[35px]"
        >

          <img
            src={destination.image}
            alt={destination.alt}
            className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
          />

          <div className="bg-white p-6 text-center">

            <h3 className="text-2xl font-bold">
              {destination.title}
            </h3>

            <p className="mt-2 text-gray-600">
              {destination.description}
            </p>

          </div>

        </div>

      ))}

    </div>

    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Details */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          {t("kenyaSafari.details.title")}
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>{t("kenyaSafari.details.durationLabel")}:</strong>{" "}
            {t("kenyaSafari.details.duration")}
          </p>

          <p>
            <strong>{t("kenyaSafari.details.routeLabel")}:</strong>{" "}
            {t("kenyaSafari.details.route")}
          </p>

          <p>
            <strong>{t("kenyaSafari.details.transportLabel")}:</strong>{" "}
            {t("kenyaSafari.details.transport")}
          </p>

          <p>
            <strong>{t("kenyaSafari.details.bestForLabel")}:</strong>{" "}
            {t("kenyaSafari.details.bestFor")}
          </p>

          <p>
            <strong>{t("kenyaSafari.details.highlightsLabel")}:</strong>{" "}
            {t("kenyaSafari.details.highlights")}
          </p>

        </div>

      </div>

      {/* Itinerary */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("kenyaSafari.itinerary.title")}
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            t("kenyaSafari.itinerary.days.day1"),
            t("kenyaSafari.itinerary.days.day2"),
            t("kenyaSafari.itinerary.days.day3"),
            t("kenyaSafari.itinerary.days.day4"),
            t("kenyaSafari.itinerary.days.day5"),
            t("kenyaSafari.itinerary.days.day6"),
            t("kenyaSafari.itinerary.days.day7"),
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl bg-white p-5"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                {index + 1}
              </div>

              <p className="font-semibold text-gray-700">
                {day}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* ================= PRICING ================= */}

    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        {t("kenyaSafari.pricing.title")}
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[
          t("kenyaSafari.pricing.options.one"),
          t("kenyaSafari.pricing.options.two"),
          t("kenyaSafari.pricing.options.threeFour"),
          t("kenyaSafari.pricing.options.fiveSix"),
          t("kenyaSafari.pricing.options.sevenPlus"),
        ].map((price, index) => (

          <div
            key={index}
            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm"
          >
            <p className="whitespace-pre-line text-xl font-bold">
              {price}
            </p>
          </div>

        ))}

      </div>

    </div>

    {/* ================= INCLUDED ================= */}

    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        {t("kenyaSafari.included.title")}
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          t("kenyaSafari.included.items.accommodation"),
          t("kenyaSafari.included.items.vehicle"),
          t("kenyaSafari.included.items.guide"),
          t("kenyaSafari.included.items.parkFees"),
          t("kenyaSafari.included.items.meals"),
          t("kenyaSafari.included.items.gameDrives"),
          t("kenyaSafari.included.items.boatRide"),
          t("kenyaSafari.included.items.walkingSafari"),
          t("kenyaSafari.included.items.water"),
          t("kenyaSafari.included.items.transfers"),
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-6 text-center shadow-lg"
          >
            <p className="font-semibold text-gray-700">
              ✓ {item}
            </p>
          </div>

        ))}

      </div>

    </div>

    {/* ================= CLOSING ================= */}

    <div className="mt-20 text-center">

      <p className="text-xl font-bold text-emerald-700">
        Curious Safaris
      </p>

      <p className="mt-3 text-2xl font-black text-gray-900 md:text-3xl">
        {t("kenyaSafari.closing")}
      </p>

    </div>

    {/* ================= FINAL CTA ================= */}

    <div className="mt-20 rounded-[40px] bg-emerald-700 px-8 py-16 text-center text-white">

      <p className="text-sm font-bold uppercase tracking-[4px] text-emerald-100">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-4xl font-black md:text-5xl">
        {t("kenyaSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
        {t("kenyaSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Kenya%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("kenyaSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>

    {/* ================= SAFARI VIDEO ================= */}

    <div className="mt-10 sm:mt-16">

      <div className="mx-auto max-w-5xl">

        {/* Video Heading */}

        <div className="mb-6 text-center sm:mb-8">

          <span className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:text-xs sm:tracking-[4px]">
            {t("kenyaSafari.video.badge")}
          </span>

          <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
            {t("kenyaSafari.video.title")}
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            {t("kenyaSafari.video.description")}
          </p>

        </div>

        {/* Video */}

        <div className="group relative overflow-hidden rounded-[28px] bg-[#0A1A13] p-2 shadow-2xl sm:rounded-[40px] sm:p-3">

          <div className="pointer-events-none absolute -inset-1 animate-pulse rounded-[30px] bg-emerald-500/20 blur-xl sm:rounded-[42px]" />

          <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black sm:rounded-[32px]">

            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/B_ePgga2YO4?rel=0&modestbranding=1"
              title={t("kenyaSafari.video.iframeTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/10 sm:rounded-[32px]" />

          </div>

        </div>

        {/* YouTube Button */}

        <div className="mt-5 text-center sm:mt-6">

          <a
            href="https://youtu.be/B_ePgga2YO4?si=f-u0z2Z2QkOQ4W8a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-500 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-emerald-700/30"
          >
            {t("kenyaSafari.video.youtubeButton")}
            <span className="text-base">↗</span>
          </a>

        </div>

      </div>

    </div>

  </div>
</section>


{/* ================= Tanzania Safari Destination ================= */}
<section
  id="tanzania-safari"
  className="relative overflow-hidden bg-white py-32"
>
  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}
    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        {t("tanzaniaSafari.badge")}
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
        {t("tanzaniaSafari.title")}

        <span className="mt-2 block text-[#C8A94C]">
          {t("tanzaniaSafari.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">
        {t("tanzaniaSafari.description")}
      </p>

    </div>

    {/* Destination Images */}
    <div className="mt-20 grid gap-6 md:grid-cols-3">

      {/* Tarangire */}
      <div className="group overflow-hidden rounded-[35px]">

        <img
          src="https://www.flightsafaris.com/resources/destinations/tarangire-national-park.jpg"
          alt={t("tanzaniaSafari.destinations.tarangire.alt")}
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("tanzaniaSafari.destinations.tarangire.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("tanzaniaSafari.destinations.tarangire.description")}
          </p>

        </div>

      </div>

      {/* Serengeti */}
      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={serengeti}
          alt={t("tanzaniaSafari.destinations.serengeti.alt")}
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("tanzaniaSafari.destinations.serengeti.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("tanzaniaSafari.destinations.serengeti.description")}
          </p>

        </div>

      </div>

      {/* Ngorongoro */}
      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={ngorongoro}
          alt={t("tanzaniaSafari.destinations.ngorongoro.alt")}
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("tanzaniaSafari.destinations.ngorongoro.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("tanzaniaSafari.destinations.ngorongoro.description")}
          </p>

        </div>

      </div>

    </div>

    {/* Safari Details */}
    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Details */}
      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          {t("tanzaniaSafari.details.title")}
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>
              {t("tanzaniaSafari.details.durationLabel")}:
            </strong>{" "}
            {t("tanzaniaSafari.details.duration")}
          </p>

          <p>
            <strong>
              {t("tanzaniaSafari.details.routeLabel")}:
            </strong>{" "}
            {t("tanzaniaSafari.details.route")}
          </p>

          <p>
            <strong>
              {t("tanzaniaSafari.details.transportLabel")}:
            </strong>{" "}
            {t("tanzaniaSafari.details.transport")}
          </p>

          <p>
            <strong>
              {t("tanzaniaSafari.details.highlightsLabel")}:
            </strong>{" "}
            {t("tanzaniaSafari.details.highlights")}
          </p>

        </div>

      </div>

      {/* Itinerary */}
      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("tanzaniaSafari.itinerary.title")}
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            "day1",
            "day2",
            "day3",
            "day4",
            "day5",
            "day6",
            "day7",
          ].map((day, index) => (

            <div
              key={day}
              className="flex items-center gap-4 rounded-2xl bg-white p-5"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                {index + 1}
              </div>

              <p className="font-semibold text-gray-700">
                {t(`tanzaniaSafari.itinerary.${day}`)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* Pricing */}
    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        {t("tanzaniaSafari.pricing.title")}
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[
          "person1",
          "people2",
          "people3to4",
          "people5to6",
          "people7plus",
        ].map((price) => (

          <div
            key={price}
            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm"
          >

            <p className="whitespace-pre-line text-xl font-bold">
              {t(`tanzaniaSafari.pricing.${price}`)}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* Included */}
    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        {t("tanzaniaSafari.included.title")}
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          "accommodation",
          "vehicle",
          "guide",
          "parkFees",
          "meals",
          "gameDrives",
          "water",
          "transfers",
        ].map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-white p-6 text-center shadow-lg"
          >

            <p className="font-semibold text-gray-700">
              ✓ {t(`tanzaniaSafari.included.items.${item}`)}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* Closing */}
    <div className="mt-20 text-center">

      <p className="text-xl font-bold text-emerald-700">
        Curious Safaris
      </p>

      <p className="mt-3 text-2xl font-black text-gray-900 md:text-3xl">
        {t("tanzaniaSafari.closing")}
      </p>

    </div>

    {/* Final CTA */}
    <div className="mt-20 rounded-[40px] bg-emerald-700 px-8 py-16 text-center text-white">

      <p className="text-sm font-bold uppercase tracking-[4px] text-emerald-100">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-4xl font-black md:text-5xl">
        {t("tanzaniaSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
        {t("tanzaniaSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Tanzania%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("tanzaniaSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>
{/* ================= YOUTUBE VIDEO ================= */}

<div className="mt-10 flex justify-center sm:mt-12">
  <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[#F8F6F1] p-2 shadow-lg">
    <div className="aspect-video overflow-hidden rounded-xl">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/fnW33J_7xSc"
        title="Tanzania Safari - Curious Safaris"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>
  </div>

</section>

{/* ================= Uganda Safari Destination ================= */}

<section
  id="uganda-safari"
  className="relative overflow-hidden bg-white py-32"
>
  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}
    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        {t("ugandaSafari.badge")}
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
        {t("ugandaSafari.title")}

        <span className="mt-2 block text-[#C8A94C]">
          {t("ugandaSafari.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">
        {t("ugandaSafari.description")}
      </p>

    </div>

    {/* Destination Images */}
    <div className="mt-20 grid gap-6 md:grid-cols-3">

      {/* Kibale */}
      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://cdn.generationvoyage.fr/2024/01/babobab-elephant-Tarangire.jpeg"
            alt={t("ugandaSafari.destinations.kibale.alt")}
            className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
          />
        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("ugandaSafari.destinations.kibale.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("ugandaSafari.destinations.kibale.description")}
          </p>

        </div>

      </div>

      {/* Queen Elizabeth */}
      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/h/e/herd_of_elephants_drinking_water_in_queen_elizabeth_national_park_uganda_1_1.jpg"
            alt={t("ugandaSafari.destinations.queenElizabeth.alt")}
            className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
          />
        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("ugandaSafari.destinations.queenElizabeth.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("ugandaSafari.destinations.queenElizabeth.description")}
          </p>

        </div>

      </div>

      {/* Bwindi */}
      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"
            alt={t("ugandaSafari.destinations.bwindi.alt")}
            className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
          />
        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("ugandaSafari.destinations.bwindi.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("ugandaSafari.destinations.bwindi.description")}
          </p>

        </div>

      </div>

    </div>

    {/* Safari Details */}
    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Details */}
      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          {t("ugandaSafari.details.title")}
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>
              {t("ugandaSafari.details.durationLabel")}:
            </strong>{" "}
            {t("ugandaSafari.details.duration")}
          </p>

          <p>
            <strong>
              {t("ugandaSafari.details.routeLabel")}:
            </strong>{" "}
            {t("ugandaSafari.details.route")}
          </p>

          <p>
            <strong>
              {t("ugandaSafari.details.transportLabel")}:
            </strong>{" "}
            {t("ugandaSafari.details.transport")}
          </p>

          <p>
            <strong>
              {t("ugandaSafari.details.highlightsLabel")}:
            </strong>{" "}
            {t("ugandaSafari.details.highlights")}
          </p>

        </div>

      </div>

      {/* Itinerary */}
      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("ugandaSafari.itinerary.title")}
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            "day1",
            "day2",
            "day3",
            "day4",
            "day5",
            "day6",
            "day7",
          ].map((day, index) => (

            <div
              key={day}
              className="flex items-center gap-4 rounded-2xl bg-white p-5"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                {index + 1}
              </div>

              <p className="font-semibold text-gray-700">
                {t(`ugandaSafari.itinerary.${day}`)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* Pricing */}
    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        {t("ugandaSafari.pricing.title")}
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[
          "person1",
          "people2",
          "people3to4",
          "people5to6",
          "people7plus",
        ].map((price) => (

          <div
            key={price}
            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15"
          >

            <p className="text-sm font-medium text-white/60">
              {t(`ugandaSafari.pricing.${price}.group`)}
            </p>

            <p className="mt-3 text-2xl font-black">
              {t(`ugandaSafari.pricing.${price}.price`)}
            </p>

            <p className="mt-1 text-sm text-white/50">
              {t("ugandaSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* Included */}
    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        {t("ugandaSafari.included.title")}
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          "accommodation",
          "vehicle",
          "guide",
          "chimpanzeePermit",
          "gorillaPermit",
          "parkFees",
          "gameDrives",
          "kazingaBoat",
          "meals",
          "water",
          "pickup",
          "dropoff",
        ].map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1"
          >

            <p className="font-semibold text-gray-700">

              <span className="mr-2 text-emerald-700">
                ✓
              </span>

              {t(`ugandaSafari.included.items.${item}`)}

            </p>

          </div>

        ))}

      </div>

    </div>

    {/* Final CTA */}
    <div className="mt-20 rounded-[40px] bg-emerald-700 px-8 py-16 text-center text-white">

      <p className="text-sm font-bold uppercase tracking-[4px] text-emerald-100">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-4xl font-black md:text-5xl">
        {t("ugandaSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
        {t("ugandaSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Uganda%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("ugandaSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>

  </div>

</section>

{/* ================= Rwanda Safari Destination ================= */}
<section id="rwanda-safari" className="relative overflow-hidden bg-white py-32">

  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}
    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        {t("rwanda.badge")}
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
        {t("rwanda.title")}
        <span className="mt-2 block text-[#C8A94C]">
          {t("rwanda.subtitle")}
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">
        {t("rwanda.description")}
      </p>

    </div>

    {/* Destination Images */}
    <div className="mt-20 grid gap-6 md:grid-cols-3">

      {/* Kigali */}
      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://www.diastate.com/images/city-kigali.jpg"
            alt={t("rwanda.destinations.kigali.alt")}
            className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
          />
        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("rwanda.destinations.kigali.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("rwanda.destinations.kigali.description")}
          </p>

        </div>

      </div>

      {/* Akagera */}
      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://media0.faz.net/image/29d0684205d2/w1656h1071x38y52/202010/1.7074603/sie-sind-zurueck.webp"
            alt={t("rwanda.destinations.akagera.alt")}
            className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
          />
        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("rwanda.destinations.akagera.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("rwanda.destinations.akagera.description")}
          </p>

        </div>

      </div>

      {/* Volcanoes */}
      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://rezkit-tour-images.b-cdn.net/01h7ywwd7at70t98wdj69emng5/images/01JTNC6WC8J69RG7BZQN8KS4ZF.jpg?aspect_ratio=1500%3A1126.2975778547"
            alt={t("rwanda.destinations.volcanoes.alt")}
            className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
          />
        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            {t("rwanda.destinations.volcanoes.title")}
          </h3>

          <p className="mt-2 text-gray-600">
            {t("rwanda.destinations.volcanoes.description")}
          </p>

        </div>

      </div>

    </div>

    {/* Safari Details */}
    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Details */}
      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          {t("rwanda.details.title")}
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>{t("rwanda.details.durationLabel")}</strong>{" "}
            {t("rwanda.details.duration")}
          </p>

          <p>
            <strong>{t("rwanda.details.routeLabel")}</strong>{" "}
            {t("rwanda.details.route")}
          </p>

          <p>
            <strong>{t("rwanda.details.transportLabel")}</strong>{" "}
            {t("rwanda.details.transport")}
          </p>

          <p>
            <strong>{t("rwanda.details.highlightsLabel")}</strong>{" "}
            {t("rwanda.details.highlights")}
          </p>

        </div>

      </div>

      {/* Itinerary */}
      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("rwanda.itinerary.title")}
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            "rwanda.itinerary.days.day1",
            "rwanda.itinerary.days.day2",
            "rwanda.itinerary.days.day3",
            "rwanda.itinerary.days.day4",
            "rwanda.itinerary.days.day5",
            "rwanda.itinerary.days.day6",
            "rwanda.itinerary.days.day7",
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-4 rounded-2xl bg-white p-5"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                {index + 1}
              </div>

              <p className="font-semibold text-gray-700">
                {t(day)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* Pricing */}
    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        {t("rwanda.pricing.title")}
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[
          {
            group: "rwanda.pricing.options.one.group",
            price: "USD 3,100",
          },
          {
            group: "rwanda.pricing.options.two.group",
            price: "USD 2,350",
          },
          {
            group: "rwanda.pricing.options.threeFour.group",
            price: "USD 2,050",
          },
          {
            group: "rwanda.pricing.options.fiveSix.group",
            price: "USD 1,850",
          },
          {
            group: "rwanda.pricing.options.sevenPlus.group",
            price: "USD 1,700",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15"
          >

            <p className="text-sm font-medium text-white/60">
              {t(item.group)}
            </p>

            <p className="mt-3 text-2xl font-black">
              {item.price}
            </p>

            <p className="mt-1 text-sm text-white/50">
              {t("rwanda.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* What's Included */}
    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        {t("rwanda.included.title")}
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          "rwanda.included.items.accommodation",
          "rwanda.included.items.vehicle",
          "rwanda.included.items.guide",
          "rwanda.included.items.gorillaPermit",
          "rwanda.included.items.goldenMonkey",
          "rwanda.included.items.akageraFees",
          "rwanda.included.items.gameDrives",
          "rwanda.included.items.ihemaBoat",
          "rwanda.included.items.meals",
          "rwanda.included.items.water",
          "rwanda.included.items.pickup",
          "rwanda.included.items.dropoff",
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1"
          >

            <p className="font-semibold text-gray-700">

              <span className="mr-2 text-emerald-700">
                ✓
              </span>

              {t(item)}

            </p>

          </div>

        ))}

      </div>

    </div>

    {/* Final CTA */}
    <div className="mt-20 rounded-[40px] bg-emerald-700 px-8 py-16 text-center text-white">

      <p className="text-sm font-bold uppercase tracking-[4px] text-emerald-100">
        {t("rwanda.cta.brand")}
      </p>

      <h3 className="mt-4 text-4xl font-black md:text-5xl">
        {t("rwanda.cta.title")}
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
        {t("rwanda.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Rwanda%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("rwanda.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>

  </div>

</section>

{/* ================= Ethiopia Adventure ================= */}
<section id="ethiopia-safari" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("ethiopia.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        {t("ethiopia.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("ethiopia.subtitle")}
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("ethiopia.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Lalibela */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"
            alt={t("ethiopia.destinations.lalibela.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("ethiopia.destinations.lalibela.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("ethiopia.destinations.lalibela.description")}
          </p>

        </div>

      </div>


      {/* Gondar */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1600172454284-934feca24ccd?auto=format&fit=crop&w=1200&q=85"
            alt={t("ethiopia.destinations.gondar.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("ethiopia.destinations.gondar.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("ethiopia.destinations.gondar.description")}
          </p>

        </div>

      </div>


      {/* Simien Mountains */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85"
            alt={t("ethiopia.destinations.simien.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("ethiopia.destinations.simien.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("ethiopia.destinations.simien.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("ethiopia.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("ethiopia.details.durationLabel")}</strong>{" "}
            {t("ethiopia.details.duration")}
          </p>

          <p>
            <strong>{t("ethiopia.details.routeLabel")}</strong>{" "}
            {t("ethiopia.details.route")}
          </p>

          <p>
            <strong>{t("ethiopia.details.transportLabel")}</strong>{" "}
            {t("ethiopia.details.transport")}
          </p>

          <p>
            <strong>{t("ethiopia.details.highlightsLabel")}</strong>{" "}
            {t("ethiopia.details.highlights")}
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("ethiopia.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "ethiopia.itinerary.days.day1",
            "ethiopia.itinerary.days.day2",
            "ethiopia.itinerary.days.day3",
            "ethiopia.itinerary.days.day4",
            "ethiopia.itinerary.days.day5",
            "ethiopia.itinerary.days.day6",
            "ethiopia.itinerary.days.day7",
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {t(day)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("ethiopia.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("ethiopia.pricing.description")}
      </p>


      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "ethiopia.pricing.options.one",
            price: "USD 2,400",
          },
          {
            group: "ethiopia.pricing.options.two",
            price: "USD 1,750",
          },
          {
            group: "ethiopia.pricing.options.threeFour",
            price: "USD 1,500",
          },
          {
            group: "ethiopia.pricing.options.fiveSix",
            price: "USD 1,350",
          },
          {
            group: "ethiopia.pricing.options.sevenPlus",
            price: "USD 1,250",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {t(item.group)}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("ethiopia.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("ethiopia.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "ethiopia.included.items.accommodation",
          "ethiopia.included.items.transportation",
          "ethiopia.included.items.flights",
          "ethiopia.included.items.guide",
          "ethiopia.included.items.entranceFees",
          "ethiopia.included.items.simienActivities",
          "ethiopia.included.items.meals",
          "ethiopia.included.items.airportTransfers",
          "ethiopia.included.items.water",
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {t(item)}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("ethiopia.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("ethiopia.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("ethiopia.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("ethiopia.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>

  </div>

</section>

{/* ================= Congo Adventure ================= */}
<section
  id="congo-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("congo.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("congo.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("congo.subtitle")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("congo.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Goma */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85"
            alt={t("congo.destinations.goma.title")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("congo.destinations.goma.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("congo.destinations.goma.description")}
          </p>

        </div>

      </div>


      {/* Virunga */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
            alt={t("congo.destinations.virunga.title")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("congo.destinations.virunga.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("congo.destinations.virunga.description")}
          </p>

        </div>

      </div>


      {/* Kahuzi-Biéga */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
            alt={t("congo.destinations.kahuzi.title")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("congo.destinations.kahuzi.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("congo.destinations.kahuzi.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("congo.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("congo.details.duration")}:</strong>{" "}
            7 {t("common.days")} / 6 {t("common.nights")}
          </p>

          <p>
            <strong>{t("congo.details.route")}:</strong>{" "}
            Kigali – Goma – Virunga – Kahuzi-Biéga – Kigali
          </p>

          <p>
            <strong>{t("congo.details.transport")}:</strong>{" "}
            {t("congo.details.transportValue")}
          </p>

          <p>
            <strong>{t("congo.details.highlights")}:</strong>{" "}
            {t("congo.details.highlightsValue")}
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("congo.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            t("congo.itinerary.day1"),
            t("congo.itinerary.day2"),
            t("congo.itinerary.day3"),
            t("congo.itinerary.day4"),
            t("congo.itinerary.day5"),
            t("congo.itinerary.day6"),
            t("congo.itinerary.day7"),
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {day}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("congo.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("congo.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: t("congo.pricing.one"),
            price: "USD 3,500",
          },
          {
            group: t("congo.pricing.two"),
            price: "USD 2,600",
          },
          {
            group: t("congo.pricing.threeFour"),
            price: "USD 2,300",
          },
          {
            group: t("congo.pricing.fiveSix"),
            price: "USD 2,100",
          },
          {
            group: t("congo.pricing.sevenPlus"),
            price: "USD 1,950",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("common.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("congo.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          t("congo.included.item1"),
          t("congo.included.item2"),
          t("congo.included.item3"),
          t("congo.included.item4"),
          t("congo.included.item5"),
          t("congo.included.item6"),
          t("congo.included.item7"),
          t("congo.included.item8"),
          t("congo.included.item9"),
          t("congo.included.item10"),
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {item}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= IMPORTANT NOTICE ================= */}

    <div className="mt-12 rounded-[30px] border border-amber-200 bg-amber-50 p-6 sm:mt-16 sm:rounded-[35px] sm:p-8">

      <div className="flex items-start gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg font-black text-amber-700">
          !
        </div>

        <div>

          <h3 className="text-lg font-black text-gray-900 sm:text-xl">
            {t("congo.notice.title")}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
            {t("congo.notice.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("congo.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("congo.cta.description")}
      </p>

      <button
        className="mt-7 w-full rounded-2xl bg-white px-7 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mt-8 sm:w-auto sm:px-8"
      >
        {t("congo.cta.button")}
      </button>

    </div>

  </div>

</section>
{/* ================= Zambia Safari Destination ================= */}
<section
  id="zambia-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("zambiaSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("zambiaSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("zambiaSafari.subtitle")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("zambiaSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}
    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Victoria Falls */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={victoria1}
            alt={t("zambiaSafari.destinations.victoriaFalls.title")}
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("zambiaSafari.destinations.victoriaFalls.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("zambiaSafari.destinations.victoriaFalls.description")}
          </p>

        </div>
      </div>


      {/* Zambezi */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={zambezi}
            alt={t("zambiaSafari.destinations.zambezi.title")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("zambiaSafari.destinations.zambezi.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("zambiaSafari.destinations.zambezi.description")}
          </p>

        </div>
      </div>


      {/* South Luangwa */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={luangwa}
            alt={t("zambiaSafari.destinations.southLuangwa.title")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("zambiaSafari.destinations.southLuangwa.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("zambiaSafari.destinations.southLuangwa.description")}
          </p>

        </div>
      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}
    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("zambiaSafari.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("zambiaSafari.details.duration")}:</strong>{" "}
            {t("zambiaSafari.details.durationValue")}
          </p>

          <p>
            <strong>{t("zambiaSafari.details.route")}:</strong>{" "}
            {t("zambiaSafari.details.routeValue")}
          </p>

          <p>
            <strong>{t("zambiaSafari.details.transport")}:</strong>{" "}
            {t("zambiaSafari.details.transportValue")}
          </p>

          <p>
            <strong>{t("zambiaSafari.details.highlights")}:</strong>{" "}
            {t("zambiaSafari.details.highlightsValue")}
          </p>

        </div>
      </div>


      {/* Itinerary */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("zambiaSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {t("zambiaSafari.itinerary.days", { returnObjects: true }).map(
            (day, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                  {index + 1}
                </div>

                <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                  {day}
                </p>

              </div>
            )
          )}

        </div>
      </div>

    </div>


    {/* ================= PRICING ================= */}
    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("zambiaSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("zambiaSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          ["one", "USD 3,000"],
          ["two", "USD 2,200"],
          ["threeFour", "USD 1,900"],
          ["fiveSix", "USD 1,700"],
          ["sevenPlus", "USD 1,550"],
        ].map(([group, price], index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {t(`zambiaSafari.pricing.groups.${group}`)}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("zambiaSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>
    </div>


    {/* ================= INCLUDED ================= */}
    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("zambiaSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {t("zambiaSafari.included.items", { returnObjects: true }).map(
          (item, index) => (

            <div
              key={index}
              className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
            >

              <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

                <span className="mr-2 font-black text-emerald-700">
                  ✓
                </span>

                {item}

              </p>

            </div>

          )
        )}

      </div>
    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}
    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          💦
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("zambiaSafari.experienceHighlights.victoriaFalls.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("zambiaSafari.experienceHighlights.victoriaFalls.description")}
        </p>

      </div>


      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐆
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("zambiaSafari.experienceHighlights.southLuangwa.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("zambiaSafari.experienceHighlights.southLuangwa.description")}
        </p>

      </div>


      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🚶
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("zambiaSafari.experienceHighlights.walkingSafari.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("zambiaSafari.experienceHighlights.walkingSafari.description")}
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}
    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("zambiaSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("zambiaSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("zambiaSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Zambia%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("zambiaSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>


    {/* ================= SAFARI VIDEO ================= */}
    <div className="mt-10 sm:mt-16">

      <div className="mx-auto max-w-5xl">

        <div className="mb-6 text-center sm:mb-8">

          <span className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:text-xs sm:tracking-[4px]">
            {t("zambiaSafari.video.badge")}
          </span>

          <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
            {t("zambiaSafari.video.title")}
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            {t("zambiaSafari.video.description")}
          </p>

        </div>


        <div className="group relative overflow-hidden rounded-[28px] bg-[#0A1A13] p-2 shadow-2xl sm:rounded-[40px] sm:p-3">

          <div className="pointer-events-none absolute -inset-1 animate-pulse rounded-[30px] bg-emerald-500/20 blur-xl sm:rounded-[42px]" />

          <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black sm:rounded-[32px]">

            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/Qyl7C0MGXJ4?rel=0&modestbranding=1"
              title="Curious Safaris Zambia Safari"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/10 sm:rounded-[32px]" />

          </div>
        </div>


        <div className="mt-5 text-center sm:mt-6">

          <a
            href="https://youtu.be/Qyl7C0MGXJ4?si=v1hm09D6glBBuYHP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-500 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-emerald-700/30"
          >
            {t("zambiaSafari.video.button")}
            <span className="text-base">↗</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>
{/* ================= Zimbabwe Safari Destination ================= */}
<section
  id="zimbabwe-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* ================= BACKGROUND EFFECTS ================= */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("zimbabweSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("zimbabweSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("zimbabweSafari.subtitle")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("zimbabweSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}
    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Victoria Falls */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={victoria1}
            alt={t("zimbabweSafari.destinations.victoriaFalls.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("zimbabweSafari.destinations.victoriaFalls.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("zimbabweSafari.destinations.victoriaFalls.description")}
          </p>
        </div>

      </div>


      {/* Hwange */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85"
            alt={t("zimbabweSafari.destinations.hwange.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("zimbabweSafari.destinations.hwange.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("zimbabweSafari.destinations.hwange.description")}
          </p>
        </div>

      </div>


      {/* Matobo */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=85"
            alt={t("zimbabweSafari.destinations.matobo.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("zimbabweSafari.destinations.matobo.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("zimbabweSafari.destinations.matobo.description")}
          </p>
        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}
    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("zimbabweSafari.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>
              {t("zimbabweSafari.details.duration")}:
            </strong>{" "}
            {t("zimbabweSafari.details.durationValue")}
          </p>

          <p>
            <strong>
              {t("zimbabweSafari.details.route")}:
            </strong>{" "}
            {t("zimbabweSafari.details.routeValue")}
          </p>

          <p>
            <strong>
              {t("zimbabweSafari.details.transport")}:
            </strong>{" "}
            {t("zimbabweSafari.details.transportValue")}
          </p>

          <p>
            <strong>
              {t("zimbabweSafari.details.highlights")}:
            </strong>{" "}
            {t("zimbabweSafari.details.highlightsValue")}
          </p>

        </div>

      </div>


      {/* Itinerary */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("zimbabweSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {t("zimbabweSafari.itinerary.days", {
            returnObjects: true,
          }).map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {day}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}
    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("zimbabweSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("zimbabweSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: t("zimbabweSafari.pricing.groups.one"),
            price: t("zimbabweSafari.pricing.prices.one"),
          },
          {
            group: t("zimbabweSafari.pricing.groups.two"),
            price: t("zimbabweSafari.pricing.prices.two"),
          },
          {
            group: t("zimbabweSafari.pricing.groups.threeFour"),
            price: t("zimbabweSafari.pricing.prices.threeFour"),
          },
          {
            group: t("zimbabweSafari.pricing.groups.fiveSix"),
            price: t("zimbabweSafari.pricing.prices.fiveSix"),
          },
          {
            group: t("zimbabweSafari.pricing.groups.sevenPlus"),
            price: t("zimbabweSafari.pricing.prices.sevenPlus"),
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("zimbabweSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}
    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("zimbabweSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {t("zimbabweSafari.included.items", {
          returnObjects: true,
        }).map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {item}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}
    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      {/* Victoria Falls */}
      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          💦
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("zimbabweSafari.experienceHighlights.victoriaFalls.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("zimbabweSafari.experienceHighlights.victoriaFalls.description")}
        </p>

      </div>


      {/* Hwange */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐘
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("zimbabweSafari.experienceHighlights.hwangeWildlife.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("zimbabweSafari.experienceHighlights.hwangeWildlife.description")}
        </p>

      </div>


      {/* Matobo */}
      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🦏
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("zimbabweSafari.experienceHighlights.matoboHills.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("zimbabweSafari.experienceHighlights.matoboHills.description")}
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}
    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("zimbabweSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("zimbabweSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("zimbabweSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("zimbabweSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>
{/* ================= YOUTUBE VIDEO ================= */}

<div className="mt-10 flex justify-center sm:mt-12">
  <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[#F8F6F1] p-2 shadow-lg">
    <div className="aspect-video overflow-hidden rounded-xl">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/g9HYO35HNn4"
        title="Zimbabwe Safari - Curious Safaris"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>
  </div>
</section>

{/* ================= Namibia Adventure ================= */}
<section
  id="namibia-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("namibiaSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        {t("namibiaSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("namibiaSafari.titleHighlight")}
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("namibiaSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Sossusvlei */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85"
            alt={t("namibiaSafari.destinations.sossusvlei.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("namibiaSafari.destinations.sossusvlei.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("namibiaSafari.destinations.sossusvlei.description")}
          </p>

        </div>

      </div>


      {/* Swakopmund */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
            alt={t("namibiaSafari.destinations.swakopmund.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("namibiaSafari.destinations.swakopmund.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("namibiaSafari.destinations.swakopmund.description")}
          </p>

        </div>

      </div>


      {/* Etosha */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={etoshapark}
            alt={t("namibiaSafari.destinations.etosha.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("namibiaSafari.destinations.etosha.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("namibiaSafari.destinations.etosha.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("namibiaSafari.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>
              {t("namibiaSafari.details.durationLabel")}:
            </strong>{" "}
            {t("namibiaSafari.details.duration")}
          </p>

          <p>
            <strong>
              {t("namibiaSafari.details.routeLabel")}:
            </strong>{" "}
            {t("namibiaSafari.details.route")}
          </p>

          <p>
            <strong>
              {t("namibiaSafari.details.transportLabel")}:
            </strong>{" "}
            {t("namibiaSafari.details.transport")}
          </p>

          <p>
            <strong>
              {t("namibiaSafari.details.highlightsLabel")}:
            </strong>{" "}
            {t("namibiaSafari.details.highlights")}
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("namibiaSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {t("namibiaSafari.itinerary.days", {
            returnObjects: true,
          }).map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {day}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("namibiaSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("namibiaSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: t("namibiaSafari.pricing.groups.one"),
            price: t("namibiaSafari.pricing.prices.one"),
          },
          {
            group: t("namibiaSafari.pricing.groups.two"),
            price: t("namibiaSafari.pricing.prices.two"),
          },
          {
            group: t("namibiaSafari.pricing.groups.threeFour"),
            price: t("namibiaSafari.pricing.prices.threeFour"),
          },
          {
            group: t("namibiaSafari.pricing.groups.fiveSix"),
            price: t("namibiaSafari.pricing.prices.fiveSix"),
          },
          {
            group: t("namibiaSafari.pricing.groups.sevenPlus"),
            price: t("namibiaSafari.pricing.prices.sevenPlus"),
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("namibiaSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("namibiaSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {t("namibiaSafari.included.items", {
          returnObjects: true,
        }).map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {item}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      {/* Namib Desert */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏜️
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("namibiaSafari.experienceHighlights.namibDesert.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("namibiaSafari.experienceHighlights.namibDesert.description")}
        </p>

      </div>


      {/* Coastal Wonders */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌊
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("namibiaSafari.experienceHighlights.coastalWonders.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("namibiaSafari.experienceHighlights.coastalWonders.description")}
        </p>

      </div>


      {/* Etosha Wildlife */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🦁
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("namibiaSafari.experienceHighlights.etoshaWildlife.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("namibiaSafari.experienceHighlights.etoshaWildlife.description")}
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("namibiaSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("namibiaSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("namibiaSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("namibiaSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>
{/* ================= YOUTUBE VIDEO ================= */}

<div className="mt-10 flex justify-center sm:mt-12">
  <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[#F8F6F1] p-2 shadow-lg">
    <div className="aspect-video overflow-hidden rounded-xl">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/PwNYmi5hkXQ"
        title="Namibia Safari - Curious Safaris"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>
  </div>

</section>

{/* ================= Botswana Safari Destination ================= */}
<section
  id="botswana-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("botswanaSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("botswanaSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("botswanaSafari.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("botswanaSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Okavango Delta */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={okavango}
            alt={t("botswanaSafari.destinations.okavango.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("botswanaSafari.destinations.okavango.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("botswanaSafari.destinations.okavango.description")}
          </p>

        </div>

      </div>


      {/* Moremi */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=1200&q=85"
            alt={t("botswanaSafari.destinations.moremi.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("botswanaSafari.destinations.moremi.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("botswanaSafari.destinations.moremi.description")}
          </p>

        </div>

      </div>


      {/* Chobe */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
            alt={t("botswanaSafari.destinations.chobe.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("botswanaSafari.destinations.chobe.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("botswanaSafari.destinations.chobe.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("botswanaSafari.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("botswanaSafari.details.duration")}:</strong>{" "}
            {t("botswanaSafari.details.durationValue")}
          </p>

          <p>
            <strong>{t("botswanaSafari.details.route")}:</strong>{" "}
            {t("botswanaSafari.details.routeValue")}
          </p>

          <p>
            <strong>{t("botswanaSafari.details.transport")}:</strong>{" "}
            {t("botswanaSafari.details.transportValue")}
          </p>

          <p>
            <strong>{t("botswanaSafari.details.highlights")}:</strong>{" "}
            {t("botswanaSafari.details.highlightsValue")}
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("botswanaSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "day1",
            "day2",
            "day3",
            "day4",
            "day5",
            "day6",
            "day7",
          ].map((day, index) => (

            <div
              key={day}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {t(`botswanaSafari.itinerary.${day}`)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("botswanaSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("botswanaSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "one",
            price: "USD 3,500",
          },
          {
            group: "two",
            price: "USD 2,700",
          },
          {
            group: "threeFour",
            price: "USD 2,350",
          },
          {
            group: "fiveSix",
            price: "USD 2,150",
          },
          {
            group: "sevenPlus",
            price: "USD 1,950",
          },
        ].map((item) => (

          <div
            key={item.group}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {t(`botswanaSafari.pricing.groups.${item.group}`)}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("botswanaSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("botswanaSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "accommodation",
          "transportation",
          "guide",
          "okavango",
          "mokoro",
          "moremi",
          "chobeGameDrives",
          "chobeBoat",
          "parkFees",
          "meals",
          "water",
          "transfers",
        ].map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {t(`botswanaSafari.included.items.${item}`)}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🛶
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("botswanaSafari.experienceHighlights.okavango.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("botswanaSafari.experienceHighlights.okavango.description")}
        </p>

      </div>


      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐆
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("botswanaSafari.experienceHighlights.moremi.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("botswanaSafari.experienceHighlights.moremi.description")}
        </p>

      </div>


      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐘
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("botswanaSafari.experienceHighlights.chobe.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("botswanaSafari.experienceHighlights.chobe.description")}
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("botswanaSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("botswanaSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("botswanaSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("botswanaSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>
{/* ================= YOUTUBE VIDEO ================= */}

<div className="mt-10 flex justify-center sm:mt-12">
  <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[#F8F6F1] p-2 shadow-lg">
    <div className="aspect-video overflow-hidden rounded-xl">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/Dye-E6I7efA"
        title="Botswana Safari - Curious Safaris"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>
  </div>
</section>



{/* ================= South Africa Safari & City Adventure ================= */}
<section
  id="southafrica-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("southAfricaSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("southAfricaSafari.title")}

        <span className="mt-2 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("southAfricaSafari.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("southAfricaSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Cape Town */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85"
            alt={t("southAfricaSafari.destinations.capeTown.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("southAfricaSafari.destinations.capeTown.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("southAfricaSafari.destinations.capeTown.description")}
          </p>

        </div>

      </div>


      {/* Kruger */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={krugerpark}
            alt={t("southAfricaSafari.destinations.kruger.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("southAfricaSafari.destinations.kruger.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("southAfricaSafari.destinations.kruger.description")}
          </p>

        </div>

      </div>


      {/* Johannesburg */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=1200&q=85"
            alt={t("southAfricaSafari.destinations.johannesburg.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("southAfricaSafari.destinations.johannesburg.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("southAfricaSafari.destinations.johannesburg.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("southAfricaSafari.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("southAfricaSafari.details.durationLabel")}</strong>{" "}
            {t("southAfricaSafari.details.duration")}
          </p>

          <p>
            <strong>{t("southAfricaSafari.details.routeLabel")}</strong>{" "}
            {t("southAfricaSafari.details.route")}
          </p>

          <p>
            <strong>{t("southAfricaSafari.details.transportLabel")}</strong>{" "}
            {t("southAfricaSafari.details.transport")}
          </p>

          <p>
            <strong>{t("southAfricaSafari.details.highlightsLabel")}</strong>{" "}
            {t("southAfricaSafari.details.highlights")}
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("southAfricaSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            t("southAfricaSafari.itinerary.days.day1"),
            t("southAfricaSafari.itinerary.days.day2"),
            t("southAfricaSafari.itinerary.days.day3"),
            t("southAfricaSafari.itinerary.days.day4"),
            t("southAfricaSafari.itinerary.days.day5"),
            t("southAfricaSafari.itinerary.days.day6"),
            t("southAfricaSafari.itinerary.days.day7"),
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {day}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("southAfricaSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("southAfricaSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: t("southAfricaSafari.pricing.options.one.group"),
            price: "USD 2,600",
          },
          {
            group: t("southAfricaSafari.pricing.options.two.group"),
            price: "USD 2,000",
          },
          {
            group: t("southAfricaSafari.pricing.options.three.group"),
            price: "USD 1,700",
          },
          {
            group: t("southAfricaSafari.pricing.options.four.group"),
            price: "USD 1,550",
          },
          {
            group: t("southAfricaSafari.pricing.options.five.group"),
            price: "USD 1,400",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("southAfricaSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("southAfricaSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          t("southAfricaSafari.included.items.accommodation"),
          t("southAfricaSafari.included.items.flight"),
          t("southAfricaSafari.included.items.transport"),
          t("southAfricaSafari.included.items.guide"),
          t("southAfricaSafari.included.items.krugerFees"),
          t("southAfricaSafari.included.items.gameDrives"),
          t("southAfricaSafari.included.items.capeTown"),
          t("southAfricaSafari.included.items.johannesburg"),
          t("southAfricaSafari.included.items.meals"),
          t("southAfricaSafari.included.items.water"),
          t("southAfricaSafari.included.items.airportTransfers"),
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {item}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      {/* Cape Town */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏔️
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("southAfricaSafari.experience.capeTown.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("southAfricaSafari.experience.capeTown.description")}
        </p>

      </div>


      {/* Kruger */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🦁
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("southAfricaSafari.experience.kruger.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("southAfricaSafari.experience.kruger.description")}
        </p>

      </div>


      {/* Johannesburg */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌆
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("southAfricaSafari.experience.johannesburg.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("southAfricaSafari.experience.johannesburg.description")}
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("southAfricaSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("southAfricaSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("southAfricaSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("southAfricaSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>


    {/* ================= SAFARI VIDEO ================= */}

    <div className="mt-10 sm:mt-16">

      <div className="mx-auto max-w-5xl">

        {/* Video Heading */}

        <div className="mb-6 text-center sm:mb-8">

          <span className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:text-xs sm:tracking-[4px]">
            {t("southAfricaSafari.video.badge")}
          </span>

          <h3 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
            {t("southAfricaSafari.video.title")}
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            {t("southAfricaSafari.video.description")}
          </p>

        </div>


        {/* Animated Video Card */}

        <div className="group relative overflow-hidden rounded-[28px] bg-[#0A1A13] p-2 shadow-2xl sm:rounded-[40px] sm:p-3">

          <div className="pointer-events-none absolute -inset-1 animate-pulse rounded-[30px] bg-emerald-500/20 blur-xl sm:rounded-[42px]" />

          <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-black sm:rounded-[32px]">

            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/GpV4cUssLpE?rel=0&modestbranding=1"
              title={t("southAfricaSafari.video.iframeTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/10 sm:rounded-[32px]" />

          </div>

        </div>


        {/* Watch on YouTube */}

        <div className="mt-5 text-center sm:mt-6">

          <a
            href="https://youtu.be/GpV4cUssLpE?si=w619UcMataGt5gq1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-500 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-emerald-700/30"
          >
            {t("southAfricaSafari.video.watchButton")}
            <span className="text-base">↗</span>
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= Mozambique Beach & Wildlife Escape ================= */}
<section
  id="mozambique-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("mozambiqueSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("mozambiqueSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("mozambiqueSafari.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("mozambiqueSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Maputo */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
            alt={t("mozambiqueSafari.destinations.maputo.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("mozambiqueSafari.destinations.maputo.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("mozambiqueSafari.destinations.maputo.description")}
          </p>

        </div>

      </div>


      {/* Vilanculos */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
            alt={t("mozambiqueSafari.destinations.vilanculos.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("mozambiqueSafari.destinations.vilanculos.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("mozambiqueSafari.destinations.vilanculos.description")}
          </p>

        </div>

      </div>


      {/* Bazaruto */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
            alt={t("mozambiqueSafari.destinations.bazaruto.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("mozambiqueSafari.destinations.bazaruto.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("mozambiqueSafari.destinations.bazaruto.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= PACKAGE DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("mozambiqueSafari.packageDetails.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>
              {t("mozambiqueSafari.packageDetails.durationLabel")}
            </strong>{" "}
            {t("mozambiqueSafari.packageDetails.duration")}
          </p>

          <p>
            <strong>
              {t("mozambiqueSafari.packageDetails.routeLabel")}
            </strong>{" "}
            {t("mozambiqueSafari.packageDetails.route")}
          </p>

          <p>
            <strong>
              {t("mozambiqueSafari.packageDetails.transportLabel")}
            </strong>{" "}
            {t("mozambiqueSafari.packageDetails.transport")}
          </p>

          <p>
            <strong>
              {t("mozambiqueSafari.packageDetails.highlightsLabel")}
            </strong>{" "}
            {t("mozambiqueSafari.packageDetails.highlights")}
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("mozambiqueSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            t("mozambiqueSafari.itinerary.days.day1"),
            t("mozambiqueSafari.itinerary.days.day2"),
            t("mozambiqueSafari.itinerary.days.day3"),
            t("mozambiqueSafari.itinerary.days.day4"),
            t("mozambiqueSafari.itinerary.days.day5"),
            t("mozambiqueSafari.itinerary.days.day6"),
            t("mozambiqueSafari.itinerary.days.day7"),
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {day}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("mozambiqueSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("mozambiqueSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: t("mozambiqueSafari.pricing.groups.one"),
            price: "USD 2,500",
          },
          {
            group: t("mozambiqueSafari.pricing.groups.two"),
            price: "USD 1,900",
          },
          {
            group: t("mozambiqueSafari.pricing.groups.threeFour"),
            price: "USD 1,650",
          },
          {
            group: t("mozambiqueSafari.pricing.groups.fiveSix"),
            price: "USD 1,500",
          },
          {
            group: t("mozambiqueSafari.pricing.groups.sevenPlus"),
            price: "USD 1,350",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("mozambiqueSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("mozambiqueSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "accommodation",
          "flights",
          "transfers",
          "guide",
          "boat",
          "snorkelling",
          "culture",
          "meals",
          "water",
          "airportTransfers",
        ].map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {t(`mozambiqueSafari.included.items.${item}`)}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      {/* Beaches */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏝️
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("mozambiqueSafari.experiences.beaches.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("mozambiqueSafari.experiences.beaches.description")}
        </p>

      </div>


      {/* Marine Life */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🤿
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("mozambiqueSafari.experiences.ocean.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("mozambiqueSafari.experiences.ocean.description")}
        </p>

      </div>


      {/* Culture */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌍
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("mozambiqueSafari.experiences.culture.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("mozambiqueSafari.experiences.culture.description")}
        </p>

      </div>

    </div>


    {/* ================= YOUTUBE VIDEO ================= */}

    <div className="mt-10 flex justify-center sm:mt-12">

      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[#F8F6F1] p-2 shadow-lg">

        <div className="aspect-video overflow-hidden rounded-xl">

          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Kd50L1sz0Ug"
            title="Mozambique Safari - Curious Safaris"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("mozambiqueSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("mozambiqueSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("mozambiqueSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("mozambiqueSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>

  </div>

</section>

{/* ================= Morocco Adventure ================= */}


{/* ================= Morocco Adventure ================= */}
<section
  id="morocco-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("moroccoSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("moroccoSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("moroccoSafari.subtitle")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("moroccoSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}
    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Marrakech */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=85"
            alt={t("moroccoSafari.destinations.marrakech.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("moroccoSafari.destinations.marrakech.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("moroccoSafari.destinations.marrakech.description")}
          </p>
        </div>

      </div>


      {/* Sahara */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={sahara}
            alt={t("moroccoSafari.destinations.sahara.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("moroccoSafari.destinations.sahara.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("moroccoSafari.destinations.sahara.description")}
          </p>
        </div>

      </div>


      {/* Fes */}
      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={morocco}
            alt={t("moroccoSafari.destinations.fes.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("moroccoSafari.destinations.fes.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("moroccoSafari.destinations.fes.description")}
          </p>
        </div>

      </div>

    </div>


    {/* ================= PACKAGE DETAILS ================= */}
    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("moroccoSafari.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("moroccoSafari.details.durationLabel")}</strong>{" "}
            {t("moroccoSafari.details.duration")}
          </p>

          <p>
            <strong>{t("moroccoSafari.details.routeLabel")}</strong>{" "}
            {t("moroccoSafari.details.route")}
          </p>

          <p>
            <strong>{t("moroccoSafari.details.transportLabel")}</strong>{" "}
            {t("moroccoSafari.details.transport")}
          </p>

          <p>
            <strong>{t("moroccoSafari.details.highlightsLabel")}</strong>{" "}
            {t("moroccoSafari.details.highlights")}
          </p>

        </div>

      </div>


      {/* Itinerary */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("moroccoSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            t("moroccoSafari.itinerary.days.day1"),
            t("moroccoSafari.itinerary.days.day2"),
            t("moroccoSafari.itinerary.days.day3"),
            t("moroccoSafari.itinerary.days.day4"),
            t("moroccoSafari.itinerary.days.day5"),
            t("moroccoSafari.itinerary.days.day6"),
            t("moroccoSafari.itinerary.days.day7"),
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {day}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}
    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("moroccoSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("moroccoSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: t("moroccoSafari.pricing.groups.one"),
            price: "USD 2,200",
          },
          {
            group: t("moroccoSafari.pricing.groups.two"),
            price: "USD 1,650",
          },
          {
            group: t("moroccoSafari.pricing.groups.threeFour"),
            price: "USD 1,400",
          },
          {
            group: t("moroccoSafari.pricing.groups.fiveSix"),
            price: "USD 1,250",
          },
          {
            group: t("moroccoSafari.pricing.groups.sevenPlus"),
            price: "USD 1,150",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("moroccoSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}
    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("moroccoSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "accommodation",
          "transportation",
          "guide",
          "airportTransfers",
          "aitBenHaddou",
          "todraGorge",
          "camelRide",
          "desertCamp",
          "sightseeing",
          "meals",
          "water",
        ].map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {t(`moroccoSafari.included.items.${item}`)}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}
    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      {/* Medina */}
      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">🕌</div>

        <h3 className="mt-4 text-xl font-black">
          {t("moroccoSafari.experiences.medinas.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("moroccoSafari.experiences.medinas.description")}
        </p>

      </div>


      {/* Sahara */}
      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">🐪</div>

        <h3 className="mt-4 text-xl font-black">
          {t("moroccoSafari.experiences.sahara.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("moroccoSafari.experiences.sahara.description")}
        </p>

      </div>


      {/* Mountains */}
      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">🏔️</div>

        <h3 className="mt-4 text-xl font-black">
          {t("moroccoSafari.experiences.mountains.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("moroccoSafari.experiences.mountains.description")}
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}
    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("moroccoSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("moroccoSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("moroccoSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("moroccoSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>

  </div>

</section>

{/* ================= Egypt Adventure ================= */}
<section id="egypt-safari" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("egyptSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        {t("egyptSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("egyptSafari.titleHighlight")}
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("egyptSafari.description")}
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Cairo */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={egypt}
            alt={t("egyptSafari.destinations.cairo.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("egyptSafari.destinations.cairo.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("egyptSafari.destinations.cairo.description")}
          </p>

        </div>

      </div>


      {/* Luxor */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85"
            alt={t("egyptSafari.destinations.luxor.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("egyptSafari.destinations.luxor.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("egyptSafari.destinations.luxor.description")}
          </p>

        </div>

      </div>


      {/* Nile */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={nile}
            alt={t("egyptSafari.destinations.nile.imageAlt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            {t("egyptSafari.destinations.nile.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("egyptSafari.destinations.nile.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("egyptSafari.details.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("egyptSafari.details.durationLabel")}</strong>{" "}
            {t("egyptSafari.details.duration")}
          </p>

          <p>
            <strong>{t("egyptSafari.details.routeLabel")}</strong>{" "}
            {t("egyptSafari.details.route")}
          </p>

          <p>
            <strong>{t("egyptSafari.details.transportLabel")}</strong>{" "}
            {t("egyptSafari.details.transport")}
          </p>

          <p>
            <strong>{t("egyptSafari.details.highlightsLabel")}</strong>{" "}
            {t("egyptSafari.details.highlights")}
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("egyptSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "day1",
            "day2",
            "day3",
            "day4",
            "day5",
            "day6",
            "day7",
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {t(`egyptSafari.itinerary.${day}`)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("egyptSafari.pricing.title")}
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        {t("egyptSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "one",
            price: "USD 2,400",
          },
          {
            group: "two",
            price: "USD 1,800",
          },
          {
            group: "threeFour",
            price: "USD 1,550",
          },
          {
            group: "fiveSix",
            price: "USD 1,400",
          },
          {
            group: "sevenPlus",
            price: "USD 1,300",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {t(`egyptSafari.pricing.groups.${item.group}`)}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("egyptSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("egyptSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "accommodation",
          "nileCruise",
          "domesticFlights",
          "privateTransportation",
          "professionalGuide",
          "entranceFees",
          "pyramids",
          "valleyOfKings",
          "temples",
          "nileDinnerCruise",
          "meals",
          "water",
          "airportTransfers",
        ].map((item) => (

          <div
            key={item}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {t(`egyptSafari.included.items.${item}`)}

            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏜️
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("egyptSafari.experiences.ancient.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("egyptSafari.experiences.ancient.description")}
        </p>

      </div>


      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          ⛵
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("egyptSafari.experiences.nile.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("egyptSafari.experiences.nile.description")}
        </p>

      </div>


      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏛️
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("egyptSafari.experiences.temples.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("egyptSafari.experiences.temples.description")}
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("egyptSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("egyptSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("egyptSafari.cta.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        {t("egyptSafari.cta.button")}
        <span className="ml-2">→</span>
      </a>

    </div>

  </div>

</section>

{/* ================= Sudan Adventure ================= */}
<section
  id="sudan-safari"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
>
  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        {t("sudanSafari.badge")}
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
        {t("sudanSafari.title")}

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          {t("sudanSafari.subtitle")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        {t("sudanSafari.description")}
      </p>

    </div>

    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Meroë */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={pyramids}
            alt={t("sudanSafari.destinations.meroe.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("sudanSafari.destinations.meroe.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("sudanSafari.destinations.meroe.description")}
          </p>
        </div>

      </div>

      {/* Jebel Barkal */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={barkal}
            alt={t("sudanSafari.destinations.barkal.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("sudanSafari.destinations.barkal.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("sudanSafari.destinations.barkal.description")}
          </p>
        </div>

      </div>

      {/* Nile */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">
          <img
            src={nile}
            alt={t("sudanSafari.destinations.nile.alt")}
            loading="lazy"
            className="h-[320px] w-full object-cover object-center transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />
        </div>

        <div className="p-5 text-center sm:p-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            {t("sudanSafari.destinations.nile.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            {t("sudanSafari.destinations.nile.description")}
          </p>
        </div>

      </div>

    </div>

    {/* ================= TOUR DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          {t("sudanSafari.tourDetails.title")}
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>{t("sudanSafari.tourDetails.duration")}:</strong>{" "}
            {t("sudanSafari.tourDetails.durationValue")}
          </p>

          <p>
            <strong>{t("sudanSafari.tourDetails.route")}:</strong>{" "}
            {t("sudanSafari.tourDetails.routeValue")}
          </p>

          <p>
            <strong>{t("sudanSafari.tourDetails.transport")}:</strong>{" "}
            {t("sudanSafari.tourDetails.transportValue")}
          </p>

          <p>
            <strong>{t("sudanSafari.tourDetails.highlights")}:</strong>{" "}
            {t("sudanSafari.tourDetails.highlightsValue")}
          </p>

        </div>

      </div>

      {/* ================= ITINERARY ================= */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          {t("sudanSafari.itinerary.title")}
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "day1",
            "day2",
            "day3",
            "day4",
            "day5",
            "day6",
            "day7"
          ].map((day, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 sm:gap-4 sm:p-5"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base">
                {index + 1}
              </div>

              <p className="text-sm font-semibold leading-5 text-gray-700 sm:text-base">
                {t(`sudanSafari.itinerary.${day}`)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* ================= PRICING ================= */}

    <div className="mt-12 rounded-[30px] bg-[#0A1A13] p-6 text-white sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("sudanSafari.pricing.title")}
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-white/60 sm:text-base">
        {t("sudanSafari.pricing.description")}
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "onePerson",
            price: "USD 3,200",
          },
          {
            group: "twoPeople",
            price: "USD 2,400",
          },
          {
            group: "threeFourPeople",
            price: "USD 2,050",
          },
          {
            group: "fiveSixPeople",
            price: "USD 1,850",
          },
          {
            group: "sevenPlusPeople",
            price: "USD 1,700",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:rounded-3xl sm:p-8"
          >

            <p className="text-sm font-medium text-white/60">
              {t(`sudanSafari.pricing.${item.group}`)}
            </p>

            <p className="mt-2 text-2xl font-black sm:mt-3 sm:text-3xl">
              {item.price}
            </p>

            <p className="mt-1 text-xs text-white/50 sm:text-sm">
              {t("sudanSafari.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        {t("sudanSafari.included.title")}
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {t("sudanSafari.included.items", {
          returnObjects: true
        }).map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-1 sm:p-6"
          >

            <p className="text-sm font-semibold leading-6 text-gray-700 sm:text-base">

              <span className="mr-2 font-black text-emerald-700">
                ✓
              </span>

              {item}

            </p>

          </div>

        ))}

      </div>

    </div>

    {/* ================= SAFETY NOTICE ================= */}

    <div className="mt-12 rounded-[28px] border border-red-200 bg-red-50 p-6 sm:mt-16 sm:rounded-[35px] sm:p-8">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-xl">
          ⚠️
        </div>

        <div>

          <h3 className="text-xl font-black text-red-800">
            {t("sudanSafari.safety.title")}
          </h3>

          <p className="mt-3 text-sm leading-7 text-red-700 sm:text-base">
            {t("sudanSafari.safety.description")}
          </p>

        </div>

      </div>

    </div>

    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏺
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("sudanSafari.highlights.ancientNubia.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("sudanSafari.highlights.ancientNubia.description")}
        </p>

      </div>

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏜️
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("sudanSafari.highlights.desert.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("sudanSafari.highlights.desert.description")}
        </p>

      </div>

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌊
        </div>

        <h3 className="mt-4 text-xl font-black">
          {t("sudanSafari.highlights.nileCulture.title")}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {t("sudanSafari.highlights.nileCulture.description")}
        </p>

      </div>

    </div>

    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        {t("sudanSafari.cta.brand")}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {t("sudanSafari.cta.title")}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        {t("sudanSafari.cta.description")}
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-xs font-semibold leading-5 text-emerald-100 sm:text-sm">
        {t("sudanSafari.cta.notice")}
      </p>

    </div>

  </div>

</section>



{/* ================= 4-Day Diani Beach Staycation ================= */}
<section
  id="Diani-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32"
>
  {/* ================= Background ================= */}
  <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8A94C]/10 blur-[140px]" />
  <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#D6B98C]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= Header ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("diani.badge")}
      </span>

      <h2 className="mt-6 text-4xl font-black leading-[1.05] text-[#171510] md:text-6xl">
        {t("diani.hero.title")}

        <span className="block text-[#B28B2C]">
          {t("diani.hero.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6B6559]">
        {t("diani.hero.description")}
      </p>

    </div>


    {/* ================= Destination Cards ================= */}
    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      {/* Diani Beach */}
      <div className="group relative min-h-[360px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85"
          alt={t("diani.destinations.dianiBeach.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("diani.destinations.dianiBeach.number")}
          </span>

          <h3 className="mt-2 text-2xl font-black text-white">
            {t("diani.destinations.dianiBeach.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("diani.destinations.dianiBeach.description")}
          </p>

        </div>
      </div>


      {/* Wasini Island */}
      <div className="group relative min-h-[360px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=900&q=85"
          alt={t("diani.destinations.wasini.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("diani.destinations.wasini.number")}
          </span>

          <h3 className="mt-2 text-2xl font-black text-white">
            {t("diani.destinations.wasini.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("diani.destinations.wasini.description")}
          </p>

        </div>
      </div>


      {/* Shimba Hills */}
      <div className="group relative min-h-[360px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=85"
          alt={t("diani.destinations.shimba.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("diani.destinations.shimba.number")}
          </span>

          <h3 className="mt-2 text-2xl font-black text-white">
            {t("diani.destinations.shimba.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("diani.destinations.shimba.description")}
          </p>

        </div>
      </div>


      {/* Coastal Culture */}
      <div className="group relative min-h-[360px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85"
          alt={t("diani.destinations.culture.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("diani.destinations.culture.number")}
          </span>

          <h3 className="mt-2 text-2xl font-black text-white">
            {t("diani.destinations.culture.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("diani.destinations.culture.description")}
          </p>

        </div>
      </div>

    </div>


    {/* ================= Safari Details ================= */}
    <div className="mt-16 rounded-[32px] border border-[#DED6C8] bg-white p-8 shadow-sm md:p-10">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

        <div className="lg:w-1/3">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("diani.details.badge")}
          </span>

          <h3 className="mt-3 text-3xl font-black text-[#171510]">
            {t("diani.details.title")}
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#6B6559]">
            {t("diani.details.description")}
          </p>

        </div>


        <div className="grid flex-1 gap-4 sm:grid-cols-2">

          {[
            ["diani.details.duration.label", "diani.details.duration.value"],
            ["diani.details.destination.label", "diani.details.destination.value"],
            ["diani.details.transport.label", "diani.details.transport.value"],
            ["diani.details.bestFor.label", "diani.details.bestFor.value"],
            ["diani.details.experience.label", "diani.details.experience.value"],
            ["diani.details.style.label", "diani.details.style.value"],
          ].map(([label, value]) => (

            <div
              key={label}
              className="rounded-2xl bg-[#F7F3EA] p-5"
            >

              <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
                {t(label)}
              </p>

              <p className="mt-2 font-bold text-[#29251E]">
                {t(value)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= Itinerary ================= */}
    <div className="mt-20">

      <div className="mb-10">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("diani.itinerary.badge")}
        </span>

        <h3 className="mt-3 text-3xl font-black text-[#171510] md:text-4xl">
          {t("diani.itinerary.title")}
        </h3>

      </div>


      <div className="space-y-5">

        {[
          {
            day: "01",
            title: t("diani.itinerary.day1.title"),
            text: t("diani.itinerary.day1.text"),
          },
          {
            day: "02",
            title: t("diani.itinerary.day2.title"),
            text: t("diani.itinerary.day2.text"),
          },
          {
            day: "03",
            title: t("diani.itinerary.day3.title"),
            text: t("diani.itinerary.day3.text"),
          },
          {
            day: "04",
            title: t("diani.itinerary.day4.title"),
            text: t("diani.itinerary.day4.text"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="group grid gap-6 rounded-[28px] border border-[#DED6C8] bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[90px_1fr] md:p-9"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F3EA] text-xl font-black text-[#B28B2C]">
              {item.day}
            </div>

            <div>

              <h4 className="text-xl font-black text-[#171510] md:text-2xl">
                Day {item.day}: {item.title}
              </h4>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-[#6B6559]">
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= Suggested Stays ================= */}
    <div className="mt-20">

      <div className="mb-8">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("diani.accommodation.badge")}
        </span>

        <h3 className="mt-3 text-3xl font-black text-[#171510]">
          {t("diani.accommodation.title")}
        </h3>

      </div>


      <div className="grid gap-5 md:grid-cols-3">

        {[
          "dianiReef",
          "baobab",
          "southernPalms",
        ].map((hotel) => (

          <div
            key={hotel}
            className="rounded-[26px] border border-[#DED6C8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <span className="rounded-full bg-[#C8A94C]/10 px-3 py-1 text-xs font-bold uppercase tracking-[2px] text-[#96731F]">
              {t(`diani.accommodation.hotels.${hotel}.type`)}
            </span>

            <h4 className="mt-5 text-xl font-black text-[#171510]">
              {t(`diani.accommodation.hotels.${hotel}.name`)}
            </h4>

          </div>

        ))}

      </div>

    </div>


    {/* ================= Included + Pricing ================= */}
    <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.8fr]">

      {/* Included */}
      <div className="rounded-[32px] bg-[#211F1A] p-8 text-white md:p-10">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("diani.included.badge")}
        </span>

        <h3 className="mt-3 text-3xl font-black">
          {t("diani.included.title")}
        </h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {t("diani.included.items", { returnObjects: true }).map(
            (item) => (

              <div
                key={item}
                className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
              >

                <span className="text-[#C8A94C]">
                  ✓
                </span>

                <span className="text-sm text-gray-300">
                  {item}
                </span>

              </div>

            )
          )}

        </div>

      </div>


      {/* Pricing */}
      <div className="rounded-[32px] border border-[#DED6C8] bg-white p-8 shadow-sm md:p-10">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("diani.pricing.badge")}
        </span>

        <h3 className="mt-3 text-3xl font-black text-[#171510]">
          {t("diani.pricing.title")}
        </h3>

        <div className="mt-8 space-y-4">

          {[
            "budget",
            "midRange",
            "luxury",
          ].map((type) => (

            <div
              key={type}
              className="flex items-center justify-between rounded-2xl bg-[#F7F3EA] p-5"
            >

              <div>

                <p className="font-bold text-[#29251E]">
                  {t(`diani.pricing.${type}.name`)}
                </p>

                <p className="mt-1 text-xs text-[#8A8377]">
                  {t(`diani.pricing.${type}.description`)}
                </p>

              </div>

              <p className="text-2xl font-black text-[#B28B2C]">
                {t(`diani.pricing.${type}.price`)}
              </p>

            </div>

          ))}

        </div>

        <p className="mt-6 text-xs leading-6 text-[#7A746A]">
          {t("diani.pricing.note")}
        </p>

      </div>

    </div>


    {/* ================= Recommendation ================= */}
    <div className="mt-10 rounded-[30px] border border-[#C8A94C]/20 bg-[#F8F5ED] p-7 md:p-9">

      <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("diani.recommendation.badge")}
      </p>

      <p className="mt-3 text-lg font-bold leading-8 text-[#29251E]">
        {t("diani.recommendation.text")}
      </p>

    </div>


    {/* ================= CTA ================= */}
    <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[30px] bg-[#211F1A] p-8 text-center text-white md:flex-row md:text-left md:p-10">

      <div>

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("diani.cta.badge")}
        </p>

        <h3 className="mt-2 text-2xl font-black md:text-3xl">
          {t("diani.cta.title")}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {t("diani.cta.description")}
        </p>

      </div>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20the%204-Day%20Diani%20Beach%20Staycation."
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-2xl bg-[#C8A94C] px-7 py-4 font-bold text-[#211F1A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DFC66D]"
      >
        {t("diani.cta.button")}
      </a>

    </div>

  </div>
</section>
{/* ================= TANZANIA EXPERIENCES ================= */}
<section
  id="Tanzani2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32"
>
  {/* Background */}
  <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8A94C]/10 blur-[140px]" />
  <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#D6B98C]/20 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("tanzania.header.badge")}
      </span>

      <h2 className="mt-6 text-4xl font-black leading-[1.05] text-[#171510] md:text-6xl">
        {t("tanzania.header.title")}
        <span className="block text-[#B28B2C]">
          {t("tanzania.header.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#6B6559] md:text-lg">
        {t("tanzania.header.description")}
      </p>

    </div>


    {/* ================================================= */}
    {/* WILDLIFE SAFARI */}
    {/* ================================================= */}

    <div className="mt-20">

      {/* Section Intro */}
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("tanzania.wildlife.badge")}
          </span>

          <h3 className="mt-4 text-4xl font-black leading-tight text-[#171510] md:text-5xl">
            {t("tanzania.wildlife.title")}
            <span className="block text-[#B28B2C]">
              {t("tanzania.wildlife.titleHighlight")}
            </span>
          </h3>

        </div>

        <p className="text-base leading-8 text-[#6B6559]">
          {t("tanzania.wildlife.description")}
        </p>

      </div>


      {/* ================= DESTINATION IMAGES ================= */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">

        {/* Tarangire */}
        <div className="group relative min-h-[400px] overflow-hidden rounded-[32px]">

          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85"
            alt={t("tanzania.wildlife.destinations.tarangire.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("tanzania.wildlife.destinations.tarangire.day")}
            </span>

            <h4 className="mt-2 text-3xl font-black text-white">
              {t("tanzania.wildlife.destinations.tarangire.title")}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-200">
              {t("tanzania.wildlife.destinations.tarangire.description")}
            </p>

          </div>

        </div>


        {/* Serengeti */}
        <div className="group relative min-h-[400px] overflow-hidden rounded-[32px]">

          <img
            src={serengeti}
            alt={t("tanzania.wildlife.destinations.serengeti.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("tanzania.wildlife.destinations.serengeti.day")}
            </span>

            <h4 className="mt-2 text-3xl font-black text-white">
              {t("tanzania.wildlife.destinations.serengeti.title")}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-200">
              {t("tanzania.wildlife.destinations.serengeti.description")}
            </p>

          </div>

        </div>


        {/* Ngorongoro */}
        <div className="group relative min-h-[400px] overflow-hidden rounded-[32px]">

          <img
            src={ngorongoro}
            alt={t("tanzania.wildlife.destinations.ngorongoro.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("tanzania.wildlife.destinations.ngorongoro.day")}
            </span>

            <h4 className="mt-2 text-3xl font-black text-white">
              {t("tanzania.wildlife.destinations.ngorongoro.title")}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-200">
              {t("tanzania.wildlife.destinations.ngorongoro.description")}
            </p>

          </div>

        </div>

      </div>


      {/* ================= SAFARI DETAILS ================= */}
      <div className="mt-10 grid gap-4 rounded-[30px] border border-[#DED6C8] bg-white p-6 md:grid-cols-4 md:p-8">

        {[
          [
            t("tanzania.wildlife.details.duration.label"),
            t("tanzania.wildlife.details.duration.value"),
          ],
          [
            t("tanzania.wildlife.details.route.label"),
            t("tanzania.wildlife.details.route.value"),
          ],
          [
            t("tanzania.wildlife.details.bestFor.label"),
            t("tanzania.wildlife.details.bestFor.value"),
          ],
          [
            t("tanzania.wildlife.details.transport.label"),
            t("tanzania.wildlife.details.transport.value"),
          ],
        ].map(([label, value]) => (

          <div
            key={label}
            className="rounded-2xl bg-[#F7F3EA] p-5"
          >

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
              {label}
            </p>

            <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
              {value}
            </p>

          </div>

        ))}

      </div>


      {/* ================= ITINERARY ================= */}
      <div className="mt-12">

        <h4 className="text-3xl font-black text-[#171510]">
          {t("tanzania.wildlife.itinerary.title")}
        </h4>

        <div className="mt-8 space-y-4">

          {[
            {
              day: "01",
              title: t("tanzania.wildlife.itinerary.days.day01.title"),
              text: t("tanzania.wildlife.itinerary.days.day01.text"),
            },
            {
              day: "02",
              title: t("tanzania.wildlife.itinerary.days.day02.title"),
              text: t("tanzania.wildlife.itinerary.days.day02.text"),
            },
            {
              day: "03",
              title: t("tanzania.wildlife.itinerary.days.day03.title"),
              text: t("tanzania.wildlife.itinerary.days.day03.text"),
            },
            {
              day: "04",
              title: t("tanzania.wildlife.itinerary.days.day04.title"),
              text: t("tanzania.wildlife.itinerary.days.day04.text"),
            },
          ].map((item) => (

            <div
              key={item.day}
              className="grid gap-5 rounded-[26px] border border-[#DED6C8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[80px_1fr]"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F3EA] text-xl font-black text-[#B28B2C]">
                {item.day}
              </div>

              <div>

                <h5 className="text-xl font-black text-[#171510]">
                  {item.title}
                </h5>

                <p className="mt-2 text-sm leading-7 text-[#6B6559]">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= WILDLIFE PRICING ================= */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">

        <div className="rounded-[30px] bg-[#211F1A] p-8 text-white md:p-10">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
            {t("tanzania.wildlife.pricing.badge")}
          </p>

          <h4 className="mt-3 text-3xl font-black">
            {t("tanzania.wildlife.pricing.title")}
          </h4>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
            {t("tanzania.wildlife.pricing.description")}
          </p>

        </div>


        <div className="space-y-4">

          {[
            [
              t("tanzania.wildlife.pricing.options.budget.label"),
              t("tanzania.wildlife.pricing.options.budget.price"),
            ],
            [
              t("tanzania.wildlife.pricing.options.midRange.label"),
              t("tanzania.wildlife.pricing.options.midRange.price"),
            ],
            [
              t("tanzania.wildlife.pricing.options.luxury.label"),
              t("tanzania.wildlife.pricing.options.luxury.price"),
            ],
          ].map(([type, price]) => (

            <div
              key={type}
              className="flex items-center justify-between rounded-2xl border border-[#DED6C8] bg-white p-5"
            >

              <p className="font-bold text-[#29251E]">
                {type}
              </p>

              <p className="text-xl font-black text-[#B28B2C]">
                {price}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================================================= */}
    {/* ZANZIBAR */}
    {/* ================================================= */}

    <div className="mt-28 border-t border-[#DED6C8] pt-24">

      {/* Section Intro */}
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("tanzania.zanzibar.badge")}
          </span>

          <h3 className="mt-4 text-4xl font-black leading-tight text-[#171510] md:text-5xl">
            {t("tanzania.zanzibar.title")}
            <span className="block text-[#B28B2C]">
              {t("tanzania.zanzibar.titleHighlight")}
            </span>
          </h3>

        </div>

        <p className="text-base leading-8 text-[#6B6559]">
          {t("tanzania.zanzibar.description")}
        </p>

      </div>


      {/* ================= ZANZIBAR IMAGES ================= */}
      <div className="mt-10 grid gap-5 lg:grid-cols-12">

        {/* Large Zanzibar Beach */}
        <div className="group relative min-h-[500px] overflow-hidden rounded-[32px] lg:col-span-7">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85"
            alt={t("tanzania.zanzibar.images.beach.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("tanzania.zanzibar.images.beach.badge")}
            </span>

            <h4 className="mt-2 text-4xl font-black text-white">
              {t("tanzania.zanzibar.images.beach.title")}
            </h4>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-200">
              {t("tanzania.zanzibar.images.beach.description")}
            </p>

          </div>

        </div>


        <div className="grid gap-5 lg:col-span-5">

          {/* Stone Town */}
          <div className="group relative min-h-[240px] overflow-hidden rounded-[32px]">

            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85"
              alt={t("tanzania.zanzibar.images.stoneTown.imageAlt")}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-7">

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
                {t("tanzania.zanzibar.images.stoneTown.badge")}
              </span>

              <h4 className="mt-2 text-2xl font-black text-white">
                {t("tanzania.zanzibar.images.stoneTown.title")}
              </h4>

            </div>

          </div>


          {/* Ocean Adventure */}
          <div className="group relative min-h-[240px] overflow-hidden rounded-[32px]">

            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85"
              alt={t("tanzania.zanzibar.images.ocean.imageAlt")}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-7">

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
                {t("tanzania.zanzibar.images.ocean.badge")}
              </span>

              <h4 className="mt-2 text-2xl font-black text-white">
                {t("tanzania.zanzibar.images.ocean.title")}
              </h4>

            </div>

          </div>

        </div>

      </div>


      {/* ================= ZANZIBAR DETAILS ================= */}
      <div className="mt-10 grid gap-4 rounded-[30px] border border-[#DED6C8] bg-white p-6 md:grid-cols-4 md:p-8">

        {[
          [
            t("tanzania.zanzibar.details.duration.label"),
            t("tanzania.zanzibar.details.duration.value"),
          ],
          [
            t("tanzania.zanzibar.details.destinations.label"),
            t("tanzania.zanzibar.details.destinations.value"),
          ],
          [
            t("tanzania.zanzibar.details.bestFor.label"),
            t("tanzania.zanzibar.details.bestFor.value"),
          ],
          [
            t("tanzania.zanzibar.details.experience.label"),
            t("tanzania.zanzibar.details.experience.value"),
          ],
        ].map(([label, value]) => (

          <div
            key={label}
            className="rounded-2xl bg-[#F7F3EA] p-5"
          >

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
              {label}
            </p>

            <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
              {value}
            </p>

          </div>

        ))}

      </div>


      {/* ================= ZANZIBAR ITINERARY ================= */}
      <div className="mt-12">

        <h4 className="text-3xl font-black text-[#171510]">
          {t("tanzania.zanzibar.itinerary.title")}
        </h4>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {[
            {
              day: "01",
              title: t("tanzania.zanzibar.itinerary.days.day01.title"),
              text: t("tanzania.zanzibar.itinerary.days.day01.text"),
            },
            {
              day: "02",
              title: t("tanzania.zanzibar.itinerary.days.day02.title"),
              text: t("tanzania.zanzibar.itinerary.days.day02.text"),
            },
            {
              day: "03",
              title: t("tanzania.zanzibar.itinerary.days.day03.title"),
              text: t("tanzania.zanzibar.itinerary.days.day03.text"),
            },
            {
              day: "04",
              title: t("tanzania.zanzibar.itinerary.days.day04.title"),
              text: t("tanzania.zanzibar.itinerary.days.day04.text"),
            },
          ].map((item) => (

            <div
              key={item.day}
              className="rounded-[28px] border border-[#DED6C8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <h5 className="mt-6 text-xl font-black text-[#171510]">
                {item.title}
              </h5>

              <p className="mt-3 text-sm leading-7 text-[#6B6559]">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* ================= ZANZIBAR PRICING ================= */}
      <div className="mt-12 rounded-[32px] bg-[#211F1A] p-8 text-white md:p-10">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
              {t("tanzania.zanzibar.pricing.badge")}
            </p>

            <h4 className="mt-3 text-3xl font-black">
              {t("tanzania.zanzibar.pricing.title")}
            </h4>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {t("tanzania.zanzibar.pricing.description")}
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-3">

            {[
              [
                t("tanzania.zanzibar.pricing.options.budget.label"),
                t("tanzania.zanzibar.pricing.options.budget.price"),
              ],
              [
                t("tanzania.zanzibar.pricing.options.midRange.label"),
                t("tanzania.zanzibar.pricing.options.midRange.price"),
              ],
              [
                t("tanzania.zanzibar.pricing.options.luxury.label"),
                t("tanzania.zanzibar.pricing.options.luxury.price"),
              ],
            ].map(([type, price]) => (

              <div
                key={type}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
              >

                <p className="text-xs font-bold uppercase tracking-[2px] text-[#C8A94C]">
                  {type}
                </p>

                <p className="mt-4 text-2xl font-black">
                  {price}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {t("tanzania.zanzibar.pricing.perPerson")}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= SPECIAL EXPERIENCES ================= */}
      <div className="mt-12">

        <div className="flex flex-col gap-3">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("tanzania.zanzibar.optional.badge")}
          </span>

          <h4 className="text-3xl font-black text-[#171510]">
            {t("tanzania.zanzibar.optional.title")}
          </h4>

        </div>


        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            t("tanzania.zanzibar.optional.items.sunsetDhow"),
            t("tanzania.zanzibar.optional.items.snorkeling"),
            t("tanzania.zanzibar.optional.items.spa"),
            t("tanzania.zanzibar.optional.items.kayaking"),
          ].map((item, index) => (

            <div
              key={item}
              className="rounded-2xl border border-[#DED6C8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C8A94C]/40 hover:shadow-lg"
            >

              <span className="text-xs font-black text-[#B28B2C]">
                0{index + 1}
              </span>

              <p className="mt-4 font-bold text-[#29251E]">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================================================= */}
    {/* FINAL CTA */}
    {/* ================================================= */}

    <div className="mt-24 rounded-[36px] bg-[#211F1A] p-8 text-center text-white md:p-14">

      <span className="text-xs font-bold uppercase tracking-[4px] text-[#C8A94C]">
        {t("tanzania.cta.badge")}
      </span>

      <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
        {t("tanzania.cta.title")}
        <span className="block text-[#C8A94C]">
          {t("tanzania.cta.titleHighlight")}
        </span>
      </h3>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
        {t("tanzania.cta.description")}
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-4">

        <a
          href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20your%20Tanzania%20experiences."
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-[#C8A94C] px-8 py-4 font-bold text-[#211F1A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DFC66D]"
        >
          {t("tanzania.cta.plan")}
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <Link
          to="/contact"
          className="rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#C8A94C] hover:text-[#C8A94C]"
        >
          {t("tanzania.cta.contact")}
        </Link>

      </div>

      <div className="mt-10 border-t border-white/10 pt-6">

        <p className="text-xs uppercase tracking-[4px] text-gray-500">
          Curious Safaris
        </p>

        <p className="mt-2 font-bold text-[#C8A94C]">
          {t("tanzania.cta.tagline")}
        </p>

      </div>

    </div>

  </div>

</section>

{/* ================= UGANDA EXPERIENCES ================= */}
<section
  id="uganda2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32"
>
  {/* Background */}
  <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8A94C]/10 blur-[140px]" />
  <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#8FAF72]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("uganda.header.badge")}
      </span>

      <h2 className="mt-6 text-4xl font-black leading-[1.05] text-[#171510] md:text-6xl">
        {t("uganda.header.title")}
        <span className="block text-[#B28B2C]">
          {t("uganda.header.titleAccent")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#6B6559] md:text-lg">
        {t("uganda.header.description")}
      </p>

    </div>


    {/* =====================================================
        EXPERIENCE ONE — GORILLA & WILDLIFE
    ====================================================== */}

    <div className="mt-20">

      <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">

        <div>
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("uganda.wildlife.badge")}
          </span>

          <h3 className="mt-4 text-4xl font-black leading-tight text-[#171510] md:text-5xl">
            {t("uganda.wildlife.title")}
            <span className="block text-[#B28B2C]">
              {t("uganda.wildlife.titleAccent")}
            </span>
          </h3>
        </div>

        <p className="text-base leading-8 text-[#6B6559]">
          {t("uganda.wildlife.description")}
        </p>

      </div>


      {/* ================= IMAGES ================= */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">

        {/* Queen Elizabeth */}
        <div className="group relative min-h-[400px] overflow-hidden rounded-[32px]">

          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85"
            alt={t("uganda.wildlife.destinations.queenElizabeth.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("uganda.wildlife.destinations.queenElizabeth.day")}
            </span>

            <h4 className="mt-2 text-3xl font-black text-white">
              {t("uganda.wildlife.destinations.queenElizabeth.title")}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-200">
              {t("uganda.wildlife.destinations.queenElizabeth.description")}
            </p>

          </div>

        </div>


        {/* Kazinga */}
        <div className="group relative min-h-[400px] overflow-hidden rounded-[32px]">

          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=85"
            alt={t("uganda.wildlife.destinations.kazinga.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("uganda.wildlife.destinations.kazinga.day")}
            </span>

            <h4 className="mt-2 text-3xl font-black text-white">
              {t("uganda.wildlife.destinations.kazinga.title")}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-200">
              {t("uganda.wildlife.destinations.kazinga.description")}
            </p>

          </div>

        </div>


        {/* Bwindi */}
        <div className="group relative min-h-[400px] overflow-hidden rounded-[32px]">

          <img
            src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=85"
            alt={t("uganda.wildlife.destinations.bwindi.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("uganda.wildlife.destinations.bwindi.day")}
            </span>

            <h4 className="mt-2 text-3xl font-black text-white">
              {t("uganda.wildlife.destinations.bwindi.title")}
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-200">
              {t("uganda.wildlife.destinations.bwindi.description")}
            </p>

          </div>

        </div>

      </div>


      {/* ================= DETAILS ================= */}
      <div className="mt-10 grid gap-4 rounded-[30px] border border-[#DED6C8] bg-white p-6 md:grid-cols-4 md:p-8">

        {[
          [
            t("uganda.wildlife.details.duration.label"),
            t("uganda.wildlife.details.duration.value"),
          ],
          [
            t("uganda.wildlife.details.route.label"),
            t("uganda.wildlife.details.route.value"),
          ],
          [
            t("uganda.wildlife.details.bestFor.label"),
            t("uganda.wildlife.details.bestFor.value"),
          ],
          [
            t("uganda.wildlife.details.transport.label"),
            t("uganda.wildlife.details.transport.value"),
          ],
        ].map(([label, value]) => (

          <div
            key={label}
            className="rounded-2xl bg-[#F7F3EA] p-5"
          >

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
              {label}
            </p>

            <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
              {value}
            </p>

          </div>

        ))}

      </div>


      {/* ================= ITINERARY ================= */}
      <div className="mt-12">

        <h4 className="text-3xl font-black text-[#171510]">
          {t("uganda.wildlife.itinerary.title")}
        </h4>

        <div className="mt-8 space-y-4">

          {[
            {
              day: "01",
              title: t("uganda.wildlife.itinerary.days.day01.title"),
              text: t("uganda.wildlife.itinerary.days.day01.text"),
            },
            {
              day: "02",
              title: t("uganda.wildlife.itinerary.days.day02.title"),
              text: t("uganda.wildlife.itinerary.days.day02.text"),
            },
            {
              day: "03",
              title: t("uganda.wildlife.itinerary.days.day03.title"),
              text: t("uganda.wildlife.itinerary.days.day03.text"),
            },
            {
              day: "04",
              title: t("uganda.wildlife.itinerary.days.day04.title"),
              text: t("uganda.wildlife.itinerary.days.day04.text"),
            },
          ].map((item) => (

            <div
              key={item.day}
              className="grid gap-5 rounded-[26px] border border-[#DED6C8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[80px_1fr]"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F3EA] text-xl font-black text-[#B28B2C]">
                {item.day}
              </div>

              <div>

                <h5 className="text-xl font-black text-[#171510]">
                  {item.title}
                </h5>

                <p className="mt-2 text-sm leading-7 text-[#6B6559]">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* ================= PRICING ================= */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">

        <div className="rounded-[30px] bg-[#211F1A] p-8 text-white md:p-10">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
            {t("uganda.wildlife.pricing.badge")}
          </p>

          <h4 className="mt-3 text-3xl font-black">
            {t("uganda.wildlife.pricing.title")}
          </h4>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
            {t("uganda.wildlife.pricing.description")}
          </p>

        </div>

        <div className="space-y-4">

          {[
            [
              t("uganda.wildlife.pricing.options.budget.label"),
              t("uganda.wildlife.pricing.options.budget.price"),
            ],
            [
              t("uganda.wildlife.pricing.options.midRange.label"),
              t("uganda.wildlife.pricing.options.midRange.price"),
            ],
            [
              t("uganda.wildlife.pricing.options.luxury.label"),
              t("uganda.wildlife.pricing.options.luxury.price"),
            ],
          ].map(([type, price]) => (

            <div
              key={type}
              className="flex items-center justify-between rounded-2xl border border-[#DED6C8] bg-white p-5"
            >

              <p className="font-bold text-[#29251E]">
                {type}
              </p>

              <p className="text-xl font-black text-[#B28B2C]">
                {price}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* ================= INCLUSIONS ================= */}
      <div className="mt-8 rounded-[30px] border border-[#DED6C8] bg-white p-7 md:p-9">

        <h4 className="text-2xl font-black text-[#171510]">
          {t("uganda.wildlife.inclusions.title")}
        </h4>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {[
            t("uganda.wildlife.inclusions.items.accommodation"),
            t("uganda.wildlife.inclusions.items.vehicle"),
            t("uganda.wildlife.inclusions.items.driverGuide"),
            t("uganda.wildlife.inclusions.items.gameDrives"),
            t("uganda.wildlife.inclusions.items.kazingaCruise"),
            t("uganda.wildlife.inclusions.items.gorillaPermit"),
            t("uganda.wildlife.inclusions.items.parkFees"),
            t("uganda.wildlife.inclusions.items.meals"),
            t("uganda.wildlife.inclusions.items.water"),
            t("uganda.wildlife.inclusions.items.transfers"),
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-[#F7F3EA] p-4 text-sm font-medium text-[#514C43]"
            >

              <span className="text-[#B28B2C]">
                ✓
              </span>

              {item}

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* =====================================================
        EXPERIENCE TWO — ADVENTURE ESCAPE
    ====================================================== */}

    <div className="mt-28 border-t border-[#DED6C8] pt-24">

      <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr]">

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("uganda.adventure.badge")}
          </span>

          <h3 className="mt-4 text-4xl font-black leading-tight text-[#171510] md:text-5xl">

            {t("uganda.adventure.title")}

            <span className="block text-[#B28B2C]">
              {t("uganda.adventure.titleAccent")}
            </span>

          </h3>

        </div>

        <p className="text-base leading-8 text-[#6B6559]">
          {t("uganda.adventure.description")}
        </p>

      </div>


      {/* ================= IMAGES ================= */}
      <div className="mt-10 grid gap-5 lg:grid-cols-12">

        {/* Nile */}
        <div className="group relative min-h-[500px] overflow-hidden rounded-[32px] lg:col-span-7">

          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85"
            alt={t("uganda.adventure.images.nile.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("uganda.adventure.images.nile.badge")}
            </span>

            <h4 className="mt-2 text-4xl font-black text-white">
              {t("uganda.adventure.images.nile.title")}
            </h4>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-200">
              {t("uganda.adventure.images.nile.description")}
            </p>

          </div>

        </div>


        <div className="grid gap-5 lg:col-span-5">

          {/* Sipi */}
          <div className="group relative min-h-[240px] overflow-hidden rounded-[32px]">

            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85"
              alt={t("uganda.adventure.images.sipi.imageAlt")}
              className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-7">

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
                {t("uganda.adventure.images.sipi.badge")}
              </span>

              <h4 className="mt-2 text-2xl font-black text-white">
                {t("uganda.adventure.images.sipi.title")}
              </h4>

            </div>

          </div>

        </div>

      </div>


      {/* ================= DETAILS ================= */}
      <div className="mt-10 grid gap-4 rounded-[30px] border border-[#DED6C8] bg-white p-6 md:grid-cols-4 md:p-8">

        {[
          [
            t("uganda.adventure.details.duration.label"),
            t("uganda.adventure.details.duration.value"),
          ],
          [
            t("uganda.adventure.details.route.label"),
            t("uganda.adventure.details.route.value"),
          ],
          [
            t("uganda.adventure.details.bestFor.label"),
            t("uganda.adventure.details.bestFor.value"),
          ],
          [
            t("uganda.adventure.details.experience.label"),
            t("uganda.adventure.details.experience.value"),
          ],
        ].map(([label, value]) => (

          <div
            key={label}
            className="rounded-2xl bg-[#F7F3EA] p-5"
          >

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
              {label}
            </p>

            <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
              {value}
            </p>

          </div>

        ))}

      </div>


      {/* ================= ITINERARY ================= */}
      <div className="mt-12">

        <h4 className="text-3xl font-black text-[#171510]">
          {t("uganda.adventure.itinerary.title")}
        </h4>

        <div className="mt-8 grid gap-5 md:grid-cols-2">

          {[
            {
              day: "01",
              title: t("uganda.adventure.itinerary.days.day01.title"),
              text: t("uganda.adventure.itinerary.days.day01.text"),
            },
            {
              day: "02",
              title: t("uganda.adventure.itinerary.days.day02.title"),
              text: t("uganda.adventure.itinerary.days.day02.text"),
            },
            {
              day: "03",
              title: t("uganda.adventure.itinerary.days.day03.title"),
              text: t("uganda.adventure.itinerary.days.day03.text"),
            },
            {
              day: "04",
              title: t("uganda.adventure.itinerary.days.day04.title"),
              text: t("uganda.adventure.itinerary.days.day04.text"),
            },
          ].map((item) => (

            <div
              key={item.day}
              className="rounded-[28px] border border-[#DED6C8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <h5 className="mt-6 text-xl font-black text-[#171510]">
                {item.title}
              </h5>

              <p className="mt-3 text-sm leading-7 text-[#6B6559]">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* ================= PRICING ================= */}
      <div className="mt-12 rounded-[32px] bg-[#211F1A] p-8 text-white md:p-10">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
              {t("uganda.adventure.pricing.badge")}
            </p>

            <h4 className="mt-3 text-3xl font-black">
              {t("uganda.adventure.pricing.title")}
            </h4>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              {t("uganda.adventure.pricing.description")}
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-3">

            {[
              [
                t("uganda.adventure.pricing.options.budget.label"),
                t("uganda.adventure.pricing.options.budget.price"),
              ],
              [
                t("uganda.adventure.pricing.options.midRange.label"),
                t("uganda.adventure.pricing.options.midRange.price"),
              ],
              [
                t("uganda.adventure.pricing.options.luxury.label"),
                t("uganda.adventure.pricing.options.luxury.price"),
              ],
            ].map(([type, price]) => (

              <div
                key={type}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-6"
              >

                <p className="text-xs font-bold uppercase tracking-[2px] text-[#C8A94C]">
                  {type}
                </p>

                <p className="mt-4 text-2xl font-black">
                  {price}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {t("uganda.adventure.pricing.perPerson")}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ================= INCLUSIONS ================= */}
      <div className="mt-8 rounded-[30px] border border-[#DED6C8] bg-white p-7 md:p-9">

        <h4 className="text-2xl font-black text-[#171510]">
          {t("uganda.adventure.inclusions.title")}
        </h4>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {[
            t("uganda.adventure.inclusions.items.accommodation"),
            t("uganda.adventure.inclusions.items.vehicle"),
            t("uganda.adventure.inclusions.items.driverGuide"),
            t("uganda.adventure.inclusions.items.nileCruise"),
            t("uganda.adventure.inclusions.items.rafting"),
            t("uganda.adventure.inclusions.items.abseiling"),
            t("uganda.adventure.inclusions.items.sipiHike"),
            t("uganda.adventure.inclusions.items.mabiraForest"),
            t("uganda.adventure.inclusions.items.coffee"),
            t("uganda.adventure.inclusions.items.meals"),
            t("uganda.adventure.inclusions.items.water"),
            t("uganda.adventure.inclusions.items.transfers"),
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-[#F7F3EA] p-4 text-sm font-medium text-[#514C43]"
            >

              <span className="text-[#B28B2C]">
                ✓
              </span>

              {item}

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}
    <div className="mt-24 rounded-[36px] bg-[#211F1A] p-8 text-center text-white md:p-14">

      <span className="text-xs font-bold uppercase tracking-[4px] text-[#C8A94C]">
        {t("uganda.cta.badge")}
      </span>

      <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight md:text-5xl">

        {t("uganda.cta.title")}

        <span className="block text-[#C8A94C]">
          {t("uganda.cta.titleAccent")}
        </span>

      </h3>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
        {t("uganda.cta.description")}
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-4">

        <a
          href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20your%20Uganda%20experiences."
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-[#C8A94C] px-8 py-4 font-bold text-[#211F1A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DFC66D]"
        >
          {t("uganda.cta.primaryButton")}

          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </a>

        <Link
          to="/contact"
          className="rounded-2xl border border-white/20 px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-[#C8A94C] hover:text-[#C8A94C]"
        >
          {t("uganda.cta.secondaryButton")}
        </Link>

      </div>

      <div className="mt-10 border-t border-white/10 pt-6">

        <p className="text-xs uppercase tracking-[4px] text-gray-500">
          {t("uganda.cta.brand")}
        </p>

        <p className="mt-2 font-bold text-[#C8A94C]">
          {t("uganda.cta.tagline")}
        </p>

      </div>

    </div>
{/* ================= YOUTUBE VIDEO ================= */}

<div className="mt-10 flex justify-center sm:mt-12">
  <div className="w-full max-w-md overflow-hidden rounded-2xl bg-[#F8F6F1] p-2 shadow-lg">
    <div className="aspect-video overflow-hidden rounded-xl">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/pHcUxi-5WGI"
        title="Uganda Safari - Curious Safaris"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</div>
  </div>

</section>

{/* ================= RWANDA ADVENTURE ================= */}
{/* ================= RWANDA ADVENTURE ================= */}
<section
  id="rwanda2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32"
>
  <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C8A94C]/10 blur-[140px]" />
  <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#8BAF9A]/15 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("rwanda2.header.badge")}
      </span>

      <h2 className="mt-6 text-4xl font-black leading-[1.05] text-[#171510] md:text-6xl">
        {t("rwanda2.header.title")}
        <span className="block text-[#B28B2C]">
          {t("rwanda2.header.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#6B6559] md:text-lg">
        {t("rwanda2.header.description")}
      </p>

    </div>


    {/* ================= DESTINATIONS ================= */}
    <div className="mt-16 grid gap-5 md:grid-cols-3">

      {/* Akagera */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=85"
          alt={t("rwanda2.destinations.akagera.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-7">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("rwanda2.destinations.akagera.badge")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white">
            {t("rwanda2.destinations.akagera.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("rwanda2.destinations.akagera.description")}
          </p>

        </div>

      </div>


      {/* Lake Kivu */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85"
          alt={t("rwanda2.destinations.lakeKivu.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-7">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("rwanda2.destinations.lakeKivu.badge")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white">
            {t("rwanda2.destinations.lakeKivu.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("rwanda2.destinations.lakeKivu.description")}
          </p>

        </div>

      </div>


      {/* Kigali */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?auto=format&fit=crop&w=1000&q=85"
          alt={t("rwanda2.destinations.kigali.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-7">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("rwanda2.destinations.kigali.badge")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white">
            {t("rwanda2.destinations.kigali.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("rwanda2.destinations.kigali.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}
    <div className="mt-8 grid gap-4 rounded-[28px] border border-[#DED6C8] bg-white p-6 md:grid-cols-4 md:p-7">

      {[
        [
          t("rwanda2.details.duration.label"),
          t("rwanda2.details.duration.value"),
        ],
        [
          t("rwanda2.details.route.label"),
          t("rwanda2.details.route.value"),
        ],
        [
          t("rwanda2.details.bestFor.label"),
          t("rwanda2.details.bestFor.value"),
        ],
        [
          t("rwanda2.details.transport.label"),
          t("rwanda2.details.transport.value"),
        ],
      ].map(([label, value]) => (

        <div
          key={label}
          className="rounded-2xl bg-[#F7F3EA] p-5"
        >
          <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
            {label}
          </p>

          <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
            {value}
          </p>
        </div>

      ))}

    </div>


    {/* ================= ITINERARY ================= */}
    <div className="mt-14">

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("rwanda2.itinerary.badge")}
      </span>

      <h3 className="mt-3 text-3xl font-black text-[#171510] md:text-4xl">
        {t("rwanda2.itinerary.title")}
      </h3>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        {[
          {
            day: "01",
            title: t("rwanda2.itinerary.days.day01.title"),
            text: t("rwanda2.itinerary.days.day01.text"),
            highlights: t("rwanda2.itinerary.days.day01.highlights"),
          },
          {
            day: "02",
            title: t("rwanda2.itinerary.days.day02.title"),
            text: t("rwanda2.itinerary.days.day02.text"),
            highlights: t("rwanda2.itinerary.days.day02.highlights"),
          },
          {
            day: "03",
            title: t("rwanda2.itinerary.days.day03.title"),
            text: t("rwanda2.itinerary.days.day03.text"),
            highlights: t("rwanda2.itinerary.days.day03.highlights"),
          },
          {
            day: "04",
            title: t("rwanda2.itinerary.days.day04.title"),
            text: t("rwanda2.itinerary.days.day04.text"),
            highlights: t("rwanda2.itinerary.days.day04.highlights"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="rounded-[26px] border border-[#DED6C8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-start gap-5">

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <div>

                <h4 className="text-xl font-black text-[#171510]">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#6B6559]">
                  {item.text}
                </p>

                <span className="mt-5 inline-flex rounded-full bg-[#F7F3EA] px-4 py-2 text-xs font-bold text-[#96731F]">
                  {item.highlights}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= PRICING ================= */}
    <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">

      <div className="rounded-[30px] bg-[#211F1A] p-8 text-white md:p-9">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("rwanda2.pricing.badge")}
        </p>

        <h3 className="mt-3 text-3xl font-black">
          {t("rwanda2.pricing.title")}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {t("rwanda2.pricing.description")}
        </p>

      </div>


      <div className="grid gap-4 sm:grid-cols-3">

        {[
          {
            label: t("rwanda2.pricing.options.budget.label"),
            price: t("rwanda2.pricing.options.budget.price"),
          },
          {
            label: t("rwanda2.pricing.options.midRange.label"),
            price: t("rwanda2.pricing.options.midRange.price"),
          },
          {
            label: t("rwanda2.pricing.options.luxury.label"),
            price: t("rwanda2.pricing.options.luxury.price"),
          },
        ].map((option) => (

          <div
            key={option.label}
            className="rounded-[24px] border border-[#DED6C8] bg-white p-6"
          >

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
              {option.label}
            </p>

            <p className="mt-4 text-2xl font-black text-[#171510]">
              {option.price}
            </p>

            <p className="mt-1 text-xs text-[#8A8377]">
              {t("rwanda2.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}
    <div className="mt-10 rounded-[30px] border border-[#DED6C8] bg-white p-7 md:p-9">

      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("rwanda2.included.badge")}
          </span>

          <h3 className="mt-3 text-3xl font-black text-[#171510]">
            {t("rwanda2.included.title")}
          </h3>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          {[
            "rwanda2.included.items.accommodation",
            "rwanda2.included.items.vehicle",
            "rwanda2.included.items.guide",
            "rwanda2.included.items.parkFees",
            "rwanda2.included.items.gameDrives",
            "rwanda2.included.items.ihemaBoat",
            "rwanda2.included.items.kivuBoat",
            "rwanda2.included.items.kigali",
            "rwanda2.included.items.meals",
            "rwanda2.included.items.water",
            "rwanda2.included.items.transfers",
          ].map((itemKey) => (

            <div
              key={itemKey}
              className="flex items-center gap-3 rounded-xl bg-[#F7F3EA] px-4 py-3"
            >

              <span className="text-sm font-black text-[#B28B2C]">
                ✓
              </span>

              <span className="text-sm font-medium text-[#514B40]">
                {t(itemKey)}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= HIGHLIGHT ================= */}
    <div className="mt-10 rounded-[32px] bg-[#211F1A] p-8 text-center text-white md:p-12">

      <span className="text-xs font-bold uppercase tracking-[4px] text-[#C8A94C]">
        {t("rwanda2.highlight.badge")}
      </span>

      <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-4xl">
        {t("rwanda2.highlight.titleLine1")}
        <span className="text-[#C8A94C]">
          {t("rwanda2.highlight.titleLine2")}
        </span>
        <br />
        {t("rwanda2.highlight.titleLine3")}
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
        {t("rwanda2.highlight.description")}
      </p>

    </div>


    {/* ================= CTA ================= */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20the%204-Day%20Rwanda%20Adventure."
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl bg-[#C8A94C] px-8 py-4 font-bold text-[#211F1A] transition hover:-translate-y-1 hover:bg-[#DFC66D]"
      >
        {t("rwanda2.cta.planJourney")} →
      </a>

      <Link
        to="/contact"
        className="rounded-2xl border border-[#DED6C8] bg-white px-8 py-4 font-bold text-[#29251E] transition hover:-translate-y-1 hover:border-[#C8A94C] hover:text-[#96731F]"
      >
        {t("rwanda2.cta.contact")}
      </Link>

    </div>

  </div>
</section>

{/* ================= ETHIOPIA HERITAGE & ADVENTURE ================= */}
{/* ================= ETHIOPIA HERITAGE & ADVENTURE ================= */}

{/* ================= DRC ADVENTURE ================= */}
{/* ================= DRC ADVENTURE ================= */}
<section id="DRC2" className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32">

  {/* Background */}
  <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C8A94C]/10 blur-[140px]" />
  <div className="absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-[#687B68]/15 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("drcAdventure.header.badge")}
      </span>

      <h2 className="mt-6 text-4xl font-black leading-[1.05] text-[#171510] md:text-6xl">
        {t("drcAdventure.header.title")}
        <span className="block text-[#B28B2C]">
          {t("drcAdventure.header.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#6B6559] md:text-lg">
        {t("drcAdventure.header.description")}
      </p>

    </div>


    {/* ================= DESTINATIONS ================= */}
    <div className="mt-16 grid gap-5 md:grid-cols-3">

      {/* Goma */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85"
          alt={t("drcAdventure.destinations.goma.alt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-7">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("drcAdventure.destinations.goma.days")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white">
            {t("drcAdventure.destinations.goma.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("drcAdventure.destinations.goma.description")}
          </p>

        </div>

      </div>


      {/* Virunga */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1000&q=85"
          alt={t("drcAdventure.destinations.virunga.alt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-7">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("drcAdventure.destinations.virunga.days")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white">
            {t("drcAdventure.destinations.virunga.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("drcAdventure.destinations.virunga.description")}
          </p>

        </div>

      </div>


      {/* Nyiragongo */}
      <div className="group relative min-h-[390px] overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85"
          alt={t("drcAdventure.destinations.nyiragongo.alt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105" 
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-7">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("drcAdventure.destinations.nyiragongo.days")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white">
            {t("drcAdventure.destinations.nyiragongo.title")}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-200">
            {t("drcAdventure.destinations.nyiragongo.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}
    <div className="mt-8 grid gap-4 rounded-[28px] border border-[#DED6C8] bg-white p-6 md:grid-cols-4 md:p-7">

      {[
        [t("drcAdventure.details.duration.label"), t("drcAdventure.details.duration.value")],
        [t("drcAdventure.details.route.label"), t("drcAdventure.details.route.value")],
        [t("drcAdventure.details.bestFor.label"), t("drcAdventure.details.bestFor.value")],
        [t("drcAdventure.details.transport.label"), t("drcAdventure.details.transport.value")],
      ].map(([label, value]) => (

        <div
          key={label}
          className="rounded-2xl bg-[#F7F3EA] p-5"
        >

          <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
            {label}
          </p>

          <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
            {value}
          </p>

        </div>

      ))}

    </div>


    {/* ================= ITINERARY ================= */}
    <div className="mt-14">

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("drcAdventure.itinerary.eyebrow")}
      </span>

      <h3 className="mt-3 text-3xl font-black text-[#171510] md:text-4xl">
        {t("drcAdventure.itinerary.title")}
      </h3>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        {[
          {
            day: "01",
            title: t("drcAdventure.itinerary.days.day01.title"),
            text: t("drcAdventure.itinerary.days.day01.text"),
            highlights: t("drcAdventure.itinerary.days.day01.highlights"),
          },
          {
            day: "02",
            title: t("drcAdventure.itinerary.days.day02.title"),
            text: t("drcAdventure.itinerary.days.day02.text"),
            highlights: t("drcAdventure.itinerary.days.day02.highlights"),
          },
          {
            day: "03",
            title: t("drcAdventure.itinerary.days.day03.title"),
            text: t("drcAdventure.itinerary.days.day03.text"),
            highlights: t("drcAdventure.itinerary.days.day03.highlights"),
          },
          {
            day: "04",
            title: t("drcAdventure.itinerary.days.day04.title"),
            text: t("drcAdventure.itinerary.days.day04.text"),
            highlights: t("drcAdventure.itinerary.days.day04.highlights"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="rounded-[26px] border border-[#DED6C8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-start gap-5">

              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <div>

                <h4 className="text-xl font-black text-[#171510]">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-[#6B6559]">
                  {item.text}
                </p>

                <span className="mt-5 inline-flex rounded-full bg-[#F7F3EA] px-4 py-2 text-xs font-bold text-[#96731F]">
                  {item.highlights}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= PRICING ================= */}
    <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">

      <div className="rounded-[30px] bg-[#211F1A] p-8 text-white md:p-9">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("drcAdventure.pricing.eyebrow")}
        </p>

        <h3 className="mt-3 text-3xl font-black">
          {t("drcAdventure.pricing.title")}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400">
          {t("drcAdventure.pricing.description")}
        </p>

      </div>


      <div className="grid gap-4 sm:grid-cols-3">

        {[
          [t("drcAdventure.pricing.options.budget.label"), t("drcAdventure.pricing.options.budget.price")],
          [t("drcAdventure.pricing.options.midRange.label"), t("drcAdventure.pricing.options.midRange.price")],
          [t("drcAdventure.pricing.options.luxury.label"), t("drcAdventure.pricing.options.luxury.price")],
        ].map(([type, price]) => (

          <div
            key={type}
            className="rounded-[24px] border border-[#DED6C8] bg-white p-6"
          >

            <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
              {type}
            </p>

            <p className="mt-4 text-2xl font-black text-[#171510]">
              {price}
            </p>

            <p className="mt-1 text-xs text-[#8A8377]">
              {t("drcAdventure.pricing.perPerson")}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}
    <div className="mt-10 rounded-[30px] border border-[#DED6C8] bg-white p-7 md:p-9">

      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("drcAdventure.included.eyebrow")}
          </span>

          <h3 className="mt-3 text-3xl font-black text-[#171510]">
            {t("drcAdventure.included.title")}
          </h3>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          {[
            "accommodation",
            "transport",
            "guide",
            "virunga",
            "nyiragongo",
            "ranger",
            "lakeKivu",
            "meals",
            "water",
            "airport",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-[#F7F3EA] px-4 py-3"
            >

              <span className="text-sm font-black text-[#B28B2C]">
                ✓
              </span>

              <span className="text-sm font-medium text-[#514B40]">
                {t(`drcAdventure.included.items.${item}`)}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= IMPORTANT NOTE ================= */}
    <div className="mt-10 rounded-[30px] border border-amber-200 bg-amber-50 p-7 md:p-9">

      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-lg">
          ⚠️
        </div>

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-amber-700">
            {t("drcAdventure.importantNote.eyebrow")}
          </span>

          <h3 className="mt-2 text-xl font-black text-[#29251E]">
            {t("drcAdventure.importantNote.title")}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#6B6559]">
            {t("drcAdventure.importantNote.description")}
          </p>

        </div>

      </div>

    </div>


    {/* ================= ALTERNATIVE EXPERIENCE ================= */}
    <div className="mt-8 rounded-[30px] bg-[#211F1A] p-8 text-white md:p-10">

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
        {t("drcAdventure.alternative.eyebrow")}
      </span>

      <h3 className="mt-3 text-3xl font-black">
        {t("drcAdventure.alternative.title")}
      </h3>

      <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
        {t("drcAdventure.alternative.description")}
      </p>

    </div>


    {/* ================= HIGHLIGHT ================= */}
    <div className="mt-10 rounded-[32px] bg-[#211F1A] p-8 text-center text-white md:p-12">

      <span className="text-xs font-bold uppercase tracking-[4px] text-[#C8A94C]">
        {t("drcAdventure.highlight.eyebrow")}
      </span>

      <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight md:text-4xl">
        {t("drcAdventure.highlight.title")}
        <br />
        {t("drcAdventure.highlight.titleSecond")}
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
        {t("drcAdventure.highlight.description")}
      </p>

    </div>


    {/* ================= CTA ================= */}
    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20the%204-Day%20DRC%20Adventure."
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl bg-[#C8A94C] px-8 py-4 font-bold text-[#211F1A] transition hover:-translate-y-1 hover:bg-[#DFC66D]"
      >
        {t("drcAdventure.cta.whatsapp")}
      </a>

      <Link
        to="/contact"
        className="rounded-2xl border border-[#DED6C8] bg-white px-8 py-4 font-bold text-[#29251E] transition hover:-translate-y-1 hover:border-[#C8A94C] hover:text-[#96731F]"
      >
        {t("drcAdventure.cta.contact")}
      </Link>

    </div>

  </div>
</section>


{/* ================= ZAMBIA EXPERIENCE ================= */}
{/* ================= ZAMBIA ADVENTURE ================= */}
<section
  id="zambia2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32"
>
  <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8A94C]/10 blur-[140px]" />
  <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#D6B98C]/20 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("zambiaAdventure.header.badge")}
      </span>

      <h2 className="mt-6 text-4xl font-black leading-[1.05] text-[#171510] md:text-6xl">
        {t("zambiaAdventure.header.title")}
        <span className="block text-[#B28B2C]">
          {t("zambiaAdventure.header.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#6B6559] md:text-lg">
        {t("zambiaAdventure.header.description")}
      </p>

    </div>


    {/* ================= EXPERIENCE IMAGES ================= */}
    <div className="mt-16 grid gap-5 lg:grid-cols-12">

      {/* Victoria Falls */}
      <div className="group relative min-h-[500px] overflow-hidden rounded-[32px] lg:col-span-7">

        <img
          src={victoria1}
          alt={t("zambiaAdventure.experiences.victoriaFalls.alt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("zambiaAdventure.experiences.victoriaFalls.eyebrow")}
          </span>

          <h3 className="mt-2 text-4xl font-black text-white">
            {t("zambiaAdventure.experiences.victoriaFalls.title")}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-200">
            {t("zambiaAdventure.experiences.victoriaFalls.description")}
          </p>

        </div>

      </div>


      {/* Zambezi + Wildlife */}
      <div className="grid gap-5 lg:col-span-5">

        {/* Zambezi */}
        <div className="group relative min-h-[240px] overflow-hidden rounded-[32px]">

          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85"
            alt={t("zambiaAdventure.experiences.zambezi.alt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("zambiaAdventure.experiences.zambezi.eyebrow")}
            </span>

            <h4 className="mt-2 text-2xl font-black text-white">
              {t("zambiaAdventure.experiences.zambezi.title")}
            </h4>

          </div>

        </div>


        {/* Wildlife */}
        <div className="group relative min-h-[240px] overflow-hidden rounded-[32px]">

          <img
            src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=85"
            alt={t("zambiaAdventure.experiences.wildlife.alt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-7">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("zambiaAdventure.experiences.wildlife.eyebrow")}
            </span>

            <h4 className="mt-2 text-2xl font-black text-white">
              {t("zambiaAdventure.experiences.wildlife.title")}
            </h4>

          </div>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}
    <div className="mt-10 grid gap-4 rounded-[30px] border border-[#DED6C8] bg-white p-6 md:grid-cols-4 md:p-8">

      {[
        [
          t("zambiaAdventure.details.duration.label"),
          t("zambiaAdventure.details.duration.value"),
        ],
        [
          t("zambiaAdventure.details.route.label"),
          t("zambiaAdventure.details.route.value"),
        ],
        [
          t("zambiaAdventure.details.bestFor.label"),
          t("zambiaAdventure.details.bestFor.value"),
        ],
        [
          t("zambiaAdventure.details.transport.label"),
          t("zambiaAdventure.details.transport.value"),
        ],
      ].map(([label, value]) => (

        <div
          key={label}
          className="rounded-2xl bg-[#F7F3EA] p-5"
        >

          <p className="text-xs font-bold uppercase tracking-[2px] text-[#B28B2C]">
            {label}
          </p>

          <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
            {value}
          </p>

        </div>

      ))}

    </div>


    {/* ================= ITINERARY ================= */}
    <div className="mt-12">

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("zambiaAdventure.itinerary.eyebrow")}
      </span>

      <h3 className="mt-3 text-3xl font-black text-[#171510]">
        {t("zambiaAdventure.itinerary.title")}
      </h3>

      <div className="mt-8 space-y-4">

        {[
          {
            day: "01",
            title: t("zambiaAdventure.itinerary.days.day01.title"),
            text: t("zambiaAdventure.itinerary.days.day01.text"),
          },
          {
            day: "02",
            title: t("zambiaAdventure.itinerary.days.day02.title"),
            text: t("zambiaAdventure.itinerary.days.day02.text"),
          },
          {
            day: "03",
            title: t("zambiaAdventure.itinerary.days.day03.title"),
            text: t("zambiaAdventure.itinerary.days.day03.text"),
          },
          {
            day: "04",
            title: t("zambiaAdventure.itinerary.days.day04.title"),
            text: t("zambiaAdventure.itinerary.days.day04.text"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="grid gap-5 rounded-[26px] border border-[#DED6C8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-[80px_1fr]"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F3EA] text-xl font-black text-[#B28B2C]">
              {item.day}
            </div>

            <div>

              <h4 className="text-xl font-black text-[#171510]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-7 text-[#6B6559]">
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= PACKAGE + PRICING ================= */}
    <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">

      {/* Included */}
      <div className="rounded-[30px] bg-[#211F1A] p-8 text-white md:p-10">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("zambiaAdventure.included.eyebrow")}
        </p>

        <h3 className="mt-3 text-3xl font-black">
          {t("zambiaAdventure.included.title")}
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">

          {[
            "accommodation",
            "airportTransfers",
            "privateTransport",
            "guide",
            "victoriaFalls",
            "sunsetCruise",
            "gameDrive",
            "adventureActivity",
            "mukuni",
            "meals",
            "water",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-2 text-sm text-gray-300"
            >

              <span className="text-[#C8A94C]">
                ✓
              </span>

              {t(`zambiaAdventure.included.items.${item}`)}

            </div>

          ))}

        </div>

      </div>


      {/* Pricing */}
      <div className="rounded-[30px] border border-[#DED6C8] bg-white p-8 md:p-10">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("zambiaAdventure.pricing.eyebrow")}
        </p>

        <h3 className="mt-3 text-3xl font-black text-[#171510]">
          {t("zambiaAdventure.pricing.title")}
        </h3>

        <div className="mt-7 space-y-3">

          {[
            [
              t("zambiaAdventure.pricing.options.budget.label"),
              t("zambiaAdventure.pricing.options.budget.price"),
            ],
            [
              t("zambiaAdventure.pricing.options.midRange.label"),
              t("zambiaAdventure.pricing.options.midRange.price"),
            ],
            [
              t("zambiaAdventure.pricing.options.luxury.label"),
              t("zambiaAdventure.pricing.options.luxury.price"),
            ],
          ].map(([type, price]) => (

            <div
              key={type}
              className="flex items-center justify-between rounded-2xl bg-[#F7F3EA] p-5"
            >

              <span className="font-bold text-[#29251E]">
                {type}
              </span>

              <span className="font-black text-[#B28B2C]">
                {price}
              </span>

            </div>

          ))}

        </div>

        <p className="mt-5 text-xs leading-6 text-[#777064]">
          {t("zambiaAdventure.pricing.note")}
        </p>

      </div>

    </div>


    {/* ================= HIGHLIGHT ================= */}
    <div className="mt-12 rounded-[30px] bg-[#211F1A] p-8 text-center text-white md:p-12">

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
        {t("zambiaAdventure.highlight.eyebrow")}
      </span>

      <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black md:text-4xl">
        {t("zambiaAdventure.highlight.title")}
        <span className="block text-[#C8A94C]">
          {t("zambiaAdventure.highlight.titleHighlight")}
        </span>
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
        {t("zambiaAdventure.highlight.description")}
      </p>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20the%204-Day%20Zambia%20Adventure."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex rounded-2xl bg-[#C8A94C] px-8 py-4 font-bold text-[#211F1A] transition hover:-translate-y-1 hover:bg-[#DFC66D]"
      >
        {t("zambiaAdventure.cta")}
        <span className="ml-2">→</span>
      </a>

    </div>

  </div>
</section>

{/* ================= ZIMBABWE EXPERIENCES ================= */}
<section
  id="zimbabwe2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-20 md:py-28"
>
  <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#C8A94C]/10 blur-[120px]" />
  <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-[#D6B98C]/20 blur-[120px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("zimbabweAdventure.header.badge")}
      </span>

      <h2 className="mt-5 text-4xl font-black leading-tight text-[#171510] md:text-6xl">
        {t("zimbabweAdventure.header.title")}
        <span className="block text-[#B28B2C]">
          {t("zimbabweAdventure.header.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6B6559] md:text-base">
        {t("zimbabweAdventure.header.description")}
      </p>

    </div>


    {/* ================= HERO IMAGE GRID ================= */}
    <div className="mt-12 grid gap-5 lg:grid-cols-12">

      {/* Victoria Falls */}
      <div className="group relative min-h-[430px] overflow-hidden rounded-[30px] lg:col-span-7">

        <img
          src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=1400&q=85"
          alt={t("zimbabweAdventure.experiences.victoriaFalls.alt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-8">

          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("zimbabweAdventure.experiences.victoriaFalls.eyebrow")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">
            {t("zimbabweAdventure.experiences.victoriaFalls.title")}
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-200">
            {t("zimbabweAdventure.experiences.victoriaFalls.description")}
          </p>

        </div>

      </div>


      {/* Zambezi */}
      <div className="grid gap-5 lg:col-span-5">

        <div className="group relative min-h-[205px] overflow-hidden rounded-[30px]">

          <img
            src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1000&q=85"
            alt={t("zimbabweAdventure.experiences.zambezi.alt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("zimbabweAdventure.experiences.zambezi.eyebrow")}
            </span>

            <h4 className="mt-2 text-2xl font-black text-white">
              {t("zimbabweAdventure.experiences.zambezi.title")}
            </h4>

          </div>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}
    <div className="mt-8 grid gap-4 rounded-[28px] border border-[#DED6C8] bg-white p-5 md:grid-cols-4">

      {[
        [
          t("zimbabweAdventure.details.duration.label"),
          t("zimbabweAdventure.details.duration.value"),
        ],
        [
          t("zimbabweAdventure.details.location.label"),
          t("zimbabweAdventure.details.location.value"),
        ],
        [
          t("zimbabweAdventure.details.bestFor.label"),
          t("zimbabweAdventure.details.bestFor.value"),
        ],
        [
          t("zimbabweAdventure.details.transport.label"),
          t("zimbabweAdventure.details.transport.value"),
        ],
      ].map(([label, value]) => (

        <div
          key={label}
          className="rounded-2xl bg-[#F7F3EA] p-5"
        >

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#B28B2C]">
            {label}
          </p>

          <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
            {value}
          </p>

        </div>

      ))}

    </div>


    {/* ================= ITINERARY ================= */}
    <div className="mt-12">

      <div className="flex items-end justify-between gap-5">

        <div>

          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#B28B2C]">
            {t("zimbabweAdventure.itinerary.eyebrow")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-[#171510]">
            {t("zimbabweAdventure.itinerary.title")}
          </h3>

        </div>

      </div>


      <div className="mt-7 grid gap-4 md:grid-cols-2">

        {[
          {
            day: "01",
            title: t("zimbabweAdventure.itinerary.days.day01.title"),
            text: t("zimbabweAdventure.itinerary.days.day01.text"),
          },
          {
            day: "02",
            title: t("zimbabweAdventure.itinerary.days.day02.title"),
            text: t("zimbabweAdventure.itinerary.days.day02.text"),
          },
          {
            day: "03",
            title: t("zimbabweAdventure.itinerary.days.day03.title"),
            text: t("zimbabweAdventure.itinerary.days.day03.text"),
          },
          {
            day: "04",
            title: t("zimbabweAdventure.itinerary.days.day04.title"),
            text: t("zimbabweAdventure.itinerary.days.day04.text"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="rounded-[24px] border border-[#DED6C8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-start gap-4">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <div>

                <h4 className="text-lg font-black text-[#171510]">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#6B6559]">
                  {item.text}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED + PRICING ================= */}
    <div className="mt-10 grid gap-5 lg:grid-cols-2">

      {/* INCLUDED */}
      <div className="rounded-[28px] bg-[#211F1A] p-7 text-white">

        <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("zimbabweAdventure.included.eyebrow")}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">

          {[
            "accommodation",
            "airportTransfers",
            "privateTransport",
            "guide",
            "victoriaFalls",
            "sunsetCruise",
            "wildlife",
            "adventure",
          ].map((item) => (

            <div
              key={item}
              className="flex gap-2 text-sm text-white/70"
            >

              <span className="text-[#C8A94C]">
                ✓
              </span>

              {t(`zimbabweAdventure.included.items.${item}`)}

            </div>

          ))}

        </div>

      </div>


      {/* PRICING */}
      <div className="rounded-[28px] border border-[#DED6C8] bg-white p-7">

        <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("zimbabweAdventure.pricing.eyebrow")}
        </p>

        <div className="mt-5 space-y-3">

          {[
            [
              t("zimbabweAdventure.pricing.options.budget.label"),
              t("zimbabweAdventure.pricing.options.budget.price"),
            ],
            [
              t("zimbabweAdventure.pricing.options.midRange.label"),
              t("zimbabweAdventure.pricing.options.midRange.price"),
            ],
            [
              t("zimbabweAdventure.pricing.options.luxury.label"),
              t("zimbabweAdventure.pricing.options.luxury.price"),
            ],
          ].map(([type, price]) => (

            <div
              key={type}
              className="flex items-center justify-between rounded-xl bg-[#F7F3EA] px-5 py-4"
            >

              <span className="text-sm font-bold text-[#29251E]">
                {type}
              </span>

              <span className="text-lg font-black text-[#B28B2C]">
                {price}
              </span>

            </div>

          ))}

        </div>

        <p className="mt-4 text-xs leading-5 text-[#8A8377]">
          {t("zimbabweAdventure.pricing.note")}
        </p>

      </div>

    </div>


    {/* ================= BOOK BUTTON ================= */}
    <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[28px] bg-[#211F1A] p-7 text-center text-white sm:flex-row sm:text-left">

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("zimbabweAdventure.booking.brand")}
        </p>

        <h3 className="mt-2 text-2xl font-black">
          {t("zimbabweAdventure.booking.title")}
        </h3>

        <p className="mt-1 text-sm text-white/50">
          {t("zimbabweAdventure.booking.description")}
        </p>

      </div>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20the%204-Day%20Zimbabwe%20Adventure."
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-[#C8A94C] px-7 py-3.5 text-sm font-bold text-[#211F1A] transition hover:bg-[#DFC66D]"
      >
        {t("zimbabweAdventure.booking.button")}
      </a>

    </div>

  </div>
</section>
{/* ================= MOZAMBIQUE EXPERIENCES ================= */}
<section
  id="mozambique2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-20 md:py-28"
>
  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("mozambiqueAdventure.header.badge")}
      </span>

      <h2 className="mt-5 text-4xl font-black leading-tight text-[#171510] md:text-6xl">
        {t("mozambiqueAdventure.header.title")}
        <span className="block text-[#B28B2C]">
          {t("mozambiqueAdventure.header.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6B6559] md:text-base">
        {t("mozambiqueAdventure.header.description")}
      </p>

    </div>


    {/* ================= IMAGE GRID ================= */}
    <div className="mt-12 grid gap-5 lg:grid-cols-12">

      {/* Tofo Beach */}
      <div className="group relative min-h-[430px] overflow-hidden rounded-[30px] lg:col-span-7">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85"
          alt={t("mozambiqueAdventure.experiences.tofo.alt")}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-8">

          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#DFC66D]">
            {t("mozambiqueAdventure.experiences.tofo.eyebrow")}
          </span>

          <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">
            {t("mozambiqueAdventure.experiences.tofo.title")}
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-6 text-gray-200">
            {t("mozambiqueAdventure.experiences.tofo.description")}
          </p>

        </div>

      </div>


      {/* Maputo + Ocean */}
      <div className="grid gap-5 lg:col-span-5">

        {/* Maputo */}
        <div className="group relative min-h-[205px] overflow-hidden rounded-[30px]">

          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85"
            alt={t("mozambiqueAdventure.experiences.maputo.alt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("mozambiqueAdventure.experiences.maputo.eyebrow")}
            </span>

            <h4 className="mt-2 text-2xl font-black text-white">
              {t("mozambiqueAdventure.experiences.maputo.title")}
            </h4>

          </div>

        </div>


        {/* Ocean */}
        <div className="group relative min-h-[205px] overflow-hidden rounded-[30px]">

          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85"
            alt={t("mozambiqueAdventure.experiences.ocean.alt")}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

          <div className="absolute bottom-0 p-6">

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("mozambiqueAdventure.experiences.ocean.eyebrow")}
            </span>

            <h4 className="mt-2 text-2xl font-black text-white">
              {t("mozambiqueAdventure.experiences.ocean.title")}
            </h4>

          </div>

        </div>

      </div>

    </div>


    {/* ================= DETAILS ================= */}
    <div className="mt-8 grid gap-4 rounded-[28px] border border-[#DED6C8] bg-white p-5 md:grid-cols-4">

      {[
        [
          t("mozambiqueAdventure.details.duration.label"),
          t("mozambiqueAdventure.details.duration.value"),
        ],
        [
          t("mozambiqueAdventure.details.route.label"),
          t("mozambiqueAdventure.details.route.value"),
        ],
        [
          t("mozambiqueAdventure.details.bestFor.label"),
          t("mozambiqueAdventure.details.bestFor.value"),
        ],
        [
          t("mozambiqueAdventure.details.experience.label"),
          t("mozambiqueAdventure.details.experience.value"),
        ],
      ].map(([label, value]) => (

        <div
          key={label}
          className="rounded-2xl bg-[#F7F3EA] p-5"
        >

          <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#B28B2C]">
            {label}
          </p>

          <p className="mt-2 text-sm font-bold leading-6 text-[#29251E]">
            {value}
          </p>

        </div>

      ))}

    </div>


    {/* ================= ITINERARY ================= */}
    <div className="mt-12">

      <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("mozambiqueAdventure.itinerary.eyebrow")}
      </span>

      <h3 className="mt-2 text-3xl font-black text-[#171510]">
        {t("mozambiqueAdventure.itinerary.title")}
      </h3>

      <div className="mt-7 grid gap-4 md:grid-cols-2">

        {[
          {
            day: "01",
            title: t("mozambiqueAdventure.itinerary.days.day01.title"),
            text: t("mozambiqueAdventure.itinerary.days.day01.text"),
          },
          {
            day: "02",
            title: t("mozambiqueAdventure.itinerary.days.day02.title"),
            text: t("mozambiqueAdventure.itinerary.days.day02.text"),
          },
          {
            day: "03",
            title: t("mozambiqueAdventure.itinerary.days.day03.title"),
            text: t("mozambiqueAdventure.itinerary.days.day03.text"),
          },
          {
            day: "04",
            title: t("mozambiqueAdventure.itinerary.days.day04.title"),
            text: t("mozambiqueAdventure.itinerary.days.day04.text"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="rounded-[24px] border border-[#DED6C8] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >

            <div className="flex items-start gap-4">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <div>

                <h4 className="text-lg font-black text-[#171510]">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#6B6559]">
                  {item.text}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= HIGHLIGHTS + PRICING ================= */}
    <div className="mt-10 grid gap-5 lg:grid-cols-2">

      {/* Highlight */}
      <div className="rounded-[28px] bg-[#211F1A] p-7 text-white">

        <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("mozambiqueAdventure.highlight.eyebrow")}
        </p>

        <h3 className="mt-3 text-2xl font-black">
          {t("mozambiqueAdventure.highlight.title")}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/55">
          {t("mozambiqueAdventure.highlight.description")}
        </p>

      </div>


      {/* Pricing */}
      <div className="rounded-[28px] border border-[#DED6C8] bg-white p-7">

        <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("mozambiqueAdventure.pricing.eyebrow")}
        </p>

        <div className="mt-5 space-y-3">

          {[
            [
              t("mozambiqueAdventure.pricing.options.budget.label"),
              t("mozambiqueAdventure.pricing.options.budget.price"),
            ],
            [
              t("mozambiqueAdventure.pricing.options.midRange.label"),
              t("mozambiqueAdventure.pricing.options.midRange.price"),
            ],
            [
              t("mozambiqueAdventure.pricing.options.luxury.label"),
              t("mozambiqueAdventure.pricing.options.luxury.price"),
            ],
          ].map(([type, price]) => (

            <div
              key={type}
              className="flex items-center justify-between rounded-xl bg-[#F7F3EA] px-5 py-4"
            >

              <span className="text-sm font-bold text-[#29251E]">
                {type}
              </span>

              <span className="text-lg font-black text-[#B28B2C]">
                {price}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ================= BOOK BUTTON ================= */}
    <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[28px] bg-[#211F1A] p-7 text-center text-white sm:flex-row sm:text-left">

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("mozambiqueAdventure.booking.brand")}
        </p>

        <h3 className="mt-2 text-2xl font-black">
          {t("mozambiqueAdventure.booking.title")}
        </h3>

      </div>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20the%204-Day%20Mozambique%20Culture%20%26%20Beach%20Escape."
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-[#C8A94C] px-7 py-3.5 text-sm font-bold text-[#211F1A] transition hover:bg-[#DFC66D]"
      >
        {t("mozambiqueAdventure.booking.button")}
      </a>

    </div>

  </div>
</section>

{/* ================= EGYPT EXPERIENCES ================= */}
{/* ================= EGYPT EXPERIENCE ================= */}
<section
  id="egypt2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-20 md:py-28"
>
  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="inline-flex rounded-full bg-[#C8A94C]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-[#96731F]">
        {t("egyptAdventure.header.badge")}
      </span>

      <h2 className="mt-5 text-4xl font-black leading-tight text-[#171510] md:text-6xl">
        {t("egyptAdventure.header.title")}
        <span className="block text-[#B28B2C]">
          {t("egyptAdventure.header.titleHighlight")}
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6B6559] md:text-base">
        {t("egyptAdventure.header.description")}
      </p>

    </div>


    {/* ================= EXPERIENCE 1 ================= */}
    <div className="mt-14">

      <div className="grid gap-5 lg:grid-cols-12">

        {/* IMAGE */}
        <div className="group relative min-h-[400px] overflow-hidden rounded-[30px] lg:col-span-7">

          <img
            src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1400&q=85"
            alt={t("egyptAdventure.experienceOne.title")}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-8">

            <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#DFC66D]">
              {t("egyptAdventure.experienceOne.eyebrow")}
            </span>

            <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">
              {t("egyptAdventure.experienceOne.title")}
            </h3>

            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-200">
              {t("egyptAdventure.experienceOne.description")}
            </p>

          </div>

        </div>


        {/* PACKAGE */}
        <div className="rounded-[30px] bg-[#211F1A] p-7 text-white lg:col-span-5">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
            {t("egyptAdventure.experienceOne.package.eyebrow")}
          </p>

          <h4 className="mt-3 text-2xl font-black">
            {t("egyptAdventure.experienceOne.package.title")}
          </h4>

          <p className="mt-3 text-sm leading-7 text-white/55">
            {t("egyptAdventure.experienceOne.package.route")}
          </p>

          <div className="mt-7 space-y-3">

            {t("egyptAdventure.experienceOne.package.highlights", {
              returnObjects: true,
            }).map((item) => (

              <div
                key={item}
                className="flex gap-3 text-sm text-white/70"
              >
                <span className="text-[#C8A94C]">✓</span>
                {item}
              </div>

            ))}

          </div>

          <div className="mt-7 border-t border-white/10 pt-6">

            <p className="text-[10px] uppercase tracking-[2px] text-white/40">
              {t("egyptAdventure.experienceOne.package.from")}
            </p>

            <p className="mt-1 text-2xl font-black text-[#DFC66D]">
              {t("egyptAdventure.experienceOne.package.price")}
            </p>

            <p className="text-xs text-white/40">
              {t("egyptAdventure.experienceOne.package.perPerson")}
            </p>

          </div>

        </div>

      </div>


      {/* ================= ITINERARY ================= */}
      <div className="mt-7 grid gap-4 md:grid-cols-2">

        {[
          {
            day: "01",
            title: t("egyptAdventure.experienceOne.itinerary.day01.title"),
            text: t("egyptAdventure.experienceOne.itinerary.day01.text"),
          },
          {
            day: "02",
            title: t("egyptAdventure.experienceOne.itinerary.day02.title"),
            text: t("egyptAdventure.experienceOne.itinerary.day02.text"),
          },
          {
            day: "03",
            title: t("egyptAdventure.experienceOne.itinerary.day03.title"),
            text: t("egyptAdventure.experienceOne.itinerary.day03.text"),
          },
          {
            day: "04",
            title: t("egyptAdventure.experienceOne.itinerary.day04.title"),
            text: t("egyptAdventure.experienceOne.itinerary.day04.text"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="rounded-[22px] border border-[#DED6C8] bg-white p-5"
          >

            <div className="flex gap-4">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <div>

                <h5 className="font-black text-[#171510]">
                  {item.title}
                </h5>

                <p className="mt-1 text-sm leading-6 text-[#6B6559]">
                  {item.text}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= EXPERIENCE 2 ================= */}
    <div className="mt-20 border-t border-[#DED6C8] pt-16">

      <div className="grid gap-5 lg:grid-cols-12">

        <div className="rounded-[30px] bg-[#211F1A] p-7 text-white lg:col-span-5">

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
            {t("egyptAdventure.experienceTwo.eyebrow")}
          </p>

          <h3 className="mt-3 text-3xl font-black">
            {t("egyptAdventure.experienceTwo.title")}
            <span className="block text-[#DFC66D]">
              {t("egyptAdventure.experienceTwo.titleHighlight")}
            </span>
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/55">
            {t("egyptAdventure.experienceTwo.description")}
          </p>

          <div className="mt-7 space-y-3">

            {t("egyptAdventure.experienceTwo.highlights", {
              returnObjects: true,
            }).map((item) => (

              <div
                key={item}
                className="flex gap-3 text-sm text-white/70"
              >
                <span className="text-[#C8A94C]">✓</span>
                {item}
              </div>

            ))}

          </div>

          <div className="mt-7 border-t border-white/10 pt-6">

            <p className="text-[10px] uppercase tracking-[2px] text-white/40">
              {t("egyptAdventure.experienceTwo.from")}
            </p>

            <p className="mt-1 text-2xl font-black text-[#DFC66D]">
              {t("egyptAdventure.experienceTwo.price")}
            </p>

            <p className="text-xs text-white/40">
              {t("egyptAdventure.experienceTwo.perPerson")}
            </p>

          </div>

        </div>

      </div>


      {/* ================= ITINERARY ================= */}
      <div className="mt-7 grid gap-4 md:grid-cols-2">

        {[
          {
            day: "01",
            title: t("egyptAdventure.experienceTwo.itinerary.day01.title"),
            text: t("egyptAdventure.experienceTwo.itinerary.day01.text"),
          },
          {
            day: "02",
            title: t("egyptAdventure.experienceTwo.itinerary.day02.title"),
            text: t("egyptAdventure.experienceTwo.itinerary.day02.text"),
          },
          {
            day: "03",
            title: t("egyptAdventure.experienceTwo.itinerary.day03.title"),
            text: t("egyptAdventure.experienceTwo.itinerary.day03.text"),
          },
          {
            day: "04",
            title: t("egyptAdventure.experienceTwo.itinerary.day04.title"),
            text: t("egyptAdventure.experienceTwo.itinerary.day04.text"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="rounded-[22px] border border-[#DED6C8] bg-white p-5"
          >

            <div className="flex gap-4">

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F7F3EA] text-sm font-black text-[#B28B2C]">
                {item.day}
              </span>

              <div>

                <h5 className="font-black text-[#171510]">
                  {item.title}
                </h5>

                <p className="mt-1 text-sm leading-6 text-[#6B6559]">
                  {item.text}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}
    <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[28px] bg-[#211F1A] p-7 text-center text-white sm:flex-row sm:text-left">

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("egyptAdventure.cta.brand")}
        </p>

        <h3 className="mt-2 text-2xl font-black">
          {t("egyptAdventure.cta.title")}
        </h3>

        <p className="mt-1 text-sm text-white/50">
          {t("egyptAdventure.cta.description")}
        </p>

      </div>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20your%20Egypt%20safari."
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-full bg-[#C8A94C] px-7 py-3.5 text-sm font-bold text-[#211F1A] transition hover:bg-[#DFC66D]"
      >
        {t("egyptAdventure.cta.button")}
      </a>

    </div>

  </div>
</section>


{/* ================= SUDAN EXPERIENCE ================= */}
<section
  id="sudan2-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-20 md:py-24"
>
  <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#C8A94C]/10 blur-[120px]" />

  <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="max-w-3xl">

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("sudanAdventure.header.eyebrow")}
      </span>

      <h2 className="mt-4 text-4xl font-black leading-tight text-[#171510] md:text-5xl">
        {t("sudanAdventure.header.title")}
        <span className="block text-[#B28B2C]">
          {t("sudanAdventure.header.titleHighlight")}
        </span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-[#6B6559] md:text-base">
        {t("sudanAdventure.header.description")}
      </p>

    </div>


    {/* ================= ROUTE ================= */}
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          day: t("sudanAdventure.route.day01.label"),
          title: t("sudanAdventure.route.day01.title"),
          text: t("sudanAdventure.route.day01.description"),
        },
        {
          day: t("sudanAdventure.route.day02.label"),
          title: t("sudanAdventure.route.day02.title"),
          text: t("sudanAdventure.route.day02.description"),
        },
        {
          day: t("sudanAdventure.route.day03.label"),
          title: t("sudanAdventure.route.day03.title"),
          text: t("sudanAdventure.route.day03.description"),
        },
        {
          day: t("sudanAdventure.route.day04.label"),
          title: t("sudanAdventure.route.day04.title"),
          text: t("sudanAdventure.route.day04.description"),
        },
      ].map((item) => (

        <div
          key={item.day}
          className="rounded-2xl border border-[#DED6C8] bg-white p-5"
        >

          <span className="text-xs font-black text-[#B28B2C]">
            {item.day}
          </span>

          <h3 className="mt-3 text-lg font-black text-[#171510]">
            {item.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6B6559]">
            {item.text}
          </p>

        </div>

      ))}

    </div>


    {/* ================= ITINERARY ================= */}
    <div className="mt-12">

      <h3 className="text-2xl font-black text-[#171510]">
        {t("sudanAdventure.itinerary.title")}
      </h3>

      <div className="mt-6 space-y-3">

        {[
          {
            day: t("sudanAdventure.itinerary.day01.label"),
            title: t("sudanAdventure.itinerary.day01.title"),
            text: t("sudanAdventure.itinerary.day01.text"),
          },
          {
            day: t("sudanAdventure.itinerary.day02.label"),
            title: t("sudanAdventure.itinerary.day02.title"),
            text: t("sudanAdventure.itinerary.day02.text"),
          },
          {
            day: t("sudanAdventure.itinerary.day03.label"),
            title: t("sudanAdventure.itinerary.day03.title"),
            text: t("sudanAdventure.itinerary.day03.text"),
          },
          {
            day: t("sudanAdventure.itinerary.day04.label"),
            title: t("sudanAdventure.itinerary.day04.title"),
            text: t("sudanAdventure.itinerary.day04.text"),
          },
          {
            day: t("sudanAdventure.itinerary.day05.label"),
            title: t("sudanAdventure.itinerary.day05.title"),
            text: t("sudanAdventure.itinerary.day05.text"),
          },
        ].map((item) => (

          <div
            key={item.day}
            className="grid gap-3 rounded-2xl border border-[#DED6C8] bg-white p-5 md:grid-cols-[90px_1fr]"
          >

            <span className="font-black text-[#B28B2C]">
              {item.day}
            </span>

            <div>

              <h4 className="font-black text-[#171510]">
                {item.title}
              </h4>

              <p className="mt-1 text-sm leading-6 text-[#6B6559]">
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= PRICE + NOTE ================= */}
    <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.2fr]">

      {/* PRICING */}
      <div className="rounded-2xl bg-[#211F1A] p-7 text-white">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("sudanAdventure.pricing.eyebrow")}
        </p>

        <div className="mt-5 space-y-3">

          {[
            {
              type: t("sudanAdventure.pricing.budget.label"),
              price: t("sudanAdventure.pricing.budget.price"),
            },
            {
              type: t("sudanAdventure.pricing.midRange.label"),
              price: t("sudanAdventure.pricing.midRange.price"),
            },
            {
              type: t("sudanAdventure.pricing.luxury.label"),
              price: t("sudanAdventure.pricing.luxury.price"),
            },
          ].map((item) => (

            <div
              key={item.type}
              className="flex items-center justify-between border-b border-white/10 pb-3"
            >

              <span className="text-sm text-white/60">
                {item.type}
              </span>

              <span className="font-black text-[#DFC66D]">
                {item.price}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* IMPORTANT */}
      <div className="rounded-2xl border border-amber-300/30 bg-amber-50 p-7">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
          {t("sudanAdventure.important.eyebrow")}
        </span>

        <h3 className="mt-3 text-xl font-black text-[#29251E]">
          {t("sudanAdventure.important.title")}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#6B6559]">
          {t("sudanAdventure.important.description")}
        </p>

      </div>

    </div>


    {/* ================= HIGHLIGHT ================= */}
    <div className="mt-8 rounded-2xl bg-[#EDE7D8] p-6">

      <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("sudanAdventure.highlight.eyebrow")}
      </p>

      <p className="mt-3 text-lg font-black text-[#29251E]">
        {t("sudanAdventure.highlight.text")}
      </p>

    </div>


    {/* ================= BOOK / ENQUIRE ================= */}
    <div className="mt-8 flex flex-wrap items-center gap-4">

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20the%20Sudan%20Nubian%20Desert%20%26%20Ancient%20Kingdoms%20experience."
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl bg-[#C8A94C] px-7 py-3.5 text-sm font-bold text-[#211F1A] transition hover:bg-[#DFC66D]"
      >
        {t("sudanAdventure.booking.button")}
      </a>

      <span className="text-xs text-[#6B6559]">
        {t("sudanAdventure.booking.note")}
      </span>

    </div>

  </div>
</section>
{/* ================= KENYA & TANZANIA COASTAL ESCAPE ================= */}
{/* ================= KENYA & TANZANIA COASTAL STAYCATION ================= */}
<section
  id="kenyacoast-safari"
  className="relative overflow-hidden bg-[#F7F3EA] py-20 md:py-24"
>

  <div className="relative mx-auto max-w-6xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="max-w-3xl">

      <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
        {t("kenyaCoastSafari.header.eyebrow")}
      </span>

      <h2 className="mt-4 text-4xl font-black leading-tight text-[#171510] md:text-5xl">
        {t("kenyaCoastSafari.header.title")}
        <span className="block text-[#B28B2C]">
          {t("kenyaCoastSafari.header.titleHighlight")}
        </span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-[#6B6559] md:text-base">
        {t("kenyaCoastSafari.header.description")}
      </p>

    </div>


    {/* ================= HIGHLIGHTS ================= */}
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {[
        "diani",
        "beachEscape",
        "zanzibar",
        "privateYacht",
      ].map((item) => (

        <div
          key={item}
          className="rounded-2xl border border-[#DED6C8] bg-white p-5"
        >

          <span className="text-xs font-black text-[#B28B2C]">
            {t(`kenyaCoastSafari.highlights.items.${item}.number`)}
          </span>

          <h3 className="mt-3 text-lg font-black text-[#171510]">
            {t(`kenyaCoastSafari.highlights.items.${item}.title`)}
          </h3>

          <p className="mt-2 text-sm text-[#6B6559]">
            {t(`kenyaCoastSafari.highlights.items.${item}.text`)}
          </p>

        </div>

      ))}

    </div>


    {/* ================= ITINERARY ================= */}
    <div className="mt-12">

      <h3 className="text-2xl font-black text-[#171510]">
        {t("kenyaCoastSafari.itinerary.title")}
      </h3>

      <div className="mt-6 space-y-3">

        {[
          "day1",
          "day2",
          "day3",
          "day4",
          "day5",
        ].map((item) => (

          <div
            key={item}
            className="grid gap-3 rounded-2xl border border-[#DED6C8] bg-white p-5 md:grid-cols-[90px_1fr]"
          >

            <span className="font-black text-[#B28B2C]">
              {t(`kenyaCoastSafari.itinerary.days.${item}.day`)}
            </span>

            <div>

              <h4 className="font-black text-[#171510]">
                {t(`kenyaCoastSafari.itinerary.days.${item}.title`)}
              </h4>

              <p className="mt-1 text-sm leading-6 text-[#6B6559]">
                {t(`kenyaCoastSafari.itinerary.days.${item}.text`)}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= PACKAGE + PRICING ================= */}
    <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">

      {/* PACKAGE HIGHLIGHTS */}
      <div className="rounded-2xl bg-[#211F1A] p-7 text-white">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
          {t("kenyaCoastSafari.package.eyebrow")}
        </p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">

          {[
            "dianiNights",
            "zanzibarNights",
            "beachfront",
            "transfers",
            "stoneTown",
            "privateYacht",
            "mnemba",
            "airport",
          ].map((item) => (

            <li
              key={item}
              className="flex gap-2 text-sm text-white/70"
            >

              <span className="text-[#C8A94C]">
                ✓
              </span>

              {t(`kenyaCoastSafari.package.items.${item}`)}

            </li>

          ))}

        </ul>

      </div>


      {/* PRICING */}
      <div className="rounded-2xl border border-[#DED6C8] bg-white p-7">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("kenyaCoastSafari.pricing.eyebrow")}
        </p>

        <div className="mt-5 space-y-4">

          <div className="flex items-center justify-between border-b border-[#DED6C8] pb-4">

            <span className="text-sm text-[#6B6559]">
              {t("kenyaCoastSafari.pricing.midRange.label")}
            </span>

            <span className="text-xl font-black text-[#B28B2C]">
              {t("kenyaCoastSafari.pricing.midRange.price")}
            </span>

          </div>


          <div className="flex items-center justify-between">

            <span className="text-sm text-[#6B6559]">
              {t("kenyaCoastSafari.pricing.luxury.label")}
            </span>

            <span className="text-xl font-black text-[#B28B2C]">
              {t("kenyaCoastSafari.pricing.luxury.price")}
            </span>

          </div>

        </div>

        <p className="mt-5 text-xs leading-5 text-[#8A8478]">
          {t("kenyaCoastSafari.pricing.note")}
        </p>

      </div>

    </div>


    {/* ================= CTA ================= */}
    <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#EDE7D8] p-6 sm:flex-row sm:items-center sm:justify-between">

      <div>

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          {t("kenyaCoastSafari.cta.eyebrow")}
        </p>

        <h3 className="mt-2 text-xl font-black text-[#29251E]">
          {t("kenyaCoastSafari.cta.title")}
        </h3>

      </div>


      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'm%20interested%20in%20the%205-Day%20Kenya%20%26%20Tanzania%20Coastal%20Staycation."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#C8A94C] px-7 py-3.5 text-sm font-bold text-[#211F1A] transition hover:bg-[#DFC66D]"
      >
        {t("kenyaCoastSafari.cta.button")}
      </a>

    </div>

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