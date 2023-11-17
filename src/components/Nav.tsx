import { Link } from "react-scroll";

export function Nav() {
  return (
    <nav className="hidden lg:block">
      <ul className="space-y-6">
        {[
          {
            label: "Skills",
            to: "skills",
          },
          {
            label: "Experience",
            to: "experience",
          },
          {
            label: "Projects",
            to: "projects",
          },
          {
            label: "Contact",
            to: "contact",
          },
        ].map(({ label, to }) => {
          return (
            <li key={label}>
              <Link
                to={to}
                activeStyle={{
                  color: "rgb(59, 130, 246)",
                }}
                className="text-slate-400 px-6 py-2 rounded-full bg-slate-900 font-semibold cursor-pointer transition ease-in-out hover:text-blue-500 active:text-blue-500"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
