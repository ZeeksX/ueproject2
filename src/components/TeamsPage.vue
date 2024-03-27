<template>
	<div id="team" class="teams">
		<i class="fa-solid fa-quote-left"></i>
		<div class="teams-profile">
			<div v-for="(player, index) in teamsList" class="team-player" :key="index">
				<p>{{ player.text }}</p>
				<div class="players">
					<div class="players-image">
						<img :src="player.image" />
					</div>
					<div class="players-details">
						<h3>{{ player.name }}</h3>
						<p>{{ player.title }}</p>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
export default {
	name: "TeamsPage",
	data() {
		return {
			teamsList: [
				{
					text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
					image: "./assets/profile-1.jpg",
					name: "Satish Patel",
					title: "Founder & CEO, Huddle",
				},
				{
					text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
					image: "./assets/profile-2.jpg",
					name: "Bruce McKenzie",
					title: "Founder & CEO, Huddle",
				},
				{
					text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
					image: "./assets/profile-3.jpg",
					name: "Iva Boyd",
					title: "Founder & CEO, Huddle",
				},
			],
		};
	},
};
</script>
