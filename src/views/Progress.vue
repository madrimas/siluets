<template>
  <div class="flex-container">
    <!-- <md-content class="md-primary">Progress</md-content> -->
    <div class="column">
      <bar-chart :chart-data="barChartData" />
    </div>
    <div class="column">
      <doughnut-chart :chart-data="doughnutChartData" />
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
      barChartData: new Object(),
      doughnutChartData: null
    };
  },
  methods: {
    getBarChartData() {
      FirebaseService.getUserButterflyExercise().then(result => {
        let colorHexArray = [
          "#2ECC71",
          "#DAF7A6",
          "#FFC300",
          "#FF5733",
          "#C70039",
          "#900C3F",
          "#6C3483",
          "#21618C"
        ];
        // loop over docs
        let chartDatasets = [];
        let chartLabels = [];
        result.forEach((element, index) => {
          chartLabels.push(
            new Date(element.dateCompleted.seconds * 1000).toLocaleDateString()
          );

          if (index === 0) {
            element.weights.forEach((weight, weightIndex) => {
              let dataset = {
                label: "User rep " + (weightIndex + 1),
                backgroundColor: colorHexArray[weightIndex],
                data: [weight],
                borderWidth: 2
              };

              chartDatasets.push(dataset);
            });
          } else {
            element.weights.forEach((weight, weightIndex) => {
              let difference = 1;
              if (weightIndex >= chartDatasets.length) {
                let chartData = [];
                for (let i = 0; i < difference; ++i) {
                  chartData.push(0);
                }
                chartData.push(weight);
                let newDataSet = {
                  label: "User rep " + (weightIndex + 1),
                  backgroundColor: colorHexArray[weightIndex],
                  data: chartData,
                  borderWidth: 2
                };
                chartDatasets.push(newDataSet);
                difference += 1;
              } else {
                chartDatasets[weightIndex].data.push(weight);
              }
            });
          }
        });

        this.barChartData = {
          labels: chartLabels,
          datasets: chartDatasets
        };
      });
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