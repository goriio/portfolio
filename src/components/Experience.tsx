import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8">
        {[
          {
            date: "Nov 2024 - Feb 2025",
            duration: "4 months",
            title: "Frontend Developer",
            company: "Kunda House",
            description:
              "Collaborated closely with the designer, backend developers, and other stakeholders to develop and implement responsive front-end applications using React and Next.js. Identified, debugged, and resolved issues to maintain functionality and improve overall application quality.",
          },
          {
            date: "April 2023 - July 2023",
            duration: "4 months",
            title: "Angular Web Developer Intern",
            company: "FastSend Mobile Solutions",
            description:
              "Contributed to enhancing the company's website by adding new features, addressing bugs, and optimizing existing functionalities. Worked with a dedicated team of developers to ensure the successful execution of these tasks.",
          },
        ].map(({ date, duration, title, company, description }) => {
          return (
            <li key={date + company} className="flex space-x-4">
              <div className="w-1/3 text-slate-400 text-sm">
                <div className="mb-1">{date}</div>
                <div>{duration}</div>
              </div>
              <div className="w-2/3">
                <h3 className="mb-1 text-slate-200 font-semibold">{title}</h3>
                <span className="block mb-4 text-slate-200">{company}</span>
                <p className="text-slate-400">{description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
