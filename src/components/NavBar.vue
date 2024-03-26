<template>
	<div class="navbar">
		<img src="../assets/logo.svg" alt="logo" />
		<div class="nav-list">
			<ul class="nav-list-items">
				<li v-for="(nav, index) in navlist" :key="index" @click="navigateTo(nav)">{{ nav }}</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: "NavBar",
	data() {
		return {
			navlist: ["Features", "Team", "Sign In"],
		};
	},
	methods: {
		navigateTo(nav){
			const item = document.getElementById(nav.toLowerCase());
			if(item){
				item.scrollIntoView({behavior: 'smooth'})
			}
		}
	}
};
</script>
