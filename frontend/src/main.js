import { createApp } from "vue";
import App from "./App.vue";
import VueVirtualScroller from "vue3-virtual-scroller";

const app = createApp(App);

app.use(VueVirtualScroller);

app.mount("#app");
