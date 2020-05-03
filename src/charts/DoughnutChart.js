import { Doughnut, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
    extends: Doughnut,
    // mixins: [reactiveProp],
    data: () => ({
        chartData: {
            labels: ['Biceps', 'Triceps'],
            datasets: [{
                label: 'Trainings',
                backgroundColor: ['#f87979', '#000000'],
                data: [10, 15]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero: true
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    }),
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}