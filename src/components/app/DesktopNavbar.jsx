import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useSettings } from "../../context/settings";

export default function DesktopNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, theme, setTheme, t } = useSettings();
  const navLinks = [
    { label: t("Home"), url: "/" },
    { label: t("Products"), url: "/our-products" },
    { label: t("Services"), url: "/services" },
    { label: t("Projects"), url: "/client-projects" },
    { label: t("About"), url: "/about" },
  ];

  const settingsControls = (
    <>
      <button
        type="button"
        onClick={() => setLanguage(language === "en" ? "my" : "en")}
        aria-label={t(language === "en" ? "Switch to Myanmar" : "Switch to English")}
        title={t(language === "en" ? "Switch to Myanmar" : "Switch to English")}
        className="inline-flex h-9 min-w-10 items-center justify-center rounded-full border border-[#e5ebe5] px-2.5 text-xs font-bold transition hover:bg-[#e8f1eb] hover:text-brand"
      >
        {language === "en" ? "မြန်မာ" : "EN"}
      </button>
      <button
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label={t(theme === "light" ? "Dark mode" : "Light mode")}
        title={t(theme === "light" ? "Dark mode" : "Light mode")}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e5ebe5] transition hover:bg-[#e8f1eb] hover:text-brand"
      >
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    </>
  );

  return (
    <header className="site-nav">
      <nav className="nav-inner flex items-center justify-between" aria-label="Main navigation">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><span className="text-sm font-bold">O</span></span>
          <span className="display-font text-[15px] font-extrabold tracking-tight">Ophir <span className="font-medium text-[#68756d]">iT Solution</span></span>
        </NavLink>
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.url}
              to={link.url}
              end={link.url === "/"}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-[12px] font-medium transition-colors ${isActive ? "bg-[#e8f1eb] text-brand" : "text-[#68756d] hover:text-[#19251f]"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          {settingsControls}
          <a href="mailto:hello@ophiritsolution.com" className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-[#12583d]">
            {t("Let's talk")} <ArrowUpRight size={14} />
          </a>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5ebe5] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-[#e9eee9] bg-[#fbfcfa] px-5 pb-5 pt-2 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.url}
                to={link.url}
                end={link.url === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium ${isActive ? "bg-[#e8f1eb] text-brand" : "text-[#68756d]"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white" href="mailto:hello@ophiritsolution.com">
              {t("Let's talk")} <ArrowUpRight size={15} />
            </a>
            <div className="mt-4 flex items-center gap-2">{settingsControls}</div>
          </div>
        </div>
      )}
    </header>
  )
}