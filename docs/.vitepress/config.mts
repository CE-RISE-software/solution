import { defineConfig } from "vitepress";

export default defineConfig({
    lang: "en-GB",
    title: "CE-RISE Solution",
    description:
        "Documentation frontend for the CE-RISE digital passport solution.",
    cleanUrls: true,
    lastUpdated: true,
    head: [
        [
            "link",
            { rel: "icon", type: "image/png", href: "/images/favicon.png" },
        ],
    ],
    themeConfig: {
        logo: "/images/CE-RISE_logo.png",
        siteTitle: "CE-RISE Solution",
        nav: [
            { text: "Overview", link: "/overview" },
            { text: "How It Works", link: "/how-it-works" },
            { text: "Architecture", link: "/architecture" },
            { text: "Data Models", link: "/data-models" },
            { text: "Reference", link: "/reference" },
        ],
        sidebar: [
            {
                text: "Introduction",
                items: [
                    { text: "Overview", link: "/overview" },
                    { text: "How It Works", link: "/how-it-works" },
                ],
            },
            {
                text: "Core Structure",
                items: [
                    { text: "Architecture", link: "/architecture" },
                    { text: "Data Models", link: "/data-models" },
                    {
                        text: "Software Components",
                        link: "/software-components",
                    },
                ],
            },
            {
                text: "Use And Reference",
                items: [
                    { text: "Getting Started", link: "/getting-started" },
                    { text: "Reference", link: "/reference" },
                ],
            },
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
