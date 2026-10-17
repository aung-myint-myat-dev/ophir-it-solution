import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useSettings } from "../../context/settings";
import { localize, products, projects } from "../../data";
import NavbarLinks from "./NavbarLinks";
import NavbarSettings from "./NavbarSettings";

export default function DesktopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const previousScrollY = useRef(0);
  const { language, t } = useSettings();
  const localizedProducts = products.map((product) => localize(product, language));
  const localizedProjects = projects.map((project) => localize(project, language));
  const navLinks = [
    { label: t("Home"), url: "/" },
    {
      label: t("Products"),
      url: "/our-products",
      items: [
        { label: t("All products"), url: "/our-products" },
        ...localizedProducts.map((product) => ({
          label: product.name,
          url: `/our-products/${product.slug}`,
        })),
      ],
    },
    { label: t("Services"), url: "/services" },
    {
      label: t("Projects"),
      url: "/client-projects",
      items: [
        { label: t("All projects"), url: "/client-projects" },
        ...localizedProjects.map((project) => ({
          label: project.name,
          url: `/client-projects/${project.slug}`,
        })),
      ],
    },
    { label: t("About"), url: "/about" },
    { label: t("Pricings"), url: "/pricings" },
    { label: t("Contact Us"), url: "/contact-us" },
  ];

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen || currentScrollY <= 80) {
        setIsVisible(true);
      } else if (currentScrollY < previousScrollY.current - 4) {
        setIsVisible(true);
      } else if (currentScrollY > previousScrollY.current + 4) {
        setIsVisible(false);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-20 w-full border-b border-[#19251f]/[0.05] bg-[#fbfcfa]/90 backdrop-blur-lg transition-[translate,background-color,border-color] duration-500 ease-in-out will-change-[translate] dark:border-white/10 dark:bg-[#101814]/90 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >

      {/* Desktop Navbar */}
      <nav
        className="mx-auto flex h-[68px] w-[calc(100%-36px)] max-w-[1180px] items-center justify-between md:h-[76px] md:w-[calc(100%-48px)]"
        aria-label={t("Main navigation")}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="font-display text-[15px] font-extrabold tracking-tight">
            Ophir <span className="font-medium text-[#68756d] dark:text-[#a6b4aa] transition-colors duration-200">iT Solution</span>
          </span>
        </Link>

        {/* Nav Links */}
        <NavbarLinks links={navLinks} />

        {/* Lang, Theme, Contact Us */}
        <div className="hidden items-center gap-2 md:flex">
          <NavbarSettings />
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-[#12583d]"
          >
            {t("Contact Us")} <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200 hover:bg-[#e8f1eb] dark:border-[#2a3930] dark:hover:bg-[#1e3a2f] lg:hidden"
          aria-label={t(menuOpen ? "Close navigation menu" : "Open navigation menu")}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Navbar */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-[#e9eee9] bg-[#fbfcfa] px-5 pb-5 pt-2 shadow-lg dark:border-[#2a3930] dark:bg-[#101814] lg:hidden"
        >
          <div className="mx-auto flex max-w-[1180px] flex-col">
            <NavbarLinks links={navLinks} mobile onNavigate={() => setMenuOpen(false)} />
            <Link
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
            >
              {t("Contact Us")} <ArrowUpRight size={15} />
            </Link>
            <div className="mt-4 flex items-center gap-2">
              <NavbarSettings />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}