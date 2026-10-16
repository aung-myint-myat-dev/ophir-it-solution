export default function Button({ children, icon: Icon, ...props }) {
  return (
    <button
      {...props}
      className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-white/20 bg-brand px-8 py-2 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.4)] active:translate-y-0 active:scale-95"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-black/10" />

      <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[400%]" />

      <span className="relative">{children}</span>

      {Icon && <Icon size={14} className="relative transition-transform duration-300 group-hover:translate-x-0.5" />}
    </button>
  );
}