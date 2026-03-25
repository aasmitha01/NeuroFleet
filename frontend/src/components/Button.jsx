export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {

  const baseStyles =
    "font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#ff2e63] to-[#ff4d7a] text-white hover:shadow-lg hover:shadow-[#ff2e63]/50 hover:scale-105",
    secondary:
      "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-white/30",
    ghost: "text-white hover:bg-white/10",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}