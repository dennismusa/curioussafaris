/* eslint-disable react-hooks/exhaustive-deps */
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

const [filters, setFilters] = useState({
  destination: "",
  category: "",
  region: "",
  duration: "",
});

const [showSuggestions, setShowSuggestions] = useState(false);


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
  // =====================================================
  // UGANDA — 7 DAY
  // =====================================================
  {
    country: t("destination.uganda.country"),
    title: t("destination.uganda.sevenDay.title"),
    subtitle: t("destination.uganda.sevenDay.subtitle"),
    description: t("destination.uganda.sevenDay.description"),

    highlights: [
      t("destination.uganda.sevenDay.highlights.gorillas"),
      t("destination.uganda.sevenDay.highlights.chimpanzees"),
      t("destination.uganda.sevenDay.highlights.queenElizabeth"),
      t("destination.uganda.sevenDay.highlights.kazinga"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.eastAfrica"),
    category: t("categories.primateSafari"),

    image: kenya,
    sectionId: "uganda-safari",
    slug: "uganda",

    featured: true,
  },

  // =====================================================
  // RWANDA — 7 DAY
  // =====================================================
  {
    country: t("destination.rwanda.country"),
    title: t("destination.rwanda.sevenDay.title"),
    subtitle: t("destination.rwanda.sevenDay.subtitle"),
    description: t("destination.rwanda.sevenDay.description"),

    highlights: [
      t("destination.rwanda.sevenDay.highlights.volcanoes"),
      t("destination.rwanda.sevenDay.highlights.gorilla"),
      t("destination.rwanda.sevenDay.highlights.goldenMonkey"),
      t("destination.rwanda.sevenDay.highlights.lakeKivu"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.eastAfrica"),
    category: t("categories.luxurySafari"),

    image: kenya,
    sectionId: "rwanda-safari",
    slug: "rwanda",

    featured: true,
  },

  // =====================================================
  // KENYA — 7 DAY
  // =====================================================
  {
    country: t("destination.kenya.country"),
    title: t("destination.kenya.sevenDay.title"),
    subtitle: t("destination.kenya.sevenDay.subtitle"),
    description: t("destination.kenya.sevenDay.description"),

    highlights: [
      t("destination.kenya.sevenDay.highlights.bigFive"),
      t("destination.kenya.sevenDay.highlights.maasaiMara"),
      t("destination.kenya.sevenDay.highlights.amboseli"),
      t("destination.kenya.sevenDay.highlights.nakuru"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.eastAfrica"),
    category: t("categories.wildlifeSafari"),

    image: kenya,
    sectionId: "kenya-safari",
    slug: "kenya",

    featured: true,
  },

  // =====================================================
  // TANZANIA — 7 DAY
  // =====================================================
  {
    country: t("destination.tanzania.country"),
    title: t("destination.tanzania.sevenDay.title"),
    subtitle: t("destination.tanzania.sevenDay.subtitle"),
    description: t("destination.tanzania.sevenDay.description"),

    highlights: [
      t("destination.tanzania.sevenDay.highlights.serengeti"),
      t("destination.tanzania.sevenDay.highlights.ngorongoro"),
      t("destination.tanzania.sevenDay.highlights.tarangire"),
      t("destination.tanzania.sevenDay.highlights.migration"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.eastAfrica"),
    category: t("categories.classicSafari"),

    image: tanzania,
    sectionId: "tanzania-safari",
    slug: "tanzania",

    featured: true,
  },

  // =====================================================
  // ZIMBABWE — 7 DAY
  // =====================================================
  {
    country: t("destination.zimbabwe.country"),
    title: t("destination.zimbabwe.sevenDay.title"),
    subtitle: t("destination.zimbabwe.sevenDay.subtitle"),
    description: t("destination.zimbabwe.sevenDay.description"),

    highlights: [
      t("destination.zimbabwe.sevenDay.highlights.victoriaFalls"),
      t("destination.zimbabwe.sevenDay.highlights.hwange"),
      t("destination.zimbabwe.sevenDay.highlights.zambezi"),
      t("destination.zimbabwe.sevenDay.highlights.wildlife"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.southernAfrica"),
    category: t("categories.adventureSafari"),

    image: victoria1,
    sectionId: "zimbabwe-safari",
    slug: "zimbabwe",

    featured: false,
  },

  // =====================================================
  // ZAMBIA — 7 DAY
  // =====================================================
  {
    country: t("destination.zambia.country"),
    title: t("destination.zambia.sevenDay.title"),
    subtitle: t("destination.zambia.sevenDay.subtitle"),
    description: t("destination.zambia.sevenDay.description"),

    highlights: [
      t("destination.zambia.sevenDay.highlights.southLuangwa"),
      t("destination.zambia.sevenDay.highlights.walkingSafaris"),
      t("destination.zambia.sevenDay.highlights.zambezi"),
      t("destination.zambia.sevenDay.highlights.photography"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.southernAfrica"),
    category: t("categories.walkingSafari"),

    image: luangwa,
    sectionId: "zambia-safari",
    slug: "zambia",

    featured: false,
  },

  // =====================================================
  // MOROCCO — 7 DAY
  // =====================================================
  {
    country: t("destination.morocco.country"),
    title: t("destination.morocco.adventure.title"),
    subtitle: t("destination.morocco.adventure.subtitle"),
    description: t("destination.morocco.adventure.description"),

    highlights: [
      t("destination.morocco.adventure.highlights.marrakech"),
      t("destination.morocco.adventure.highlights.atlas"),
      t("destination.morocco.adventure.highlights.sahara"),
      t("destination.morocco.adventure.highlights.medinas"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.northAfrica"),
    category: t("categories.culturalExperience"),

    image: morocco,
    sectionId: "morocco-safari",
    slug: "morocco",

    featured: false,
  },

  // =====================================================
  // EGYPT — 7 DAY
  // =====================================================
  {
    country: t("destination.egypt.country"),
    title: t("destination.egypt.adventure.title"),
    subtitle: t("destination.egypt.adventure.subtitle"),
    description: t("destination.egypt.adventure.description"),

    highlights: [
      t("destination.egypt.adventure.highlights.pyramids"),
      t("destination.egypt.adventure.highlights.nile"),
      t("destination.egypt.adventure.highlights.temples"),
      t("destination.egypt.adventure.highlights.luxor"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.northAfrica"),
    category: t("categories.historicalJourney"),

    image: egypt,
    sectionId: "egypt-safari",
    slug: "egypt",

    featured: false,
  },

  // =====================================================
  // BOTSWANA — 7 DAY
  // =====================================================
  {
    country: t("destination.botswana.country"),
    title: t("destination.botswana.safari.title"),
    subtitle: t("destination.botswana.safari.subtitle"),
    description: t("destination.botswana.safari.description"),

    highlights: [
      t("destination.botswana.safari.highlights.okavango"),
      t("destination.botswana.safari.highlights.mokoro"),
      t("destination.botswana.safari.highlights.luxuryCamps"),
      t("destination.botswana.safari.highlights.wildlife"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.southernAfrica"),
    category: t("categories.luxuryWilderness"),

    image: okavango,
    sectionId: "botswana-safari",
    slug: "botswana",

    featured: false,
  },

  // =====================================================
  // SOUTH AFRICA — 7 DAY
  // =====================================================
  {
    country: t("destination.southAfrica.country"),
    title: t("destination.southAfrica.sevenDay.title"),
    subtitle: t("destination.southAfrica.sevenDay.subtitle"),
    description: t("destination.southAfrica.sevenDay.description"),

    highlights: [
      t("destination.southAfrica.sevenDay.highlights.tableMountain"),
      t("destination.southAfrica.sevenDay.highlights.capePeninsula"),
      t("destination.southAfrica.sevenDay.highlights.bouldersBeach"),
      t("destination.southAfrica.sevenDay.highlights.bigFive"),
      t("destination.southAfrica.sevenDay.highlights.kruger"),
      t("destination.southAfrica.sevenDay.highlights.johannesburg"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.southernAfrica"),
    category: t("categories.wildlifeCityAdventure"),

    image: krugerpark,
    sectionId: "southafrica-safari",
    slug: "south-africa",

    featured: false,
  },

  // =====================================================
  // UGANDA — 4 DAY GORILLA & WILDLIFE
  // =====================================================
  {
    country: t("destination.uganda.country"),
    title: t("destination.uganda.gorillaWildlife.title"),
    subtitle: t("destination.uganda.gorillaWildlife.subtitle"),
    description: t("destination.uganda.gorillaWildlife.description"),

    highlights: [
      t("destination.uganda.gorillaWildlife.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.eastAfrica"),
    category: t("categories.primateSafari"),

    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=85",

    sectionId: "uganda2-safari",
    slug: "uganda-gorilla-wildlife",
  },

  // =====================================================
  // UGANDA — 4 DAY ADVENTURE
  // =====================================================
  {
    country: t("destination.uganda.country"),
    title: t("destination.uganda.adventureEscape.title"),
    subtitle: t("destination.uganda.adventureEscape.subtitle"),
    description: t("destination.uganda.adventureEscape.description"),

    highlights: [
      t("destination.uganda.adventureEscape.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.eastAfrica"),
    category: t("categories.adventureSafari"),

    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1200&q=85",

    sectionId: "uganda2-safari",
    slug: "uganda-adventure",
  },

  // =====================================================
  // RWANDA — 4 DAY
  // =====================================================
  {
    country: t("destination.rwanda.country"),
    title: t("destination.rwanda.adventure.title"),
    subtitle: t("destination.rwanda.adventure.subtitle"),
    description: t("destination.rwanda.adventure.description"),

    highlights: [
      t("destination.rwanda.adventure.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.eastAfrica"),
    category: t("categories.adventureSafari"),

    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85",

    sectionId: "rwanda2-safari",
    slug: "rwanda-adventure",
  },

  // =====================================================
  // ETHIOPIA — 4 DAY
  // =====================================================
  {
    country: t("destination.ethiopia.country"),
    title: t("destination.ethiopia.adventure.title"),
    subtitle: t("destination.ethiopia.adventure.subtitle"),
    description: t("destination.ethiopia.adventure.description"),

    highlights: [
      t("destination.ethiopia.adventure.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.eastAfrica"),
    category: t("categories.culturalExperience"),

    image:
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=85",

    sectionId: "ethiopia2-safari",
    slug: "ethiopia-adventure",
  },

  // =====================================================
  // DRC — 4 DAY
  // =====================================================
  {
    country: t("destination.drc.country"),
    title: t("destination.drc.adventure.title"),
    subtitle: t("destination.drc.adventure.subtitle"),
    description: t("destination.drc.adventure.description"),

    highlights: [
      t("destination.drc.adventure.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.centralAfrica"),
    category: t("categories.adventureSafari"),

    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",

    sectionId: "DRC2",
    slug: "democratic-republic-of-congo",
  },

  // =====================================================
  // ZAMBIA — 4 DAY
  // =====================================================
  {
    country: t("destination.zambia.country"),
    title: t("destination.zambia.adventure.title"),
    subtitle: t("destination.zambia.adventure.subtitle"),
    description: t("destination.zambia.adventure.description"),

    highlights: [
      t("destination.zambia.adventure.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.southernAfrica"),
    category: t("categories.adventureSafari"),

    image:
      "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?auto=format&fit=crop&w=1200&q=85",

    sectionId: "zambia2-safari",
    slug: "zambia-adventure",
  },

  // =====================================================
  // ZIMBABWE — 4 DAY
  // =====================================================
  {
    country: t("destination.zimbabwe.country"),
    title: t("destination.zimbabwe.adventure.title"),
    subtitle: t("destination.zimbabwe.adventure.subtitle"),
    description: t("destination.zimbabwe.adventure.description"),

    highlights: [
      t("destination.zimbabwe.adventure.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.southernAfrica"),
    category: t("categories.adventureSafari"),

    image:
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=85",

    sectionId: "zimbabwe-safari",
    slug: "zimbabwe-adventure",
  },

  // =====================================================
  // MOZAMBIQUE — 4 DAY
  // =====================================================
  {
    country: t("destination.mozambique.country"),
    title: t("destination.mozambique.adventure.title"),
    subtitle: t("destination.mozambique.adventure.subtitle"),
    description: t("destination.mozambique.adventure.description"),

    highlights: [
      t("destination.mozambique.adventure.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.southernAfrica"),
    category: t("categories.beachHoliday"),

    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",

    sectionId: "mozambique2-safari",
    slug: "mozambique-adventure",
  },

  // =====================================================
  // TANZANIA — 4 DAY WILDLIFE
  // =====================================================
  {
    country: t("destination.tanzania.country"),
    title: t("destination.tanzania.wildlifeSafari.title"),
    subtitle: t("destination.tanzania.wildlifeSafari.subtitle"),
    description: t("destination.tanzania.wildlifeSafari.description"),

    highlights: [
      t("destination.tanzania.wildlifeSafari.highlights.tarangire"),
      t("destination.tanzania.wildlifeSafari.highlights.serengeti"),
      t("destination.tanzania.wildlifeSafari.highlights.ngorongoro"),
      t("destination.tanzania.wildlifeSafari.highlights.wildlife"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.eastAfrica"),
    category: t("categories.wildlifeSafari"),

    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",

    sectionId: "Tanzania-safari",
    slug: "tanzania-wildlife",
  },

  // =====================================================
  // ZANZIBAR — 4 DAY
  // =====================================================
  {
    country: t("destination.zanzibar.country"),
    title: t("destination.zanzibar.title"),
    subtitle: t("destination.zanzibar.subtitle"),
    description: t("destination.zanzibar.description"),

    highlights: [
      t("destination.zanzibar.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.eastAfrica"),
    category: t("categories.beachHoliday"),

    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",

    sectionId: "Tanzania2-safari",
    slug: "zanzibar",
  },

  // =====================================================
  // KENYA & TANZANIA COAST — 5 DAY
  // =====================================================
  {
    country: t("destination.kenyaTanzania.country"),
    title: t("destination.kenyaTanzania.coastal.title"),
    subtitle: t("destination.kenyaTanzania.coastal.subtitle"),
    description: t("destination.kenyaTanzania.coastal.description"),

    highlights: [
      t("destination.kenyaTanzania.coastal.title"),
    ],

    duration: t("destination.common.fiveDays"),
    days: 5,

    region: t("regions.eastAfrica"),
    category: t("categories.beachHoliday"),

    image:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1200&q=85",

    sectionId: "kenyacoast-safari",
    slug: "kenya-tanzania-coastal",
  },

  // =====================================================
  // EGYPT — 4 DAY CLASSIC
  // =====================================================
  {
    country: t("destination.egypt.country"),
    title: t("destination.egypt.classic.title"),
    subtitle: t("destination.egypt.classic.subtitle"),
    description: t("destination.egypt.classic.description"),

    highlights: [
      t("destination.egypt.classic.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.northAfrica"),
    category: t("categories.historicalJourney"),

    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=85",

    sectionId: "egypt2-safari",
    slug: "egypt-classic",
  },

  // =====================================================
  // EGYPT — 4 DAY ASWAN
  // =====================================================
  {
    country: t("destination.egypt.country"),
    title: t("destination.egypt.aswan.title"),
    subtitle: t("destination.egypt.aswan.subtitle"),
    description: t("destination.egypt.aswan.description"),

    highlights: [
      t("destination.egypt.aswan.title"),
    ],

    duration: t("destination.common.fourDays"),
    days: 4,

    region: t("regions.northAfrica"),
    category: t("categories.historicalJourney"),

    image:
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85",

    sectionId: "egypt2-safari",
    slug: "egypt-aswan",
  },

  // =====================================================
  // SUDAN — 5 DAY
  // =====================================================
  {
    country: t("destination.sudan.country"),
    title: t("destination.sudan.title"),
    subtitle: t("destination.sudan.subtitle"),
    description: t("destination.sudan.description"),

    highlights: [
      t("destination.sudan.title"),
    ],

    duration: t("destination.common.fiveDays"),
    days: 5,

    region: t("regions.northAfrica"),
    category: t("categories.culturalExperience"),

    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",

    sectionId: "sudan2-safari",
    slug: "sudan",

    status: t("destination.common.futureExperience"),
    bookable: false,
  },

  // =====================================================
  // NAMIBIA — 7 DAY
  // =====================================================
  {
    country: t("destination.namibia.country"),
    title: t("destination.namibia.sevenDay.title"),
    subtitle: t("destination.namibia.sevenDay.subtitle"),
    description: t("destination.namibia.sevenDay.description"),

    highlights: [
      t("destination.namibia.sevenDay.highlights.sossusvlei"),
      t("destination.namibia.sevenDay.highlights.swakopmund"),
      t("destination.namibia.sevenDay.highlights.damaraland"),
      t("destination.namibia.sevenDay.highlights.etosha"),
      t("destination.namibia.sevenDay.highlights.namib"),
      t("destination.namibia.sevenDay.highlights.desertWildlife"),
    ],

    duration: t("destination.common.sevenDays"),
    days: 7,

    region: t("regions.southernAfrica"),
    category: t("categories.desertAdventure"),

    image: etoshapark,
    sectionId: "namibia-safari",
    slug: "namibia",

    featured: false,
  },
];

const uniqueDestinations = Array.from(
  new Map(
    safariDestinations.map((item) => [
      `${item.country}-${item.title}`,
      item,
    ])
  ).values()
);
  // ======================================================
  // FILTER DESTINATIONS
  // ======================================================
// ======================================================
// FILTER DESTINATIONS
// ======================================================

// ======================================================
// FILTER DESTINATIONS
// ======================================================

const filteredDestinations = safariDestinations.filter((destination) => {
  const search = searchTerm.toLowerCase().trim();

  const searchableText = [
    destination.country,
    destination.title,
    destination.subtitle,
    destination.description,
    destination.category,
    destination.region,
    destination.duration,
    ...(destination.highlights || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const matchesSearch =
    !search || searchableText.includes(search);

  const matchesDestination =
    !filters.destination ||
    destination.country === filters.destination;

  const matchesCategory =
    !filters.category ||
    destination.category === filters.category;

  const matchesRegion =
    !filters.region ||
    destination.region === filters.region;

  // ================================
  // DURATION FILTER
  // ================================

  const days = Number(destination.days);

  let matchesDuration = true;

  if (filters.duration) {
    switch (filters.duration) {
      case "1-3":
        matchesDuration = days >= 1 && days <= 3;
        break;

      case "4-5":
        matchesDuration = days >= 4 && days <= 5;
        break;

      case "6-7":
        matchesDuration = days >= 6 && days <= 7;
        break;

      case "8-14":
        matchesDuration = days >= 8 && days <= 14;
        break;

      case "15+":
        matchesDuration = days >= 15;
        break;

      default:
        matchesDuration = true;
    }
  }

  return (
    matchesSearch &&
    matchesDestination &&
    matchesCategory &&
    matchesRegion &&
    matchesDuration
  );
});
const clearAllSearch = () => {

  setSearchTerm("");

  setFilters({
    destination: "",
    category: "",
    region: "",
    duration: "",
  });

  setShowSuggestions(false);
};
const destinationOptions = [
  ...new Set(
    uniqueDestinations
      .map((item) => item.country)
      .filter(Boolean)
  ),
].sort();

const categoryOptions = [
  ...new Set(
    uniqueDestinations
      .map((item) => item.category)
      .filter(Boolean)
  ),
].sort();

const regionOptions = [
  ...new Set(
    uniqueDestinations
      .map((item) => item.region)
      .filter(Boolean)
  ),
].sort();
const suggestions = uniqueDestinations
  .filter((destination) => {

    const search = searchTerm
      .toLowerCase()
      .trim();

    if (!search) return false;

    return (
      destination.country
        ?.toLowerCase()
        .includes(search) ||

      destination.title
        ?.toLowerCase()
        .includes(search) ||

      destination.subtitle
        ?.toLowerCase()
        .includes(search) ||

      destination.category
        ?.toLowerCase()
        .includes(search) ||

      destination.region
        ?.toLowerCase()
        .includes(search)
    );
  })
  .slice(0, 6);

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
const suggestions = uniqueDestinations
  .filter((destination) => {

    const search = searchTerm
      .toLowerCase()
      .trim();

    if (!search) return false;

    return (
      destination.country
        ?.toLowerCase()
        .includes(search) ||

      destination.title
        ?.toLowerCase()
        .includes(search) ||

      destination.subtitle
        ?.toLowerCase()
        .includes(search) ||

      destination.category
        ?.toLowerCase()
        .includes(search) ||

      destination.region
        ?.toLowerCase()
        .includes(search)
    );
  })
  .slice(0, 6);


// ======================================================
// CLEAR FILTERS
// ======================================================

const clearAllSearch = () => {

  setSearchTerm("");

  setFilters({
    destination: "",
    category: "",
    region: "",
    duration: "",
  });

  setShowSuggestions(false);
};
const destinations = [
  ...new Set(
    safariDestinations.map((item) => item.country)
  ),
].sort();

const categories = [
  ...new Set(
    safariDestinations
      .map((item) => item.category)
      .filter(Boolean)
  ),
].sort();

const regions = [
  ...new Set(
    safariDestinations
      .map((item) => item.region)
      .filter(Boolean)
  ),
].sort();
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
{/* ====================================================== */}
{/* PREMIUM SAFARI SEARCH */}
{/* ====================================================== */}

<section className="relative z-30 -mt-10 px-4 sm:px-6">

  <div className="mx-auto max-w-6xl">

    <div className="overflow-visible rounded-[28px] border border-white/80 bg-white/95 shadow-2xl backdrop-blur-xl">

      {/* ================================================== */}
      {/* SEARCH HEADER */}
      {/* ================================================== */}

      <div className="border-b border-gray-100 px-5 py-5 sm:px-7">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-1 flex items-center gap-2">

              <span className="h-1.5 w-1.5 rounded-full bg-[#B28B2C]" />

              <p className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#0B6E4F]">
                {t("search.findAdventure")}
              </p>

            </div>

            <h2 className="text-xl font-black tracking-tight text-gray-900 sm:text-2xl">
              {t("search.whereGo")}
            </h2>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Explore wildlife, beaches, culture and unforgettable African adventures.
            </p>

          </div>


          {/* RESULT COUNT */}

          <div className="rounded-full bg-[#F7F3EA] px-3 py-1.5 text-[10px] font-semibold text-gray-600">

            <span className="font-black text-[#0B6E4F]">
              {filteredDestinations.length}
            </span>{" "}

            {filteredDestinations.length === 1
              ? "experience"
              : "experiences"}

          </div>

        </div>

      </div>


      {/* ================================================== */}
      {/* SEARCH BODY */}
      {/* ================================================== */}

      <div className="p-5 sm:p-7">


        {/* ================================================== */}
        {/* MAIN SEARCH */}
        {/* ================================================== */}

        <div className="grid gap-3 lg:grid-cols-[1fr_auto]">


          {/* SEARCH INPUT */}

          <div className="relative">

            <div className="relative">

              <FaSearch
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}

                onChange={(e) => {

                  setSearchTerm(e.target.value);

                  setShowSuggestions(true);

                }}

                onFocus={() => {

                  if (searchTerm.trim()) {
                    setShowSuggestions(true);
                  }

                }}

                placeholder="Search Tanzania, gorillas, beach, wildlife..."

                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-11 pr-12 text-sm font-medium text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#0B6E4F] focus:bg-white focus:ring-4 focus:ring-emerald-50"
              />


              {/* CLEAR INPUT */}

              {searchTerm && (

                <button
                  type="button"
                  onClick={() => {

                    setSearchTerm("");

                    setShowSuggestions(false);

                  }}

                  aria-label={t("search.clear")}

                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-800"
                >
                  ✕
                </button>

              )}

            </div>


            {/* ================================================== */}
            {/* AUTOCOMPLETE */}
            {/* ================================================== */}

            {showSuggestions &&
              searchTerm.trim() &&
              suggestions.length > 0 && (

                <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-[100] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">

                  <div className="border-b border-gray-100 px-4 py-3">

                    <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-400">
                      Suggested Experiences
                    </p>

                  </div>


                  {suggestions.map((destination, i) => (

                    <button
                      key={`${destination.country}-${destination.title}-${i}`}

                      type="button"

                      onClick={() => {

                        setSearchTerm(destination.country);

                        setShowSuggestions(false);

                      }}

                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-gray-50"
                    >

                      {/* IMAGE */}

                      <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl">

                        <img
                          src={destination.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />

                      </div>


                      {/* TEXT */}

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-bold text-gray-900">
                          {destination.title}
                        </p>

                        <p className="mt-0.5 truncate text-[10px] text-gray-500">

                          {destination.country}

                          {destination.category && (
                            <>
                              {" "}·{" "}
                              {destination.category}
                            </>
                          )}

                        </p>

                      </div>


                      <span className="text-xs text-gray-300">
                        →
                      </span>

                    </button>

                  ))}

                </div>

              )}

          </div>


          {/* SEARCH BUTTON */}

          <button
            type="button"

            onClick={() => {
              setShowSuggestions(false);

              document
                .getElementById("safari-results")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}

            className="h-14 rounded-2xl bg-[#0B6E4F] px-8 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition-all hover:-translate-y-0.5 hover:bg-[#095c42]"
          >
            {t("search.button")}
          </button>

        </div>


        {/* ================================================== */}
        {/* FILTERS */}
        {/* ================================================== */}

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">


          {/* DESTINATION */}

          

          {/* EXPERIENCE */}

          
          {/* REGION */}

          


          {/* DURATION */}

        
        </div>


        {/* ================================================== */}
        {/* ACTIVE FILTERS */}
        {/* ================================================== */}

        {(searchTerm ||
          filters.destination ||
          filters.category ||
          filters.region ||
          filters.duration) && (

          <div className="mt-4 flex flex-wrap items-center gap-2">

            <span className="mr-1 text-[9px] font-bold uppercase tracking-[1.5px] text-gray-400">
              Active:
            </span>


            {/* SEARCH */}

            {searchTerm && (

              <button
                type="button"

                onClick={() => setSearchTerm("")}

                className="inline-flex items-center gap-1.5 rounded-full bg-[#0B6E4F] px-3 py-1.5 text-[10px] font-bold text-white"
              >
                Search: {searchTerm}
                <span>×</span>
              </button>

            )}


            {/* DESTINATION */}

            {filters.destination && (

              <button
                type="button"

                onClick={() =>
                  setFilters({
                    ...filters,
                    destination: "",
                  })
                }

                className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3EA] px-3 py-1.5 text-[10px] font-bold text-gray-700"
              >
                {filters.destination}
                <span>×</span>
              </button>

            )}


            {/* CATEGORY */}

            {filters.category && (

              <button
                type="button"

                onClick={() =>
                  setFilters({
                    ...filters,
                    category: "",
                  })
                }

                className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3EA] px-3 py-1.5 text-[10px] font-bold text-gray-700"
              >
                {filters.category}
                <span>×</span>
              </button>

            )}


            {/* REGION */}

            {filters.region && (

              <button
                type="button"

                onClick={() =>
                  setFilters({
                    ...filters,
                    region: "",
                  })
                }

                className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3EA] px-3 py-1.5 text-[10px] font-bold text-gray-700"
              >
                {filters.region}
                <span>×</span>
              </button>

            )}


            {/* DURATION */}

            {filters.duration && (

              <button
                type="button"

                onClick={() =>
                  setFilters({
                    ...filters,
                    duration: "",
                  })
                }

                className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F3EA] px-3 py-1.5 text-[10px] font-bold text-gray-700"
              >

                {filters.duration === "1-3"
  ? "1–3 Days"
  : filters.duration === "4-5"
  ? "4–5 Days"
  : filters.duration === "6-7"
  ? "6–7 Days"
  : filters.duration === "8-14"
  ? "8–14 Days"
  : filters.duration === "15+"
  ? "15+ Days"
  : filters.duration}

                <span>×</span>

              </button>

            )}


            <button
              type="button"
              onClick={clearAllSearch}
              className="ml-auto text-[10px] font-bold text-gray-400 transition hover:text-[#0B6E4F]"
            >
              Clear all
            </button>

          </div>

        )}


        {/* ================================================== */}
        {/* POPULAR SEARCHES */}
        {/* ================================================== */}

        <div className="mt-5">

          <div className="mb-2 flex items-center justify-between">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-gray-400">
              {t("search.popular")}
            </p>

            <span className="hidden text-[9px] text-gray-400 sm:block">
              Explore by destination
            </span>

          </div>


          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">

            {[
              "Kenya",
              "Tanzania",
              "Uganda",
              "Rwanda",
              "Ethiopia",
              "Zambia",
              "Zimbabwe",
              "Mozambique",
              "South Africa",
              "Botswana",
              "Namibia",
              "Morocco",
              "Egypt",
              "Sudan",
            ].map((destination) => {

              const active =
                searchTerm.toLowerCase() ===
                destination.toLowerCase();


              return (

                <button
                  key={destination}
                  type="button"

                  onClick={() => {

                    setSearchTerm(destination);

                    setShowSuggestions(false);

                  }}

                  className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-[10px] font-semibold transition-all ${
                    active

                      ? "border-[#0B6E4F] bg-[#0B6E4F] text-white shadow-sm"

                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-[#0B6E4F] hover:bg-emerald-50 hover:text-[#0B6E4F]"
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

  </div>

</section>



{/* ====================================================== */}
{/* SEARCH RESULTS */}
{/* ====================================================== */}

{(
  searchTerm.trim() ||
  filters.destination ||
  filters.category ||
  filters.region ||
  filters.duration
) && (

  <section
    id="safari-results"
    className="scroll-mt-24 mt-14 px-4 sm:px-6"
  >

    <div className="mx-auto max-w-7xl">


      {/* ================================================== */}
      {/* RESULTS HEADER */}
      {/* ================================================== */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

        <div>

          <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#B28B2C]">
            Safari Experiences
          </p>


          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#171510] md:text-4xl">

            {searchTerm
              ? (
                <>
                  Results for{" "}

                  <span className="text-[#B28B2C]">
                    "{searchTerm}"
                  </span>
                </>
              )
              : "Explore Your Safari"}

          </h2>


          <p className="mt-2 text-sm text-gray-500">

            <span className="font-bold text-gray-900">
              {filteredDestinations.length}
            </span>{" "}

            {filteredDestinations.length === 1
              ? "experience"
              : "experiences"}{" "}
            found

          </p>

        </div>


        {/* CLEAR */}

        <button
          type="button"
          onClick={clearAllSearch}

          className="w-fit rounded-xl border border-gray-200 bg-white px-5 py-3 text-xs font-bold text-gray-600 shadow-sm transition hover:border-[#0B6E4F] hover:text-[#0B6E4F]"
        >
          Clear Search
        </button>

      </div>


      {/* ================================================== */}
      {/* RESULTS */}
      {/* ================================================== */}

      {filteredDestinations.length > 0 ? (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredDestinations.map((safari) => (

            <article
              key={`${safari.country}-${safari.title}`}

              className="group overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* ================================================== */}
              {/* IMAGE */}
              {/* ================================================== */}

              <div className="relative h-64 overflow-hidden">

                <img
                  src={
                    safari.image ||
                    "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85"
                  }

                  alt={safari.title}

                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />


                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />


                {/* COUNTRY */}

                <div className="absolute bottom-4 left-4">

                  <span className="rounded-full bg-white/95 px-4 py-2 text-[10px] font-bold text-[#171510] shadow-lg backdrop-blur">

                    {safari.country}

                  </span>

                </div>


                {/* CATEGORY */}

                {safari.category && (

                  <div className="absolute right-4 top-4">

                    <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-md">

                      {safari.category}

                    </span>

                  </div>

                )}

              </div>


              {/* ================================================== */}
              {/* CONTENT */}
              {/* ================================================== */}

              <div className="p-6">


                {/* SUBTITLE */}

                <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#B28B2C]">

                  {safari.subtitle}

                </p>


                {/* TITLE */}

                <h3 className="mt-2 text-xl font-black leading-tight text-[#171510]">

                  {safari.title}

                </h3>


                {/* DESCRIPTION */}

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">

                  {safari.description}

                </p>


                {/* ================================================== */}
                {/* META */}
                {/* ================================================== */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {safari.duration && (

                    <span className="rounded-lg bg-gray-50 px-3 py-2 text-[10px] font-semibold text-gray-600">

                      🕐 {safari.duration}

                    </span>

                  )}


                  {safari.region && (

                    <span className="rounded-lg bg-gray-50 px-3 py-2 text-[10px] font-semibold text-gray-600">

                      📍 {safari.region}

                    </span>

                  )}

                </div>


                {/* ================================================== */}
                {/* CTA */}
                {/* ================================================== */}

                <a
                  href={`/${i18n.language || "en"}/Destinations#${safari.sectionId}`}

                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B6E4F] transition-all hover:gap-3"
                >

                  Explore Safari

                  <span>
                    →
                  </span>

                </a>

              </div>

            </article>

          ))}

        </div>

      ) : (

        /* ================================================== */
        /* NO RESULTS */
        /* ================================================== */

        <div className="rounded-[30px] border border-dashed border-gray-300 bg-white px-6 py-20 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F3EA] text-2xl">
            🔍
          </div>


          <h3 className="mt-5 text-2xl font-black text-[#171510]">
            No safari found
          </h3>


          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">

            We couldn't find an experience matching{" "}

            <strong>
              "{searchTerm || "your filters"}"
            </strong>.

            Try another destination, safari type or region.

          </p>


          <button
            type="button"
            onClick={clearAllSearch}

            className="mt-6 rounded-xl bg-[#0B6E4F] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#095c42]"
          >
            View All Safaris
          </button>

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
```jsx
{/* ===================== REVIEWS ===================== */}

<section className="relative overflow-hidden bg-gradient-to-b from-[#F8F6F1] via-white to-[#F2EEE5] py-32">

  {/* Background Effects */}

  <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-[140px]" />

  <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[140px]" />


  <div className="relative mx-auto max-w-7xl px-6">

    {/* ===================== HEADER ===================== */}

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


    {/* ===================== RATING CARD ===================== */}

    <div className="mt-16 flex justify-center">

      <div className="rounded-[35px] bg-white px-8 py-10 shadow-2xl sm:px-12">

        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">

          {/* Rating */}

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


          {/* Divider */}

          <div className="hidden h-24 w-px bg-gray-200 md:block" />


          {/* Trust Message */}

          <div className="text-center md:text-left">

            <h3 className="text-2xl font-bold text-gray-900">
              {t("reviews.trustedTitle")}
            </h3>

            <p className="mt-4 max-w-lg leading-8 text-gray-600">
              {t("reviews.trustedDescription")}
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ===================== REVIEWS ===================== */}

    <div className="mt-20 grid gap-8 md:grid-cols-2">


      {/* ================= REVIEW 1 ================= */}

      <div className="group rounded-[35px] border border-gray-100 bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        {/* Stars */}

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>


        {/* Review Text */}

        <p className="mt-8 text-lg italic leading-9 text-gray-600">
          "{t("reviews.review1.text")}"
        </p>


        {/* Reviewer */}

        <div className="mt-10 flex items-center gap-4">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xl font-bold text-white">
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


      {/* ================= REVIEW 2 ================= */}

      <div className="group rounded-[35px] border border-gray-100 bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        {/* Stars */}

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>


        {/* Review Text */}

        <p className="mt-8 text-lg italic leading-9 text-gray-600">
          "{t("reviews.review2.text")}"
        </p>


        {/* Reviewer */}

        <div className="mt-10 flex items-center gap-4">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xl font-bold text-white">
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


      {/* ================= REVIEW 3 ================= */}

      <div className="group rounded-[35px] border border-gray-100 bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl">

        {/* Stars */}

        <div className="text-2xl text-yellow-400">
          ★★★★★
        </div>


        {/* Review Text */}

        <p className="mt-8 whitespace-pre-line text-lg italic leading-9 text-gray-600">
          "{t("reviews.review3.text")}"
        </p>


        {/* Reviewer */}

        <div className="mt-10 flex items-center gap-4">

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xl font-bold text-white">
            G
          </div>

          <div>

            <h4 className="font-bold text-gray-900">
              George dennis
            </h4>

            <p className="text-sm text-gray-500">
              {t("reviews.googleReview")}
            </p>

          </div>

        </div>

      </div>

    </div>


    {/* ===================== STATISTICS ===================== */}

    <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">


      {/* Rating */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          5.0
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.rating")}
        </p>

      </div>


      {/* Verified Reviews */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          2+
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.verified")}
        </p>

      </div>


      {/* Personalized */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          100%
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.personalized")}
        </p>

      </div>


      {/* Support */}

      <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

        <h3 className="text-5xl font-black text-emerald-700">
          24/7
        </h3>

        <p className="mt-3 text-gray-600">
          {t("reviews.stats.support")}
        </p>

      </div>

    </div>


    {/* ===================== BUTTONS ===================== */}

    <div className="mt-20 flex flex-wrap justify-center gap-6">


      {/* Write Review */}

      <a
        href="https://search.google.com/local/writereview?placeid=ChIJ5WRKPtUTLxgR3jaUiiu327U"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl bg-[#0B6E4F] px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#08523B]"
      >
        ⭐ {t("reviews.writeReview")}
      </a>


      {/* View Google Profile */}

      <a
        href="https://www.google.com/maps/search/?api=1&query=Curious+Safaris,+Ruiru,+Kenya&query_place_id=ChIJ5WRKPtUTLxgR3jaUiiu327U"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border-2 border-[#0B6E4F] px-8 py-4 font-bold text-[#0B6E4F] transition duration-300 hover:-translate-y-1 hover:bg-[#0B6E4F] hover:text-white"
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
