import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
//import { FaHome, FaImages, FaPhone, FaMapMarkerAlt, FaBus} from "react-icons/fa";

//import i18n from "i18next";
import safarilogo from "../assets/safarilinklogo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
 //const [langOpen, setLangOpen] = useState(false);
 // const [scrolled, setScrolled] = useState(false);
  const [progress] = useState(0);

  

 

  const destinations = [
    ["Maasai Mara", "/maasaimara"],
    ["Amboseli", "/amboseli"],
    ["Naivasha", "/naivasha"],
    ["Lake Nakuru", "/lakenakuru"],
    ["Tsavo", "/tsavo"],
    ["Diani Beach", "/diani"],
    ["Watamu", "/watamu"],
    ["Mount Kenya", "/mountkenya"],
  ];

  

    

    
  ;

  

  const closeMobile = () => {
    setMenuOpen(false);
    setDestOpen(false);
  };

  const navLink =
    "relative px-4 py-3 font-semibold text-white transition-all duration-300 hover:text-[#D4AF37] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-3/4 hover:after:left-[12%]";

  const activeNav =
    "text-[#D4AF37] after:absolute after:left-[12%] after:-bottom-1 after:h-[2px] after:w-3/4 after:bg-[#D4AF37]";

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${navLink} ${isActive ? activeNav : ""}`
      }
    >
      {children}
    </NavLink>
  ); return (
  <>
    {/* Scroll Progress */}
    <div className="fixed top-0 left-0 w-full h-[3px] z-[999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#D4AF37] via-yellow-400 to-[#D4AF37] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>


{/* ================= Premium Top Bar ================= */}

    {/* ================= NAVBAR ================= */}

    <nav
  className="fixed top-0 left-0 w-full z-50 bg-[#04140F]/95 backdrop-blur-2xl border-b border-[#D4AF37]/20 shadow-2xl py-4 transition-all duration-500"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* ================= LOGO ================= */}

          <Link
            to="/"
            className="flex items-center gap-4 group"
          >
            <img
              src={safarilogo}
              alt="Savanna Crown Safaris"
              className="w-16 h-16 rounded-full border-2 border-[#D4AF37]
              shadow-xl shadow-yellow-500/20
              transition-all duration-500
              group-hover:rotate-3
              group-hover:scale-110
              group-hover:brightness-110
             group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,.8)]"
            />

            <div>

              <h2
                className="text-white font-black text-2xl tracking-wide
                transition-all duration-300
                group-hover:text-[#D4AF37]"
              >
                Savanna Crown
              </h2>

              <p
                className="uppercase tracking-[0.35em]
                text-[#D4AF37] text-xs"
              >
                Safaris Africa
              </p>

            </div>

          </Link>

          {/* ================= DESKTOP MENU ================= */}

          <div className="hidden lg:flex items-center gap-1">

            <NavItem to="/">Home</NavItem>

            <NavItem to="/about">About</NavItem>

            

            {/* ================= DESTINATIONS ================= */}
 
            <div
              className="relative"
              onMouseEnter={() => setDestOpen(true)}
              onMouseLeave={() => setDestOpen(false)}
            >

              

              <div
                className={`absolute left-0 top-16 w-80 rounded-3xl overflow-hidden
                bg-white shadow-[0_25px_60px_rgba(0,0,0,.18)]
                border border-gray-100
                transition-all duration-300 origin-top
                ${
                  destOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
                }`}
              >

                <div className="bg-[#0B6E4F] px-6 py-5">

                  <h3 className="text-white font-bold text-lg">
                    Popular Destinations
                  </h3>

                  <p className="text-green-100 text-sm mt-1">
                    Discover Kenya's finest adventures
                  </p>

                </div>

                <div className="py-2">

                  {destinations.map(([name, path]) => (

                    <Link
                      key={path}
                      to={path}
                      className="block px-6 py-4
                      text-gray-700
                      hover:bg-[#F5FAF8]
                      hover:text-[#0B6E4F]
                      transition-all duration-300"
                    >
                      {name}
                    </Link>

                  ))}

                </div>

              </div>

            </div>

            <NavItem to="/Services">
              Our Services
            </NavItem>

            <NavItem to="/upcomingtrips">
              Upcoming Trips
            </NavItem>

            <NavItem to="/gallery">
              Gallery
            </NavItem>

            <NavItem to="/contact">
              Contact
            </NavItem>

            {/* ================= LANGUAGE ================= */}

            

            <a
  href="https://wa.me/254720524627?text=Hello%20Savanna%20Crown%20Safaris%20Africa%2C%20I%27d%20like%20to%20book%20a%20trip."
  target="_blank"
  rel="noopener noreferrer"
  className="ml-3 px-7 py-3
  rounded-full
  bg-[#D4AF37]
  text-black
  font-bold
  transition-all duration-300
  hover:scale-105
  hover:shadow-[0_15px_40px_rgba(212,175,55,.45)]"
>
  Book Now
</a>

          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-4xl
            hover:text-[#D4AF37]
            transition"
          >
            ☰
          </button>

        </div>

      </div>

    </nav>  {menuOpen && (
  <div className="fixed inset-0 z-[70] lg:hidden">

    {/* Overlay */}

    <div
      onClick={closeMobile}
      className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        menuOpen ? "opacity-100" : "opacity-0"
      }`}
    />

    {/* Drawer */}

    <div
      className={`absolute top-0 right-0 h-full w-[88%] max-w-sm
      bg-gradient-to-b from-white via-white to-gray-50
      shadow-[0_0_60px_rgba(0,0,0,.25)]
      transition-all duration-500
      ${
        menuOpen
          ? "translate-x-0"
          : "translate-x-full"
      }`}
    >

      {/* Header */}

      <div className="bg-[#0B6E4F] p-6">

        <div className="flex justify-between items-center">

          <Link
            to="/"
            onClick={closeMobile}
            className="flex items-center gap-3"
          >

            <img
              src={safarilogo}
              alt=""
              className="w-14 h-14 rounded-full border-2 border-[#D4AF37]"
            />

            <div>

              <h2 className="text-white font-black text-xl">
                Savanna Crown
              </h2>

              <p className="text-[#D4AF37] uppercase text-xs tracking-widest">
                Safaris Africa
              </p>

            </div>

          </Link>

          <button
            onClick={closeMobile}
            className="text-white text-4xl hover:rotate-90 transition duration-300"
          >
            ×
          </button>

        </div>

      </div>

      {/* Navigation */}

      <div className="p-6 space-y-2 overflow-y-auto h-[calc(100%-130px)]">

        <NavLink
          to="/"
          onClick={closeMobile}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
              isActive
                ? "bg-[#0B6E4F] text-white shadow-lg"
                : "hover:bg-[#F5FAF8] text-gray-700"
            }`
          }
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMobile}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
              isActive
                ? "bg-[#0B6E4F] text-white shadow-lg"
                : "hover:bg-[#F5FAF8] text-gray-700"
            }`
          }
        >
          👑 About
        </NavLink>



        <NavLink
          to="/services"
          onClick={closeMobile}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
              isActive
                ? "bg-[#0B6E4F] text-white shadow-lg"
                : "hover:bg-[#F5FAF8] text-gray-700"
            }`
          }
        >
          🚐 Ours services
        </NavLink>

        <NavLink
          to="/upcomingtrips"
          onClick={closeMobile}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
              isActive
                ? "bg-[#0B6E4F] text-white shadow-lg"
                : "hover:bg-[#F5FAF8] text-gray-700"
            }`
          }
        >
          🚌 Upcoming Trips
        </NavLink>

        {/* Destinations */}

        

        <div
          className={`overflow-hidden transition-all duration-300 ${
            destOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <div className="ml-4 border-l-2 border-[#D4AF37] pl-4">

            {destinations.map(([name, path]) => (

              <Link
                key={path}
                to={path}
                onClick={closeMobile}
                className="block py-3 text-gray-700 hover:text-[#0B6E4F] transition"
              >
                {name}
              </Link>

            ))}

          </div>

        </div>

        

        <NavLink
          to="/gallery"
          onClick={closeMobile}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
              isActive
                ? "bg-[#0B6E4F] text-white shadow-lg"
                : "hover:bg-[#F5FAF8] text-gray-700"
            }`
          }
        >
          📸 Gallery
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMobile}
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
              isActive
                ? "bg-[#0B6E4F] text-white shadow-lg"
                : "hover:bg-[#F5FAF8] text-gray-700"
            }`
          }
        >
          📞 Contact
        </NavLink>

        {/* CTA */}

        
      </div>

    </div>

  </div>
)}
</>

);

}

export default Navbar;