import { Link } from "react-router-dom";
import {  FaFacebookF,  FaInstagram,  FaWhatsapp,  FaYoutube,  FaArrowRight,  FaMapMarkerAlt,  FaChevronUp,  FaGlobe,} from "react-icons/fa";
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
  return (
    <div className="bg-white">
     {/* Hero Section */}

<section className="relative min-h-[55vh] overflow-hidden bg-[#102F27] sm:min-h-[58vh] lg:min-h-[60vh]">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={destination}
      alt="African safari destination"
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
            Explore Africa
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Extraordinary
          <span className="block text-[#C8A94C]">
            Destinations
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          Discover iconic wildlife reserves, breathtaking landscapes,
          tropical beaches, and unforgettable safari experiences across Africa.
        </p>

        {/* Buttons */}
        

      </div>
    </div>
  </div>

  {/* Bottom Info */}
  <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 lg:px-12">

      <span className="hidden text-[9px] font-semibold uppercase tracking-[2px] text-white/60 sm:block">
        Safari Destinations
      </span>

      <div className="flex flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[1.5px] text-white/60 sm:text-[10px]">
        <span>Kenya</span>
        <span className="text-[#C8A94C]">•</span>
        <span>Tanzania</span>
        <span className="text-[#C8A94C]">•</span>
        <span>Uganda</span>
        <span className="text-[#C8A94C]">•</span>
        <span>Rwanda</span>
      </div>

    </div>
  </div>

</section>

{/* ================= Kenya Safari Destination ================= */}

<section className="relative overflow-hidden bg-white py-32">

  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}

    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        Kenya Safari
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">

        7-Day Kenya Safari

        <span className="mt-2 block text-[#C8A94C]">
          Lost in the Right Direction
        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">

        Experience Kenya's most iconic wildlife destinations, from the
        elephant-filled plains of Amboseli and the beautiful Great Rift
        Valley to the legendary Maasai Mara. Discover incredible wildlife,
        spectacular landscapes and authentic Kenyan culture on one
        unforgettable safari.

      </p>

    </div>


    {/* Destination Images */}

    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* Amboseli */}

      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={amboseli}
          alt="Amboseli National Park elephants"
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Amboseli
          </h3>

          <p className="mt-2 text-gray-600">
            Famous for elephants and spectacular views of Mount Kilimanjaro.
          </p>

        </div>

      </div>


      {/* Naivasha */}

      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={naivasha}
          alt="Lake Naivasha"
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Lake Naivasha
          </h3>

          <p className="mt-2 text-gray-600">
            Enjoy a scenic boat ride and walking safari among wildlife.
          </p>

        </div>

      </div>


      {/* Nakuru */}

      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={nakuru}
          alt="Lake Nakuru National Park"
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Lake Nakuru
          </h3>

          <p className="mt-2 text-gray-600">
            Discover rhinos, lions, giraffes and the beautiful Rift Valley.
          </p>

        </div>

      </div>


      {/* Maasai Mara */}

      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={Wilderbeast}
          alt="Maasai Mara National Reserve"
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Maasai Mara
          </h3>

          <p className="mt-2 text-gray-600">
            Home to the Big Five, endless plains and unforgettable safaris.
          </p>

        </div>

      </div>

    </div>


    {/* Safari Details */}

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Details */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>Duration:</strong> 7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong> Nairobi – Amboseli – Naivasha –
            Nakuru – Maasai Mara – Nairobi
          </p>

          <p>
            <strong>Transport:</strong> Private 4×4 Land Cruiser
            with pop-up roof
          </p>

          <p>
            <strong>Best For:</strong> Couples, solo travellers,
            families and groups
          </p>

          <p>
            <strong>Highlights:</strong> Mount Kilimanjaro views,
            elephants, Great Rift Valley, rhinos, Big Five and
            Maasai Mara.
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[

            "Day 1: Nairobi → Amboseli National Park",

            "Day 2: Full Day Amboseli",

            "Day 3: Amboseli → Lake Naivasha",

            "Day 4: Naivasha → Lake Nakuru → Maasai Mara",

            "Day 5: Full Day Maasai Mara",

            "Day 6: Maasai Mara Full Day",

            "Day 7: Maasai Mara → Nairobi",

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


    {/* Pricing */}

    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        Kenya Safari Pricing
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[

          "1 Person\nUSD 2,200",

          "2 People\nUSD 1,650",

          "3–4 People\nUSD 1,450",

          "5–6 People\nUSD 1,300",

          "7+ People\nUSD 1,200",

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


    {/* Included */}

    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        What's Included
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[

          "6 nights accommodation",

          "Private 4×4 Land Cruiser with pop-up roof",

          "Professional English-speaking safari guide",

          "All park and reserve entry fees",

          "Full-board meals during the safari",

          "Game drives",

          "Lake Naivasha boat ride",

          "Crescent Island walking safari",

          "Bottled drinking water",

          "Nairobi pick-up and drop-off",

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


    {/* Closing */}

    <div className="mt-20 text-center">

      <p className="text-xl font-bold text-emerald-700">
        Curious Safaris
      </p>

      <p className="mt-3 text-2xl font-black text-gray-900 md:text-3xl">
        Lost in the right direction.
      </p>

    </div>
{/* Final CTA */}

<div className="mt-20 rounded-[40px] bg-emerald-700 px-8 py-16 text-center text-white">

  <p className="text-sm font-bold uppercase tracking-[4px] text-emerald-100">
    Curious Safaris
  </p>

  <h3 className="mt-4 text-4xl font-black md:text-5xl">
    Lost in the right direction.
  </h3>

  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
    Experience Kenya's iconic wildlife, breathtaking landscapes and
    unforgettable safari adventures on a 7-day journey through Amboseli,
    Naivasha, Nakuru and the Maasai Mara.
  </p>

  <a
    href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Kenya%20Safari."
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    Book This Safari
    <span className="ml-2">→</span>
  </a>

</div>
  </div>

</section>


{/* ================= Tanzania Safari Destination ================= */}

<section className="relative overflow-hidden bg-white py-32">

  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}

    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        Tanzania Safari
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">

        7-Day Tanzania Safari

        <span className="mt-2 block text-[#C8A94C]">
          The Ultimate Wildlife Adventure
        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">

        Experience Tanzania's most celebrated wildlife destinations,
        from the giant baobab trees of Tarangire to the endless plains
        of the Serengeti and the breathtaking Ngorongoro Crater.
        Witness the Big Five, discover diverse landscapes, and enjoy
        one of Africa's most extraordinary safari adventures.

      </p>

    </div>


    {/* Destination Images */}

    <div className="mt-20 grid gap-6 md:grid-cols-3">

      {/* Tarangire */}

      <div className="group overflow-hidden rounded-[35px]">

        <img
  src="https://www.flightsafaris.com/resources/destinations/tarangire-national-park.jpg"
  alt="Elephants and baobabs in Tarangire National Park, Tanzania"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Tarangire
          </h3>

          <p className="mt-2 text-gray-600">
            Famous for elephants, ancient baobab trees and spectacular
            wildlife.
          </p>

        </div>

      </div>


      {/* Serengeti */}

      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={serengeti}
          alt="Serengeti National Park Tanzania"
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Serengeti
          </h3>

          <p className="mt-2 text-gray-600">
            Home to the Great Migration, Big Five and endless golden plains.
          </p>

        </div>

      </div>


      {/* Ngorongoro */}

      <div className="group overflow-hidden rounded-[35px]">

        <img
          src={ngorongoro}
          alt="Ngorongoro Crater Tanzania"
          className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
        />

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Ngorongoro Crater
          </h3>

          <p className="mt-2 text-gray-600">
            One of Africa's most spectacular wildlife destinations,
            home to incredible landscapes and diverse wildlife.
          </p>

        </div>

      </div>

    </div>


    {/* Safari Details */}

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Details */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>Duration:</strong> 7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong> Arusha – Tarangire –
            Serengeti – Ngorongoro – Arusha
          </p>

          <p>
            <strong>Transport:</strong> Private 4×4 safari
            vehicle with pop-up roof
          </p>

          <p>
            <strong>Highlights:</strong> Great Migration,
            Big Five, Tarangire elephants and the
            Ngorongoro Crater
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[

            "Day 1: Arusha → Tarangire National Park",

            "Day 2: Tarangire → Serengeti",

            "Day 3: Full-Day Serengeti Safari",

            "Day 4: Serengeti Exploration",

            "Day 5: Serengeti → Ngorongoro",

            "Day 6: Ngorongoro Crater → Karatu",

            "Day 7: Karatu → Arusha",

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


    {/* Pricing */}

    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        Tanzania Safari Pricing
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[

          "1 Person\nUSD 2,400",

          "2 People\nUSD 1,850",

          "3–4 People\nUSD 1,600",

          "5–6 People\nUSD 1,450",

          "7+ People\nUSD 1,350",

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


    {/* Included */}

    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        What's Included
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[

          "6 nights accommodation",

          "Private 4×4 safari vehicle with pop-up roof",

          "Professional English-speaking safari guide",

          "Park and conservation fees",

          "Full-board meals during the safari",

          "Game drives",

          "Bottled drinking water",

          "Arusha airport/hotel pick-up and drop-off",

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


    {/* Closing */}

    <div className="mt-20 text-center">

      <p className="text-xl font-bold text-emerald-700">
        Curious Safaris
      </p>

      <p className="mt-3 text-2xl font-black text-gray-900 md:text-3xl">
        Explore Tanzania, from the Great Migration to the Ngorongoro Crater.
      </p>

    </div>
{/* Final CTA */}

<div className="mt-20 rounded-[40px] bg-emerald-700 px-8 py-16 text-center text-white">

  <p className="text-sm font-bold uppercase tracking-[4px] text-emerald-100">
    Curious Safaris
  </p>

  <h3 className="mt-4 text-4xl font-black md:text-5xl">
    The Ultimate Wildlife Adventure.
  </h3>

  <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
    Discover Tanzania's legendary Serengeti, incredible Tarangire elephants
    and breathtaking Ngorongoro Crater on an unforgettable 7-day safari.
  </p>

  <a
    href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Tanzania%20Safari."
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    Book This Safari
    <span className="ml-2">→</span>
  </a>

</div>
  </div>

</section>

{/* ================= Uganda Safari Destination ================= */}

<section className="relative overflow-hidden bg-white py-32">

  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}

    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        Uganda Safari
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
        7-Day Uganda Safari
        <span className="mt-2 block text-[#C8A94C]">
          Gorillas, Chimpanzees & Wildlife
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">
        Experience Uganda's incredible rainforests, savannahs and
        mountain landscapes. Track chimpanzees in Kibale Forest,
        enjoy unforgettable wildlife encounters in Queen Elizabeth
        National Park and trek through Bwindi in search of mountain gorillas.
      </p>

    </div>


    {/* Destination Images */}

    <div className="mt-20 grid gap-6 md:grid-cols-3">

      {/* Kibale */}

      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">

          <img
  src="https://cdn.generationvoyage.fr/2024/01/babobab-elephant-Tarangire.jpeg"
  alt="Elephants beneath a baobab tree in Tarangire National Park"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Kibale Forest
          </h3>

          <p className="mt-2 text-gray-600">
            Uganda's primate capital and home to incredible chimpanzee
            tracking experiences.
          </p>

        </div>

      </div>


      {/* Queen Elizabeth */}

      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">

          <img
  src="https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/900x/040ec09b1e35df139433887a97daa66f/h/e/herd_of_elephants_drinking_water_in_queen_elizabeth_national_park_uganda_1_1.jpg"
  alt="Elephant herd at Kazinga Channel, Queen Elizabeth National Park"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Queen Elizabeth
          </h3>

          <p className="mt-2 text-gray-600">
            Discover elephants, lions, buffaloes, hippos and
            spectacular wildlife along the Kazinga Channel.
          </p>

        </div>

      </div>


      {/* Bwindi */}

      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">

          <img
  src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85"
  alt="Dense rainforest in Bwindi Impenetrable Forest, Uganda"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Bwindi Impenetrable Forest
          </h3>

          <p className="mt-2 text-gray-600">
            Trek through ancient rainforest in search of
            Uganda's incredible mountain gorillas.
          </p>

        </div>

      </div>

    </div>


    {/* Safari Details */}

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>Duration:</strong> 7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong> Entebbe – Kibale –
            Queen Elizabeth – Bwindi – Entebbe
          </p>

          <p>
            <strong>Transport:</strong> Private 4×4 safari
            vehicle
          </p>

          <p>
            <strong>Highlights:</strong> Gorilla trekking,
            chimpanzee tracking, Big Five wildlife,
            Kazinga Channel boat safari and rainforest
            experiences
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            "Day 1: Entebbe → Kibale Forest",
            "Day 2: Chimpanzee Tracking",
            "Day 3: Kibale → Queen Elizabeth",
            "Day 4: Queen Elizabeth Safari & Kazinga Channel",
            "Day 5: Queen Elizabeth → Bwindi",
            "Day 6: Gorilla Trekking",
            "Day 7: Bwindi → Entebbe",
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


    {/* Pricing */}

    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        Uganda Safari Pricing
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 3,200",
          },
          {
            group: "2 People",
            price: "USD 2,400",
          },
          {
            group: "3–4 People",
            price: "USD 2,100",
          },
          {
            group: "5–6 People",
            price: "USD 1,900",
          },
          {
            group: "7+ People",
            price: "USD 1,750",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-3 text-2xl font-black">
              {item.price}
            </p>

            <p className="mt-1 text-sm text-white/50">
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* Included */}

    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        What's Included
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private 4×4 safari vehicle",
          "Professional English-speaking guide",
          "Chimpanzee tracking permit",
          "Gorilla trekking permit",
          "Park and conservation fees",
          "Game drives",
          "Kazinga Channel boat safari",
          "Full-board meals",
          "Bottled drinking water",
          "Entebbe/Kampala pick-up",
          "Entebbe/Kampala drop-off",
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1"
          >

            <p className="font-semibold text-gray-700">
              <span className="mr-2 text-emerald-700">
                ✓
              </span>

              {item}
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
        Where the rainforest meets the wild.
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
        Experience Uganda's gorillas, chimpanzees and incredible
        wildlife on an unforgettable 7-day adventure.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Uganda%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Rwanda Safari Destination ================= */}

<section className="relative overflow-hidden bg-white py-32">

  {/* Background Effects */}
  <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-[160px]" />
  <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[160px]" />

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Header */}

    <div className="text-center">

      <span className="rounded-full bg-emerald-100 px-6 py-2 text-sm font-bold uppercase tracking-[4px] text-emerald-700">
        Rwanda Safari
      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
        7-Day Rwanda Safari
        <span className="mt-2 block text-[#C8A94C]">
          Gorillas, Wildlife & African Culture
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-gray-600">
        Discover Rwanda, the Land of a Thousand Hills. Experience the
        vibrant streets of Kigali, incredible wildlife in Akagera,
        mountain gorillas in Volcanoes National Park and the peaceful
        beauty of Lake Kivu.
      </p>

    </div>


    {/* Destination Images */}

    <div className="mt-20 grid gap-6 md:grid-cols-3">

      {/* Kigali */}

      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">

          <img
  src="https://www.diastate.com/images/city-kigali.jpg"
  alt="Kigali city Rwanda"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Kigali
          </h3>

          <p className="mt-2 text-gray-600">
            Explore Rwanda's clean and vibrant capital,
            rich in history, culture and welcoming people.
          </p>

        </div>

      </div>


      {/* Akagera */}

      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">
<img
  src="https://media0.faz.net/image/29d0684205d2/w1656h1071x38y52/202010/1.7074603/sie-sind-zurueck.webp"
  alt="Elephants in Akagera National Park Rwanda"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Akagera National Park
          </h3>

          <p className="mt-2 text-gray-600">
            Discover elephants, lions, giraffes, zebras,
            buffaloes and spectacular savannah landscapes.
          </p>

        </div>

      </div>


      {/* Volcanoes */}

      <div className="group overflow-hidden rounded-[35px]">

        <div className="overflow-hidden">

          <img
  src="https://rezkit-tour-images.b-cdn.net/01h7ywwd7at70t98wdj69emng5/images/01JTNC6WC8J69RG7BZQN8KS4ZF.jpg?aspect_ratio=1500%3A1126.2975778547"
  alt="Misty rainforest in Volcanoes National Park Rwanda"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        </div>

        <div className="bg-white p-6 text-center">

          <h3 className="text-2xl font-bold">
            Volcanoes National Park
          </h3>

          <p className="mt-2 text-gray-600">
            Trek through misty mountain forests in search
            of Rwanda's incredible mountain gorillas.
          </p>

        </div>

      </div>

    </div>


    {/* Safari Details */}

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {/* Details */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-8 space-y-5 text-gray-600">

          <p>
            <strong>Duration:</strong> 7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong> Kigali – Akagera –
            Volcanoes National Park – Lake Kivu – Kigali
          </p>

          <p>
            <strong>Transport:</strong> Private 4×4 safari
            vehicle
          </p>

          <p>
            <strong>Highlights:</strong> Gorilla trekking,
            Akagera wildlife, golden monkeys, Lake Ihema
            boat safari and Rwanda's rich culture
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[35px] bg-[#F8F6F1] p-10 shadow-xl lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival & Kigali City Tour",
            "Day 2: Kigali → Akagera National Park",
            "Day 3: Full-Day Akagera Safari",
            "Day 4: Akagera → Volcanoes National Park",
            "Day 5: Gorilla Trekking",
            "Day 6: Golden Monkey Trekking / Cultural Experience",
            "Day 7: Volcanoes → Kigali",
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


    {/* Pricing */}

    <div className="mt-20 rounded-[40px] bg-[#0A1A13] p-12 text-white">

      <h3 className="text-center text-4xl font-black">
        Rwanda Safari Pricing
      </h3>

      <div className="mt-12 grid gap-6 md:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 3,100",
          },
          {
            group: "2 People",
            price: "USD 2,350",
          },
          {
            group: "3–4 People",
            price: "USD 2,050",
          },
          {
            group: "5–6 People",
            price: "USD 1,850",
          },
          {
            group: "7+ People",
            price: "USD 1,700",
          },
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/15"
          >

            <p className="text-sm font-medium text-white/60">
              {item.group}
            </p>

            <p className="mt-3 text-2xl font-black">
              {item.price}
            </p>

            <p className="mt-1 text-sm text-white/50">
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* What's Included */}

    <div className="mt-20 rounded-[40px] bg-[#F8F6F1] p-12">

      <h3 className="text-center text-4xl font-black">
        What's Included
      </h3>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private 4×4 safari vehicle",
          "Professional English-speaking guide",
          "Gorilla trekking permit",
          "Golden monkey trekking",
          "Akagera National Park fees",
          "Game drives",
          "Lake Ihema boat safari",
          "Full-board meals",
          "Bottled drinking water",
          "Kigali airport pick-up",
          "Kigali airport drop-off",
        ].map((item, index) => (

          <div
            key={index}
            className="rounded-2xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-1"
          >

            <p className="font-semibold text-gray-700">

              <span className="mr-2 text-emerald-700">
                ✓
              </span>

              {item}

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
        Discover Rwanda, the Land of a Thousand Hills.
      </h3>

      <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
        From incredible mountain gorillas to unforgettable wildlife
        encounters and vibrant African culture, Rwanda is waiting
        to be discovered.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Uganda%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>
    </div>

  </div>

</section>

{/* ================= Ethiopia Adventure ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">


    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Ethiopia Adventure
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Ethiopia Adventure

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          History, Culture & Wildlife
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Discover Ethiopia's extraordinary blend of ancient history,
        living culture and dramatic landscapes. Explore the rock-hewn
        churches of Lalibela, the historic castles of Gondar and the
        breathtaking Simien Mountains.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">


      {/* Lalibela */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"
            alt="Lalibela Ethiopia"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Lalibela
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover the remarkable rock-hewn churches and
            centuries of Ethiopian spiritual history.
          </p>

        </div>

      </div>


      {/* Gondar */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1600172454284-934feca24ccd?auto=format&fit=crop&w=1200&q=85"
            alt="Gondar Ethiopia"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Gondar
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Explore royal castles, historic churches and
            the fascinating legacy of Ethiopia's imperial city.
          </p>

        </div>

      </div>


      {/* Simien Mountains */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85"
            alt="Simien Mountains Ethiopia"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Simien Mountains
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Experience dramatic cliffs, deep valleys and
            encounters with endemic gelada baboons.
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">


      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Tour Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Addis Ababa – Lalibela – Gondar –
            Simien Mountains – Addis Ababa
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private vehicle and domestic flights
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Lalibela's rock-hewn churches, Gondar's royal
            history, Simien Mountains, gelada baboons,
            Ethiopian culture and traditional cuisine
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Addis Ababa",
            "Day 2: Addis Ababa → Lalibela",
            "Day 3: Full Day Lalibela",
            "Day 4: Lalibela → Gondar",
            "Day 5: Gondar → Simien Mountains",
            "Day 6: Full Day Simien Mountains",
            "Day 7: Simien Mountains → Addis Ababa",
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
        Ethiopia Tour Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private tour pricing based on the number of travellers.
      </p>


      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 2,400",
          },
          {
            group: "2 People",
            price: "USD 1,750",
          },
          {
            group: "3–4 People",
            price: "USD 1,500",
          },
          {
            group: "5–6 People",
            price: "USD 1,350",
          },
          {
            group: "7+ People",
            price: "USD 1,250",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private transportation",
          "Domestic flights mentioned in itinerary",
          "Professional English-speaking guide",
          "Entrance fees for listed attractions",
          "Simien Mountains activities",
          "Full-board meals",
          "Airport transfers",
          "Bottled drinking water",
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


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Discover Ethiopia
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Where ancient history, dramatic landscapes and living
        culture come together.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Congo Adventure ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">


    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Congo Adventure
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Congo Adventure

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Gorillas, Rainforest & Wild Africa
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Journey into the extraordinary landscapes of eastern Africa,
        from the volcanic shores of Lake Kivu and the rainforests of
        Virunga to the remarkable eastern lowland gorillas of
        Kahuzi-Biéga.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">


      {/* Goma */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85"
            alt="Goma and Lake Kivu"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Goma & Lake Kivu
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Experience Goma's volcanic landscapes and the
            spectacular scenery surrounding Lake Kivu.
          </p>

        </div>

      </div>


      {/* Virunga */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
            alt="Virunga rainforest and wildlife"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Virunga National Park
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover volcanic landscapes, ancient rainforest
            and one of Africa's most remarkable wilderness areas.
          </p>

        </div>

      </div>


      {/* Kahuzi-Biéga */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
            alt="Gorilla trekking in Congo"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Kahuzi-Biéga
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Trek through rainforest in search of the incredible
            eastern lowland gorillas.
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">


      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Adventure Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Kigali – Goma – Virunga –
            Kahuzi-Biéga – Kigali
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private 4×4 vehicle and regional transfers
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Mountain gorillas, eastern lowland gorillas,
            Virunga rainforest, Lake Kivu, volcanic landscapes
            and eastern Congo's unique wilderness
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Kigali → Goma",
            "Day 2: Goma & Lake Kivu",
            "Day 3: Goma → Virunga National Park",
            "Day 4: Gorilla Trekking",
            "Day 5: Virunga → Bukavu",
            "Day 6: Kahuzi-Biéga National Park",
            "Day 7: Bukavu → Kigali",
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
        Congo Adventure Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private adventure pricing based on the number of travellers.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 3,500",
          },
          {
            group: "2 People",
            price: "USD 2,600",
          },
          {
            group: "3–4 People",
            price: "USD 2,300",
          },
          {
            group: "5–6 People",
            price: "USD 2,100",
          },
          {
            group: "7+ People",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private 4×4 transportation",
          "Professional English-speaking guide",
          "Gorilla trekking permits",
          "National park fees",
          "Listed activities and excursions",
          "Full-board meals",
          "Bottled drinking water",
          "Kigali pick-up",
          "Kigali drop-off",
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
            Important Travel & Security Information
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-700 sm:text-base">
            Eastern DRC is a security-sensitive destination, and
            access to Virunga and other areas can change. This
            itinerary should only be confirmed after checking
            current park access, border conditions and official
            travel advisories.
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
        Discover the Congo Beyond the Ordinary.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Explore extraordinary rainforests, volcanic landscapes,
        Lake Kivu and unforgettable gorilla experiences.
      </p>

      <button
        className="mt-7 w-full rounded-2xl bg-white px-7 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mt-8 sm:w-auto sm:px-8"
      >
        Enquire About This Adventure
      </button>

    </div>

  </div>

</section>

{/* ================= Zambia Safari Destination ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Zambia Safari
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Zambia Safari

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Victoria Falls & South Luangwa
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Experience the power of Victoria Falls, cruise along the
        Zambezi River and discover the extraordinary wildlife of
        South Luangwa National Park. From walking safaris to
        unforgettable night drives, explore Zambia at its wildest.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Victoria Falls */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
  src={victoria1}
  alt="Victoria Falls Zambia"
  className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
/>

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Victoria Falls
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Experience one of the world's greatest natural
            wonders and watch the Zambezi flow into the gorge.
          </p>

        </div>

      </div>


      {/* Zambezi */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={zambezi}
            alt="Zambezi River Zambia"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Zambezi River
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Enjoy a peaceful sunset cruise while watching
            hippos, crocodiles and elephants along the river.
          </p>

        </div>

      </div>


      {/* South Luangwa */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={luangwa}
            alt="South Luangwa wildlife safari"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            South Luangwa
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover elephants, lions, leopards, wild dogs
            and unforgettable walking and night safaris.
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Livingstone – Victoria Falls –
            South Luangwa National Park
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private 4×4 safari vehicle and domestic flight
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Victoria Falls, Zambezi sunset cruise,
            South Luangwa wildlife, walking safari,
            night safari and spectacular African landscapes
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Livingstone",
            "Day 2: Victoria Falls & Zambezi",
            "Day 3: Livingstone → South Luangwa",
            "Day 4: Full-Day South Luangwa Safari",
            "Day 5: Walking Safari & Game Drive",
            "Day 6: Full-Day Wildlife Experience",
            "Day 7: South Luangwa → Livingstone",
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
        Zambia Safari Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private safari pricing based on the number of travellers.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 3,000",
          },
          {
            group: "2 People",
            price: "USD 2,200",
          },
          {
            group: "3–4 People",
            price: "USD 1,900",
          },
          {
            group: "5–6 People",
            price: "USD 1,700",
          },
          {
            group: "7+ People",
            price: "USD 1,550",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private safari transportation",
          "Professional English-speaking guide",
          "Domestic flights mentioned in itinerary",
          "Victoria Falls visit",
          "Zambezi sunset cruise",
          "Game drives",
          "Guided walking safari",
          "Park fees",
          "Full-board meals",
          "Bottled drinking water",
          "Airport transfers",
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

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          💦
        </div>

        <h3 className="mt-4 text-xl font-black">
          Victoria Falls
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Witness the power and beauty of one of Africa's
          most spectacular natural wonders.
        </p>

      </div>


      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐆
        </div>

        <h3 className="mt-4 text-xl font-black">
          Wild South Luangwa
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Search for predators, elephants and large herds
          during exciting day and night game drives.
        </p>

      </div>


      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🚶
        </div>

        <h3 className="mt-4 text-xl font-black">
          Walking Safari
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Step beyond the safari vehicle and experience
          the wilderness on foot with an expert guide.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Where the Zambezi flows and the wild still leads the way.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Experience Victoria Falls, the Zambezi River and
        the untamed wilderness of South Luangwa.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20the%207-Day%20Uganda%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Zimbabwe Safari Destination ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Zimbabwe Safari
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Zimbabwe Safari

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Victoria Falls & Hwange National Park
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Discover Zimbabwe's extraordinary wilderness, from the
        thunderous Victoria Falls and the Zambezi River to the
        wildlife-rich plains of Hwange and the dramatic granite
        landscapes of Matobo National Park.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Victoria Falls */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={victoria1}
            alt="Victoria Falls Zimbabwe"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Victoria Falls
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Experience the power of one of Africa's greatest
            natural wonders and cruise along the Zambezi River.
          </p>

        </div>

      </div>


      {/* Hwange */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85"
            alt="Hwange National Park wildlife"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Hwange National Park
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Explore Zimbabwe's largest national park and
            search for elephants, lions, buffaloes and wild dogs.
          </p>

        </div>

      </div>


      {/* Matobo */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=1200&q=85"
            alt="Matobo National Park Zimbabwe"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Matobo National Park
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover dramatic granite formations, rhinos,
            ancient landscapes and fascinating cultural history.
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Victoria Falls – Hwange National Park –
            Matobo National Park
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private 4×4 safari vehicle
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Victoria Falls, Zambezi sunset cruise,
            Hwange wildlife, rhino tracking, Matobo Hills
            and Zimbabwe's dramatic landscapes
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Victoria Falls",
            "Day 2: Victoria Falls Experience",
            "Day 3: Victoria Falls → Hwange National Park",
            "Day 4: Full-Day Hwange Safari",
            "Day 5: Hwange → Matobo National Park",
            "Day 6: Full-Day Matobo",
            "Day 7: Matobo → Bulawayo",
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
        Zimbabwe Safari Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private safari pricing based on the number of travellers.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 2,800",
          },
          {
            group: "2 People",
            price: "USD 2,100",
          },
          {
            group: "3–4 People",
            price: "USD 1,800",
          },
          {
            group: "5–6 People",
            price: "USD 1,650",
          },
          {
            group: "7+ People",
            price: "USD 1,500",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private 4×4 safari vehicle",
          "Professional English-speaking guide",
          "Victoria Falls visit",
          "Zambezi sunset cruise",
          "Hwange National Park fees",
          "Matobo National Park fees",
          "Game drives",
          "Full-board meals",
          "Bottled drinking water",
          "Airport transfers",
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

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          💦
        </div>

        <h3 className="mt-4 text-xl font-black">
          Victoria Falls
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Stand before one of Africa's greatest natural
          wonders and experience the mighty Zambezi.
        </p>

      </div>


      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐘
        </div>

        <h3 className="mt-4 text-xl font-black">
          Hwange Wildlife
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Explore vast wilderness areas and search for
          elephants, lions, buffaloes, giraffes and wild dogs.
        </p>

      </div>


      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🦏
        </div>

        <h3 className="mt-4 text-xl font-black">
          Matobo Hills
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Discover ancient granite landscapes and search
          for rhinos among the spectacular Matobo Hills.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Where waterfalls, ancient landscapes and wildlife meet.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Experience Victoria Falls, the wilderness of Hwange
        and the extraordinary landscapes of Matobo.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Namibia Adventure ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Namibia Adventure
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Namibia Adventure

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Desert, Wildlife & Coastal Wonders
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Journey across Namibia's extraordinary landscapes, from the
        towering red dunes of Sossusvlei and the coastal charm of
        Swakopmund to the rugged wilderness of Damaraland and the
        wildlife-rich plains of Etosha National Park.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Sossusvlei */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=85"
            alt="Sossusvlei red dunes Namibia"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Sossusvlei & Deadvlei
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Walk among Namibia's iconic red dunes and discover
            the surreal landscapes of Deadvlei.
          </p>

        </div>

      </div>


      {/* Swakopmund */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85"
            alt="Swakopmund Namibia coast"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Swakopmund
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Experience Namibia's coastal charm where the
            desert meets the Atlantic Ocean.
          </p>

        </div>

      </div>


      {/* Etosha */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={etoshapark}
            alt="Etosha National Park wildlife"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Etosha National Park
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Search for elephants, lions, rhinos, giraffes,
            zebras and other wildlife around Etosha's waterholes.
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Adventure Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Windhoek – Sossusvlei – Swakopmund –
            Damaraland – Etosha
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private 4×4 safari vehicle
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Sossusvlei, Deadvlei, Namib Desert,
            Swakopmund, Damaraland, Etosha National Park
            and desert-adapted wildlife
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Windhoek",
            "Day 2: Windhoek → Sossusvlei",
            "Day 3: Sossusvlei & Deadvlei",
            "Day 4: Sossusvlei → Swakopmund",
            "Day 5: Swakopmund → Damaraland",
            "Day 6: Damaraland → Etosha National Park",
            "Day 7: Etosha → Windhoek",
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
        Namibia Adventure Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private adventure pricing based on the number of travellers.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 2,700",
          },
          {
            group: "2 People",
            price: "USD 2,050",
          },
          {
            group: "3–4 People",
            price: "USD 1,750",
          },
          {
            group: "5–6 People",
            price: "USD 1,600",
          },
          {
            group: "7+ People",
            price: "USD 1,450",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private 4×4 safari vehicle",
          "Professional English-speaking guide/driver",
          "Park and conservation fees",
          "Sossusvlei & Deadvlei excursion",
          "Etosha game drives",
          "Listed activities and excursions",
          "Full-board meals",
          "Bottled drinking water",
          "Airport pick-up",
          "Airport drop-off",
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

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏜️
        </div>

        <h3 className="mt-4 text-xl font-black">
          Namib Desert
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Stand among towering red dunes and experience
          the surreal beauty of Sossusvlei and Deadvlei.
        </p>

      </div>


      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌊
        </div>

        <h3 className="mt-4 text-xl font-black">
          Coastal Wonders
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Discover Swakopmund and the fascinating meeting
          point between Namibia's desert and Atlantic coast.
        </p>

      </div>


      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🦁
        </div>

        <h3 className="mt-4 text-xl font-black">
          Etosha Wildlife
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Explore Etosha's famous waterholes in search of
          elephants, lions, rhinos, giraffes and zebras.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Where endless deserts meet extraordinary wildlife.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Explore Namibia's deserts, dramatic landscapes,
        Atlantic coast and unforgettable wildlife.
      </p>

      <a
 href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Botswana Safari Destination ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Botswana Safari
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Botswana Safari

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Chobe & Okavango Delta
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Discover Botswana's extraordinary wilderness, from the
        waterways of the Okavango Delta to the wildlife-rich
        plains of Moremi and the elephant-filled riverfronts of
        Chobe National Park.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Okavango Delta */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={okavango}
            alt="Okavango Delta Botswana"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Okavango Delta
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Glide through spectacular waterways by mokoro
            and discover elephants, hippos and incredible birdlife.
          </p>

        </div>

      </div>


      {/* Moremi */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?auto=format&fit=crop&w=1200&q=85"
            alt="Moremi Game Reserve Botswana"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Moremi Game Reserve
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Explore lagoons, forests and open plains in one
            of Botswana's most remarkable wildlife areas.
          </p>

        </div>

      </div>


      {/* Chobe */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
            alt="Chobe National Park elephants"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Chobe National Park
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Witness huge elephant herds along the Chobe River
            and experience unforgettable wildlife from land and water.
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Maun – Okavango Delta – Moremi –
            Chobe – Kasane
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            4×4 safari vehicle, safari boats and
            light aircraft where required
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Okavango Delta, mokoro canoe experience,
            Moremi wildlife, Chobe elephants and
            Chobe River boat safari
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Maun",
            "Day 2: Maun → Okavango Delta",
            "Day 3: Full-Day Okavango Delta",
            "Day 4: Okavango Delta → Moremi",
            "Day 5: Moremi → Chobe National Park",
            "Day 6: Full-Day Chobe",
            "Day 7: Chobe → Kasane",
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
        Botswana Safari Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private safari pricing based on the number of travellers.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 3,500",
          },
          {
            group: "2 People",
            price: "USD 2,700",
          },
          {
            group: "3–4 People",
            price: "USD 2,350",
          },
          {
            group: "5–6 People",
            price: "USD 2,150",
          },
          {
            group: "7+ People",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private safari transportation",
          "Professional English-speaking guide",
          "Okavango Delta experience",
          "Mokoro canoe excursion",
          "Moremi game drives",
          "Chobe National Park game drives",
          "Chobe River boat safari",
          "Park and conservation fees",
          "Full-board meals",
          "Bottled drinking water",
          "Airport transfers",
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

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🛶
        </div>

        <h3 className="mt-4 text-xl font-black">
          Okavango Delta
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Glide silently through crystal-clear channels
          and discover Botswana's incredible wetland wilderness.
        </p>

      </div>


      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐆
        </div>

        <h3 className="mt-4 text-xl font-black">
          Moremi Wilderness
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Search for lions, leopards, elephants, buffaloes
          and African wild dogs across diverse habitats.
        </p>

      </div>


      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐘
        </div>

        <h3 className="mt-4 text-xl font-black">
          Chobe River
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Experience some of Africa's largest elephant
          gatherings from the water and during game drives.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Where the desert meets the delta.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Explore Botswana's waterways, wilderness and
        extraordinary wildlife on an unforgettable safari.
      </p>

      <a
 href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>
{/* ================= South Africa Safari & City Adventure ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        South Africa Safari
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day South Africa

        <span className="mt-2 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Safari & City Adventure
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Experience the best of South Africa in one unforgettable
        journey, from the iconic landscapes of Cape Town and
        Table Mountain to thrilling Big Five encounters in Kruger
        National Park and the vibrant energy of Johannesburg.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Cape Town */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85"
            alt="Cape Town Table Mountain South Africa"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Cape Town
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover Table Mountain, Cape Point, Boulders Beach
            and the spectacular Cape Peninsula.
          </p>

        </div>

      </div>


      {/* Kruger */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={krugerpark}
            alt="Kruger National Park wildlife"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Kruger National Park
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Search for the Big Five and experience unforgettable
            sunrise, sunset and full-day game drives.
          </p>

        </div>

      </div>


      {/* Johannesburg */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=1200&q=85"
            alt="Johannesburg South Africa city"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Johannesburg
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover the city's history, culture and vibrant
            neighborhoods with an optional Soweto experience.
          </p>

        </div>

      </div>

    </div>


    {/* ================= SAFARI DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Safari Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Cape Town – Kruger National Park –
            Johannesburg
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private vehicle and domestic flight
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Table Mountain, Cape Peninsula, Boulders Beach,
            Big Five safari, Kruger National Park and Johannesburg
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Cape Town",
            "Day 2: Cape Town & Cape Peninsula",
            "Day 3: Cape Town → Kruger National Park",
            "Day 4: Full-Day Kruger Safari",
            "Day 5: Full-Day Kruger Safari",
            "Day 6: Kruger → Johannesburg",
            "Day 7: Johannesburg & Departure",
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
        South Africa Package Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private safari and city adventure pricing per person.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 2,600",
          },
          {
            group: "2 People",
            price: "USD 2,000",
          },
          {
            group: "3–4 People",
            price: "USD 1,700",
          },
          {
            group: "5–6 People",
            price: "USD 1,550",
          },
          {
            group: "7+ People",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Domestic flight between Cape Town and Kruger region",
          "Private transportation",
          "Professional English-speaking guide",
          "Kruger National Park fees",
          "Game drives",
          "Cape Town sightseeing",
          "Johannesburg/Soweto experience",
          "Full-board meals during safari portion",
          "Bottled drinking water",
          "Airport transfers",
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
          Cape Town
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Experience Table Mountain, dramatic coastlines,
          Cape Point and the famous penguins of Boulders Beach.
        </p>

      </div>


      {/* Kruger */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🦁
        </div>

        <h3 className="mt-4 text-xl font-black">
          Big Five Safari
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Explore Kruger's wilderness in search of lions,
          leopards, elephants, rhinos and buffaloes.
        </p>

      </div>


      {/* Johannesburg */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌆
        </div>

        <h3 className="mt-4 text-xl font-black">
          Johannesburg
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Discover South Africa's vibrant urban culture
          with a city or Soweto experience.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        From iconic cities to unforgettable wildlife.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Experience the best of South Africa, from the spectacular
        landscapes of Cape Town to the wild heart of Kruger.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Mozambique Beach & Wildlife Escape ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Mozambique Escape
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Mozambique

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Beach & Wildlife Escape
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Escape to Mozambique's spectacular Indian Ocean coastline,
        combining the vibrant culture of Maputo with the white-sand
        beaches, turquoise waters and tropical marine life of the
        Bazaruto Archipelago.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Maputo */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
            alt="Maputo Mozambique"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Maputo
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover Mozambique's vibrant capital, waterfront,
            local markets and delicious Mozambican cuisine.
          </p>

        </div>

      </div>


      {/* Vilanculos */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
            alt="Vilanculos Mozambique beach"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Vilanculos
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Relax on beautiful white-sand beaches overlooking
            the warm waters of the Indian Ocean.
          </p>

        </div>

      </div>


      {/* Bazaruto */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
            alt="Bazaruto Archipelago Mozambique"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Bazaruto Archipelago
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Explore tropical islands, coral reefs, sandbanks
            and crystal-clear turquoise waters.
          </p>

        </div>

      </div>

    </div>


    {/* ================= PACKAGE DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Package Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Maputo – Vilanculos – Bazaruto Archipelago
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private vehicle, domestic flight and
            boat excursions
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Bazaruto Archipelago, white-sand beaches,
            snorkelling, island excursions, local culture
            and Indian Ocean sunsets
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Maputo",
            "Day 2: Maputo → Vilanculos",
            "Day 3: Bazaruto Archipelago",
            "Day 4: Ocean Adventure",
            "Day 5: Vilanculos & Local Culture",
            "Day 6: Vilanculos Leisure Day",
            "Day 7: Vilanculos → Maputo",
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
        Mozambique Package Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private beach and island adventure pricing per person.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 2,500",
          },
          {
            group: "2 People",
            price: "USD 1,900",
          },
          {
            group: "3–4 People",
            price: "USD 1,650",
          },
          {
            group: "5–6 People",
            price: "USD 1,500",
          },
          {
            group: "7+ People",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Domestic flights mentioned in itinerary",
          "Private transfers",
          "Professional English-speaking guide",
          "Bazaruto boat excursion",
          "Snorkelling and selected marine activities",
          "Local cultural experience",
          "Breakfast, lunch and dinner",
          "Bottled drinking water",
          "Airport transfers",
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

      {/* Beaches */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏝️
        </div>

        <h3 className="mt-4 text-xl font-black">
          Tropical Beaches
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Relax on pristine white-sand beaches and enjoy
          spectacular sunsets over the Indian Ocean.
        </p>

      </div>


      {/* Marine Life */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🤿
        </div>

        <h3 className="mt-4 text-xl font-black">
          Ocean Adventure
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Explore coral reefs, snorkel among tropical fish
          and cruise through the spectacular Bazaruto islands.
        </p>

      </div>


      {/* Culture */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌍
        </div>

        <h3 className="mt-4 text-xl font-black">
          Mozambican Culture
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Meet local communities and experience the warmth,
          traditions and cuisine of Mozambique.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Where turquoise waters meet African culture.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Escape to Mozambique's untouched islands, tropical
        beaches and spectacular Indian Ocean coastline.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Morocco Adventure ================= */}


{/* ================= Morocco Adventure ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Morocco Adventure
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Morocco

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Marrakech, Sahara & Ancient Cities
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Journey through Morocco's ancient medinas, dramatic Atlas
        Mountains and endless Sahara dunes. Experience Marrakech,
        Ait Ben Haddou, Dades Valley, Merzouga and the historic city
        of Fes on an unforgettable North African adventure.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Marrakech */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=85"
            alt="Marrakech Morocco Medina"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Marrakech
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Explore the vibrant Medina, Jemaa el-Fnaa, colourful
            souks, palaces and traditional Moroccan culture.
          </p>

        </div>

      </div>


      {/* Sahara */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={sahara}
            alt="Sahara Desert Morocco"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Sahara Desert
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Ride camels across the golden dunes, watch the sunset
            and spend an unforgettable night beneath the stars.
          </p>

        </div>

      </div>


      {/* Fes */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={morocco}
            alt="Fes Morocco ancient city"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Fes
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover one of Morocco's oldest imperial cities,
            historic medinas, souks and traditional crafts.
          </p>

        </div>

      </div>

    </div>


    {/* ================= PACKAGE DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Tour Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Marrakech – Ait Ben Haddou – Merzouga –
            Dades Valley – Fes – Marrakech
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private 4x4/minivan with professional
            driver-guide
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Marrakech Medina, Atlas Mountains, Ait Ben Haddou,
            Todra Gorge, Sahara Desert, camel ride and Fes Medina
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Marrakech",
            "Day 2: Marrakech City Experience",
            "Day 3: Marrakech → Dades Valley",
            "Day 4: Dades Valley → Merzouga",
            "Day 5: Merzouga → Fes",
            "Day 6: Fes → Marrakech",
            "Day 7: Marrakech & Departure",
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
        Morocco Tour Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Private Morocco adventure pricing per person.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 2,200",
          },
          {
            group: "2 People",
            price: "USD 1,650",
          },
          {
            group: "3–4 People",
            price: "USD 1,400",
          },
          {
            group: "5–6 People",
            price: "USD 1,250",
          },
          {
            group: "7+ People",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private transportation",
          "Professional English-speaking driver-guide",
          "Airport transfers",
          "Ait Ben Haddou visit",
          "Todra Gorge visit",
          "Sahara camel ride",
          "Desert camp experience",
          "City sightseeing as listed",
          "Breakfast, lunch and dinner",
          "Bottled drinking water",
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

      {/* Medina */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🕌
        </div>

        <h3 className="mt-4 text-xl font-black">
          Ancient Medinas
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Wander through Marrakech and Fes, discovering historic
          architecture, colourful souks and traditional crafts.
        </p>

      </div>


      {/* Sahara */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🐪
        </div>

        <h3 className="mt-4 text-xl font-black">
          Sahara Experience
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Ride camels through the desert, watch the sunset and
          spend the night at a traditional Sahara camp.
        </p>

      </div>


      {/* Mountains */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏔️
        </div>

        <h3 className="mt-4 text-xl font-black">
          Atlas Mountains
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Cross spectacular mountain landscapes, ancient valleys
          and dramatic rock formations on the journey south.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        From ancient medinas to endless Sahara dunes.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Discover Morocco through its ancient cities, dramatic
        landscapes, rich culture and unforgettable desert experiences.
      </p>

      <a
href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Egypt Adventure ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Egypt Adventure
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Egypt

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Cairo, Nile & Ancient Wonders
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Step into thousands of years of history as you explore the
        legendary Pyramids of Giza, ancient temples and royal tombs,
        while cruising along the timeless Nile from Luxor to Aswan.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Cairo */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={egypt}
            alt="Pyramids of Giza Cairo Egypt"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Cairo
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover the Pyramids of Giza, the Sphinx, Egyptian
            Museum and the historic Khan el-Khalili bazaar.
          </p>

        </div>

      </div>


      {/* Luxor */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85"
            alt="Luxor ancient temple Egypt"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Luxor
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Explore Karnak Temple, Luxor Temple, the Valley of
            the Kings and the magnificent Temple of Hatshepsut.
          </p>

        </div>

      </div>


      {/* Nile & Aswan */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={nile}
            alt="Nile River Aswan Egypt"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Nile & Aswan
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Cruise the Nile and discover Edfu, Kom Ombo, Philae
            Temple and the beautiful landscapes around Aswan.
          </p>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Tour Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Cairo – Luxor – Nile Cruise –
            Aswan – Cairo
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private vehicle, domestic flight
            and Nile cruise
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Pyramids of Giza, Sphinx, ancient temples,
            Valley of the Kings, Nile cruise and Aswan
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Cairo",
            "Day 2: Pyramids & Ancient Cairo",
            "Day 3: Cairo → Luxor & Nile Cruise",
            "Day 4: Luxor & Valley of the Kings",
            "Day 5: Edfu & Kom Ombo",
            "Day 6: Aswan → Cairo",
            "Day 7: Cairo & Departure",
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
        Egypt Tour Pricing
      </h3>

      <p className="mt-3 text-center text-sm text-white/60 sm:text-base">
        Ancient wonders and Nile cruise adventure pricing per person.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 2,400",
          },
          {
            group: "2 People",
            price: "USD 1,800",
          },
          {
            group: "3–4 People",
            price: "USD 1,550",
          },
          {
            group: "5–6 People",
            price: "USD 1,400",
          },
          {
            group: "7+ People",
            price: "USD 1,300",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Nile cruise",
          "Domestic flights mentioned in itinerary",
          "Private transportation",
          "Professional English-speaking guide",
          "Entrance fees to listed attractions",
          "Pyramids and Sphinx visit",
          "Valley of the Kings",
          "Karnak, Luxor, Edfu, Kom Ombo & Philae temples",
          "Nile dinner cruise",
          "Breakfast, lunch and dinner",
          "Bottled drinking water",
          "Airport transfers",
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

      {/* Pyramids */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏜️
        </div>

        <h3 className="mt-4 text-xl font-black">
          Ancient Wonders
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Stand before the legendary Pyramids of Giza and
          Sphinx and explore the fascinating history of ancient Egypt.
        </p>

      </div>


      {/* Nile */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          ⛵
        </div>

        <h3 className="mt-4 text-xl font-black">
          Nile Cruise
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Sail between Luxor and Aswan while discovering
          magnificent temples and timeless Nile landscapes.
        </p>

      </div>


      {/* Temples */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏛️
        </div>

        <h3 className="mt-4 text-xl font-black">
          Ancient Temples
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Explore Karnak, Luxor, Edfu, Kom Ombo and Philae,
          each revealing another chapter of Egypt's ancient civilization.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Walk through the pages of history.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        From the Pyramids of Giza to the timeless Nile,
        experience Egypt's ancient wonders on an unforgettable journey.
      </p>

      <a
  href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27m%20interested%20in%20booking%20this%20Safari."
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-bold text-emerald-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Book This Safari
  <span className="ml-2">→</span>
</a>

    </div>

  </div>

</section>

{/* ================= Sudan Adventure ================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

  {/* Background Effects */}
  <div className="pointer-events-none absolute -right-40 -top-40 h-[350px] w-[350px] rounded-full bg-yellow-300/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 h-[350px] w-[350px] rounded-full bg-emerald-600/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[160px]" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* ================= HEADER ================= */}

    <div className="mx-auto max-w-5xl text-center">

      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-[10px] font-bold uppercase tracking-[3px] text-emerald-700 sm:px-6 sm:text-sm sm:tracking-[4px]">
        Sudan Adventure
      </span>

      <h2 className="mt-6 text-3xl font-black leading-[1.1] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">

        7-Day Sudan

        <span className="mt-3 block text-2xl leading-tight text-[#C8A94C] sm:text-4xl md:text-5xl">
          Ancient Nubia, Pyramids & the Nile
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
        Journey through the ancient Nubian heart of Africa and
        discover extraordinary pyramids, archaeological treasures,
        desert landscapes and traditional communities along the Nile.
      </p>

    </div>


    {/* ================= DESTINATION IMAGES ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3">

      {/* Meroë */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={pyramids}
            alt="Ancient pyramids and desert landscape"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Meroë Pyramids
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Discover the spectacular ancient pyramids of Meroë
            rising from the Nubian Desert.
          </p>

        </div>

      </div>


      {/* Jebel Barkal */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
            src={barkal}
            alt="Nubian desert landscape"
            loading="lazy"
            className="h-[320px] w-full object-cover transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
          />

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            Jebel Barkal
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Explore the sacred mountain, ancient temples and
            archaeological monuments of the Napatan kingdom.
          </p>

        </div>

      </div>


      {/* Nile */}

      <div className="group overflow-hidden rounded-[28px] bg-white shadow-lg sm:rounded-[35px]">

        <div className="overflow-hidden">

          <img
  src={nile}
  alt="Nile River landscape in Sudan"
  loading="lazy"
  className="h-[320px] w-full object-cover object-center transition duration-1000 group-hover:scale-110 sm:h-[420px] lg:h-[500px]"
/>

        </div>

        <div className="p-5 text-center sm:p-6">

          <h3 className="text-xl font-bold sm:text-2xl">
            The Nile
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
            Follow the Nile through traditional Nubian villages,
            ancient settlements and dramatic desert landscapes.
          </p>

        </div>

      </div>

    </div>


    {/* ================= TOUR DETAILS ================= */}

    <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">

      {/* Details */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10">

        <h3 className="text-2xl font-black">
          Tour Details
        </h3>

        <div className="mt-6 space-y-5 text-sm leading-6 text-gray-600 sm:mt-8 sm:text-base">

          <p>
            <strong>Duration:</strong>{" "}
            7 Days / 6 Nights
          </p>

          <p>
            <strong>Route:</strong>{" "}
            Khartoum – Meroë – Karima –
            Old Dongola – Khartoum
          </p>

          <p>
            <strong>Transport:</strong>{" "}
            Private 4x4 with professional guide
          </p>

          <p>
            <strong>Highlights:</strong>{" "}
            Meroë pyramids, Jebel Barkal, Nuri pyramids,
            Old Dongola and Nubian villages along the Nile
          </p>

        </div>

      </div>


      {/* Itinerary */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 shadow-xl sm:rounded-[35px] sm:p-10 lg:col-span-2">

        <h3 className="text-2xl font-black">
          7-Day Itinerary
        </h3>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">

          {[
            "Day 1: Arrival in Khartoum",
            "Day 2: Khartoum → Meroë",
            "Day 3: Meroë → Karima",
            "Day 4: Jebel Barkal & Nuri",
            "Day 5: Karima → Old Dongola",
            "Day 6: Dongola → Khartoum",
            "Day 7: Khartoum & Departure",
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
        Sudan Tour Pricing
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-white/60 sm:text-base">
        Sample pricing for the proposed private adventure.
        Current availability and safe access must be confirmed.
      </p>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            group: "1 Person",
            price: "USD 3,200",
          },
          {
            group: "2 People",
            price: "USD 2,400",
          },
          {
            group: "3–4 People",
            price: "USD 2,050",
          },
          {
            group: "5–6 People",
            price: "USD 1,850",
          },
          {
            group: "7+ People",
            price: "USD 1,700",
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
              per person
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ================= INCLUDED ================= */}

    <div className="mt-12 rounded-[30px] bg-[#F8F6F1] p-6 sm:mt-16 sm:rounded-[40px] sm:p-10 lg:p-12">

      <h3 className="text-center text-3xl font-black sm:text-4xl">
        What's Included
      </h3>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

        {[
          "6 nights accommodation",
          "Private 4x4 transportation",
          "Professional local guide",
          "Archaeological site entrance fees",
          "Meroë visit",
          "Jebel Barkal visit",
          "Nuri pyramids visit",
          "Old Dongola visit",
          "Full-board meals during the tour",
          "Bottled drinking water",
          "Airport transfers",
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


    {/* ================= SAFETY NOTICE ================= */}

    <div className="mt-12 rounded-[28px] border border-red-200 bg-red-50 p-6 sm:mt-16 sm:rounded-[35px] sm:p-8">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-xl">
          ⚠️
        </div>

        <div>

          <h3 className="text-xl font-black text-red-800">
            Important Travel & Safety Notice
          </h3>

          <p className="mt-3 text-sm leading-7 text-red-700 sm:text-base">
            Sudan is currently a high-risk destination due to the
            ongoing conflict and security situation. This itinerary
            is a sample travel concept and should not be marketed
            as currently bookable without first confirming safe
            access, permits, border conditions, accommodation
            availability and official travel advisories.
          </p>

        </div>

      </div>

    </div>


    {/* ================= EXPERIENCE HIGHLIGHTS ================= */}

    <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-3">

      {/* Pyramids */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏺
        </div>

        <h3 className="mt-4 text-xl font-black">
          Ancient Nubia
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Explore remarkable pyramids, temples and archaeological
          sites connected to the ancient Nubian kingdoms.
        </p>

      </div>


      {/* Desert */}

      <div className="rounded-[28px] bg-[#F8F6F1] p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🏜️
        </div>

        <h3 className="mt-4 text-xl font-black">
          Nubian Desert
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Travel through vast desert landscapes and experience
          the dramatic scenery between ancient settlements.
        </p>

      </div>


      {/* Nile */}

      <div className="rounded-[28px] bg-emerald-50 p-6 sm:rounded-[35px] sm:p-8">

        <div className="text-3xl">
          🌊
        </div>

        <h3 className="mt-4 text-xl font-black">
          Nile Culture
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Follow the Nile through traditional Nubian villages
          and discover local hospitality and centuries-old traditions.
        </p>

      </div>

    </div>


    {/* ================= FINAL CTA ================= */}

    <div className="mt-12 rounded-[30px] bg-emerald-700 px-6 py-12 text-center text-white sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-16">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-emerald-100 sm:text-sm sm:tracking-[4px]">
        Curious Safaris
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        Discover the ancient Nubian heart of Africa.
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50 sm:mt-5 sm:text-lg sm:leading-8">
        Experience extraordinary archaeological treasures,
        dramatic desert landscapes and the timeless culture
        of the Nile.
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-xs font-semibold leading-5 text-emerald-100 sm:text-sm">
        Travel availability is subject to current security,
        access and official travel conditions.
      </p>

    </div>

  </div>

</section>



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