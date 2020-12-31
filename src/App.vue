<template>
  <v-app>
    <transition :name="transitionName"  mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
const DEFAULT_TRANSITION = "none";
export default {
  name: "App",

  data: () => ({
    transitionName: DEFAULT_TRANSITION,
  }),
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = from.meta.transitionName;
      console.log("transitionName", transitionName);
        this.transitionName = transitionName;
      next();
    });
  },
};
</script>
<style scoped>
.fade-leave-active {
  transition-duration: 1.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-leave-active {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to,
.slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
