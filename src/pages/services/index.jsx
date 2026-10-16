import { ArrowRight, Compass, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { localize, services } from "../../data";
import { useSettings } from "../../context/settings";

const serviceIcons = [Compass, Sparkles, Layers3];

export default function Services() {
  const { language, t } = useSettings();
  const localizedServices = services.map((service) => localize(service, language));

  return (
    <div className="mx-auto min-h-[65vh] w-[min(1180px,calc(100%-48px))] py-16 md:py-24">
      <span className="eyebrow">{t("What we do")}</span>
      <h1 className="display-font mt-5 max-w-[780px] text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">{t("From the first big question to the ")}<span className="text-brand">{t("finished product.")}</span></h1>
      <p className="mt-5 max-w-[600px] text-sm leading-7 text-[#68756d]">{t("A practical, people-first team for the moments that matter in your product journey.")}</p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {localizedServices.map((service, index) => {
          const Icon = serviceIcons[index];
          return <article key={service.number} className="rounded-[20px] border border-[#e9eee9] bg-white p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f1eb] text-brand"><Icon size={20} /></span>
            <p className="mt-8 text-xs font-bold tracking-widest text-secondary-brand">{service.number}</p>
            <h2 className="display-font mt-2 text-xl font-bold">{service.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#68756d]">{service.description}</p>
          </article>;
        })}
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-5 rounded-[20px] bg-[#f3f6f2] p-7 sm:p-9">
        <div><h2 className="display-font text-xl font-bold">{t("Have a challenge in mind?")}</h2><p className="mt-2 text-sm text-[#68756d]">{t("Let's find the right next step, together.")}</p></div>
        <Link to="/#about" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">{t("Meet our team")} <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}
