<template>
	<div class="footer">
		<img :src="link" />
		<div class="footer-contents">
			<div class="footer-elements" :key="0">
				<i :class="footers[0].icon"></i>
				<p>{{ footers[0].text }}</p>
			</div>
			<div class="footer-elements-two">
				<div
					class="footer-elements-list"
					v-for="(footer, index) in footers"
					:key="index"
				>
					<div class="footer-elements-items" v-if="index > 0">
						<i :class="footer.icon"></i>
						<p>{{ footer.text }}</p>
					</div>
				</div>
			</div>

			<ul class="footer-list">
				<div>
					<li v-for="(item, index) in lists" :key="'list_' + index">
						{{ item }}
					</li>
				</div>
				<li class="spacing"></li>
				<div>
					<li v-for="(item, index) in footerList" :key="'footer_' + index">
						{{ item }}
					</li>
				</div>
			</ul>
			<div class="social-icons">
				<i class="fa-brands fa-facebook-f"></i>
				<i class="fa-brands fa-twitter"></i>
				<i class="fa-brands fa-instagram"></i>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "FooterPage",
	data() {
		return {
			link: "./assets/logo.svg",
			footers: [
				{
					icon: "fa-solid fa-location-dot",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
				},
				{
					icon: "fa-solid fa-phone-volume",
					text: "+1-543-123-4567",
				},
				{
					icon: "fa-solid fa-envelope",
					text: "example@fylo.com",
				},
			],
			lists: ["About Us", "Jobs", "Press", "Blog"],
			footerList: ["Contact Us", "Terms", "Privacy"],
			titles: ["lists", "footerList"],
		};
	},
};
</script>
