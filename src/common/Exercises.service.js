import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios"
import { API_EXERCISE_URL,
    API_MUSCLE_ENDPOINT
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
    }
    
}

export default ExercisesServices;