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
            <strong>{t("mozambiqueSafari.packageDetails.durationLabel")}</strong>{" "}
            {t("mozambiqueSafari.packageDetails.duration")}
          </p>

          <p>
            <strong>{t("mozambiqueSafari.packageDetails.routeLabel")}</strong>{" "}
            {t("mozambiqueSafari.packageDetails.route")}
          </p>

          <p>
            <strong>{t("mozambiqueSafari.packageDetails.transportLabel")}</strong>{" "}
            {t("mozambiqueSafari.packageDetails.transport")}
          </p>

          <p>
            <strong>{t("mozambiqueSafari.packageDetails.highlightsLabel")}</strong>{" "}
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