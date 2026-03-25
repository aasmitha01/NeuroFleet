export default function Badge({ children, variant = "info", className = "" }) {

  const variantStyles = {
    success: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
    warning: "bg-amber-500/20 text-amber-300 border-amber-500/50",
    error: "bg-red-500/20 text-red-300 border-red-500/50",
    info: "bg-blue-500/20 text-blue-300 border-blue-500/50",
    ai: "bg-gradient-to-r from-[#ff2e63]/20 to-purple-500/20 text-[#ff2e63] border-[#ff2e63]/50 animate-pulse"
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}