import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import "./custom.css";
import PageCards from "./components/PageCards.vue";
import CustomLayout from "./components/CustomLayout.vue";

const theme: Theme = {
    extends: DefaultTheme,
    Layout: () => h(CustomLayout),
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp?.(ctx);
        ctx.app.component("PageCards", PageCards);
    },
};

export default theme;
