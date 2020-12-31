<template>
  <div>
    <v-system-bar dark color="primary">
      <v-icon color="white">mdi-signal-cellular-3</v-icon>
      <v-icon color="white">mdi-wifi</v-icon>
      <v-spacer></v-spacer>
      <span class="text-light">12:30</span>
      <v-spacer></v-spacer>
      <v-icon color="white">mdi-battery</v-icon>
    </v-system-bar>
    <v-app-bar color="primary" elevation="0" height="70" class="text-light">
        <v-app-bar-nav-icon @click="back()"             v-if="$route.path != '/list'"
><v-icon>mdi-chevron-left</v-icon></v-app-bar-nav-icon>
          <h5 class="mb-0 ml-0 pl-0">Marketing Calculations
                <p
            style="font-size:0.8rem"
            class="pt-0"
            v-if="$route.path == '/list'"
          >
            Calculate your rates
          </p>
          </h5>
      
        <v-spacer></v-spacer>
  
          <img src="../../assets/logo.png" width="95px" />

    </v-app-bar>
    <v-main>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </v-main>
  </div>
</template>
<script>

export default {
  data: () => ({ transitionName: "none" }),
  methods: {
    back(){
      this.$router.back();
    }
  },

  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName;
      console.log("transitionName", transitionName);
      this.transitionName = transitionName;
      next();
    });
  },
};
</script>
<style scoped>
.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-enter {
  transform: translate(8em, 0);
  opacity: 0;
}
.slide-fade-leave {
  transform: translate(-8em, 0);
  opacity: 0;
}
</style>
