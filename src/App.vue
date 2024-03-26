<template>
	<NavBar />
	<IntroPage />
	<FeaturesPage />
	<TeamsPage />
	<SignupForm/>
	<FooterPage/>
</template>

<script>
import "./assets/tailwind.css";
import NavBar from "./components/NavBar.vue";
import IntroPage from "./components/IntroPage.vue";
import FeaturesPage from "./components/FeaturesPage.vue";
import TeamsPage from "./components/TeamsPage.vue";
import SignupForm from "./components/SignupForm.vue"
import  FooterPage  from "./components/FooterPage.vue";
export default {
	name: "App",
	components: {
		NavBar,
		IntroPage,
		FeaturesPage,
		TeamsPage,
		SignupForm,
		FooterPage
	},
};
</script>

<style src="../public/index.css"></style>
