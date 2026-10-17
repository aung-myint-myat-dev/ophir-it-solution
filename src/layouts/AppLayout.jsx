import { useEffect, useLayoutEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigationType } from "react-router-dom";
import DesktopNavbar from "../components/app/DesktopNavbar";
import { ArrowUpRight } from "lucide-react";
import { SettingsProvider } from "../context/SettingsContext";
import { useSettings } from "../context/settings";

const quoteFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScOdgdWC-QP8n_NwHSu_Ir35swQ8NbtNk54LD7iffNdcOdSFA/viewform";

export default function AppLayout() {
  return (
    <SettingsProvider>
      <AppLayoutContent />
    </SettingsProvider>
  );
}

function AppLayoutContent() {
  const { t } = useSettings();

  return (
    <div className="page-shell min-h-screen overflow-hidden bg-[#fbfcfa] text-[#19251f] transition-colors dark:bg-[#101814] dark:text-[#e9efeb]">
      <RouteScrollManager />
      <DesktopNavbar />
      <main className="bg-[#fbfcfa] dark:bg-[#101814]">
        <Outlet />
      </main>
      <footer className="bg-[#17251e] text-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[11px] bg-brand text-white"><span className="text-sm font-bold">O</span></span>
              <span className="font-display text-lg font-extrabold">Ophir <span className="font-medium text-white/55">iT Solution</span></span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              {t("We make thoughtful digital products for people and businesses ready to move forward.")}
            </p>
          </div>

          <nav aria-label={t("Quick links")}>
            <h2 className="text-sm font-bold text-white">{t("Quick links")}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["Products", "/our-products"],
                ["Services", "/services"],
                ["Projects", "/client-projects"],
                ["About", "/about"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link className="text-white/70 transition-colors hover:text-white hover:underline underline-offset-4" to={path}>
                    {t(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("Useful links")}>
            <h2 className="text-sm font-bold text-white">{t("Useful links")}</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link className="text-white/70 transition-colors hover:text-white hover:underline underline-offset-4" to="/pricings">{t("Pricings")}</Link></li>
              <li><Link className="text-white/70 transition-colors hover:text-white hover:underline underline-offset-4" to="/contact-us">{t("Contact Us")}</Link></li>
              <li>
                <a className="text-white/70 transition-colors hover:text-white hover:underline underline-offset-4" href={quoteFormUrl} target="_blank" rel="noreferrer">
                  {t("Request a quotation")}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold text-white">{t("Get in touch")}</h2>
            <p className="mt-4 text-sm leading-6 text-white/60">
              {t("Have a project in mind? Get in touch and tell us what you need.")}
            </p>
            <Link
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12583d]"
              to="/contact-us"
            >
              {t("Contact Us")} <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="border-t border-white/10 pt-5 text-xs text-white/45 sm:col-span-2 lg:col-span-4">
            © {new Date().getFullYear()} Ophir iT Solution. Thoughtfully built.
          </div>
        </div>
      </footer>
    </div>
  );
}

function RouteScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef(location.pathname);
  const listScrollPositions = useRef(new Map());

  useEffect(() => {
    const path = location.pathname;
    if (!isListPath(path)) return undefined;

    const rememberListScroll = () => {
      listScrollPositions.current.set(path, window.scrollY);
    };

    window.addEventListener("scroll", rememberListScroll, { passive: true });
    return () => window.removeEventListener("scroll", rememberListScroll);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const from = previousPath.current;
    const to = location.pathname;
    if (from === to) return;

    if (isListPath(from)) {
      listScrollPositions.current.set(from, window.scrollY);
    }

    const returnToList =
      navigationType === "POP" &&
      isDetailPath(from) &&
      to === getListPath(from) &&
      listScrollPositions.current.has(to);

    window.scrollTo({
      top: returnToList ? listScrollPositions.current.get(to) : 0,
      left: 0,
      behavior: "instant",
    });
    previousPath.current = to;
  }, [location.pathname, navigationType]);

  return null;
}

function isListPath(path) {
  return path === "/our-products" || path === "/client-projects";
}

function isDetailPath(path) {
  return /^\/(our-products|client-projects)\/[^/]+\/?$/.test(path);
}

function getListPath(detailPath) {
  return detailPath.startsWith("/our-products/")
    ? "/our-products"
    : "/client-projects";
}