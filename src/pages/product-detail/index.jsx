import { ArrowLeft, ArrowRight, Check, Heart, Layers3, Wallet } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { localize, products } from "../../data";
import { useSettings } from "../../context/settings";

const productIcons = { layers: Layers3, wallet: Wallet, heart: Heart };

export default function ProductDetail() {
  const { slug } = useParams();
  const { language, t } = useSettings();
  const sourceProduct = products.find((item) => item.slug === slug);
  const product = sourceProduct ? localize(sourceProduct, language) : undefined;

  if (!product) {
    return (
      <div className="mx-auto min-h-[60vh] w-[min(1180px,calc(100%-48px))] py-24">
        <span className="eyebrow">{t("Product not found")}</span>
        <h1 className="display-font mt-5 text-4xl font-extrabold">{t("Let's find the right tool.")}</h1>
        <Link to="/our-products" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand"><ArrowLeft size={15} /> {t("Browse all products")}</Link>
      </div>
    );
  }

  const Icon = productIcons[product.icon] ?? Layers3;

  return (
    <article className="mx-auto w-[min(1180px,calc(100%-48px))] py-12 md:py-20">
      <Link to="/our-products" className="inline-flex items-center gap-2 text-sm font-medium text-[#68756d] transition hover:text-brand"><ArrowLeft size={15} /> {t("All products")}</Link>
      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center md:gap-16">
        <div>
          <span className="eyebrow">{product.category}</span>
          <h1 className="display-font mt-5 text-5xl font-extrabold tracking-[-0.055em] sm:text-6xl">{product.name}<span className="text-secondary-brand">.</span></h1>
          <p className="display-font mt-5 max-w-[600px] text-2xl font-semibold leading-snug text-[#45534a]">{product.summary}</p>
          <p className="mt-5 max-w-[600px] text-sm leading-7 text-[#68756d]">{product.description}</p>
          <a href="mailto:hello@ophiritsolution.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#12583d]">{t("Ask us about ")}{product.name} <ArrowRight size={16} /></a>
        </div>
        <div className={`relative overflow-hidden rounded-[28px] p-8 sm:p-10 accent-${product.accent}`}>
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-current/10" />
          <div className="absolute -right-2 top-[-18px] h-36 w-36 rounded-full border border-current/10" />
          <div className="relative flex min-h-[320px] flex-col justify-between rounded-[20px] border border-white/60 bg-white/75 p-6 shadow-[0_20px_50px_rgba(25,37,31,0.08)] backdrop-blur">
            <div className="flex items-center justify-between"><span className="display-font text-lg font-extrabold">{product.name}</span><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-current/10"><Icon size={20} /></span></div>
            <div className="space-y-3">
              {product.features.map((feature, index) => <div key={feature} className="flex items-center gap-3 rounded-xl border border-[#edf0ed] bg-white p-3.5"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f1eb] text-brand"><Check size={14} /></span><span className="text-sm font-medium text-[#46534a]">{feature}</span><span className="ml-auto text-[10px] text-[#aab3ac]">0{index + 1}</span></div>)}
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#78857c]"><span className="h-2 w-2 rounded-full bg-brand" /> {t("Made to make work feel easier.")}</div>
          </div>
        </div>
      </div>
      <div className="mt-16 rounded-[24px] bg-[#f3f6f2] px-7 py-9 text-center sm:mt-24 sm:px-12 sm:py-12">
        <span className="eyebrow">{t("Built around people")}</span>
        <h2 className="display-font mx-auto mt-4 max-w-[650px] text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{t("A good product should make a real difference.")}</h2>
        <p className="mx-auto mt-4 max-w-[540px] text-sm leading-7 text-[#68756d]">{t("We combine clear thinking, thoughtful design, and dependable engineering to create products your team will enjoy using.")}</p>
        <Link to="/client-projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">{t("See what we've built")} <ArrowRight size={15} /></Link>
      </div>
    </article>
  );
}
