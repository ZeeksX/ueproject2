<template>
	<div id="features" class="features">
		<div class="features-container">
			<div v-for="(feature, index) in featuresList" class="features-icon" :key="index">
				<img :src="feature.link" />
				<h3>{{ feature.text }}</h3>
				<p>{{ feature.desc }}</p>
			</div>
		</div>
		<div class="productive">
			<div class="productive-image">
				<img src="../assets/illustration-stay-productive.png" />
			</div>
			<div class="productive-text">
				<h3>{{ text }}</h3>
				<p v-for="(productive, index) in productiveList" :key="index">
					{{ productive.text }}
				</p>
				<a href="#">{{ anchor }} <i class="fa-solid fa-circle-arrow-right"></i></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FeaturesPage",
	data() {
		return {
			text: "Stay productive, wherever you are",
			anchor: "See how Fylo works",
			productiveList: [
				{
					text: "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.",
				},
				{
					text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
				},
			],
			featuresList: [
				{
					link: "./assets/icon-access-anywhere.svg",
					text: "Access your files, anywhere",
					desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
				},
				{
					link: "./assets/icon-security.svg",
					text: "Security you can trust",
					desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
				},
				{
					link: "./assets/icon-collaboration.svg",
					text: "Real-time collaboration",
					desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
				},
				{
					link: "./assets/icon-any-file.svg",
					text: "Store any type of file",
					desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
				},
			],
		};
	},
};
</script>
