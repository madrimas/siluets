import { Bar, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display:true,
        text: 'Reps for Butterfly Reverse exercise'
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }],
        xAxes: [{
          stacked: true
        }]
      }
    }
  }),
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}