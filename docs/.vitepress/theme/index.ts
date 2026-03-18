import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";
import PageCards from "./components/PageCards.vue";
import PageIntro from "./components/PageIntro.vue";
import SiteFooter from "./components/SiteFooter.vue";

const theme: Theme = {
    extends: DefaultTheme,
    Layout: () =>
        h(DefaultTheme.Layout, null, {
            "layout-bottom": () => h(SiteFooter),
        }),
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp?.(ctx);
        ctx.app.component("PageCards", PageCards);
        ctx.app.component("PageIntro", PageIntro);
    },
};

export default theme;
