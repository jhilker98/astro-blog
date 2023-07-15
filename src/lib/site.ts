
type SiteConfig = {
        title: string,
        description: string,
        author: string
}

export const SITE_META: SiteConfig = {
        title: "Jacob's Website",
        description: "The personal website and blog of Jacob Hilker.",
        author: "Jacob Hilker"
}

export const NAV_LINKS = [
        { href: "/", name: "Home"},
        { href: "/resume/", name: "Resumé"}
];