/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";


import { FaGlobe } from "react-icons/fa";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";

import {
  FaFacebookF,FaTiktok,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaPhoneAlt,  FaEnvelope,  FaMapMarkerAlt,  FaArrowRight,  FaChevronUp,} from "react-icons/fa";

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
import galery1 from "../assets/galery1.jpg";
import galery2 from "../assets/galery2.jpg";
import galery3 from "../assets/galery3.jpg";
import galery4 from "../assets/galery4.jpg";
import galery5 from "../assets/galery5.jpg";
import team from "../assets/team.jpg";
import diani from "../assets/diani.jpg";
import image10 from "../assets/image10.jpg";
import meru from "../assets/meru.jpg";
import weekends from "../assets/weekends.jpg";


import airbaloon from "../assets/airbaloon.jpg";
import morocco from "../assets/morocco.jpg";
import egypt from "../assets/egypt.jpg";

function Gallery() {
  const gallery = [
    { image: team, title: "Group Adventures" },
    { image: home2, title: "Weekend Road Trips" },
    { image: wilderbeast, title: "Wildlife Safaris" },
    { image: weekends, title: "Luxury Escapes" },
    { image: diani, title: "Beach Holidays" },
    { image: kenya, title: "Discover Kenya" },
    { image: nakuru, title: "Lake Nakuru" },
    
    { image: nairobi, title: "Nature Experience" },
    { image: image1, title: "Adventure " },
    { image: galery1, title: "Adventure " },
    { image: galery2, title: "Adventure " },
    { image: galery3, title: "Adventure " },
    { image: galery4, title: "Adventure " },
    { image: galery5, title: "Adventure " },
    { image: home5, title: "Scenic Landscapes" },
    { image: meru, title: "Amazing Destinations" },
    { image: climbingkenya, title: "Mt. Kenya Hiking" },
    { image: climbingkili, title: "Kilimanjaro Trek" },
    { image: climbinglongonot, title: "Longonot Hike" },
    { image: gorilla, title: "Gorilla Trekking" },
    { image: hellsgate, title: "Hell's Gate" },
    { image: serengeti, title: "Serengeti Safari" },
    { image: image14, title: "Explore Tanzania" },
     { image: victoria1, title: "Victoria Falls" },
  { image: zambezi, title: "Zambezi River" },
  { image: luangwa, title: "South Luangwa" },
  { image: ngorongoro, title: "Ngorongoro Crater" },
  { image: airbaloon, title: "African Balloon Safari" },
  { image: morocco, title: "Discover Morocco" },
  { image: egypt, title: "Explore Egypt" },
  ];
 const { t, i18n } = useTranslation();
  return (
    <div className="bg-white">

      {/* HERO */}

<section className="relative min-h-[65vh] sm:min-h-[25vh] lg:h-[70vh] flex items-center overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src={wilderbeast}
    alt={t("galleryHero.imageAlt")}
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
        {t("galleryHero.badge")}
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-3">
        {t("galleryHero.title")}
      </h1>

      <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-gray-200 leading-6">
        {t("galleryHero.description")}
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
        {t("galleryCollection.badge")}
      </span>

      <h2 className="text-5xl font-black mt-5 text-gray-900">
        {t("galleryCollection.title")}
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

{/* ================= JOURNEY STORY ================= */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-100 text-[#0B6E4F] font-semibold uppercase tracking-[3px] text-sm">
        {t("galleryStory.badge")}
      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">
        {t("galleryStory.title")}

        <span className="block text-[#0B6E4F]">
          {t("galleryStory.titleHighlight")}
        </span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        {t("galleryStory.description")}
      </p>

    </div>


    {/* STATS */}
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

      {[
        "roadTrips",
        "travelers",
        "destinations",
        "experiences"
      ].map((key) => (

        <div
          key={key}
          className="bg-[#F8F9F6] rounded-[30px] p-10 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
        >

          <h3 className="text-5xl font-black text-[#0B6E4F]">
            {t(`galleryStory.stats.${key}.number`)}
          </h3>

          <h4 className="mt-4 text-2xl font-bold text-gray-900">
            {t(`galleryStory.stats.${key}.title`)}
          </h4>

          <p className="mt-4 text-gray-600 leading-7">
            {t(`galleryStory.stats.${key}.text`)}
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
        {t("galleryDestinations.badge")}
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-4 text-gray-900">

        {t("galleryDestinations.title")}

        <span className="block text-[#0B6E4F]">
          {t("galleryDestinations.titleHighlight")}
        </span>

      </h2>

      <p className="mt-5 text-gray-600 text-lg leading-8">
        {t("galleryDestinations.description")}
      </p>

    </div>


    {/* DESTINATION GRID */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


      {/* ================= MAASAI MARA ================= */}

      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={wilderbeast}
          alt={t(
            "galleryDestinations.items.maasaiMara.imageAlt"
          )}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            {t(
              "galleryDestinations.items.maasaiMara.category"
            )}
          </span>

          <h3 className="text-3xl font-black mt-2">
            {t(
              "galleryDestinations.items.maasaiMara.title"
            )}
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            {t(
              "galleryDestinations.items.maasaiMara.description"
            )}
          </p>

        </div>

      </div>


      {/* ================= DIANI ================= */}

      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={diani}
          alt={t(
            "galleryDestinations.items.diani.imageAlt"
          )}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            {t(
              "galleryDestinations.items.diani.category"
            )}
          </span>

          <h3 className="text-3xl font-black mt-2">
            {t(
              "galleryDestinations.items.diani.title"
            )}
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            {t(
              "galleryDestinations.items.diani.description"
            )}
          </p>

        </div>

      </div>


      {/* ================= MOUNT KENYA ================= */}

      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={climbingkenya}
          alt={t(
            "galleryDestinations.items.mountKenya.imageAlt"
          )}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            {t(
              "galleryDestinations.items.mountKenya.category"
            )}
          </span>

          <h3 className="text-3xl font-black mt-2">
            {t(
              "galleryDestinations.items.mountKenya.title"
            )}
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            {t(
              "galleryDestinations.items.mountKenya.description"
            )}
          </p>

        </div>

      </div>


      {/* ================= LAKE NAKURU ================= */}

      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={nakuru}
          alt={t(
            "galleryDestinations.items.nakuru.imageAlt"
          )}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            {t(
              "galleryDestinations.items.nakuru.category"
            )}
          </span>

          <h3 className="text-3xl font-black mt-2">
            {t(
              "galleryDestinations.items.nakuru.title"
            )}
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            {t(
              "galleryDestinations.items.nakuru.description"
            )}
          </p>

        </div>

      </div>


      {/* ================= SERENGETI ================= */}

      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={serengeti}
          alt={t(
            "galleryDestinations.items.serengeti.imageAlt"
          )}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            {t(
              "galleryDestinations.items.serengeti.category"
            )}
          </span>

          <h3 className="text-3xl font-black mt-2">
            {t(
              "galleryDestinations.items.serengeti.title"
            )}
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            {t(
              "galleryDestinations.items.serengeti.description"
            )}
          </p>

        </div>

      </div>


      {/* ================= MOUNT LONGONOT ================= */}

      <div className="group relative h-[380px] overflow-hidden rounded-[28px] shadow-lg">

        <img
          src={climbinglongonot}
          alt={t(
            "galleryDestinations.items.longonot.imageAlt"
          )}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
            {t(
              "galleryDestinations.items.longonot.category"
            )}
          </span>

          <h3 className="text-3xl font-black mt-2">
            {t(
              "galleryDestinations.items.longonot.title"
            )}
          </h3>

          <p className="mt-2 text-gray-200 text-sm leading-6">
            {t(
              "galleryDestinations.items.longonot.description"
            )}
          </p>

        </div>

      </div>

    </div>


    {/* ================= BUTTON ================= */}

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

        {t("galleryDestinations.button")}

        <FaArrowRight />

      </Link>

    </div>

  </div>

</section>



      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#0B6E4F] to-[#09543D]">

  <div className="max-w-4xl mx-auto text-center px-6 text-white">

    <span className="uppercase tracking-[4px] text-yellow-400 font-semibold">
      {t("galleryCTA.badge")}
    </span>

    <h2 className="mt-6 text-5xl font-black">
      {t("galleryCTA.title")}
    </h2>

    <p className="mt-6 text-lg text-gray-200 leading-8">
      {t("galleryCTA.description")}
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        to="/destinations"
        className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition"
      >
        {t("galleryCTA.viewTrips")}
      </Link>

      <Link
        to="/contact"
        className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition"
      >
        {t("galleryCTA.bookNow")}
      </Link>

    </div>

  </div>

</section>


      {/* ================= PREMIUM FOOTER ================= */}

{/* ================= FOOTER ================= */}
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

export default Gallery;