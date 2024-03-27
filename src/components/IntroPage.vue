<template>
	<div class="intro">
		<div class="separator"><img src="../assets/illustration-intro.png" alt="illustration-intro" /></div>
		<div class="details">
			<h1>{{ header }}</h1>
			<p>{{ text }}</p>
			<button type="button" @click="navigateTo()">{{ show }}</button>
		</div>
	</div>
</template>
<script>
export default {
	name: "IntroPage",
	data() {
		return {
			header: "All your files in one secure location, accessible anywhere.",
			show: "Get Started",
			text: "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.",
		};
	},
	methods: {
		navigateTo() {
			const element = document.getElementById("sign in");
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}

		}
	}
};
</script>
