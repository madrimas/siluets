import FirebaseService from "@/common/Firebase.service"

import {
    ADD_MEASUREMENT,
    FETCH_MEASUREMENTS
} from "./actions.type"

import {
    SET_MEASUREMENTS
} from "./mutations.type"


const state = {
    measurements: [],

}

const getters = {
    measurements(state) {
        return state.measurements
    }
}

const actions = {
    [ADD_MEASUREMENT](context, measurement) {
        measurement.date = new Date();

        let measurementSaved = FirebaseService.addMeasurement(measurement)

        state.measurements.push(measurementSaved)
    },
    [FETCH_MEASUREMENTS](context) {

        FirebaseService.fetchMeasurements()
            .then(data => {
                context.commit(SET_MEASUREMENTS, data)
            })
    }
}

const mutations = {
    [SET_MEASUREMENTS](state, value) {
        state.measurements = value
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}