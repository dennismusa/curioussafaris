import { Link } from "react-router-dom";
import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";

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
        Curious Safaris
      </span>
    </div>

    {/* Heading */}
    <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
      Private, Customized
      <span className="mt-1 block text-[#C8A94C]">
        Unforgettable Journeys
      </span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
      Discover Africa through wildlife safaris, luxury tours,
      photography expeditions, beach holidays, and tailor-made
      adventures created around you.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

      <a
        href="destinations"
        className="inline-flex w-full items-center justify-center rounded-full bg-[#C8A94C] px-7 py-3 text-sm font-bold text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#D8BB63] sm:w-auto"
      >
        Explore Africa
        <span className="ml-2">→</span>
      </a>

      <a
        href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27d%20like%20to%20plan%20a%20trip."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black sm:w-auto"
      >
        Plan My Safari
      </a>

    </div>

    {/* Bottom highlights */}
    <div className="mx-auto mt-8 flex max-w-lg flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[1.5px] text-white/60 sm:text-xs">
      <span>Private Safaris</span>

      <span className="hidden h-1 w-1 rounded-full bg-[#C8A94C] sm:block" />

      <span>Tailor-Made Journeys</span>

      <span className="hidden h-1 w-1 rounded-full bg-[#C8A94C] sm:block" />

      <span>Across Africa</span>
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

        Personalized Travel

      </span>

      <h2 className="mt-8 text-5xl font-black md:text-6xl">

        Tailor-Made

        <span className="block text-[#C8A94C]">

          Journeys

        </span>

      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">

        No two travelers are the same. That's why every itinerary
        we create is carefully designed around your interests,
        travel style, preferred destinations, and budget.

      </p>

    </div>

    <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

      {/* Image */}

      <div className="group relative overflow-hidden rounded-[40px]">

        <img
          src={about1}
          alt="Tailor-made journeys"
          className="h-[700px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-8 left-8 rounded-3xl bg-white/10 p-6 backdrop-blur-xl">

          <h3 className="text-3xl font-black text-white">

            Your Journey.
            <br />
            Your Rules.

          </h3>

        </div>

      </div>

      {/* Content */}

      <div>

        <h3 className="text-4xl font-black">

          Build Your Perfect African Adventure

        </h3>

        <p className="mt-6 leading-8 text-gray-600">

          Whether you're planning a luxury safari, a photography
          expedition, a romantic honeymoon, or a family vacation,
          we'll create a personalized experience that matches your
          vision.

        </p>

        {/* Journey Builder */}

        <div className="mt-10 space-y-4">

          {[
            "Choose Your Destination",
            "Select Your Travel Style",
            "Pick Your Accommodation",
            "Customize Your Activities",
            "Choose Your Duration",
            "Receive Your Personalized Itinerary",
          ].map((step, index) => (

            <div
              key={index}
              className="flex items-center gap-5 rounded-3xl bg-white p-5 shadow-lg transition duration-500 hover:-translate-x-2"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">

                {index + 1}

              </div>

              <p className="font-semibold">

                {step}

              </p>

            </div>

          ))}

        </div>

        {/* Traveler Types */}

        <div className="mt-12 flex flex-wrap gap-4">

          {[
            "Solo Travelers",
            "Couples",
            "Families",
            "Luxury Travelers",
            "Photographers",
            "Adventure Seekers",
          ].map((item) => (

            <span
              key={item}
              className="rounded-full bg-white px-6 py-3 shadow-lg transition duration-300 hover:-translate-y-2"
            >

              {item}

            </span>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>

<section className="relative overflow-hidden bg-[#F7F5F0] py-32">

  <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-emerald-200/30 blur-[150px]" />

  <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-yellow-200/30 blur-[150px]" />

  <div className="mx-auto max-w-7xl px-6">

    <div className="mx-auto mb-28 max-w-4xl text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-3 text-xs font-bold uppercase tracking-[4px] text-emerald-700">
        Signature Experiences
      </span>

      <h2 className="mt-8 text-5xl font-black md:text-6xl">
        Experiences Designed
        <span className="block text-[#C8A94C]">
          Around Your Journey
        </span>
      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600">
        Curious Safaris specializes in private, customized, and
        unforgettable journeys across Africa. From wildlife encounters
        and luxury safaris to cultural expeditions and beach escapes,
        every itinerary is designed around your interests.
      </p>

    </div>

    {[
      {
        number: "01",
        title: "Wildlife Safaris",
        image: kenya,

        description:
          "Africa's wildlife is unlike anything else in the world. Our wildlife safaris take you deep into legendary destinations such as the Maasai Mara, Serengeti, Amboseli, Samburu, Kruger National Park, and the Okavango Delta.",

        details:
          "Track the Big Five, witness the Great Migration, enjoy sunrise and sunset game drives, and explore protected ecosystems with experienced guides who understand wildlife behavior and conservation.",

        features: [
          "Big Five Experiences",
          "Game Drives",
          "National Parks",
          "Walking Safaris",
        ],
      },

      {
        number: "02",
        title: "Luxury & Mid-Range Tours",
        image: cruiser2,

        description:
          "Whether you prefer five-star luxury or a carefully planned mid-range adventure, we create experiences that balance comfort, authenticity, and exploration.",

        details:
          "Stay in luxury lodges, boutique hotels, private camps, or carefully selected accommodations while enjoying personalized service, exclusive activities, and seamless travel planning.",

        features: [
          "Luxury Lodges",
          "Private Villas",
          "Boutique Camps",
          "Exclusive Experiences",
        ],
      },

      {
        number: "03",
        title: "Photography Expeditions",
        image: photography,

        description:
          "Designed for photographers and nature enthusiasts, our photography expeditions provide access to extraordinary landscapes, wildlife, and cultural experiences across Africa.",

        details:
          "Capture mountain gorillas in Uganda, the Great Migration in Tanzania, the Namib Desert, Victoria Falls, and Africa's most spectacular wildlife moments.",

        features: [
          "Wildlife Photography",
          "Landscape Tours",
          "Golden Hour Safaris",
          "Photo Expeditions",
        ],
      },

      {
        number: "04",
        title: "Horse-Riding Safaris",
        image: horse,

        description:
          "Experience Africa beyond traditional game drives through unique horseback adventures that bring you closer to nature.",

        details:
          "Ride across open plains, discover hidden landscapes, and enjoy immersive experiences that combine adventure, freedom, and unforgettable scenery.",

        features: [
          "Guided Riding",
          "Nature Trails",
          "Private Experiences",
          "Multi-Day Adventures",
        ],
      },

      {
        number: "05",
        title: "Cultural Experiences",
        image: culture,

        description:
          "Travel is about more than wildlife. Our cultural journeys introduce you to Africa's people, traditions, music, cuisine, and heritage.",

        details:
          "Visit local communities, explore ancient cities, experience traditional ceremonies, and connect with cultures across East, West, North, Central, and Southern Africa.",

        features: [
          "Local Communities",
          "Traditional Experiences",
          "Historical Sites",
          "Authentic Culture",
        ],
      },

      {
        number: "06",
        title: "Beach Holidays & Tailor-Made Adventures",
        image: diani,

        description:
          "Relax along Africa's spectacular coastlines or create a completely personalized itinerary designed specifically for you.",

        details:
          "From Zanzibar and the Kenyan coast to Morocco and South Africa, we combine beaches, safaris, culture, and adventure into one seamless experience.",

        features: [
          "Beach Escapes",
          "Custom Itineraries",
          "Private Travel",
          "Multi-Country Tours",
        ],
      },

    ].map((service, index) => (

      <div
        key={index}
        className="mb-24 grid items-center gap-14 lg:grid-cols-2"
      >

        <div
          className={`${
            index % 2 !== 0 ? "lg:order-2" : ""
          }`}
        >

          <div className="group relative overflow-hidden rounded-[40px]">

            <img
              src={service.image}
              alt={service.title}
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

        <div>

          <span className="uppercase tracking-[4px] text-[#C8A94C] font-bold">
            Premium Service
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            {service.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            {service.description}
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            {service.details}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            {service.features.map((feature) => (

              <span
                key={feature}
                className="rounded-full bg-emerald-50 px-6 py-3 font-medium text-emerald-700"
              >
                {feature}
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

    {/* Header */}

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-3 text-sm font-bold uppercase tracking-[4px] text-emerald-700">

        Across The African Continent

      </span>

      <h2 className="mt-8 text-5xl font-black md:text-7xl">

        Africa Without

        <span className="block text-[#C8A94C]">

          Boundaries

        </span>

      </h2>

      <p className="mt-8 text-lg leading-9 text-gray-600">

        Curious Safaris creates unforgettable journeys across East,
        Southern, North, West, and Central Africa. From world-famous
        wildlife destinations and pristine coastlines to ancient
        civilizations and vibrant cultures, we help travelers
        experience Africa without limitations.

      </p>

    </div>

    {/* Regions */}

    <div className="mt-24 space-y-24">

      {[
        {
          image: eastafrica,
          title: "East Africa",
          countries:
            "Kenya • Tanzania • Uganda • Rwanda",
          highlights:
            "Maasai Mara • Serengeti • Amboseli • Gorilla Trekking",
          description:
            "East Africa is home to some of the world's most iconic safari destinations. Witness the Great Migration across the Serengeti and Maasai Mara, track endangered mountain gorillas in Uganda and Rwanda, explore the vast plains of Amboseli beneath Mount Kilimanjaro, and discover an incredible diversity of wildlife, landscapes, and cultures.",
        },

        {
          image: southafrica,
          title: "Southern Africa",
          countries:
            "Namibia • Botswana • Zimbabwe • South Africa",
          highlights:
            "Victoria Falls • Okavango Delta • Namib Desert",
          description:
            "Southern Africa offers extraordinary landscapes and some of the continent's most luxurious safari experiences. Cruise through the waterways of the Okavango Delta, stand before the breathtaking Victoria Falls, explore the dramatic dunes of Namibia, and experience world-class wildlife encounters in South Africa and Botswana.",
        },

        {
          image: egypt,
          title: "North Africa",
          countries:
            "Egypt • Morocco",
          highlights:
            "The Pyramids • The Sahara • Imperial Cities",
          description:
            "North Africa combines ancient history with rich cultural experiences. Explore the pyramids of Egypt, wander through Morocco's historic medinas, discover centuries-old traditions, and experience the spectacular beauty of the Sahara Desert.",
        },

        {
          image: centralafrica,
          title: "Central Africa",
          countries:
            "Congo • Cameroon • Gabon",
          highlights:
            "Rainforests • Wildlife • Indigenous Cultures",
          description:
            "Central Africa reveals a different side of the continent. Dense rainforests, rare wildlife, extraordinary biodiversity, and authentic cultural encounters create unforgettable experiences for adventurous travelers seeking something beyond traditional safari routes.",
        },

        {
          image: westafrica,
          title: "West Africa",
          countries:
            "Ghana • Senegal • Benin • Ivory Coast",
          highlights:
            "Culture • Heritage • Coastal Experiences",
          description:
            "West Africa offers a fascinating combination of history, music, culture, and heritage. Explore historical landmarks, vibrant cities, traditional communities, and coastal destinations while discovering one of Africa's most culturally diverse regions.",
        },
      ].map((region, index) => (
        <div
          key={index}
          className={`grid items-center gap-16 lg:grid-cols-2 ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}

          <div className="group relative overflow-hidden rounded-[40px] shadow-2xl">

            <img
              src={region.image}
              alt={region.title}
              className="h-[650px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 rounded-3xl bg-white/10 p-6 backdrop-blur-xl">

              <h3 className="text-4xl font-black text-white">

                {region.title}

              </h3>

            </div>

          </div>

          {/* Content */}

          <div>

            <p className="font-bold uppercase tracking-[4px] text-emerald-600">

              {region.countries}

            </p>

            <h3 className="mt-6 text-5xl font-black">

              Explore {region.title}

            </h3>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              {region.description}

            </p>

            <div className="mt-10 rounded-[30px] bg-white p-8 shadow-xl">

              <h4 className="text-xl font-bold">

                Destination Highlights

              </h4>

              <p className="mt-4 leading-8 text-gray-600">

                {region.highlights}

              </p>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              {[
                "Private Tours",
                "Luxury Travel",
                "Wildlife Experiences",
                "Customized Itineraries",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-emerald-100 px-6 py-3 font-semibold text-emerald-700 transition hover:-translate-y-2"
                >
                  {tag}
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

    <div className="text-center mb-20">

      <h2 className="text-5xl font-black">

        How We Design

        <span className="block text-[#C8A94C]">
          Your Adventure
        </span>

      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">

      {[
        {
          step: "01",
          title: "Tell Us Your Dream",
          desc:
            "Share your travel ideas, preferred destinations, and expectations."
        },
        {
          step: "02",
          title: "We Design",
          desc:
            "Our team creates a personalized African itinerary."
        },
        {
          step: "03",
          title: "Customize",
          desc:
            "Refine every detail until your journey feels perfect."
        },
        {
          step: "04",
          title: "Confirm",
          desc:
            "Secure your accommodations, transportation, and activities."
        },
        {
          step: "05",
          title: "Explore",
          desc:
            "Travel confidently while we handle every detail."
        }

      ].map((item) => (

        <div
          key={item.step}
          className="rounded-3xl bg-white/5 p-8 backdrop-blur-xl"
        >

          <div className="text-5xl font-black text-[#C8A94C]">
            {item.step}
          </div>

          <h3 className="mt-6 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-300">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>



      {/* Why Choose Us */}

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