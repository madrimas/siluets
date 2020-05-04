import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios"
import {
    API_EXERCISE_URL,
    API_MUSCLE_ENDPOINT,
    API_EXERCISE_ENDPOINT,
    DEFAULT_LICENSE_AUTHOR
} from "@/config/api.config"


const ExercisesServices = {
    init() {
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = API_EXERCISE_URL;
    },
    getMuscleCategories() {
        return Vue.axios.get(`${API_MUSCLE_ENDPOINT}`).catch(err => {
            throw new Error(`Exercise Api ${err}`)
        })
    },
    getWorkoutsForCategory(category) {
        console.log("Category choosen: " + category)
        let params = {
            muscles: category,
            license_author: DEFAULT_LICENSE_AUTHOR
        }

        return Vue.axios.get(`${API_EXERCISE_ENDPOINT}`, {
            params: params
        }).catch(err => {
            throw new Error(`Exercise Api ${err}`)
        })
    }

}

export default ExercisesServices;