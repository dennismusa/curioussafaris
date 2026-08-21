/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {  FaFacebookF, FaTiktok, FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";
//import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";

import cruiser2 from "../assets/cruiser2.jpg";
import photography from "../assets/photography.jpg";
import horse from "../assets/horse.jpg";
import culture from "../assets/culture.jpg";
import diani from "../assets/diani.jpg";
import egypt from "../assets/egypt.jpg";
import about1 from "../assets/about1.jpg";

import centralafrica from "../assets/centralafrica.jpg";
import westafrica from "../assets/westafrica.jpg";
import eastafrica from "../assets/eastafrica.jpg";
import southafrica from "../assets/southafrica.jpg";

import serengeti from "../assets/serengeti.jpg";


import kenya from "../assets/kenya.jpg";




export default function Services() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-white">
      {/* Hero Section */}

     <section
  className="relative flex min-h-[58vh] items-center justify-center overflow-hidden lg:min-h-[65vh]"
  style={{
    backgroundImage: `url(${serengeti})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/75" />

  {/* Content */}
  <div className="relative z-10 mx-auto w-full max-w-4xl px-6 py-16 text-center text-white sm:px-8 lg:py-20">

    {/* Brand badge */}
    <div className="flex justify-center">
      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[10px] font-semibold uppercase tracking-[3px] text-white backdrop-blur-md">
        {t("hero.brand")}
      </span>
    </div>

    {/* Heading */}
    <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
      {t("hero.title")}

      <span className="mt-1 block text-[#C8A94C]">
        {t(" ")}
      </span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
      {t("hero.description")}
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

      <a
        href="/destinations"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#C8A94C] px-7 py-3 text-sm font-bold text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D8BB63] sm:w-auto"
      >
        {t("hero.explore")}
        <span className="ml-2">→</span>
      </a>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27d%20like%20to%20plan%20a%20trip."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black sm:w-auto"
      >
        {t("hero.planSafari")}
      </a>

    </div>

    {/* Bottom highlights */}
    <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[1.5px] text-white/60 sm:text-xs">

      <span>{t("hero.highlight1")}</span>

      <span className="hidden h-1 w-1 rounded-full bg-[#C8A94C] sm:block" />

      <span>{t("hero.highlight2")}</span>

      <span className="hidden h-1 w-1 rounded-full bg-[#C8A94C] sm:block" />

      <span>{t("hero.highlight3")}</span>

    </div>

  </div>
</section>


<section className="relative overflow-hidden bg-[#F8F6F1] py-32">

  {/* Background Effects */}
  <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[150px]" />
  <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-200/30 blur-[150px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-3 text-xs font-bold uppercase tracking-[4px] text-emerald-700">
        {t("tailorMade.badge")}
      </span>

      <h2 className="mt-8 text-5xl font-black md:text-6xl">
        {t("tailorMade.title")}

        <span className="block text-[#C8A94C]">
          {t("tailorMade.titleHighlight")}
        </span>
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        {t("tailorMade.description")}
      </p>

    </div>

    <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

      {/* Image */}
      <div className="group relative overflow-hidden rounded-[40px]">

        <img
          src={about1}
          alt={t("tailorMade.imageAlt")}
          className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-8 rounded-3xl bg-white/10 p-6 backdrop-blur-xl">

          <h3 className="text-3xl font-black text-white">
            {t("tailorMade.imageTitle")}
            <br />
            {t("tailorMade.imageHighlight")}
          </h3>

        </div>

      </div>

      {/* Content */}
      <div>

        <h3 className="text-4xl font-black">
          {t("tailorMade.contentTitle")}
        </h3>

        <p className="mt-6 leading-8 text-gray-600">
          {t("tailorMade.contentDescription")}
        </p>

        {/* Journey Builder */}
        <div className="mt-10 space-y-4">

          {[
            "destination",
            "travelStyle",
            "accommodation",
            "activities",
            "duration",
            "itinerary",
          ].map((step, index) => (

            <div
              key={step}
              className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-lg transition duration-500 hover:-translate-x-2"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
                {index + 1}
              </div>

              <p className="font-semibold">
                {t(`tailorMade.steps.${step}`)}
              </p>

            </div>

          ))}

        </div>

        {/* Traveler Types */}
        <div className="mt-12 flex flex-wrap gap-4">

          {[
            "solo",
            "couples",
            "families",
            "luxury",
            "photographers",
            "adventure",
          ].map((item) => (

            <span
              key={item}
              className="rounded-full bg-white px-6 py-3 shadow-lg transition duration-300 hover:-translate-y-2"
            >
              {t(`tailorMade.travelers.${item}`)}
            </span>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
<section className="relative overflow-hidden bg-[#F7F5F0] py-32">

  {/* Background Effects */}
  <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[150px]" />
  <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-200/30 blur-[150px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* ================= HEADER ================= */}
    <div className="mx-auto mb-28 max-w-4xl text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-3 text-xs font-bold uppercase tracking-[4px] text-emerald-700">
        {t("services.badge")}
      </span>

      <h2 className="mt-8 text-5xl font-black md:text-6xl">
        {t("services.heading")}
        <span className="block text-[#C8A94C]">
          {t("services.headingHighlight")}
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        {t("services.description")}
      </p>

    </div>


    {/* ================= SERVICES ================= */}

    {[
      {
        number: "01",
        title: "services.items.wildlife.title",
        image: kenya,
        description: "services.items.wildlife.description",
        details: "services.items.wildlife.details",
        features: [
          "services.items.wildlife.features.bigFive",
          "services.items.wildlife.features.gameDrives",
          "services.items.wildlife.features.nationalParks",
          "services.items.wildlife.features.walkingSafaris",
        ],
      },

      {
        number: "02",
        title: "services.items.luxury.title",
        image: cruiser2,
        description: "services.items.luxury.description",
        details: "services.items.luxury.details",
        features: [
          "services.items.luxury.features.luxuryLodges",
          "services.items.luxury.features.privateVillas",
          "services.items.luxury.features.boutiqueCamps",
          "services.items.luxury.features.exclusiveExperiences",
        ],
      },

      {
        number: "03",
        title: "services.items.photography.title",
        image: photography,
        description: "services.items.photography.description",
        details: "services.items.photography.details",
        features: [
          "services.items.photography.features.wildlifePhotography",
          "services.items.photography.features.landscapeTours",
          "services.items.photography.features.goldenHour",
          "services.items.photography.features.photoExpeditions",
        ],
      },

      {
        number: "04",
        title: "services.items.horseRiding.title",
        image: horse,
        description: "services.items.horseRiding.description",
        details: "services.items.horseRiding.details",
        features: [
          "services.items.horseRiding.features.guidedRiding",
          "services.items.horseRiding.features.natureTrails",
          "services.items.horseRiding.features.privateExperiences",
          "services.items.horseRiding.features.multiDayAdventures",
        ],
      },

      {
        number: "05",
        title: "services.items.cultural.title",
        image: culture,
        description: "services.items.cultural.description",
        details: "services.items.cultural.details",
        features: [
          "services.items.cultural.features.localCommunities",
          "services.items.cultural.features.traditionalExperiences",
          "services.items.cultural.features.historicalSites",
          "services.items.cultural.features.authenticCulture",
        ],
      },

      {
        number: "06",
        title: "services.items.beach.title",
        image: diani,
        description: "services.items.beach.description",
        details: "services.items.beach.details",
        features: [
          "services.items.beach.features.beachEscapes",
          "services.items.beach.features.customItineraries",
          "services.items.beach.features.privateTravel",
          "services.items.beach.features.multiCountryTours",
        ],
      },
    ].map((service, index) => (

      <div
        key={service.number}
        className="mb-24 grid items-center gap-14 lg:grid-cols-2"
      >

        {/* ================= IMAGE ================= */}
        <div
          className={
            index % 2 !== 0
              ? "lg:order-2"
              : ""
          }
        >

          <div className="group relative overflow-hidden rounded-[40px]">

            <img
              src={service.image}
              alt={t(service.title)}
              className="h-[650px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">

              <span className="text-7xl font-black text-white/30">
                {service.number}
              </span>

            </div>

          </div>

        </div>


        {/* ================= CONTENT ================= */}
        <div>

          <span className="font-bold uppercase tracking-[4px] text-[#C8A94C]">
            {t("services.premiumService")}
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            {t(service.title)}
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            {t(service.description)}
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            {t(service.details)}
          </p>


          {/* ================= FEATURES ================= */}
          <div className="mt-10 flex flex-wrap gap-4">

            {service.features.map((feature) => (

              <span
                key={feature}
                className="rounded-full bg-emerald-50 px-6 py-3 font-medium text-emerald-700 transition duration-300 hover:-translate-y-1 hover:bg-emerald-100"
              >
                {t(feature)}
              </span>

            ))}

          </div>

        </div>

      </div>

    ))}

  </div>

</section>

<section className="relative overflow-hidden bg-[#F8F6F1] py-32">

  {/* Background Effects */}
  <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-[160px]" />

  <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/20 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-3 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        {t("regions.badge")}
      </span>

      <h2 className="mt-8 text-5xl font-black md:text-7xl">
        {t("regions.title")}

        <span className="block text-[#C8A94C]">
          {t("regions.titleHighlight")}
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        {t("regions.description")}
      </p>

    </div>


    {/* ================= REGIONS ================= */}
    <div className="mt-24 space-y-24">

      {[
        {
          image: eastafrica,
          title: "regions.items.eastAfrica.title",
          countries: "regions.items.eastAfrica.countries",
          highlights: "regions.items.eastAfrica.highlights",
          description: "regions.items.eastAfrica.description",
        },

        {
          image: southafrica,
          title: "regions.items.southernAfrica.title",
          countries: "regions.items.southernAfrica.countries",
          highlights: "regions.items.southernAfrica.highlights",
          description: "regions.items.southernAfrica.description",
        },

        {
          image: egypt,
          title: "regions.items.northAfrica.title",
          countries: "regions.items.northAfrica.countries",
          highlights: "regions.items.northAfrica.highlights",
          description: "regions.items.northAfrica.description",
        },

        {
          image: centralafrica,
          title: "regions.items.centralAfrica.title",
          countries: "regions.items.centralAfrica.countries",
          highlights: "regions.items.centralAfrica.highlights",
          description: "regions.items.centralAfrica.description",
        },

        {
          image: westafrica,
          title: "regions.items.westAfrica.title",
          countries: "regions.items.westAfrica.countries",
          highlights: "regions.items.westAfrica.highlights",
          description: "regions.items.westAfrica.description",
        },
      ].map((region, index) => (

        <div
          key={region.title}
          className={`grid items-center gap-16 lg:grid-cols-2 ${
            index % 2 === 1
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }`}
        >

          {/* ================= IMAGE ================= */}
          <div className="group relative overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src={region.image}
              alt={t(region.title)}
              className="h-[650px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white/10 p-6 backdrop-blur-xl">

              <h3 className="text-4xl font-black text-white">
                {t(region.title)}
              </h3>

            </div>

          </div>


          {/* ================= CONTENT ================= */}
          <div>

            <p className="font-bold uppercase tracking-[4px] text-emerald-600">
              {t(region.countries)}
            </p>

            <h3 className="mt-6 text-5xl font-black">
              {t("regions.explore")} {t(region.title)}
            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              {t(region.description)}
            </p>


            {/* Destination Highlights */}
            <div className="mt-10 rounded-[30px] bg-white p-8 shadow-xl">

              <h4 className="text-xl font-bold">
                {t("regions.destinationHighlights")}
              </h4>

              <p className="mt-4 leading-8 text-gray-600">
                {t(region.highlights)}
              </p>

            </div>


            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-4">

              {[
                "regions.tags.privateTours",
                "regions.tags.luxuryTravel",
                "regions.tags.wildlifeExperiences",
                "regions.tags.customizedItineraries",
              ].map((tag) => (

                <span
                  key={tag}
                  className="rounded-full bg-emerald-100 px-6 py-3 font-semibold text-emerald-700 transition hover:-translate-y-2"
                >
                  {t(tag)}
                </span>

              ))}

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-32 bg-[#0A1A13] text-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-20">

      <h2 className="text-5xl font-black">

        {t("adventureProcess.title")}

        <span className="block text-[#C8A94C]">
          {t("adventureProcess.titleHighlight")}
        </span>

      </h2>

    </div>

    {/* Steps */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

      {[
        "step1",
        "step2",
        "step3",
        "step4",
        "step5",
      ].map((step, index) => (

        <div
          key={step}
          className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/10"
        >

          {/* Number */}
          <div className="text-5xl font-black text-[#C8A94C]">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Title */}
          <h3 className="mt-6 text-2xl font-bold">
            {t(`adventureProcess.${step}.title`)}
          </h3>

          {/* Description */}
          <p className="mt-4 leading-7 text-gray-300">
            {t(`adventureProcess.${step}.description`)}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>


      {/* Why Choose Us */}

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