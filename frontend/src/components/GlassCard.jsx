export default function GlassCard({ children, className = "", hover = false }) {

  const hoverStyles = hover
    ? "hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-[#ff2e63]/20 hover:scale-[1.02] cursor-pointer"
    : "";

  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}