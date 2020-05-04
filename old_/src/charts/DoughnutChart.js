import { Doughnut, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
    extends: Doughnut,
    mixins: [reactiveProp],
    data: () => ({
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Three favourite exercises'
            }
        }
    }),
    mounted() {
        this.renderChart(this.chartData, this.options)
    }
}