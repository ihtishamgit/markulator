<template>
  <div
    style="background-color:#6263D9; height:100%; overflow:hidden; "
    class="m-0  pt-13"
  >
    <v-row class="m-0  pl-3 pr-7">
      <v-col cols="7" class="text-light m-0 pl-3 pr-0 pt-8 pb-0">
        <h3>Welcome To</h3>
        <strong><h1>Markulator</h1></strong>
      </v-col>
      <v-col cols="5" class="m-0 p-0">
        <v-img
          class="pt-0 pb-0"
          max-width="210"
          width="155"
          height="150"
          src="../assets/logo.png"
        ></v-img>
      </v-col>
      <v-col cols="12" class="pt-0 mt-0 text-light">
        <p class="pt-0 mt-0">
          Calculate and analyze your campaign results on the go. All it takes is
          a few taps! Stay on top of your marketing campaigns all from your
          mobile device. Find out more on the Markulator website.
        </p>
      </v-col>
    </v-row>
    <v-row class=" pr-1 pt-0 text-light">
      <v-col class="p-0 m-0 pl-8 pt-0" cols="12"> </v-col>
      <v-col cols="12" class="p-0 m-0 text-center">
        <v-img
          class="mt-9 ml-16 text-center"
          max-width="310"
          src="../assets/Group 4.png"
        ></v-img>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn
          color="white"
          class="pt-5 pb-5 pl-15 pr-15 mt-16 rounded-pill text-none"
          @click="goToList()"
        >
          Let's start!
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({}),

  methods: {
    goToList() {
      this.$router.push("/list");
    },
  },
};
</script>
<style scoped>
h3 {
  font-size: 1.55rem;
}
h1 {
  font-size: 2.35rem;
}
</style>
