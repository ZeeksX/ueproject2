<template>
  <div id="sign in" class="signup">
    <div class="signup-contents">
      <h1>{{ text }}</h1>
      <p>{{ desc }}</p>
      <form action="window.reload()">
        <input type="email" id="email" :placeholder="email" />
        <button type="submit">{{ button }}</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignupForm",
  data() {
    return {
      button: "Get Started For Free",
      email: "email@example.com",
      text: "Get early access today",
      desc: "It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.",
    };
  },
};
</script>
