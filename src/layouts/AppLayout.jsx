import { Outlet } from "react-router-dom";
import DesktopNavbar from "../components/app/DesktopNavbar";
import { ArrowUpRight } from "lucide-react";
import { SettingsProvider } from "../context/SettingsContext";
import { useSettings } from "../context/settings";

export default function AppLayout() {
  return (
    <SettingsProvider>
      <AppLayoutContent />
    </SettingsProvider>
  );
}

function AppLayoutContent() {
  const { theme, t } = useSettings();

  return (
    <div className="page-shell" data-theme={theme}>
      <DesktopNavbar />
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#17251e] text-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-48px))] gap-12 py-14 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <span className="brand-mark"><span className="text-sm font-bold">O</span></span>
              <span className="display-font text-lg font-extrabold">Ophir <span className="font-medium text-white/55">iT Solution</span></span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
              {t("We make thoughtful digital products for people and businesses ready to move forward.")}
            </p>
          </div>
          <a className="group inline-flex items-center gap-2 text-sm font-semibold" href="mailto:hello@ophiritsolution.com">
            {t("Let's talk about your idea")} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="border-t border-white/10 pt-5 text-xs text-white/45 md:col-span-2">
            © {new Date().getFullYear()} Ophir iT Solution. Thoughtfully built.
          </div>
        </div>
      </footer>
    </div>
  )
}