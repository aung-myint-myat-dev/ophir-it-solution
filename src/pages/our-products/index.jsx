import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components/app/ContentCards";
import { localize, products } from "../../data";
import { useSettings } from "../../context/settings";

export default function OurProducts() {
  const { language, t } = useSettings();
  const localizedProducts = products.map((product) => localize(product, language));

  return (
    <div className="mx-auto min-h-[65vh] w-[min(1180px,calc(100%-48px))] py-16 md:py-24">
      <span className="eyebrow">{t("Designed for real work")}</span>
      <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
        <h1 className="font-display max-w-[680px] text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">{t("Tools that make the everyday ")}<span className="text-brand">{t("work better.")}</span></h1>
        <p className="max-w-[440px] text-sm leading-7 text-[#68756d] dark:text-[#a6b4aa] md:justify-self-end">{t("We build practical, thoughtfully designed products that help people spend less time on busywork and more time on what matters.")}</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">{localizedProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-5 rounded-[20px] bg-[#f3f6f2] dark:bg-[#18221c] p-7 sm:p-9">
        <div><h2 className="font-display text-xl font-bold">{t("Looking for something built around you?")}</h2><p className="mt-2 text-sm text-[#68756d] dark:text-[#a6b4aa]">{t("Our team can help take your product idea from first sketch to launch.")}</p></div>
        <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">{t("Contact Us")} <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}
