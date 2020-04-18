import {
    END_SINGLE_SERIES
} from "./actions.type"

import FirebaseService from "@/common/Firebase.service"

const state = {
    exercises: FirebaseService.getExercises()
}

const getters = {
    exercises(state) {
        return state.exercises
    }
}

const actions = {
    [END_SINGLE_SERIES](context, seriesInfo) {
        this.state.exercises.filter(ex => ex.id === seriesInfo.id)
    }
}

export default {
    state,
    actions,
    getters
}

// exerciseModel = {
//     name: "",
//     displayName: "",
//     description: "",
//     defaultSeries: 4,
//     defaultReps: 12,
//     userSeries: 5,
//     userReps: [1, 2, 3, 4, 5], //this array length must be equal to userSeries
//     weights: [1, 2, 3, 4, 5] //same as above
// }

