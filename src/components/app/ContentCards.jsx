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
      className="soft-card group rounded-[20px] p-6"
    >
      <div className={`mb-7 flex h-12 w-12 items-center justify-center rounded-2xl accent-${product.accent}`}>
        <Icon size={21} strokeWidth={1.8} />
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a968e]">{product.category}</p>
      <div className="mt-2 flex items-center justify-between gap-3">
        <h3 className="display-font text-xl font-bold">{product.name}</h3>
        <ArrowUpRight size={18} className="text-[#9ca79f] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
      </div>
      <p className="mt-3 text-sm leading-6 text-[#68756d]">{product.summary}</p>
    </Link>
  );
}

export function ProjectCard({ project }) {
  return (
    <Link
      to={`/client-projects/${project.slug}`}
      className="soft-card group overflow-hidden rounded-[20px]"
    >
      <div className="project-image relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#44534a] backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="display-font text-lg font-bold">{project.name}</h3>
          <ArrowUpRight size={17} className="shrink-0 text-[#9ca79f] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        </div>
        <p className="mt-2 text-sm leading-6 text-[#68756d]">{project.summary}</p>
      </div>
    </Link>
  );
}
