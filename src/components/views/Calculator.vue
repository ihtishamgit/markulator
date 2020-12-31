<template>
  <div>
    <v-card class="mr-4 ml-4 mt-2 shadow p-1">
      <v-card-title class="primary--text pb-0">
        <strong>{{ selectedItem.title }}</strong>
      </v-card-title>
      <p class="pl-4 pt-0 primary--text" style="font-size:1rem">
        {{ selectedItem.calcDescription }}
      </p>
      <v-form class=" text-center">
        <div class="pl-6">
          <v-text-field
            type="number"
            v-model="value1"
            :label="selectedItem.value1.desc"
            class="rounded-pill col-11"
            solo
          >
            <v-img
              :src="
                require('../../assets/fieldIcons/' +
                  selectedItem.value1.icon +
                  '.svg')
              "
              max-height="55"
              slot="prepend-inner"
              width="20"
            ></v-img>
          </v-text-field>
          <v-text-field
            type="number"
            v-if="selectedItem.id != '11' && selectedItem.id !=  '12'"
            v-model="value2"
            :label="selectedItem.value2.desc"
            class="rounded-pill col-11"
            solo
          >
            <v-img
              :src="
                require('../../assets/fieldIcons/' +
                  selectedItem.value2.icon +
                  '.svg')
              "
              max-height="55"
              slot="prepend-inner"
              width="20"
            ></v-img>
          </v-text-field>

          <v-text-field
            v-if="selectedItem.id == '13'"
            type="number"
            v-model="value3"
            label="New Customers Acquired"
            class="rounded-pill col-11"
            solo
          >
            <v-img
              src="../../assets/fieldIcons/users.svg"
              max-height="55"
              slot="prepend-inner"
              width="20"
            ></v-img>
          </v-text-field>
        </div>
        <v-btn
          color="primary"
          @click="calculate()"
          class="rounded-pill mb-4 mt-6 pt-6 pb-6 pl-15 pr-15 text-center"
          >Calculate</v-btn
        >
      </v-form>
      <v-row class="pr-5 pl-7 pt-4 pb-5">
        <v-col cols="8" class="pt-6">
          <label style="color:#3d3d3d; font-size:1.1rem">
            <strong>{{ selectedItem.acronym }}</strong>
          </label>
        </v-col>
        <v-col cols="2">
          <label style="color:#ababab; font-size:2rem; font-family:Roboto;"
            >{{ percentage }} <span v-if="percentage === ''">00</span>
          </label>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    value1: "",
    value2: "",
    value3: "",

    percentage: "",
  }),
  computed: {
    ...mapGetters({
      selectedItem: "getSelectedItem",
    }),
  },
  created() {
    console.log("calc has selected item", this.selectedItem);
    console.log("local storage", localStorage.getItem("selectedCalcItem"));
  },

  methods: {
    calculate() {
      var ans;
      console.log("value 1 and 2", this.value1, this.value2);
      if (
        this.selectedItem.id == "1" ||
        this.selectedItem.id == "2" ||
        this.selectedItem.id == "4" ||
        this.selectedItem.id == "5" ||
        this.selectedItem.id == "6"
      ) {
        ans = this.value1 / this.value2;
        this.percentage = (ans * 100).toFixed(2) + "%";
      } else if (this.selectedItem.id == "3") {
        ans = (this.value1 - this.value2) / this.value2;
        this.percentage = ans.toFixed(2) + "%";
      } else if (this.selectedItem.id == "7" || this.selectedItem.id == "8") {
        ans = this.value1 / this.value2;
        this.percentage = ans.toFixed(2) + "£";
      } else if (this.selectedItem.id == "9" || this.selectedItem.id == "10") {
        this.percentage = (this.value1 * this.value2).toFixed(2) + "£";
      } else if (this.selectedItem.id == "11") {
        this.percentage = (this.value1 * 0.18).toFixed(2) + "£";
      } else if (this.selectedItem.id == "12") {
        this.percentage = (this.value1 * 0.1).toFixed(2);
      } else if (this.selectedItem.id == "13") {
        this.percentage = ((this.value1 - this.value2) / this.value3).toFixed(
          2
        );
      }
    },
  },
};
</script>
