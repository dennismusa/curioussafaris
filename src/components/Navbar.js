import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import safarilogo from "../assets/safarilinklogo.png";

function Navbar() {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopLangOpen, setDesktopLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const desktopLanguageRef = useRef(null);
  const mobileLanguageRef = useRef(null);

  // =====================================================
  // LANGUAGES
  // =====================================================

  const languages = [
    {
      code: "en",
      label: "English",
      native: "English",
      flag: "🇬🇧",
    },
    {
      code: "es",
      label: "Spanish",
      native: "Español",
      flag: "🇪🇸",
    },
    {
      code: "fr",
      label: "French",
      native: "Français",
      flag: "🇫🇷",
    },
    {
      code: "it",
      label: "Italian",
      native: "Italiano",
      flag: "🇮🇹",
    },
    {
      code: "de",
      label: "German",
      native: "Deutsch",
      flag: "🇩🇪",
    },
    
  ];

  // =====================================================
  // CURRENT LANGUAGE
  // =====================================================

  const languageCode = i18n.language?.split("-")[0] || "en";

  const currentLanguage =
    languages.find((language) => language.code === languageCode) ||
    languages[0];

  const isRTL = languageCode === "ar";

  // =====================================================
  // RTL / LTR
  // =====================================================

  useEffect(() => {
    const rtl = languageCode === "ar";

    document.documentElement.lang = languageCode;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [languageCode]);

  // =====================================================
  // SCROLL
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrolled(scrollTop > 30);

      setScrollProgress(
        Math.min(100, Math.max(0, progress))
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =====================================================
  // CLOSE LANGUAGE DROPDOWNS OUTSIDE
  // =====================================================

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        desktopLanguageRef.current &&
        !desktopLanguageRef.current.contains(event.target)
      ) {
        setDesktopLangOpen(false);
      }

      if (
        mobileLanguageRef.current &&
        !mobileLanguageRef.current.contains(event.target)
      ) {
        setMobileLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  // =====================================================
  // ESCAPE KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDesktopLangOpen(false);
        setMobileLangOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // =====================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =====================================================

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // =====================================================
  // CHANGE LANGUAGE
  // =====================================================

  const changeLanguage = async (code) => {
    try {
      await i18n.changeLanguage(code);

      if (typeof window !== "undefined") {
        localStorage.setItem("lang", code);

        const rtl = code === "ar";

        document.documentElement.lang = code;
        document.documentElement.dir = rtl ? "rtl" : "ltr";
      }

      setDesktopLangOpen(false);
      setMobileLangOpen(false);
      setMenuOpen(false);
    } catch (error) {
      console.error("Language change failed:", error);
    }
  };

  // =====================================================
  // CLOSE MOBILE
  // =====================================================

  const closeMobile = () => {
    setMenuOpen(false);
    setMobileLangOpen(false);
    setDesktopLangOpen(false);
  };

  // =====================================================
  // NAVIGATION ITEMS
  // =====================================================

 const mobileItems = [
  ["🏠", "nav.home", "/"],
  ["👑", "nav.about", "/about"],
  ["🚐", "nav.services", "/services"],
  ["🗺️", "nav.dayTour", "/Daytours"],
  ["🌍", "nav.destinations", "/destinations"],
  ["📸", "nav.gallery", "/gallery"],
  ["📞", "nav.contact", "/contact"],
];

  // =====================================================
  // NAV ITEM
  // =====================================================

  const NavItem = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => `
          group
          relative
          px-4
          py-3
          font-semibold
          text-white
          transition-all
          duration-300

          ltr:tracking-wide

          hover:text-[#D4AF37]

          ${
            isActive
              ? "text-[#D4AF37]"
              : ""
          }

          after:absolute
          after:bottom-1
          after:start-1/2
          after:h-[2px]
          after:w-0
          after:-translate-x-1/2
          after:rounded-full
          after:bg-[#D4AF37]
          after:transition-all
          after:duration-300

          group-hover:after:w-3/4

          ${
            isActive
              ? "after:w-3/4"
              : ""
          }
        `}
      >
        {children}
      </NavLink>
    );
  };

  // =====================================================
  // LANGUAGE DROPDOWN
  // =====================================================

 const LanguageDropdown = () => (
  <div
    className="
      absolute
      right-0
      top-[calc(100%+8px)]
      z-[300]
      w-[190px]
      overflow-hidden
      rounded-2xl
      border
      border-[#D4AF37]/30
      bg-[#071A15]/95
      shadow-[0_15px_40px_rgba(0,0,0,.45)]
      backdrop-blur-xl

      animate-[languageDrop_.25s_ease-out]
    "
  >
    {/* HEADER */}
    <div
      className="
        border-b
        border-white/10
        bg-[#0B6E4F]
        px-4
        py-3
      "
    >
      <div className="flex items-center gap-2">
        <span className="text-base">🌐</span>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#D4AF37]">
            Language
          </p>

          <p className="text-xs font-semibold text-white">
            {t("nav.chooseLanguage")}
          </p>
        </div>
      </div>
    </div>

    {/* LANGUAGES */}
    <div className="p-1.5">
      {languages.map((language) => {
        const active =
          currentLanguage.code === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            className={`
              group
              flex
              w-full
              items-center
              gap-2.5
              rounded-xl
              px-2.5
              py-2
              text-start
              transition-all
              duration-300

              ${
                active
                  ? "bg-[#0B6E4F] text-white"
                  : "text-gray-200 hover:bg-white/10 hover:translate-x-1"
              }
            `}
          >
            {/* FLAG */}
            <span
              className={`
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-lg
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:rotate-3
                ${
                  active
                    ? "ring-2 ring-[#D4AF37]"
                    : ""
                }
              `}
            >
              {language.flag}
            </span>

            {/* TEXT */}
            <span className="flex min-w-0 flex-1 flex-col">
              <span
                className={`
                  truncate
                  text-[11px]
                  font-bold
                  ${
                    active
                      ? "text-[#D4AF37]"
                      : "text-white"
                  }
                `}
              >
                {language.native}
              </span>

              <span className="text-[9px] text-gray-400">
                {language.label}
              </span>
            </span>

            {/* ACTIVE */}
            {active ? (
              <span
                className="
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  text-[10px]
                  font-black
                  text-black
                  animate-[pulse_.8s_ease-in-out]
                "
              >
                ✓
              </span>
            ) : (
              <span
                className="
                  text-xs
                  text-gray-500
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              >
                →
              </span>
            )}
          </button>
        );
      })}
    </div>
  </div>
);

  return (
    <>
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes languageDropdown {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(.96);
            filter: blur(4px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes languageOption {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flagFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-2px);
          }
        }

        .animate-language-dropdown {
          animation:
            languageDropdown
            .28s
            cubic-bezier(.22,1,.36,1)
            forwards;
        }

        .language-option {
          animation:
            languageOption
            .3s
            cubic-bezier(.22,1,.36,1)
            both;
        }

        .language-flag {
          animation:
            flagFloat
            3s
            ease-in-out
            infinite;
        }
      `}</style>

      {/* =====================================================
          SCROLL PROGRESS
      ===================================================== */}

      <div className="fixed start-0 top-0 z-[1000] h-[3px] w-full">
        <div
          className="
            h-full
            bg-gradient-to-r
            from-[#D4AF37]
            via-yellow-400
            to-[#D4AF37]
            transition-[width]
            duration-100
          "
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`
          fixed
          start-0
          top-0
          z-50
          w-full
          border-b
          border-[#D4AF37]/20
          backdrop-blur-2xl
          transition-all
          duration-500

          ${
            scrolled
              ? "bg-[#04140F]/98 py-2 shadow-[0_15px_50px_rgba(0,0,0,.35)]"
              : "bg-[#04140F]/95 py-4"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500

              ${
                scrolled
                  ? "h-16"
                  : "h-20"
              }
            `}
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
                sm:gap-4
              "
            >
              <img
                src={safarilogo}
                alt="Curious Safaris"
                className={`
                  rounded-full
                  border-2
                  border-[#D4AF37]
                  shadow-xl
                  shadow-yellow-500/20
                  transition-all
                  duration-500
                  group-hover:rotate-3
                  group-hover:scale-105
                  group-hover:brightness-110
                  group-hover:drop-shadow-[0_0_25px_rgba(212,175,55,.7)]

                  ${
                    scrolled
                      ? "h-11 w-11 sm:h-12 sm:w-12"
                      : "h-14 w-14 sm:h-16 sm:w-16"
                  }
                `}
              />

              <div className="hidden text-start sm:block">
                <h2 className="text-xl font-black tracking-wide text-white transition-all duration-300 group-hover:text-[#D4AF37] sm:text-2xl">
                  Curious Safaris
                </h2>

                <p className="text-[10px] uppercase tracking-[0.35em] text-[#D4AF37] sm:text-xs">
                  Africa
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP MENU
            ================================================= */}

            <div className="hidden items-center gap-0 lg:flex">
              <NavItem to="/">
  {t("nav.home")}
</NavItem>

<NavItem to="/about">
  {t("nav.about")}
</NavItem>

<NavItem to="/services">
  {t("nav.services")}
</NavItem>

<NavItem to="/Daytours">
  {t("nav.dayTour")}
</NavItem>

<NavItem to="/destinations">
  {t("nav.destinations")}
</NavItem>

<NavItem to="/gallery">
  {t("nav.gallery")}
</NavItem>

<NavItem to="/contact">
  {t("nav.contact")}
</NavItem>

              {/* LANGUAGE */}

              <div
                ref={desktopLanguageRef}
                className="relative ms-3"
              >
                <button
                  type="button"
                  onClick={() => {
                    setDesktopLangOpen((prev) => !prev);
                    setMobileLangOpen(false);
                  }}
                  aria-label="Change language"
                  aria-expanded={desktopLangOpen}
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-4
                    py-2.5
                    text-white
                    transition-all
                    duration-300

                    ${
                      desktopLangOpen
                        ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,.15)]"
                        : "border-white/20 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]"
                    }
                  `}
                >
                  <span className="language-flag text-xl">
                    {currentLanguage.flag}
                  </span>

                  <span
                    dir="ltr"
                    className="text-xs font-bold tracking-wider"
                  >
                    {currentLanguage.code.toUpperCase()}
                  </span>

                  <span
                    className={`
                      text-xs
                      transition-transform
                      duration-300

                      ${
                        desktopLangOpen
                          ? "rotate-180 text-[#D4AF37]"
                          : ""
                      }
                    `}
                  >
                    ▾
                  </span>
                </button>

                {desktopLangOpen && (
                  <LanguageDropdown />
                )}
              </div>

              {/* BOOK */}

              
            </div>

            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div className="flex items-center gap-2 lg:hidden">
              {/* MOBILE LANGUAGE */}

              <div
                ref={mobileLanguageRef}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileLangOpen((prev) => !prev);
                    setDesktopLangOpen(false);
                  }}
                  aria-label="Change language"
                  aria-expanded={mobileLangOpen}
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/20
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]/10
                    hover:text-[#D4AF37]
                  "
                >
                  <span className="language-flag">
                    {currentLanguage.flag}
                  </span>

                  <span
                    dir="ltr"
                    className="font-bold"
                  >
                    {currentLanguage.code.toUpperCase()}
                  </span>

                  <span
                    className={`
                      transition-transform
                      duration-300

                      ${
                        mobileLangOpen
                          ? "rotate-180 text-[#D4AF37]"
                          : ""
                      }
                    `}
                  >
                    ▾
                  </span>
                </button>

                {mobileLangOpen && (
                  <LanguageDropdown />
                )}
              </div>

              {/* MENU */}

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(true);
                  setMobileLangOpen(false);
                }}
                aria-label="Open menu"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  text-xl
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]
                  hover:bg-[#D4AF37]/10
                  hover:text-[#D4AF37]
                "
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}

      <div
        onClick={closeMobile}
        className={`
          fixed
          inset-0
          z-[180]
          bg-black/70
          backdrop-blur-sm
          transition-all
          duration-500
          lg:hidden

          ${
            menuOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <aside
        aria-hidden={!menuOpen}
        className={`
          fixed
          top-0
          z-[200]
          h-screen
          w-[88%]
          max-w-sm
          overflow-y-auto
          bg-gradient-to-b
          from-[#0B6E4F]
          via-white
          to-gray-50
          shadow-[-20px_0_60px_rgba(0,0,0,.25)]
          transition-transform
          duration-500
          lg:hidden

          ${
            isRTL
              ? "start-0"
              : "end-0"
          }

          ${
            menuOpen
              ? "translate-x-0"
              : isRTL
                ? "-translate-x-full"
                : "translate-x-full"
          }
        `}
      >
        {/* HEADER */}

        <div className="bg-[#0B6E4F] p-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={closeMobile}
              className="group flex items-center gap-3"
            >
              <img
                src={safarilogo}
                alt="Curious Safaris"
                className="
                  h-14
                  w-14
                  rounded-full
                  border-2
                  border-[#D4AF37]
                  shadow-lg
                  transition
                  group-hover:scale-105
                "
              />

              <div className="text-start">
                <h2 className="text-xl font-black text-white">
                  Curious Safaris
                </h2>

                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  Africa
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close menu"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-3xl
                leading-none
                text-white
                transition-all
                duration-300
                hover:rotate-90
                hover:border-[#D4AF37]
                hover:text-[#D4AF37]
              "
            >
              ×
            </button>
          </div>
        </div>

        {/* NAVIGATION */}

        <div className="space-y-2 p-6">
          {mobileItems.map(
            ([icon, translation, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMobile}
                className={({ isActive }) => `
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-5
                  py-4
                  text-start
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-[#0B6E4F] text-white shadow-lg"
                      : "text-gray-700 hover:bg-[#F5FAF8] hover:text-[#0B6E4F]"
                  }
                `}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-lg">
                  {icon}
                </span>

                <span className="flex-1">
                  {t(translation)}
                </span>

                <span
                  dir="ltr"
                  className="
                    text-gray-300
                    transition-transform
                  "
                >
                  {isRTL ? "←" : "→"}
                </span>
              </NavLink>
            )
          )}

          {/* =================================================
              MOBILE LANGUAGE
          ================================================= */}

          <div className="pt-4">
            <button
              type="button"
              onClick={() =>
                setMobileLangOpen((prev) => !prev)
              }
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                bg-[#F5FAF8]
                px-5
                py-4
                text-start
                font-semibold
                text-gray-700
                transition-all
                duration-300
                hover:bg-[#EAF5F0]
              "
            >
              <span className="flex items-center gap-3">
                <span className="text-xl">
                  🌐
                </span>

                <span className="language-flag text-xl">
                  {currentLanguage.flag}
                </span>

                <span>
                  {currentLanguage.native}
                </span>
              </span>

              <span
                className={`
                  transition-transform
                  duration-300

                  ${
                    mobileLangOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              >
                ▾
              </span>
            </button>

            {/* OPTIONS */}

            <div
              className={`
                overflow-hidden
                transition-all
                duration-500

                ${
                  mobileLangOpen
                    ? "mt-2 max-h-[520px] opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-lg">
                {languages.map((language) => {
                  const active =
                    currentLanguage.code ===
                    language.code;

                  return (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() =>
                        changeLanguage(language.code)
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-start
                        transition-all
                        duration-300

                        ${
                          active
                            ? "bg-[#F5FAF8]"
                            : "hover:bg-gray-50"
                        }
                      `}
                    >
                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-xl

                          ${
                            active
                              ? "bg-[#0B6E4F]/10"
                              : "bg-gray-100"
                          }
                        `}
                      >
                        {language.flag}
                      </span>

                      <span className="flex flex-1 flex-col items-start">
                        <span
                          className={`
                            text-sm
                            font-bold

                            ${
                              active
                                ? "text-[#0B6E4F]"
                                : "text-gray-800"
                            }
                          `}
                        >
                          {language.native}
                        </span>

                        <span className="text-[10px] text-gray-400">
                          {language.label}
                        </span>
                      </span>

                      {active && (
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-black text-black">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              BOOK NOW
          ================================================= */}

          <a
            href="https://wa.me/254745861688?text=Hello%20Curious%20Safaris%2C%20I%27d%20like%20to%20book%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="
              group
              relative
              mt-5
              block
              overflow-hidden
              rounded-2xl
              bg-[#D4AF37]
              px-6
              py-4
              text-center
              font-bold
              text-black
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_15px_40px_rgba(212,175,55,.35)]
            "
          >
            <span className="relative z-10">
              {t("nav.book")}
            </span>

            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
          </a>

          {/* FOOTER */}

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[3px] text-gray-400">
              Curious Safaris
            </p>

            <p className="mt-2 text-xs text-gray-400">
              Lost in the right direction.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;