import { Bar, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  // props: ['options'],
  data: () => ({
    // chartData: {
    //   labels: ['Biceps', 'Triceps'],
    //   datasets: [{
    //     label: 'Trainings',
    //     backgroundColor: '#f87979',
    //     data: [10, 15]
    //   }]
    // },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }]
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}