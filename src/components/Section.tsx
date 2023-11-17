import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="pb-12 lg:pb-20">
      <div className="mb-6">
        <h2 className="text-blue-500 mb-2 font-bold text-xl">{title}</h2>
        {description && <p className="text-slate-400 mb-6">{description}</p>}
      </div>

      {children}
    </section>
  );
}
