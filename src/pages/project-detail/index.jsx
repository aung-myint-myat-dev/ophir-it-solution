import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { localize, projects } from "../../data";
import { useSettings } from "../../context/settings";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { language, t } = useSettings();
  const sourceProject = projects.find((item) => item.slug === slug);
  const project = sourceProject ? localize(sourceProject, language) : undefined;

  if (!project) {
    return (
      <div className="mx-auto min-h-[60vh] w-[min(1180px,calc(100%-48px))] py-24">
        <span className="eyebrow">{t("Project not found")}</span>
        <h1 className="display-font mt-5 text-4xl font-extrabold">{t("There's more work to explore.")}</h1>
        <Link to="/client-projects" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand"><ArrowLeft size={15} /> {t("Browse all projects")}</Link>
      </div>
    );
  }

  return (
    <article className="mx-auto w-[min(1180px,calc(100%-48px))] py-12 md:py-20">
      <Link to="/client-projects" className="inline-flex items-center gap-2 text-sm font-medium text-[#68756d] transition hover:text-brand"><ArrowLeft size={15} /> {t("All projects")}</Link>
      <div className="mt-9">
        <div className="flex flex-wrap items-center gap-3"><span className="eyebrow">{project.category}</span><span className="text-xs text-[#8a968e]">/</span><span className="text-xs font-medium text-[#8a968e]">{project.year}</span></div>
        <h1 className="display-font mt-4 max-w-[850px] text-4xl font-extrabold leading-tight tracking-[-0.055em] sm:text-6xl">{project.name}<span className="text-secondary-brand">.</span></h1>
        <p className="mt-4 max-w-[680px] text-lg leading-8 text-[#68756d]">{project.summary}</p>
      </div>
      <div className="project-image mt-9 h-[280px] overflow-hidden rounded-[24px] sm:h-[440px]">
        <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" />
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_0.55fr] md:gap-16">
        <div>
          <span className="eyebrow">{t("The partnership")}</span>
          <h2 className="display-font mt-4 text-2xl font-extrabold tracking-[-0.035em]">{t("Thoughtful work, built around real people.")}</h2>
          <p className="mt-4 text-sm leading-7 text-[#68756d]">{project.description}</p>
        </div>
        <aside className="rounded-[20px] bg-[#f3f6f2] p-6 sm:p-7">
          <h3 className="display-font text-base font-bold">{t("What we brought")}</h3>
          <ul className="mt-4 space-y-3">
            {project.services.map((service) => <li key={service} className="flex items-center gap-2.5 text-sm text-[#5c6a61]"><Check size={15} className="shrink-0 text-brand" /> {service}</li>)}
          </ul>
          <div className="mt-6 border-t border-[#dfe8e0] pt-5"><div className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8a968e]">{t("The outcome")}</div><p className="mt-2 text-sm font-semibold leading-6">{project.outcome}</p></div>
        </aside>
      </div>
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#e9eee9] pt-7">
        <Link to="/client-projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#68756d] hover:text-brand"><ArrowLeft size={15} /> {t("More projects")}</Link>
        <a href="mailto:hello@ophiritsolution.com" className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12583d]">{t("Start a project like this")} <ArrowRight size={15} /></a>
      </div>
    </article>
  );
}
