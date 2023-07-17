
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

export function formatDate(date: Date){
        return new Date(date).toLocaleDateString("en-GB", { 
                timeZone: "UTC",
                day: "numeric",
                month: "short",
                year: "numeric",
        });
}