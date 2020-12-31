<template>
  <div>
    <div class="pl-5 pr-5 pt-4 pb-5">
      <v-card
        height="10vh"
        class="shadow mt-3"
        v-for="listItem of listItems"
        v-bind:key="listItem.id"
      >
        <v-row>
          <v-col cols="2" class="ml-4 pr-0">
            <v-img
              :src="require('../../assets/icons/' + listItem.icon + '.svg')"
              max-height="55"
              width="50"
            ></v-img>
          </v-col>
          <v-col cols="7" class="pl-3 text-left">
            <strong style="font-size:0.9rem">{{ listItem.title }}</strong>
            <br />
            <span class="pb-3 pt-0" style="font-size:0.7rem; color:#ABABAB;">{{
              listItem.description
            }}</span>
          </v-col>
          <v-col cols="2" class="pl-0 text-right pr-0 pt-3">
            <v-icon color="primary" size="50" @click="goToCalculator(listItem)"
              >mdi-chevron-right</v-icon
            >
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  data: () => ({}),
  computed: {
    ...mapState({
      listItems: "listItems",
    }),
  },
  methods: {
    goToCalculator(selectedItem) {
      console.log(selectedItem);
      this.$store.dispatch("setSelectedItem",selectedItem)
      this.$router.push("/calculator");
    },
  },
});
</script>
