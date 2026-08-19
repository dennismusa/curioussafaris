/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";
import { useState, useEffect } from "react";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";

//import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import image16 from "../assets/image16.jpg";
import image4 from "../assets/image4.jpg";
import image2 from "../assets/image2.jpg";
import west from "../assets/west.jpg";
import amboseli from "../assets/amboseli.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
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
function Home() {
  useLanguageSync();
  const images = [airbaloon, egypt,morocco,image10];
  const [index, setIndex] = useState(0);
const aboutImages = [airbaloon, egypt,morocco,image10,west,amboseli];
const [aboutIndex,setAboutIndex]=useState(0);
const [smallAboutIndex,setSmallAboutIndex]=useState(1);


  // ================= REVIEWS STATE =================
  const [reviews, setReviews] = useState([]);
   const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  
const [loading, setLoading] = useState(false);
const [loadingReviews, setLoadingReviews] = useState(false);
const [success, setSuccess] = useState(false);


  // ================= SLIDER =================
  useEffect(()=>{

const slider=setInterval(()=>{

// HERO SLIDER
setIndex(prev=>(prev + 1) % images.length);

// ABOUT SLIDER
setAboutIndex(prev=>(prev + 1) % aboutImages.length);
setSmallAboutIndex(prev=>(prev + 1) % aboutImages.length);

},4000);



    return () => clearInterval(slider);
  }, [aboutImages.length, images.length]);

  // ================= SUBMIT REVIEW (IMPORTANT PART 2) =================
 
// instantly update UI

  
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">


      
<section
  id="destinations"
  className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center overflow-hidden"
>
  {/* IMAGE SLIDER */}

  <div className="absolute inset-0">
    {[airbaloon, egypt,morocco,diani].map((img, i) => (
      <div
        key={i}
        className="absolute inset-0 transition-all duration-[3500ms] ease-in-out"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: i === index ? 1 : 0,
          transform: i === index ? "scale(1)" : "scale(1.06)",
        }}
      />
    ))}
  </div>

  {/* OVERLAYS */}

  <div className="absolute inset-0 bg-black/50" />

  <div className="absolute inset-0 bg-gradient-to-r from-[#022c22]/95 via-black/60 to-transparent" />

  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

  {/* LIGHT EFFECTS */}

  <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse" />

  <div className="absolute bottom-[-150px] right-[-100px] h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[130px]" />

  {/* CONTENT */}

  <div className="relative z-20 mx-auto w-full max-w-7xl px-5 md:px-8">
    <div className="max-w-2xl text-white">
      {/* BADGE */}

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-300/30 bg-white/10 px-5 py-2 backdrop-blur-xl">
        <div className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />

        <span className="text-[10px] uppercase tracking-[4px] text-emerald-200 md:text-xs">
          Curious Safaris
        </span>
      </div>

      {/* TITLE */}

      <h1 className="max-w-xl text-3xl font-black leading-tight drop-shadow-xl sm:text-4xl md:text-5xl">
        Discover Africa's Most Extraordinary Destinations
      </h1>

      {/* DESCRIPTION */}

      <p className="mt-4 max-w-lg text-sm leading-7 text-gray-200 sm:text-base">
        Explore iconic wildlife reserves, breathtaking landscapes,
        and unforgettable adventures across East Africa.
      </p>

      {/* BUTTON */}

      <div className="mt-8">
        <Link
          to="/Destinations"
          className="rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
        >
          Explore adventures
        </Link>
      </div>
    </div>
  </div>

  {/* SLIDER DOTS */}

  <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
    {[meru, kenya, amboseli, Wilderbeast].map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`rounded-full transition-all duration-700 ${
          i === index
            ? "h-12 w-2 bg-yellow-400 shadow-lg shadow-yellow-400/50"
            : "h-2 w-2 bg-white/40 hover:bg-white"
        }`}
      />
    ))}
  </div>
</section>

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
            src={destination1}
            alt="Curious Safaris African adventure"
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
              Explore Africa
            </h3>

          </div>

        </div>

        {/* Floating Destination Badge */}
        <div className="absolute left-5 top-6 rounded-2xl border border-white/70 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-md sm:left-7 sm:top-8">

          <h2 className="text-3xl font-black text-[#0B6E4F]">
            15+
          </h2>

          <p className="text-xs font-medium text-gray-600">
            African Destinations
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

          Discover Africa

          <span className="mt-3 block text-[#0B6E4F]">
            Lost in the Right Direction
          </span>

        </h2>

        {/* Description */}
        <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">

          From the legendary plains of the Serengeti and Maasai Mara
          to the misty forests of Rwanda and Uganda, Curious Safaris
          creates unforgettable journeys across Africa.

        </p>

        <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 lg:text-lg">

          Experience extraordinary wildlife, breathtaking landscapes,
          vibrant cultures, tropical coastlines and carefully crafted
          adventures designed around your travel dreams.

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
                Wildlife Safaris
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Explore Africa's most iconic national parks and
                discover the Big Five.
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
                Gorilla & Primate Experiences
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Trek through ancient rainforests in search of
                mountain gorillas and chimpanzees.
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
                Culture & Coastal Escapes
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Discover vibrant cultures, ancient cities,
                waterfalls, deserts and pristine beaches across Africa.
              </p>

            </div>

          </div>

        </div>


        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="/contact"
            className="rounded-full bg-[#0B6E4F] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#09583F]"
          >
            Plan Your Safari
          </a>

          <a
            href="/destinations"
            className="rounded-full border-2 border-[#0B6E4F] px-7 py-3.5 text-sm font-bold text-[#0B6E4F] transition duration-300 hover:bg-[#0B6E4F] hover:text-white"
          >
            Explore Destinations
          </a>

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
        Our Destinations
      </span>

      <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">

        Discover Africa's

        <span className="block text-[#C8A94C]">
          Most Extraordinary Places
        </span>

      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">

        Curious Safaris takes you beyond traditional sightseeing and
        into the heart of Africa's most remarkable destinations.

        From the legendary wildlife reserves of East Africa to the
        ancient civilizations of North Africa and the breathtaking
        landscapes of Southern Africa, every journey is designed to
        create meaningful and unforgettable travel experiences.

      </p>

    </div>

    {/* Destination Cards */}

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

  {[
{
  title: "Kenya",
  image:
    kenya,
  desc:
    "Witness the Great Migration, discover the Maasai Mara, explore Amboseli beneath Mount Kilimanjaro and experience unforgettable Big Five safaris.",
},

{
  title: "Tanzania",
  image:
    tanzania,
  desc:
    "Explore the Serengeti, Tarangire and the spectacular Ngorongoro Crater while experiencing some of Africa's most iconic wildlife destinations.",
},

{
  title: "Uganda",
  image:
    "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1200&q=85",
  desc:
    "Track mountain gorillas and chimpanzees through ancient rainforests while discovering Uganda's remarkable wildlife and landscapes.",
},

{
  title: "Rwanda",
  image:
    luangwa,
  desc:
    "Discover the Land of a Thousand Hills through gorilla trekking, volcanic landscapes and unforgettable cultural experiences.",
},

{
  title: "Botswana",
  image:
    victoria1,
  desc:
    "Experience the incredible Okavango Delta, Chobe National Park and some of Africa's most exclusive safari experiences.",
},

{
  title: "Zimbabwe",
  image:
    zambezi,
  desc:
    "Explore the breathtaking Victoria Falls, Hwange National Park and the dramatic landscapes of Matobo.",
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

        Why Explore Africa With Curious Safaris?

      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">🛻</div>

          <h3 className="mt-5 text-xl font-bold">
            Private Safaris
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Enjoy personalized journeys with private guides and
            comfortable safari vehicles.
          </p>

        </div>

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">🌍</div>

          <h3 className="mt-5 text-xl font-bold">
            Multiple Destinations
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Explore East, Central, Southern and North Africa through
            carefully designed itineraries.
          </p>

        </div>

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">📸</div>

          <h3 className="mt-5 text-xl font-bold">
            Authentic Experiences
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Experience wildlife, local cultures, history, beaches and
            adventure in one unforgettable journey.
          </p>

        </div>

        <div className="rounded-3xl bg-[#F8F6F1] p-8">

          <div className="text-4xl">🤝</div>

          <h3 className="mt-5 text-xl font-bold">
            Tailor-Made Tours
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            Every itinerary can be customized to match your travel
            style, interests and budget.
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

              Start Your Journey

            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

              Africa Is Waiting To Be Discovered

            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">

              Whether you dream of tracking mountain gorillas,
              witnessing the Great Migration, exploring ancient
              civilizations or relaxing on tropical beaches,
              Curious Safaris will help you create an unforgettable
              African adventure.

            </p>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                15+
              </h3>

              <p className="mt-3 text-gray-300">
                African Destinations
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                20+
              </h3>

              <p className="mt-3 text-gray-300">
                Safari Experiences
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                24/7
              </h3>

              <p className="mt-3 text-gray-300">
                Travel Support
              </p>

            </div>

            <div className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                100%
              </h3>

              <p className="mt-3 text-gray-300">
                Tailor-Made Journeys
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
        Curious Safaris
      </span>

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        Africa by the Numbers
      </h2>

      <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
        Every journey is designed around your curiosity, your pace and the
        experiences you want to remember.
      </p>
    </div>

    {/* Statistics */}
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {[
        {
          number: "15+",
          title: "African Destinations",
          desc: "Discover extraordinary places across the continent.",
        },
        {
          number: "20+",
          title: "Safari Experiences",
          desc: "From wildlife adventures to cultural journeys.",
        },
        {
          number: "100%",
          title: "Tailor-Made Tours",
          desc: "Travel plans created around your interests.",
        },
        {
          number: "24/7",
          title: "Travel Support",
          desc: "We're here whenever you need us.",
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
        Your Journey Starts Here
      </span>

      <h2 className="text-4xl font-bold tracking-tight text-[#17231F] sm:text-5xl">
        Planning Your Safari
        <span className="block text-[#0B6E4F]">
          Made Simple
        </span>
      </h2>

      <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
        From your first idea to the moment you set foot in Africa,
        we make planning your journey simple, personal and stress-free.
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
            title: "Choose a Destination",
            desc:
              "Tell us where you'd like to go and the kind of African experience you're looking for.",
          },
          {
            number: "02",
            title: "Customize Your Itinerary",
            desc:
              "We'll create a personalized itinerary around your interests, schedule and travel style.",
          },
          {
            number: "03",
            title: "Confirm Your Booking",
            desc:
              "Once everything looks perfect, we'll handle the arrangements and confirm your journey.",
          },
          {
            number: "04",
            title: "Travel & Explore Africa",
            desc:
              "All that's left is to arrive, relax and experience the Africa you've been dreaming about.",
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
        Start Planning Your Safari
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
        {t("whyChooseUs")}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {t("whyTitlePart1")}{" "}
        <span className="text-[#D4AF37]">
          {t("whyTitleHighlight")}
        </span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8">
        {t("whyDescription")}
      </p>

    </div>

    {/* FEATURE CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🦁</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("expertGuidesTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("expertGuidesDesc")}
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🚙</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("luxuryTravelTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("luxuryTravelDesc")}
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">🌍</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("ecoTourismTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("ecoTourismDesc")}
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 hover:-translate-y-2 transition duration-500">

        <div className="text-5xl mb-5">⭐</div>

        <h3 className="text-2xl font-bold mb-4">
          {t("trustedServiceTitle")}
        </h3>

        <p className="text-gray-300 leading-7">
          {t("trustedServiceDesc")}
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

        Traveler Reviews

      </span>

      <h2 className="mt-6 text-5xl font-black text-gray-900">

        Stories From Our

        <span className="block text-[#C8A94C]">

          Happy Travelers

        </span>

      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">

        Every journey tells a story. Discover why travelers continue
        to trust Curious Safaris for personalized African adventures.

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

              Based on Google Reviews

            </p>

          </div>

          <div className="hidden h-24 w-px bg-gray-200 md:block"></div>

          <div>

            <h3 className="text-2xl font-bold">

              Trusted by Travelers

            </h3>

            <p className="mt-4 max-w-lg leading-8 text-gray-600">

              Guests consistently praise our personalized service,
              well-planned itineraries, luxury experiences, affordable
              pricing, and unforgettable wildlife adventures.

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

          "Traveling with Curious Safaris was one of the best decisions
          we made. Everything was seamless from start to finish. The
          itinerary was well thought out, the accommodations were
          luxurious, and the wildlife encounters were breathtaking."

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

              Google Review

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

          "Affordable prices and top-notch service."

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

              Google Review

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

          Google Rating

        </p>

      </div>

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">

          2+

        </h3>

        <p className="mt-3 text-gray-600">

          Verified Reviews

        </p>

      </div>

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">

          100%

        </h3>

        <p className="mt-3 text-gray-600">

          Personalized Trips

        </p>

      </div>

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">

          24/7

        </h3>

        <p className="mt-3 text-gray-600">

          Travel Support

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
    ⭐ Write a Google Review
  </a>

  <a
  href="https://www.google.com/maps/search/?api=1&query=Curious+Safaris,+Ruiru,+Kenya&query_place_id=ChIJ5WRKPtUTLxgR3jaUiiu327U"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 rounded-2xl border-2 border-[#0B6E4F] text-[#0B6E4F] font-bold hover:bg-[#0B6E4F] hover:text-white hover:-translate-y-1 transition duration-300"
>
  💬 View Google Profile
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
      {/* Company */}

      <div>
        <h2 className="text-4xl font-black">
          Curious
          <span className="text-[#C8A94C]"> Safaris</span>
        </h2>

        <div className="mt-4 h-1 w-20 rounded-full bg-[#C8A94C]" />

        <p className="mt-6 leading-8 text-gray-400">
          Curious Safaris is an Africa-based travel company
          offering private, customized, and unforgettable
          journeys across Africa.
        </p>

        <p className="mt-4 leading-8 text-gray-400">
          Explore wildlife safaris, luxury tours, beach holidays,
          horse-riding adventures, photography trips, cultural
          experiences, and tailor-made journeys across the
          continent.
        </p>

        {/* Social Icons */}

        <div className="mt-8 flex gap-4">
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
              link: "https://wa.me/254745861688",
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
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-500 hover:-translate-y-2 hover:border-emerald-700 hover:bg-emerald-700"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}

      <div>
        <h3 className="mb-8 text-2xl font-bold">
          Quick Links
        </h3>

        <div className="space-y-5">
          {[
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            
            { name: "Gallery", path: "/gallery" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 text-gray-400 transition-all duration-300 hover:translate-x-2 hover:text-[#C8A94C]"
            >
              <FaArrowRight className="text-xs" />

              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}

      <div>
        <h3 className="mb-8 text-2xl font-bold">
          Contact Us
        </h3>

        <div className="space-y-6">
          {/* WhatsApp */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700">
              <FaWhatsapp />
            </div>

            <div>
              <p className="font-semibold">
                WhatsApp
              </p>

              <a
                href="https://wa.me/254745861688"
                className="text-gray-400 hover:text-white"
              >
                +254 745 861 688
              </a>
            </div>
          </div>

          {/* Africa */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700">
              <FaGlobe />
            </div>

            <div>
              <p className="font-semibold">
                Destinations
              </p>

              <p className="text-gray-400">
                East, West, North, Central & Southern Africa
              </p>
            </div>
          </div>

          {/* Location */}

          <div className="flex gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-emerald-700/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-700">
              <FaMapMarkerAlt />
            </div>

            <div>
              <p className="font-semibold">
                Based In
              </p>

              <p className="text-gray-400">
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom */}

    <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
      <p className="text-center text-gray-500 md:text-left">
        © {new Date().getFullYear()}

        <span className="font-semibold text-[#C8A94C]">
          {" "}
          Curious Safaris
        </span>

        . All Rights Reserved.
      </p>

      <div className="flex items-center gap-6 text-sm">
        <Link
          to="/privacy"
          className="text-gray-500 transition hover:text-[#C8A94C]"
        >
          Privacy Policy
        </Link>

        <span className="text-white/20">|</span>

        <Link
          to="/terms"
          className="text-gray-500 transition hover:text-[#C8A94C]"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  </div>

  {/* Scroll To Top */}

  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#C8A94C] text-black shadow-2xl transition duration-300 hover:scale-110"
  >
    <FaChevronUp />
  </button>
</footer>
    </div>
  );
}

export default Home;
