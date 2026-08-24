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




export default function Services1() {
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
        {t("services1.hero.brand")}
      </span>
    </div>

    {/* Heading */}
    <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
      {t("services1.hero.title")}

      <span className="mt-1 block text-[#C8A94C]">
        {t("services1.hero.titleHighlight")}
      </span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
      {t("services1.hero.description")}
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

      <a
        href="/destinations"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#C8A94C] px-7 py-3 text-sm font-bold text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D8BB63] sm:w-auto"
      >
        {t("services1.hero.explore")}
        <span className="ml-2">→</span>
      </a>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I'd%20like%20to%20plan%20a%20trip."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black sm:w-auto"
      >
        {t("services1.hero.planSafari")}
      </a>

    </div>

    {/* Bottom highlights */}
    <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[1.5px] text-white/60 sm:text-xs">

      <span>{t("services1.hero.highlight1")}</span>

      <span className="hidden h-1 w-1 rounded-full bg-[#C8A94C] sm:block" />

      <span>{t("services1.hero.highlight2")}</span>

      <span className="hidden h-1 w-1 rounded-full bg-[#C8A94C] sm:block" />

      <span>{t("services1.hero.highlight3")}</span>

    </div>

  </div>
</section>


{/* ================= 1-Day Nairobi Experience ================= */}
<section
  id="daytrip"
  className="relative overflow-hidden bg-[#F8F5ED] py-24 md:py-32"
>

  {/* ========================================================= */}
  {/* ADVANCED ANIMATION STYLES */}
  {/* ========================================================= */}

  <style>{`
    @keyframes floatSlow {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-18px);
      }
    }

    @keyframes floatReverse {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(15px) rotate(3deg);
      }
    }

    @keyframes shimmer {
      0% {
        transform: translateX(-120%);
      }
      100% {
        transform: translateX(120%);
      }
    }

    @keyframes pulseGlow {
      0%, 100% {
        opacity: .25;
        transform: scale(1);
      }
      50% {
        opacity: .55;
        transform: scale(1.08);
      }
    }

    @keyframes revealUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-float-slow {
      animation: floatSlow 7s ease-in-out infinite;
    }

    .animate-float-reverse {
      animation: floatReverse 8s ease-in-out infinite;
    }

    .animate-pulse-glow {
      animation: pulseGlow 5s ease-in-out infinite;
    }

    .animate-reveal-up {
      animation: revealUp .9s ease-out both;
    }
  `}</style>


  {/* ========================================================= */}
  {/* BACKGROUND DECORATIONS */}
  {/* ========================================================= */}

  <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8A94C]/10 blur-[140px] animate-pulse-glow" />

  <div className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-orange-400/10 blur-[140px] animate-pulse-glow" />

  <div className="pointer-events-none absolute left-[8%] top-[18%] hidden h-32 w-32 rounded-full border border-[#C8A94C]/20 md:block animate-float-slow" />

  <div className="pointer-events-none absolute right-[7%] top-24 hidden h-48 w-48 rounded-full border border-[#C8A94C]/20 md:block animate-float-reverse" />

  <div className="pointer-events-none absolute right-[10%] top-28 hidden h-40 w-40 rounded-full border border-[#C8A94C]/10 md:block" />


  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">


    {/* ========================================================= */}
    {/* CINEMATIC HEADER */}
    {/* ========================================================= */}

    <div className="mx-auto max-w-6xl">

      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

        {/* Text */}

        <div className="text-center lg:text-left animate-reveal-up">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">

            <span className="h-2 w-2 rounded-full bg-[#C8A94C] animate-pulse" />

            Nairobi Day Experience

          </span>


          <h2 className="mt-6 text-4xl font-black leading-[1.02] text-[#171510] md:text-6xl lg:text-7xl">

            One Day.

            <span className="block text-[#B28B2C]">
              Four Nairobi
            </span>

            <span className="block">
              Experiences.
            </span>

          </h2>


          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#6B6559] md:text-lg lg:mx-0">

            Discover a different side of Nairobi in a single unforgettable day.
            Combine wildlife, Kenyan culture, local food and the city's famous
            matatu culture into one carefully planned private experience.

          </p>


          {/* Quick Info */}

          <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">

            {[
              "1 Day",
              "6:00 AM – 5:30 PM",
              "Private Experience",
              "Professional Guide",
            ].map((item) => (

              <span
                key={item}
                className="rounded-full border border-[#C8A94C]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#514B40] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C8A94C]/50 hover:shadow-md"
              >
                {item}
              </span>

            ))}

          </div>

        </div>


        {/* Hero Image */}

        <div className="group relative animate-reveal-up">

          <div className="absolute -inset-4 rounded-[45px] bg-[#C8A94C]/10 blur-2xl transition duration-700 group-hover:bg-[#C8A94C]/20" />

          <div className="relative overflow-hidden rounded-[40px] border-8 border-white shadow-2xl">

            <img
              src="https://www.jetsetteralerts.com/content/images/2025/07/kenya-nairobi-national-park-giraffes.jpg"
              alt="Giraffes in Nairobi National Park with Nairobi skyline"
              loading="lazy"
              className="h-[420px] w-full object-cover transition duration-[1500ms] group-hover:scale-110 md:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />


            <div className="absolute bottom-6 left-6 right-6 text-white">

              <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#C8A94C]">
                Nairobi National Park
              </p>

              <h3 className="mt-2 text-2xl font-black md:text-3xl">
                Wildlife beside the city.
              </h3>

            </div>


            {/* Floating badge */}

            <div className="absolute right-5 top-5 rounded-2xl border border-white/20 bg-black/40 px-4 py-3 text-white backdrop-blur-md animate-float-slow">

              <p className="text-[10px] uppercase tracking-[2px] text-white/60">
                Experience
              </p>

              <p className="mt-1 text-sm font-bold">
                Safari + City
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================= */}
    {/* EXPERIENCE INTRO */}
    {/* ========================================================= */}

    <div className="mt-24 grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">


      {/* Main Experience Card */}

      <div className="group relative overflow-hidden rounded-[35px] bg-[#171510] p-8 text-white shadow-2xl md:p-10">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C8A94C]/10 blur-[80px]" />

        <div className="relative">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C8A94C] text-2xl text-[#171510] shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              ✦
            </div>

            <div>

              <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
                Experience Overview
              </p>

              <h3 className="mt-1 text-2xl font-black md:text-3xl">
                Nairobi, Your Way
              </h3>

            </div>

          </div>


          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300">

            Start your morning among Nairobi's wildlife before transitioning
            into the city's vibrant cultural and urban life. From the
            savannah landscapes of Nairobi National Park to Kenyan cuisine,
            colourful markets and graffiti-covered matatus, this experience
            gives you the opportunity to see, taste and experience Nairobi
            beyond the ordinary tourist route.

          </p>


          {/* Highlights */}

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

            {[
              ["Wildlife", "Nairobi National Park"],
              ["Culture", "Maasai Market"],
              ["Food", "Authentic Kenyan Lunch"],
              ["Urban", "Matatu Experience"],
            ].map(([title, text]) => (

              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-500 hover:-translate-y-2 hover:border-[#C8A94C]/40 hover:bg-white/[0.07]"
              >

                <p className="text-sm font-bold text-[#C8A94C]">
                  {title}
                </p>

                <p className="mt-2 text-xs leading-5 text-gray-400">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* Why This Experience */}

      <div className="rounded-[35px] border border-[#C8A94C]/20 bg-white p-8 shadow-xl md:p-10">

        <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          Why Choose This Experience?
        </p>

        <h3 className="mt-4 text-3xl font-black text-[#171510]">
          Nairobi beyond the ordinary.
        </h3>


        <div className="mt-8 space-y-5">

          {[
            {
              title: "Wildlife & City in One Day",
              text: "Experience Nairobi National Park and the energy of the city without needing a multi-day itinerary.",
            },
            {
              title: "Local Experiences",
              text: "Go beyond sightseeing with Kenyan food, markets and authentic urban culture.",
            },
            {
              title: "Flexible & Personal",
              text: "The experience can be adapted around your schedule, interests and preferred comfort level.",
            },
            {
              title: "Perfect for Short Stays",
              text: "Ideal for visitors with a free day, business travellers, stopovers and first-time visitors to Nairobi.",
            },
          ].map((item, index) => (

            <div
              key={item.title}
              className="group flex gap-4 border-b border-gray-100 pb-5 last:border-0"
            >

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8A94C]/10 text-sm font-bold text-[#B28B2C] transition duration-300 group-hover:bg-[#C8A94C] group-hover:text-white">
                {index + 1}
              </div>

              <div>

                <h4 className="font-bold text-[#171510]">
                  {item.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ========================================================= */}
    {/* IMAGE EXPERIENCE STRIP */}
    {/* ========================================================= */}

    <div className="mt-24">

      <div className="mb-10 text-center">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          See Nairobi Differently
        </span>

        <h3 className="mt-4 text-4xl font-black text-[#171510] md:text-5xl">
          Wildlife. Culture. City.
        </h3>

      </div>


      <div className="grid gap-5 md:grid-cols-3">


        {/* Wildlife */}

        <div className="group relative overflow-hidden rounded-[30px]">

          <img
            src="https://www.jetsetteralerts.com/content/images/2025/07/kenya-nairobi-national-park-giraffes.jpg"
            alt="Giraffes at Nairobi National Park"
            loading="lazy"
            className="h-[420px] w-full object-cover transition duration-[1200ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
              Wildlife
            </p>

            <h4 className="mt-2 text-2xl font-black">
              Nairobi National Park
            </h4>

          </div>

        </div>


        {/* Market */}

        <div className="group relative overflow-hidden rounded-[30px]">

          <img
  src="https://africanspicesafaris.com/wp-content/uploads/2020/06/maasai-market-nairobi-1-418x418.jpg"
  alt="Maasai Market Nairobi"
  loading="lazy"
  className="h-[420px] w-full object-cover transition duration-[1200ms] group-hover:scale-110"
/>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
              Culture
            </p>

            <h4 className="mt-2 text-2xl font-black">
              Maasai Market
            </h4>

          </div>

        </div>


        {/* Matatu */}

        <div className="group relative overflow-hidden rounded-[30px]">

          <img
            src="https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D375%2Cheight%3D375%2Cdpr%3D2/tour_img/2b3169270590adde33c315b30f47dbbdec2036c4bca1920c528cdcd661668286.jpg"
            alt="Nairobi matatu culture"
            loading="lazy"
            className="h-[420px] w-full object-cover transition duration-[1200ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
              Urban Culture
            </p>

            <h4 className="mt-2 text-2xl font-black">
              Matatu Culture
            </h4>

          </div>

        </div>

      </div>

    </div>


    {/* ========================================================= */}
    {/* DAILY TIMELINE */}
    {/* ========================================================= */}

    <div className="mt-28">

      <div className="mb-12 text-center">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          Your Day in Nairobi
        </span>

        <h3 className="mt-4 text-4xl font-black text-[#171510] md:text-5xl">
          From sunrise to city lights.
        </h3>

      </div>


      <div className="relative mx-auto max-w-5xl">

        {/* Timeline */}

        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#C8A94C] via-[#D6B98C] to-transparent md:block" />


        <div className="space-y-8">

          {[
            {
              time: "6:00 AM",
              title: "Nairobi National Park Game Drive",
              description:
                "Begin your adventure with an early morning hotel pick-up and drive into Nairobi National Park. Search for lions, rhinos, giraffes, zebras, buffaloes and other wildlife while enjoying the unique experience of a national park just outside the city.",
              icon: "🦁",
              image:
                "https://www.jetsetteralerts.com/content/images/2025/07/kenya-nairobi-national-park-giraffes.jpg",
            },
            {
              time: "10:30 AM",
              title: "Museum of Illusions",
              description:
                "Step into a world of interactive optical illusions and immersive rooms. Enjoy creative photography opportunities and a fun experience that adds a completely different dimension to your Nairobi adventure.",
              icon: "◈",
              image:
                "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
            },
            {
              time: "12:30 PM",
              title: "Authentic Kenyan Lunch",
              description:
                "Take a break and enjoy a genuine Kenyan food experience featuring local favourites such as nyama choma, ugali, chapati, sukuma wiki and pilau while experiencing the warmth of Kenyan hospitality.",
              icon: "🍽",
              image:
                "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
            },
            {
              time: "2:00 PM",
              title: "Maasai Market",
              description:
                "Explore colourful handmade crafts, jewellery, African fabrics, artwork and souvenirs while meeting local traders and artisans.",
              icon: "◆",
              image:
                "https://africanspicesafaris.com/wp-content/uploads/2020/06/maasai-market-nairobi-1-418x418.jpg",
            },
            {
              time: "3:30 PM",
              title: "Nairobi Matatu Culture",
              description:
                "Discover one of Nairobi's most distinctive urban cultures. See graffiti-covered matatus, learn about music, fashion and street art, and enjoy a guided matatu experience through selected city routes.",
              icon: "🚐",
              image:
                "https://cdn.getyourguide.com/image/format%3Dauto%2Cfit%3Dcrop%2Cgravity%3Dauto%2Cquality%3D60%2Cwidth%3D375%2Cheight%3D375%2Cdpr%3D2/tour_img/2b3169270590adde33c315b30f47dbbdec2036c4bca1920c528cdcd661668286.jpg",
            },
            {
              time: "5:30 PM",
              title: "Drop-Off",
              description:
                "Return to your hotel, accommodation or preferred location after a full day of wildlife, culture, food and Nairobi's vibrant urban experiences.",
              icon: "→",
              image:
                "https://matatournairobi.com/assets/nairobi-sunset-skyline-BvYES8WY.jpg",
            },
          ].map((item, index) => (

            <div
              key={item.time}
              className="group relative md:pl-16"
            >

              {/* Timeline Number */}

              <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-[#F8F5ED] bg-[#C8A94C] text-sm font-bold shadow-lg md:flex z-10">
                {index + 1}
              </div>


              {/* Timeline Card */}

              <div className="overflow-hidden rounded-[30px] border border-gray-100 bg-white shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl">

                <div className="grid md:grid-cols-[260px_1fr]">

                  {/* Image */}

                  <div className="group/image relative h-56 overflow-hidden md:h-full">

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-[1200ms] group-hover/image:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />

                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-xl shadow-lg backdrop-blur-sm">
                      {item.icon}
                    </div>

                  </div>


                  {/* Content */}

                  <div className="p-6 md:p-8">

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="rounded-full bg-[#C8A94C]/10 px-3 py-1 text-xs font-bold text-[#96731F]">
                        {item.time}
                      </span>

                      <span className="text-xs uppercase tracking-[2px] text-gray-400">
                        Experience {index + 1}
                      </span>

                    </div>


                    <h4 className="mt-3 text-2xl font-black text-[#171510]">
                      {item.title}
                    </h4>


                    <p className="mt-3 text-sm leading-7 text-gray-600 md:text-base">
                      {item.description}
                    </p>


                    <div className="mt-5 h-px w-0 bg-[#C8A94C] transition-all duration-700 group-hover:w-full" />

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ========================================================= */}
    {/* PRICING */}
    {/* ========================================================= */}

    <div className="mt-28">

      <div className="text-center">

        <span className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
          Choose Your Experience
        </span>

        <h3 className="mt-4 text-4xl font-black text-[#171510] md:text-5xl">
          Travel at your preferred level.
        </h3>

        <p className="mx-auto mt-5 max-w-2xl text-gray-600">
          Choose from a budget-friendly experience, elevated mid-luxury
          option or a fully private luxury day in Nairobi.
        </p>

      </div>


      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {[
          {
            name: "Budget Experience",
            price: "120",
            description:
              "A comfortable and affordable way to experience Nairobi.",
            image:
              "https://www.jetsetteralerts.com/content/images/2025/07/kenya-nairobi-national-park-giraffes.jpg",
            features: [
              "Transport",
              "Professional guide",
              "Nairobi National Park game drive",
              "Museum of Illusions",
              "Local food experience",
              "Matatu culture experience",
            ],
          },
          {
            name: "Mid-Luxury Experience",
            price: "160",
            description:
              "More comfort and a more personalized Nairobi experience.",
            image:
              "https://iloveafrica.com/wp-content/uploads/2023/04/Maasai-Market-Nairobi-Kenya-1536x1152.jpg",
            features: [
              "Private experience",
              "Professional guide",
              "Wildlife game drive",
              "Museum experience",
              "Authentic Kenyan lunch",
              "Maasai Market",
              "Guided matatu experience",
            ],
            featured: true,
          },
          {
            name: "Luxury Private Experience",
            price: "220",
            description:
              "A premium private experience designed around your preferences.",
            image:
              "https://matatournairobi.com/assets/nairobi-sunset-skyline-BvYES8WY.jpg",
            features: [
              "Private transport",
              "Dedicated professional guide",
              "Private wildlife experience",
              "Museum of Illusions",
              "Premium local food experience",
              "Personalized city experience",
              "Private matatu culture experience",
            ],
          },
        ].map((plan) => (

          <div
            key={plan.name}
            className={`group relative overflow-hidden rounded-[30px] border transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
              plan.featured
                ? "border-[#C8A94C] bg-[#171510] text-white shadow-xl"
                : "border-gray-100 bg-white text-[#171510] shadow-lg"
            }`}
          >

            {/* Pricing Image */}

            <div className="relative h-44 overflow-hidden">

              <img
                src={plan.image}
                alt={plan.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 ${
                  plan.featured
                    ? "bg-gradient-to-t from-[#171510] via-[#171510]/30 to-transparent"
                    : "bg-gradient-to-t from-black/60 via-transparent to-transparent"
                }`}
              />

            </div>


            {plan.featured && (

              <span className="absolute right-6 top-5 rounded-full bg-[#C8A94C] px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-[#171510] shadow-lg">
                Popular
              </span>

            )}


            <div className="p-8">

              <p
                className={`text-xs font-bold uppercase tracking-[2px] ${
                  plan.featured
                    ? "text-[#C8A94C]"
                    : "text-[#B28B2C]"
                }`}
              >
                {plan.name}
              </p>


              <div className="mt-5 flex items-end gap-2">

                <span className="text-5xl font-black">
                  ${plan.price}
                </span>

                <span
                  className={`pb-2 text-sm ${
                    plan.featured
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  / person
                </span>

              </div>


              <p
                className={`mt-5 text-sm leading-6 ${
                  plan.featured
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>


              <div className="mt-7 space-y-3">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8A94C]/10 text-xs text-[#B28B2C]">
                      ✓
                    </span>

                    <span
                      className={`text-sm ${
                        plan.featured
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>


      {/* Pricing Note */}

      <div className="mt-8 rounded-2xl border border-[#C8A94C]/20 bg-white p-5 text-center shadow-sm">

        <p className="text-sm leading-6 text-gray-500">

          <span className="font-bold text-[#171510]">
            Important:
          </span>{" "}

          Prices are from USD 120 per person. Nairobi National Park fees
          vary according to nationality and are confirmed at booking.
          The current international non-resident fee provided by Curious
          Safaris is USD 80 per adult. Museum of Illusions admission is
          listed at KES 1,600 for adults.

        </p>

      </div>

    </div>


    {/* ========================================================= */}
    {/* PERFECT FOR */}
    {/* ========================================================= */}

    <div className="relative mt-28 overflow-hidden rounded-[40px] bg-[#171510] text-white shadow-2xl">

      {/* Background image */}

      <div className="absolute inset-0">

        <img
          src="https://matatournairobi.com/assets/nairobi-sunset-skyline-BvYES8WY.jpg"
          alt="Nairobi skyline at sunset"
          loading="lazy"
          className="h-full w-full object-cover opacity-30 transition duration-[2000ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#171510] via-[#171510]/90 to-[#171510]/60" />

      </div>


      <div className="relative grid items-center gap-10 p-8 lg:grid-cols-[1fr_auto] lg:p-14">

        <div>

          <span className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
            Perfect For
          </span>

          <h3 className="mt-4 text-3xl font-black md:text-5xl">
            A day in Nairobi you'll actually remember.
          </h3>

          <p className="mt-5 max-w-3xl leading-7 text-gray-400">
            This experience is ideal for first-time visitors, couples,
            solo travellers, families, business travellers, airport
            stopovers and anyone who wants to experience Nairobi's
            wildlife and culture without committing to a longer safari.
          </p>

        </div>


        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">

          {[
            "Couples",
            "Families",
            "Solo Travellers",
            "Business Travellers",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-center text-sm font-semibold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#C8A94C]/40 hover:bg-[#C8A94C]/10"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </div>


    {/* ========================================================= */}
    {/* FINAL CTA */}
    {/* ========================================================= */}

    <div className="relative mt-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#B28B2C] to-[#96731F] px-6 py-16 text-center text-white shadow-2xl md:px-12">

      {/* Animated background circles */}

      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl animate-float-slow" />

      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-black/10 blur-3xl animate-float-reverse" />


      <div className="relative">

        <p className="text-xs font-bold uppercase tracking-[3px] text-white/70">
          Ready to Explore Nairobi?
        </p>

        <h3 className="mt-4 text-3xl font-black md:text-5xl">
          Make your day in Nairobi unforgettable.
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Contact Curious Safaris and let us tailor the experience around
          your schedule, interests and preferred travel style.
        </p>


        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <a
            href="https://wa.me/254745861688"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-[#171510] px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-2xl"
          >

            Plan This Experience

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>

          </a>


          <a
            href="mailto:info@curioussafaris.com"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/60 px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#96731F]"
          >
            Ask a Question
          </a>

        </div>

      </div>

    </div>


  </div>

</section>
  

 ```jsx
{/* ================= Safari Itineraries ================= */}
<section className="relative overflow-hidden bg-[#F7F3EA] py-24 md:py-32">

  {/* ================= Background Effects ================= */}
  <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#C8A94C]/10 blur-[140px] animate-pulse" />
  <div className="pointer-events-none absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#D6B98C]/15 blur-[140px]" />

  {/* Floating Decorations */}
  <div className="pointer-events-none absolute right-[5%] top-20 hidden h-40 w-40 rounded-full border border-[#C8A94C]/20 md:block animate-[spin_30s_linear_infinite]" />
  <div className="pointer-events-none absolute right-[7%] top-24 hidden h-32 w-32 rounded-full border border-[#C8A94C]/10 md:block" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================= HEADER ================= */}
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex items-center gap-2 rounded-full bg-[#C8A94C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-[#96731F]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#C8A94C]" />
        Safari Itineraries
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight text-[#171510] md:text-5xl lg:text-6xl">
        Your Africa.
        <span className="block text-[#B28B2C]">
          Your Way.
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#6B6559] md:text-lg">
        Curious Safaris creates carefully designed journeys across Kenya
        and Africa — from short getaways and daily Nairobi experiences to
        luxury multi-country expeditions.
      </p>

    </div>


    {/* ================= SAFARI STYLES ================= */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
          icon: "🌿",
          label: "Affordable",
          title: "Budget Safaris",
          text:
            "Perfect for travelers who want an authentic African adventure without spending too much.",
          features: [
            "Affordable camps & lodges",
            "Shared or private options",
            "Flexible itineraries",
            "Great for groups & solo travelers",
          ],
        },
        {
          image:
            "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=1200&q=85",
          icon: "🏕️",
          label: "Comfort & Value",
          title: "Mid-Range",
          text:
            "The ideal balance between comfort, wildlife, service and affordability.",
          features: [
            "Comfortable lodges & camps",
            "Private 4×4 options",
            "Professional guides",
            "Excellent wildlife locations",
          ],
        },
        {
          image:
            "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85",
          icon: "✦",
          label: "Elevated",
          title: "Mid-Luxury",
          text:
            "A refined safari experience with premium accommodation and personalized service.",
          features: [
            "Premium lodges & camps",
            "Private safari vehicles",
            "Personalized game drives",
            "Enhanced dining experiences",
          ],
          featured: true,
        },
        {
          image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
          icon: "✧",
          label: "Exclusive",
          title: "Luxury Safaris",
          text:
            "Exceptional comfort, privacy and highly personalized African experiences.",
          features: [
            "Luxury lodges & camps",
            "Private Land Cruisers",
            "Private transfers",
            "Premium experiences",
          ],
        },
      ].map((item, index) => (

        <div
          key={item.title}
          className={`group relative overflow-hidden rounded-[30px] border transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${
            item.featured
              ? "border-[#C8A94C]/40 bg-[#242119] text-white shadow-xl"
              : "border-[#DED6C8] bg-white text-[#171510] shadow-sm"
          }`}
        >

          {/* Image */}
          <div className="relative h-52 overflow-hidden">

            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
            />

            <div
              className={`absolute inset-0 ${
                item.featured
                  ? "bg-gradient-to-t from-[#242119] via-[#242119]/30 to-transparent"
                  : "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
              }`}
            />

            {/* Number */}
            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-sm font-bold text-white backdrop-blur-md">
              0{index + 1}
            </div>

            {/* Icon */}
            <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8A94C] text-xl text-[#171510] shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
              {item.icon}
            </div>

          </div>


          {/* Content */}
          <div className="p-7">

            <p
              className={`text-xs font-bold uppercase tracking-[3px] ${
                item.featured
                  ? "text-[#C8A94C]"
                  : "text-[#B28B2C]"
              }`}
            >
              {item.label}
            </p>

            <h3 className="mt-2 text-2xl font-black">
              {item.title}
            </h3>

            <p
              className={`mt-4 text-sm leading-7 ${
                item.featured
                  ? "text-gray-300"
                  : "text-[#6B6559]"
              }`}
            >
              {item.text}
            </p>

            <ul
              className={`mt-6 space-y-2 text-sm ${
                item.featured
                  ? "text-gray-300"
                  : "text-[#514C43]"
              }`}
            >
              {item.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 transition duration-300 group-hover:translate-x-1"
                >
                  <span className="font-bold text-[#C8A94C]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>

      ))}

    </div>


    {/* ================= SPECIALIZED ITINERARIES ================= */}
    <div className="mt-24">

      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

        <div>

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#B28B2C]">
            Tailor-Made Experiences
          </p>

          <h3 className="mt-3 text-3xl font-black text-[#171510] md:text-4xl">
            Travel for every
            <span className="text-[#B28B2C]"> kind of explorer.</span>
          </h3>

        </div>

        <p className="max-w-md text-sm leading-7 text-[#6B6559]">
          Tell us what inspires you and we can create an itinerary around
          your interests, schedule and budget.
        </p>

      </div>


      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {[
          {
            image:
              "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=85",
            icon: "🦁",
            title: "Wildlife & Big Five",
            text:
              "Maasai Mara, Amboseli, Tsavo, Samburu, Nakuru, Serengeti & Ngorongoro.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=900&q=85",
            icon: "❤️",
            title: "Honeymoon & Romance",
            text:
              "Private game drives, luxury camps, romantic experiences and safari + beach escapes.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=85",
            icon: "👨‍👩‍👧",
            title: "Family Safaris",
            text:
              "Child-friendly programs, comfortable accommodation and flexible activities.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85",
            icon: "🐎",
            title: "Horse Riding Safaris",
            text:
              "Explore Maasai Mara, Laikipia and conservancies on horseback.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85",
            icon: "📷",
            title: "Photography Safaris",
            text:
              "Wildlife, Great Migration and bird photography with specialized guides.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=85",
            icon: "🥁",
            title: "Culture & Community",
            text:
              "Maasai villages, local food, traditions, matatu culture and community tourism.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&q=85",
            icon: "🏔️",
            title: "Adventure",
            text:
              "Hiking, mountain climbing, walking safaris, boat trips and hot-air balloon adventures.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85",
            icon: "🏖️",
            title: "Beach & Bush",
            text:
              "Combine safari with Diani, Mombasa, Zanzibar, Mozambique and other coastal destinations.",
          },
          {
            image:
              "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85",
            icon: "🌍",
            title: "Multi-Country Africa",
            text:
              "Kenya, Tanzania, Uganda, Rwanda and Southern Africa circuits from 10–30+ days.",
          },
        ].map((item) => (

          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[28px] border border-[#DED6C8] bg-white shadow-sm transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A94C]/50 hover:shadow-2xl"
          >

            {/* Image */}
            <div className="relative h-48 overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-xl shadow-lg backdrop-blur">
                {item.icon}
              </div>

              <span className="absolute right-4 top-4 text-xl text-[#C8A94C] opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                ↗
              </span>

            </div>


            <div className="p-6">

              <h4 className="text-lg font-black text-[#171510]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#6B6559]">
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>


    {/* ================= NAIROBI FEATURE ================= */}
    <div className="mt-24 overflow-hidden rounded-[40px] bg-[#211F1A] text-white shadow-2xl">

      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

        {/* Image */}
        <div className="group relative min-h-[450px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1400&q=90"
            alt="Nairobi wildlife experience"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1500ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-[#211F1A]/90 lg:bg-gradient-to-r" />

          <div className="absolute bottom-8 left-8">

            <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[2px] backdrop-blur-md">
              Nairobi
            </span>

            <p className="mt-4 text-3xl font-black">
              Wildlife meets<br />
              city life.
            </p>

          </div>

        </div>


        {/* Content */}
        <div className="relative flex flex-col justify-center p-8 md:p-12">

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#C8A94C]/10 blur-3xl" />

          <p className="relative text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
            Explore Nairobi
          </p>

          <h3 className="relative mt-4 text-3xl font-black md:text-4xl">
            Daily Nairobi
            <span className="block text-[#C8A94C]">
              Wildlife Safaris
            </span>
          </h3>

          <p className="relative mt-5 max-w-lg text-sm leading-7 text-gray-300">
            Short on time? Experience Nairobi National Park with our
            convenient morning and afternoon safari departures.
          </p>


          <div className="relative mt-8 grid gap-3 sm:grid-cols-2">

            {[
              ["🌅", "Morning Safari", "6:00 AM – 10:00 AM"],
              ["🌇", "Afternoon Safari", "2:00 PM – 6:00 PM"],
            ].map(([icon, title, time]) => (

              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#C8A94C]/40 hover:bg-[#C8A94C]/10"
              >

                <span className="text-2xl transition duration-500 group-hover:scale-125">
                  {icon}
                </span>

                <h4 className="mt-3 font-bold">
                  {title}
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  {time}
                </p>

              </div>

            ))}

          </div>


          <div className="relative mt-8">

            <p className="text-xs font-bold uppercase tracking-[3px] text-[#C8A94C]">
              One Day in Nairobi
            </p>

            <h4 className="mt-3 text-2xl font-black">
              Wildlife. Culture. City life.
            </h4>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              Combine Nairobi National Park with culture, local food,
              the Maasai Market, Museum of Illusions and Nairobi's famous
              matatu culture.
            </p>


            <div className="mt-7 flex flex-wrap gap-3">

              {[
                "National Park",
                "Local Food",
                "Maasai Market",
                "Matatu Culture",
                "Museum of Illusions",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-gray-300 transition duration-300 hover:border-[#C8A94C]/40 hover:bg-[#C8A94C]/10"
                >
                  {item}
                </span>

              ))}

            </div>


            <a
              href="https://wa.me/254745861688"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#C8A94C] px-7 py-4 font-bold text-[#211F1A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#DFC66D] hover:shadow-xl"
            >
              Plan My Nairobi Experience

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>

          </div>

        </div>

      </div>

    </div>


    {/* ================= FINAL STATEMENT ================= */}
    <div className="mx-auto mt-20 max-w-3xl text-center">

      <div className="mx-auto mb-6 h-px w-20 bg-[#C8A94C]" />

      <p className="text-xl font-bold text-[#171510] md:text-2xl">
        From a weekend escape to a complete African expedition.
      </p>

      <p className="mt-3 text-sm leading-7 text-[#6B6559]">
        Curious Safaris creates personalized journeys designed around
        your interests, schedule, comfort and budget.
      </p>

      <div className="mt-7 flex justify-center gap-2">

        <span className="h-2 w-2 rounded-full bg-[#C8A94C] animate-pulse" />
        <span className="h-2 w-2 rounded-full bg-[#C8A94C]/60" />
        <span className="h-2 w-2 rounded-full bg-[#C8A94C]/30" />

      </div>

    </div>

  </div>

</section>
```


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