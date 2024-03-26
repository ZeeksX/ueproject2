import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import NavBar from "./components/NavBar.vue";
import IntroPage from "./components/IntroPage.vue";
import FeaturesPage from "./components/FeaturesPage.vue";
import TeamsPage from "./components/TeamsPage.vue";
import SignupForm from "./components/SignupForm.vue";
import FooterPage from "./components/FooterPage.vue";

createApp(NavBar).component(".navbar");
createApp(IntroPage).component(".intro");
createApp(FeaturesPage).component(".features");
createApp(TeamsPage).component(".teams");
createApp(SignupForm).component(".signup");
createApp(FooterPage).component(".footer");
createApp(App).mount("#app");
