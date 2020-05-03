<template>
  <div class="flex-container">
    <div class="column">
      <bar-chart :chart-data="barChartData" />
    </div>
    <div class="column">
      <doughnut-chart :chart-data="doughnutChartData" />
    </div>
    <div class="column">
      <line-chart :chart-data="lineChartData" />
    </div>
    <div class="column"></div>
  </div>
</template>

<script>
import BarChart from "@/charts/BarChart";
import DoughnutChart from "@/charts/DoughnutChart";
import LineChart from "@/charts/LineChart";
import FirebaseService from "@/common/Firebase.service";

export default {
  components: {
    BarChart,
    DoughnutChart,
    LineChart
  },
  data() {
    return {
      barChartData: new Object(),
      doughnutChartData: new Object(),
      lineChartData: new Object()
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
    },
    getLineChartData() {
      FirebaseService.getUserMeasurement().then(result => {
        let chartData = [];
        let chartLabels = [];

        result.forEach((element, index) => {
          chartLabels.push(
            new Date(element.date.seconds * 1000).toLocaleDateString()
          );
          if (index === 0) {
            let hipDataset = {
              label: "Hip",
              data: [element.hips],
              borderColor: "#3e95cd",
              fill: false
            };
            let waistDataset = {
              label: "Waist",
              data: [element.waist],
              borderColor: "#8e5ea2",
              fill: false
            };
            let weightDataset = {
              label: "Weight",
              data: [element.weight],
              borderColor: "#c45850",
              fill: false
            };

            chartData.push(hipDataset);
            chartData.push(waistDataset);
            chartData.push(weightDataset);
          } else {
            chartData[0].data.push(element.hips);
            chartData[1].data.push(element.waits);
            chartData[2].data.push(element.weight);
          }
        });

        this.lineChartData = {
          labels: chartLabels,
          datasets: chartData
        };
      });
    }
  },
  mounted() {
    this.getBarChartData();
    this.getLineChartData();
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