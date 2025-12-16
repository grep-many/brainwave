import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="px-0! py-10!">
      <footer className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map(({ id, title, iconUrl, url }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              className="bg-n-7 hover:bg-n-6 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            >
              <img src={iconUrl} width={16} height={16} alt={title} />
            </a>
          ))}
        </ul>
      </footer>
    </Section>
  );
};

export default Footer;
