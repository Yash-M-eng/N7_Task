import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "outline";
};

export default function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[linear-gradient(90deg,#00A9F5,#004EF2)] text-white shadow-blue-500/20 hover:shadow-blue-500/35",
    outline:
      "border border-white/80 bg-transparent text-white hover:border-white hover:bg-white/8",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-mono font-medium uppercase transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4FD] active:translate-y-0 ${variants[variant]} ${className}`}
      type={type}
      {...props}
    />
  );
}
