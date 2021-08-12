<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="makeError">make error</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import _join from "lodash/join";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      test: null,
    };
  },
  created() {
    console.log(_join(["dsadfa", "adfasdf", "adfasdf", "asdfasdf", 6], "---"));
  },
  methods: {
    makeError() {
      this.test.split(",");
    },
  },
};
</script>
