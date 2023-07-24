type SocialLink = {
        icon: string,
        href: string
}

type SiteConfig = {
        title: string,
        description: string,
        author: string,
        tagline: string,
        availableForHire: boolean,
        socialLinks: SocialLink[]
}


export const SITE_META: SiteConfig = {
        title: "Jacob's Website",
        description: "The personal website and blog of Jacob Hilker.",
        author: "Jacob Hilker",
        availableForHire: true,
        tagline: "A front-end developer, who enjoys using Emacs, Hugo, Python, and Tailwind.",
        socialLinks: [
                { icon: "fa6-brands:github", href: "https://github.com/jhilker98"},
                { icon: "fa6-brands:gitlab", href: "https://gitlab.com/jhilker98" },
                { icon: "fa6-brands:linkedin", href: "https://linkedin.com/in/jhilker"},
                { icon: "fa6-brands:codepen", href: "https://codepen.io/hilkerj/"}
        ]
}

interface NavLink {
        href: string,
        name: string,
        children?: NavLink[]
}

export function isNavLinkActive(p1: string, p2: string) : boolean {
        //let page = new URL(`${Astro.url.origin}/${p1}`).slice(1).slice(1);
        return p1 === p2;
}


export const NAV_LINKS: NavLink[] = [
        { href: "/", name: "Home"},
        { href: "/resume/", name: "Resumé"},
        { href: "/blog/", name: "Blog"}
];

export function slugifyPostDates(d: Date): string {
  /**
   * A function to return dates in the form of `/year/month`.
   * @param {Date} d - The date of the post.
   * @returns {string} String in the format of `/year/month`.
   */
  const f = {
    year: new Intl.DateTimeFormat("en-US", { year: "numeric" }),
    month: new Intl.DateTimeFormat("en-US", { month: "2-digit" }),
  };

  return `${f.year.format(d)}/${f.month.format(d)}`;
}

export function formatDate(date: Date){
        return new Date(date).toLocaleDateString("en-GB", { 
                timeZone: "UTC",
                day: "numeric",
                month: "short",
                year: "numeric",
        });
}