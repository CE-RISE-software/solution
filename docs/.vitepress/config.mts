import { defineConfig } from "vitepress";

const base = "/";

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
        [
          "script",
          {
            defer: "",
            src: "https://stats.bojafa.us/script.js",
            "data-website-id": "ae964c9f-dfb6-4257-9100-75c2f0ebaffb",
            "data-domains": "solution.ce-rise.eu",
          },
        ],
    ],
    themeConfig: {
        logo: `${base}images/CE-RISE_logo.png`,
        siteTitle: "CE-RISE Solution",
        nav: [
            { text: "Overview", link: "/overview" },
            { text: "How It Works", link: "/how-it-works" },
            { text: "Capabilities", link: "/capabilities" },
            { text: "Components", link: "/components" },
            { text: "References", link: "/references" },
        ],
    },
});
