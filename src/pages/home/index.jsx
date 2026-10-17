import {
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProductCard, ProjectCard } from "../../components/app/ContentCards";
import ProductShowcase from "../../components/app/ProductShowcase";
import { localize, products, projects, services } from "../../data";
import { useSettings } from "../../context/settings";

export default function Home() {
  const { language, t } = useSettings();
  const localizedProducts = products.map((product) => localize(product, language));
  const localizedProjects = projects.map((project) => localize(project, language));
  const localizedServices = services.map((service) => localize(service, language));

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center">

        {/* Home Page Background Gradiant */}
        <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[650px]" />

        {/* Banner Section */}
        <div className="relative  mx-auto grid w-[min(1180px,calc(100%-48px))] items-center gap-12 pb-20 pt-16 md:min-h-[650px] md:grid-cols-[1.02fr_0.98fr] md:gap-14 md:pb-24 md:pt-20">
          {/* Text Group */}
          <div className="relative z-10 py-12">
            <span className="eyebrow">{t("Your ideas, made real")}</span>
            <h1 className="font-display mt-6 max-w-[650px] text-[42px] font-extrabold leading-[1.1] tracking-[-0.055em] text-[#19251f] dark:text-[#e3ebe5] sm:text-5xl md:text-[62px]">
              {t("Better software for a ")}<span className="text-brand">{t("better way")}</span>{t(" of doing business.")}
            </h1>
            <p className="mt-6 max-w-[510px] text-base leading-7 text-[#68756d] dark:text-[#a6b4aa] md:text-[17px]">
              {t("We partner with ambitious teams to design and build digital products that make work simpler and growth more meaningful.")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/client-projects">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm text-white font-semibold transition hover:-translate-y-0.5 hover:bg-[#12583d]">
                  {t("Explore our work")} <ArrowRight size={16} />
                </span>
              </Link>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-[#44534a] dark:text-[#e3ebe5] hover:bg-[#edf3ee] dark:hover:bg-[#1e3a2f]">
                {t("What we do")} <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#e7ece7] dark:border-[#2a3930] pt-6 text-xs font-medium text-[#68756d] dark:text-[#a6b4aa]">
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-brand" /> {t("Human-first design")}</span>
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-brand" /> {t("Built to grow")}</span>
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-brand" /> {t("A team that cares")}</span>
            </div>
          </div>

          {/* Product Shw Case */}
          <ProductShowcase products={localizedProducts} />
        </div>
      </section>

      <section className="section-pad border-t border-zinc-300" id="services">
        <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
          <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div><span className="eyebrow">{t("How we help")}</span><h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{t("Good ideas deserve ")}<span className="text-brand">{t("good execution.")}</span></h2></div>
            <p className="max-w-[490px] text-sm leading-7 text-[#68756d] dark:text-[#a6b4aa] md:justify-self-end">{t("From the first sketch to the final release, we bring the right people and practical thinking to every step of your product journey.")}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {localizedServices.map((service) => (
              <article key={service.number} className="rounded-[18px] border border-[#e9eee9] dark:border-[#2a3930] bg-white dark:bg-[#1b2620] p-6">
                <div className="mb-8 flex items-center justify-between"><span className="text-xs font-bold tracking-widest text-secondary-brand">{service.number}</span><span className="h-px w-10 bg-[#dce8de]" /></div>
                <h3 className="font-display text-lg font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#68756d] dark:text-[#a6b4aa]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6f2] dark:bg-[#18221c] py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><span className="eyebrow">{t("Built with purpose")}</span><h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{t("Our products")}</h2></div>
            <Link to="/our-products" className="group inline-flex items-center gap-2 pb-1 text-sm font-semibold text-brand">{t("Meet our products")} <ArrowRight size={15} className="transition group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">{localizedProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto w-[min(1180px,calc(100%-48px))]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div><span className="eyebrow">{t("A little of what we do")}</span><h2 className="font-display mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{t("Work that moves things forward.")}</h2></div>
            <Link to="/client-projects" className="group inline-flex items-center gap-2 pb-1 text-sm font-semibold text-brand">{t("See all projects")} <ArrowRight size={15} className="transition group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">{localizedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section id="about" className="pb-24">
        <div className="mx-auto flex w-[min(1180px,calc(100%-48px))] flex-col items-start justify-between gap-7 rounded-[24px] bg-[#176b4a] px-7 py-10 text-white sm:flex-row sm:items-center sm:px-12 sm:py-12">
          <div><span className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">{t("Have a good idea?")}</span><h2 className="font-display mt-3 max-w-[600px] text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{t("Let's make something that matters.")}</h2></div>
          <Link to="/contact-us" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand transition hover:bg-[#f0f5f0]">{t("Contact Us")} <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
