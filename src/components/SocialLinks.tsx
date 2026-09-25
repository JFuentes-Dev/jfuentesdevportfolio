import { siteConfig } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const linkClass =
  "rounded-md p-2 text-muted transition-colors hover:bg-card hover:text-foreground";

export function SocialLinks() {
  const { email, links } = siteConfig;
  const items = [
    links.github && { href: links.github, label: "GitHub", Icon: GitHubIcon },
    links.linkedin && { href: links.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    email && { href: `mailto:${email}`, label: "Email", Icon: MailIcon },
  ].filter((item) => !!item);

  return (
    <ul className="flex items-center gap-1">
      {items.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            className={linkClass}
            aria-label={label}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
