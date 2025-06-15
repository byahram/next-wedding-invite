import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="relative text-center mb-8 w-full px-8">
      <h2 className="text-xl font-parisienne font-semibold tracking-wide z-10 text-[var(--title1)]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-md text-foreground font-semibold mt-6 pb-9 border-b border-neutral-400/50">
          {subtitle}
        </p>
      )}
    </div>
  );
}
