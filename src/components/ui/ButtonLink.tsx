interface Props {
  href: string;
  variant?: "nav" | "gold";
  size?: "md" | "sm";
  className?: string;
  children: React.ReactNode;
}

export default function ButtonLink({
  href,
  variant = "nav",
  size = "md",
  className = "",
  children,
}: Props) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center uppercase transition
        ${
          variant === "nav"
            ? "bg-navy hover:bg-navy-mid text-white"
            : "bg-gold-light hover:bg-gold text-navy"
        }
        ${size === "md" ? "px-6 py-3 text-base" : "px-4 py-2 text-xs"}
        ${className}`}
    >
      {children}
    </a>
  );
}
