import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol>
        <li className="flex space-x-4">
          <div className="w-1/3 text-slate-400 text-sm">
            <div className="mb-1">April 2023 - July 2023</div>
            <div>4 months</div>
          </div>
          <div className="w-2/3">
            <h3 className="mb-1 text-slate-200 font-semibold">
              Angular Web Developer Intern
            </h3>
            <span className="block mb-4 text-slate-200">
              FastSend Mobile Solutions
            </span>
            <p className="text-slate-400">
              Contributed to enhancing the company&apos;s website by adding new
              features, addressing bugs, and optimizing existing
              functionalities. Worked with a dedicated team of developers to
              ensure the successful execution of these tasks.
            </p>
          </div>
        </li>
      </ol>
    </Section>
  );
}
