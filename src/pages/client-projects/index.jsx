import { ProjectCard } from "../../components/app/ContentCards";
import { localize, projects } from "../../data";
import { useSettings } from "../../context/settings";

export default function ClientProjects() {
  const { language, t } = useSettings();
  const localizedProjects = projects.map((project) => localize(project, language));

  return (
    <div className="mx-auto min-h-[65vh] w-[min(1180px,calc(100%-48px))] py-16 md:py-24">
      <span className="eyebrow">{t("Selected work")}</span>
      <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end">
        <h1 className="display-font max-w-[680px] text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">{t("A few good things, ")}<span className="text-brand">{t("made together.")}</span></h1>
        <p className="max-w-[440px] text-sm leading-7 text-[#68756d] md:justify-self-end">{t("Every project starts with listening. Here are a few of the partnerships and digital experiences we're proud to share.")}</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{localizedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </div>
  );
}
