import Vue from "vue";
import Router from "vue-router";
import ListViewVue from "./components/views/ListView.vue";
import CalculatorVue from "./components/views/Calculator.vue";
import HelloWorld from "./components/HelloWorld.vue";
import AppBar from "./components/views/AppBar.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "hello",
      component: HelloWorld,
      meta: { transitionName: "fade" },
    },
    {
      path: "/app-bar",
      name: "app-bar",
      component: AppBar,
      meta: { transitionName: "none" },
      children: [
        {
        path: "/calculator",
        name: "calculator",
        component: CalculatorVue,
        meta: { transitionName: "slide-fade" }},
        {
          path: "/list",
          name: "list",
          component: ListViewVue,
          meta: { transitionName: "slide-fade" },
        },
      
      ]
      
    },
  ],
});
