import { defineConfig } from "vitepress";

const base = "/solution/";

export default defineConfig({
    base,
    lang: "en-GB",
    title: "CE-RISE Solution",
    description:
        "Documentation frontend for the CE-RISE digital passport solution.",
    cleanUrls: true,
    lastUpdated: true,
    head: [
        ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
        [
            "link",
            {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: "",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@100..900&display=swap",
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                href: `${base}images/favicon.png`,
            },
        ],
    ],
    themeConfig: {
        logo: `${base}images/CE-RISE_logo.png`,
        siteTitle: "CE-RISE Solution",
        nav: [
            { text: "Overview", link: "/overview" },
            { text: "How It Works", link: "/how-it-works" },
            { text: "Architecture", link: "/architecture" },
            { text: "Data Models", link: "/data-models" },
            { text: "Reference", link: "/reference" },
        ],
        search: {
            provider: "local",
        },
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/CE-RISE-software/solution",
            },
        ],
        outline: {
            level: [2, 3],
            label: "On this page",
        },
        docFooter: {
            prev: "Previous",
            next: "Next",
        },
    },
});
