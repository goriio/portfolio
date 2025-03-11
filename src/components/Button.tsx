import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  icon,
  fullWidth,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center space-x-2 px-4 py-2 rounded-md hover:opacity-80 disabled:bg-slate-500 disabled:hover:opacity-100 disabled:cursor-not-allowed",
        variant === "primary" && "text-slate-200 bg-blue-600",
        variant === "secondary" && "text-slate-200 bg-slate-800",
        variant === "outline" &&
          "ring-inset ring-1 ring-blue-500 text-blue-500",
        fullWidth && "w-full"
      )}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
