<template>
  <div class="flex-container">
    <!-- <md-content class="md-primary">Progress</md-content> -->
    <div class="column">
      <bar-chart :chart-data="barChartData" />
    </div>
    <div class="column">
      <doughnut-chart />
    </div>
    <div class="column"></div>
    <div class="column"></div>
  </div>
</template>

<script>
import BarChart from "@/charts/BarChart";
import DoughnutChart from "@/charts/DoughnutChart";
import FirebaseService from "@/common/Firebase.service";

export default {
  components: {
    BarChart,
    DoughnutChart
  },
  data() {
    return {
      barChartData: null,
      doughnutChartData: null
    };
  },
  methods: {
    getBarChartData() {
      let result = FirebaseService.getExercises(2);
      console.log(result);
      this.barChartData = {
        // FirebaseService.getExercises(1);
      };
    }
  },
  mounted() {
    this.getBarChartData();
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.column {
  width: 45%;
  margin: 2%;
  height: 420px;
}

@media only screen and (max-width: 768px) {
  .column {
    width: 75%;
    height: inherit;
  }
}
</style>