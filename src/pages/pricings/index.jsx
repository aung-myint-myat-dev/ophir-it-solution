import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/settings";

const plans = [
  {
    name: "Basic",
    description: "A focused starting point for a small project or an early-stage idea.",
    features: [
      "Core project discovery",
      "Essential design and development",
      "Responsive, launch-ready delivery",
      "Clear project handover",
    ],
  },
  {
    name: "Pro",
    description: "More room to build, refine, and grow a complete digital product.",
    features: [
      "In-depth discovery and planning",
      "Custom product design",
      "Full-stack development",
      "Testing and launch support",
    ],
    featured: true,
  },
  {
    name: "Customize",
    description: "A tailored engagement shaped around your goals, team, and requirements.",
    features: [
      "Flexible project scope",
      "Choose the services you need",
      "Dedicated collaboration",
      "A custom quote and timeline",
    ],
  },
];

export default function Pricings() {
  const { t } = useSettings();

  return (
    <div className="mx-auto min-h-[65vh] w-[min(1180px,calc(100%-48px))] py-16 md:py-24">
      <span className="eyebrow">{t("Plans")}</span>
      <h1 className="font-display mt-5 max-w-[760px] text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">
        {t("Pricing that fits your project.")}
      </h1>
      <p className="mt-5 max-w-[620px] text-sm leading-7 text-[#68756d] dark:text-[#a6b4aa]">
        {t("Every project is different. Tell us what you need and we’ll recommend the right plan with a clear quote.")}
      </p>

      <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-[22px] border p-7 ${
              plan.featured
                ? "border-brand bg-[#f3f6f2] dark:border-brand dark:bg-[#18221c]"
                : "border-[#e9eee9] bg-white dark:border-[#2a3930] dark:bg-[#1b2620]"
            }`}
          >
            {plan.featured && (
              <span className="mb-5 self-start rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                {t("Most popular")}
              </span>
            )}
            <h2 className="font-display text-2xl font-bold">{t(plan.name)}</h2>
            <p className="mt-3 min-h-14 text-sm leading-6 text-[#68756d] dark:text-[#a6b4aa]">
              {t(plan.description)}
            </p>
            <p className="mt-7 border-b border-[#e9eee9] pb-5 text-sm font-semibold dark:border-[#2a3930]">
              {t("Custom quote")}
            </p>
            <ul className="mt-6 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                  <Check size={17} className="mt-0.5 shrink-0 text-brand" />
                  <span>{t(feature)}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact-us"
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                plan.featured
                  ? "bg-brand text-white hover:bg-[#12583d]"
                  : "border border-[#dfe8e0] text-brand hover:bg-[#e8f1eb] dark:border-[#405447] dark:hover:bg-[#1e3a2f]"
              }`}
            >
              {t("Contact Us")} <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
