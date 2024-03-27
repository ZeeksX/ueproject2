<template>
	<div id="sign in" class="signup">
		<div class="signup-contents">
			<h1>{{ text }}</h1>
			<p>{{ desc }}</p>
			<form id="signupForm" @submit.prevent="emailValidator">
				<input
					type="text"
					id="email"
					placeholder="email@example.com"
					v-model="inputEmail"
				/>
				<button type="submit">{{ button }}</button>
			</form>
			<h3 id="emailError" v-if="invalidEmail">{{ emailErrorMessage }}</h3>
		</div>
	</div>
</template>

<script>
export default {
	name: "SignupForm",
	data() {
		return {
			button: "Get Started For Free",
			inputEmail: "",
			text: "Get early access today",
			desc: "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
			invalidEmail: false,
			emailErrorMessage: "Valid email address required",
		};
	},
	methods: {
		emailValidator() {
			const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (emailRegex.test(this.inputEmail)) {
				this.invalidEmail = false;
        location.reload()
			} else {
				this.invalidEmail = true;
			}
		},
	},
};
</script>
