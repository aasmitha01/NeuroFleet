import { forwardRef } from "react";

const Select = forwardRef(({ label, error, options = [], className = "", ...props }, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
        </label>
      )}

      <select
        ref={ref}
        className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ff2e63] focus:ring-2 focus:ring-[#ff2e63]/50 transition-all appearance-none cursor-pointer ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-[#0a1628] text-white"
          >
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;