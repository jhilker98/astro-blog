
type SocialLink = {
        icon: string,
        href: string
}

type SiteConfig = {
        title: string,
        description: string,
        author: string,
        availableForHire: boolean,
        socialLinks: SocialLink[]
}


export const SITE_META: SiteConfig = {
        title: "Jacob's Website",
        description: "The personal website and blog of Jacob Hilker.",
        author: "Jacob Hilker",
        availableForHire: true,
        socialLinks: [
                {icon: "devicon:github", href: "https://github.com/jhilker98"}
        ]
}

export const NAV_LINKS = [
        { href: "/", name: "Home"},
        { href: "/resume/", name: "Resumé"}
];

export function slugifyPostDates(d: Date): string {
  /**
   * A function to return dates in the form of `/year/month`.
   * @param {Date} d - The date of the post.
   * @returns {string} String in the format of `/year/month`.
   */
  let f = {
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