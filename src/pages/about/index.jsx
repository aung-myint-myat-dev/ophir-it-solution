import { ArrowRight, HeartHandshake, Lightbulb, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/settings";

const values = [
  { title: "People first", copy: "Technology only matters when it makes life better for the people using it.", Icon: UsersRound },
  { title: "Curious by nature", copy: "We ask good questions, stay open to new ideas, and keep learning as we go.", Icon: Lightbulb },
  { title: "In it together", copy: "The best work happens when we act like partners, not just another vendor.", Icon: HeartHandshake },
];

export default function About() {
  const { t } = useSettings();

  return (
    <div className="mx-auto min-h-[65vh] w-[min(1180px,calc(100%-48px))] py-16 md:py-24">
      <span className="eyebrow">{t("A little about us")}</span>
      <div className="mt-5 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
        <h1 className="display-font max-w-[700px] text-4xl font-extrabold leading-tight tracking-[-0.05em] sm:text-5xl">{t("Good technology starts with ")}<span className="text-brand">{t("understanding people.")}</span></h1>
        <p className="max-w-[440px] text-sm leading-7 text-[#68756d] md:justify-self-end">{t("Ophir iT Solution is a thoughtful software partner for teams ready to make useful things and make a difference.")}</p>
      </div>
      <div className="mt-12 rounded-[24px] bg-[#f3f6f2] px-7 py-10 sm:px-12 sm:py-14">
        <p className="display-font max-w-[850px] text-2xl font-semibold leading-relaxed tracking-[-0.025em] text-[#34443a] sm:text-3xl">{t("We bring clear thinking, good design, and dependable engineering together—so your next idea can become something people love to use.")}</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {values.map(({ title, copy, Icon }) => <article key={title} className="rounded-[20px] border border-[#e9eee9] p-6"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f1eb] text-brand"><Icon size={20} /></span><h2 className="display-font mt-6 text-lg font-bold">{t(title)}</h2><p className="mt-2 text-sm leading-6 text-[#68756d]">{t(copy)}</p></article>)}
      </div>
      <Link to="/client-projects" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand">{t("Get to know our work")} <ArrowRight size={15} /></Link>
    </div>
  );
}
