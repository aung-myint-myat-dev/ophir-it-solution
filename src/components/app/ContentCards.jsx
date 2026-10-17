import { ArrowUpRight, Heart, Layers3, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const productIcons = {
  layers: Layers3,
  wallet: Wallet,
  heart: Heart,
};

export function ProductCard({ product }) {
  const Icon = productIcons[product.icon] ?? Layers3;

  return (
    <Link
      to={`/our-products/${product.slug}`}
      className="group rounded-[20px] border border-[#e9eee9] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-[#d7e5da] hover:shadow-[0_18px_40px_rgba(25,37,31,0.07)] dark:border-[#2a3930] dark:bg-[#1b2620] dark:hover:border-[#405447]"
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl accent-${product.accent}`}>
          <Icon size={21} strokeWidth={1.8} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a968e] dark:text-[#a6b4aa]">{product.category}</p>
          <h3 className="mt-1 font-display text-xl font-bold">{product.name}</h3>
        </div>
        <ArrowUpRight size={18} className="shrink-0 text-[#9ca79f] dark:text-[#a6b4aa] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
      </div>
      <p className="mt-3 text-sm leading-6 text-[#68756d] dark:text-[#a6b4aa]">{product.summary}</p>
    </Link>
  );
}

export function ProjectCard({ project }) {
  return (
    <Link
      to={`/client-projects/${project.slug}`}
      className="group overflow-hidden rounded-[20px] border border-[#e9eee9] bg-white transition duration-200 hover:-translate-y-1 hover:border-[#d7e5da] hover:shadow-[0_18px_40px_rgba(25,37,31,0.07)] dark:border-[#2a3930] dark:bg-[#1b2620] dark:hover:border-[#405447]"
    >
      <div className="project-image relative h-52 overflow-hidden bg-[#e7efe8] dark:bg-[#26372d]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 dark:bg-[#1b2620]/90 px-3 py-1.5 text-[11px] font-semibold text-[#44534a] dark:text-[#e3ebe5] backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-bold">{project.name}</h3>
          <ArrowUpRight size={17} className="shrink-0 text-[#9ca79f] dark:text-[#a6b4aa] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        </div>
        <p className="mt-2 text-sm leading-6 text-[#68756d] dark:text-[#a6b4aa]">{project.summary}</p>
      </div>
    </Link>
  );
}
