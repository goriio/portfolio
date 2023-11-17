"use client";

import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import { Nav } from "./Nav";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="mb-12 lg:fixed lg:w-96 lg:min-h-[calc(100vh-160px)] lg:flex lg:flex-col lg:justify-between">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-2 text-slate-200">
          Gregorio Suapero II
        </h1>

        <p className="mb-4 text-slate-400">
          Highly passionate and motivated in web development and fond of
          building interactive web applications.
        </p>

        <div className="flex items-center space-x-3 mb-8">
          {[
            {
              label: "Mail",
              link: "mailto:gdsuaperoii@pm.me",
              Icon: FaEnvelope,
            },
            {
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/gdsuaperoii",
              Icon: FaLinkedin,
            },
            {
              label: "GitHub",
              link: "https://github.com/goriio",
              Icon: FaGithub,
            },
          ].map(({ label, link, Icon }) => {
            return (
              <a
                key={label}
                href={link}
                target="_blank"
                className="text-2xl text-slate-400 transition ease-in-out hover:text-blue-500"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <div className="flex items-center space-x-3">
          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <Button variant="outline">Get in touch</Button>
          </Link>
          <a
            href="https://www.canva.com/design/DAFaI-AW8BU/Fbn4SAGjRr9fKtD64BcXgw/edit"
            target="_blank"
            download
          >
            <Button icon={<FiDownload />}>Resume</Button>
          </a>
        </div>
      </div>

      <Nav />
    </header>
  );
}
