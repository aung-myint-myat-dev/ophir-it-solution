import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Layers3,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/settings";

const productIcons = {
  layers: Layers3,
  wallet: Wallet,
  heart: Heart,
};

const dashboardStats = {
  layers: [
    { label: "Active projects", value: "08", change: "+2 this month" },
    { label: "Team momentum", value: "94%", change: "On track" },
  ],
  wallet: [
    { label: "Monthly revenue", value: "$24k", change: "+12.8%" },
    { label: "Invoices paid", value: "86%", change: "This month" },
  ],
  heart: [
    { label: "Appointments", value: "128", change: "+18 this week" },
    { label: "Follow-ups", value: "96%", change: "On track" },
  ],
};

export default function ProductShowcase({ products }) {
  const { t } = useSettings();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const dragStart = useRef(null);
  const product = products[activeIndex];
  const Icon = productIcons[product.icon] ?? Layers3;
  const stats = dashboardStats[product.icon] ?? dashboardStats.layers;

  useEffect(() => {
    if (isPaused || products.length < 2) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const interval = window.setInterval(() => {
      setSlideDirection(1);
      setActiveIndex((currentIndex) => (currentIndex + 1) % products.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, products.length]);

  const showProduct = (index) => {
    const nextIndex = (index + products.length) % products.length;
    setSlideDirection(
      nextIndex > activeIndex || (activeIndex === products.length - 1 && nextIndex === 0)
        ? 1
        : -1,
    );
    setActiveIndex(nextIndex);
  };

  const handlePointerDown = (event) => {
    if (event.target.closest("button, a")) return;
    dragStart.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (dragStart.current === null) return;
    const distance = event.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(distance) > 40) {
      showProduct(activeIndex + (distance < 0 ? 1 : -1));
    }
  };

  return (
    <div
      className="hero-panel product-showcase min-h-[400px] rounded-[22px] border-white/10 bg-[linear-gradient(145deg,#e4f1e9_0%,#f0f4ed_58%,#f5e8df_100%)] px-4 pb-5 pt-7 transition-colors dark:border-white/10 dark:bg-[linear-gradient(145deg,#20352a_0%,#202b25_58%,#382b25_100%)] sm:rounded-[28px] sm:px-7 sm:pt-8 md:min-h-[445px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { dragStart.current = null; }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") showProduct(activeIndex + 1);
        if (event.key === "ArrowLeft") showProduct(activeIndex - 1);
      }}
      tabIndex={0}
      aria-label={t("Featured products carousel. Use left and right arrow keys to change slides.")}
    >
      <div className="absolute bottom-[-100px] left-[-80px] h-64 w-64 rounded-full bg-[#f0cdbb]/60 blur-[75px]" />
      <div className="absolute right-[-45px] top-12 h-56 w-56 rounded-full bg-[#c4dfcc]/80 blur-[65px]" />

      {/* Show Case Header */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl accent-${product.accent}`}>
            <Icon size={17} />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-bold">{product.name}</p>
            <p className="truncate text-[10px] text-[#7c8980] dark:text-[#a6b4aa]">{product.category}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() => showProduct(activeIndex - 1)}
            aria-label={t("Show previous product")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 dark:border-none bg-white/75 dark:bg-[#1b2620]/75 text-[#536158] dark:text-[#e3ebe5] transition hover:bg-white dark:hover:bg-[#1b2620] cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => showProduct(activeIndex + 1)}
            aria-label={t("Show next product")}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 dark:border-none bg-white/75 dark:bg-[#1b2620]/75 text-[#536158] dark:text-[#e3ebe5] transition hover:bg-white dark:hover:bg-[#1b2620] cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Show case devices */}
      <div
        key={product.slug}
        className="showcase-devices product-device-transition relative mx-auto mt-5 max-w-[450px]"
        style={{ "--slide-direction": slideDirection }}
      >
        {/* Desktop */}
        <div className="showcase-desktop">
          <div className="showcase-monitor text-[#19251f]">
            <div className="flex items-center justify-between border-b border-[#edf0ed] dark:border-[#2a3930] px-3 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e8b19a]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7cc8c]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#9bc8a8]" />
              </div>
              <span className="text-[8px] font-semibold text-[#7c8980] dark:text-[#a6b4aa]">{product.name} {t("workspace")}</span>
              <span className="h-4 w-4 rounded-full bg-[#e8f1eb] dark:bg-[#1e3a2f]" />
            </div>
            <div className="grid grid-cols-[56px_1fr]">
              <div className="space-y-2.5 border-r border-[#edf0ed] dark:border-[#2a3930] px-2 py-3">
                <span className="block h-2 w-8 rounded-full bg-[#176b4a]/80" />
                <span className="block h-1.5 w-7 rounded-full bg-[#e5ebe6]" />
                <span className="block h-1.5 w-8 rounded-full bg-[#e5ebe6]" />
                <span className="block h-1.5 w-6 rounded-full bg-[#e5ebe6]" />
              </div>
              <div className="min-w-0 p-3">
                <p className="text-[9px] font-bold text-[#334239] dark:text-[#e3ebe5]">{t("Your overview")}</p>
                <p className="mt-0.5 text-[7px] text-[#929c95] dark:text-[#a6b4aa]">{t("Here's what's happening today.")}</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-md bg-[#f5f8f5] dark:bg-[#18221c] p-2">
                      <p className="text-[7px] text-[#859188] dark:text-[#a6b4aa]">{stat.label}</p>
                      <div className="mt-1 flex items-end justify-between gap-1">
                        <span className="text-xs font-bold text-[#27372d] dark:text-[#e3ebe5]">{stat.value}</span>
                        <span className="text-[6px] font-semibold text-brand">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 rounded-md border border-[#edf0ed] dark:border-[#2a3930] p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-semibold text-[#536158] dark:text-[#e3ebe5]">{t("Weekly progress")}</span>
                    <span className="text-[6px] text-[#929c95] dark:text-[#a6b4aa]">{t("This week")}</span>
                  </div>
                  <div className="mt-2 flex h-8 items-end gap-1">
                    {[38, 60, 46, 78, 54, 91, 70, 100, 74, 86, 62, 96].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className={`flex-1 rounded-t-[2px] ${index === 7 ? "bg-secondary-brand/70" : "bg-brand/35"}`}
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-monitor-stand" />
        </div>

        <div className="showcase-phone" aria-label={`${product.name} mobile app preview`}>
          <div className="showcase-phone-screen text-[#19251f]">
            <div className="showcase-phone-notch" />
            <div className="flex items-center justify-between px-2.5 pt-5">
              <span className="text-[8px] font-bold text-[#26372c] dark:text-[#e3ebe5]">{product.name}</span>
              <span className="h-4 w-4 rounded-full bg-[#e8f1eb] dark:bg-[#1e3a2f]" />
            </div>
            <img
              src={product.previewImage}
              alt={`${product.name} app preview`}
              className="mt-2 h-[67px] w-full object-cover"
              draggable="false"
            />
            <div className="px-2.5 pt-2">
              <p className="text-[7px] font-bold text-[#334239] dark:text-[#e3ebe5]">{t("A clearer view of your day")}</p>
              <p className="mt-0.5 text-[6px] leading-3 text-[#89958d] dark:text-[#a6b4aa]">{product.summary}</p>
              <div className="mt-2 space-y-1.5">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 rounded bg-[#f5f8f5] dark:bg-[#18221c] p-1.5">
                    <span className={`h-4 w-4 rounded ${item === 1 ? "bg-[#f8ece5]" : "bg-[#e8f1eb] dark:bg-[#1e3a2f]"}`} />
                    <span className="flex-1">
                      <span className="block h-1 w-10 rounded-full bg-[#d8e0d9]" />
                      <span className="mt-1 block h-1 w-7 rounded-full bg-[#e9eee9]" />
                    </span>
                    <ChevronRight size={8} className="text-[#9aa59d]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5" aria-label={`Product ${activeIndex + 1} of ${products.length}`}>
          {products.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => showProduct(index)}
              aria-label={`${t("Show")} ${item.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`size-2 rounded-full transition-all cursor-pointer ${index === activeIndex ? "w-5 bg-brand dark:bg-white" : "bg-brand/25 dark:bg-white/25 hover:bg-brand/50"}`}
            />
          ))}
        </div>
        <Link
          to={`/our-products/${product.slug}`}
          className="inline-flex items-center gap-1 text-[11px] font-bold text-brand transition hover:text-[#12583d]"
        >
          {t("Explore")} {product.name} <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
}
