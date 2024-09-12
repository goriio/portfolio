import Image from "next/image";
import { Section } from "./Section";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-8">
        {[
          {
            name: "pasuyo",
            description: "🚚 Client web application for delivery service ",
            thumbnail: "/images/pasuyo-thumbnail.png",
            code: "https://github.com/goriio/pasuyo",
            demo: "https://pasuyo.vercel.app",
          },
          {
            name: "vig",
            description: "💎 Platform for trading virtual items",
            thumbnail: "/images/vig-thumbnail.png",
            code: "https://github.com/goriio/vig",
            demo: "https://vig.vercel.app",
          },
          {
            name: "unsentpup",
            description: "💬 Unsent messages of PUPians ",
            thumbnail: "/images/unsentpup-thumbnail.png",
            code: "https://github.com/goriio/unsentpup",
            demo: "https://unsentpup.vercel.app",
          },
          {
            name: "studio-ghibli",
            description: "🌳 Client for Studio Ghibli API",
            thumbnail: "/images/ghibli-thumbnail.png",
            code: "https://github.com/goriio/studio-ghibli",
            demo: "https://ghibli-film.vercel.app",
          },
          {
            name: "mumu",
            description: "🎵 Music player.",
            thumbnail: "/images/mumu-thumbnail.png",
            code: "https://github.com/goriio/mumu",
            demo: "https://mumu.vercel.app",
          },
          {
            name: "iksi",
            description: "🔗 Free custom url shortener ",
            thumbnail: "/images/iksi-thumbnail.png",
            code: "https://github.com/goriio/iksi",
            demo: "https://iksi.vercel.app",
          },
        ].map(({ name, description, thumbnail, code, demo }) => {
          return (
            <div key={name} className="group space-y-2">
              <div className="relative w-full aspect-video p-20 rounded-md shadow-inner overflow-hidden">
                <Image
                  src={thumbnail}
                  alt={`${name} thumbnail`}
                  fill={true}
                  className="object-cover transition ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h3 className="text-slate-200 transition ease-in-out group-hover:text-blue-500">
                    {name}
                  </h3>
                  <p className="text-sm text-slate-400">{description}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <a
                    href={code}
                    target="_blank"
                    aria-label="Source code link"
                    className="p-1.5 rounded-full transition ease-in-out hover:bg-blue-500"
                  >
                    <SiGithub className="text-2xl transition ease-in-ou" />
                  </a>
                  <a
                    href={demo}
                    target="_blank"
                    aria-label="Demo link"
                    className="p-1.5 rounded-full transition ease-in-out hover:bg-blue-500"
                  >
                    <FiExternalLink className="text-2xl transition ease-in-ou" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
