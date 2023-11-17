import {
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="These are the tools and technologies I use for development."
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        {[
          {
            label: "React",
            Icon: SiReact,
          },
          {
            label: "Next",
            Icon: SiNextdotjs,
          },
          {
            label: "TypeScript",
            Icon: SiTypescript,
          },
          {
            label: "Node",
            Icon: SiNodedotjs,
          },
          {
            label: "Tailwind",
            Icon: SiTailwindcss,
          },
          {
            label: "PostgreSQL",
            Icon: SiPostgresql,
          },
          {
            label: "Git",
            Icon: SiGit,
          },
          {
            label: "GitHub",
            Icon: SiGithub,
          },
        ].map(({ label, Icon }) => {
          return (
            <div
              key={label}
              className="flex items-center space-x-2 px-4 py-1 text-blue-100 text-sm border-2 border-blue-500 bg-blue-500/50 rounded-full"
            >
              <Icon />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
