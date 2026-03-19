import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";
import PageCards from "./components/PageCards.vue";
import PageIntro from "./components/PageIntro.vue";

const theme: Theme = {
    extends: DefaultTheme,
    Layout: () => h(DefaultTheme.Layout, null, {}),
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp?.(ctx);
        ctx.app.component("PageCards", PageCards);
        ctx.app.component("PageIntro", PageIntro);
    },
};

export default theme;
