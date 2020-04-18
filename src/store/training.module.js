import {
    END_SINGLE_SET,
    CURRENT_EXERCISE,
    BACK_ONE_SET,
    SHOW_TRAINING_SNACKBAR,
    TRAINING_PRESET_CHANGE
} from "./actions.type"

import {
    SET_CURRENT_SET
} from "./mutations.type"

import FirebaseService from "@/common/Firebase.service"

const state = {
    exercises: [],
    currentEx: null,
    currentSet: 1,
    showSnackbar: false,
    duration: 4000
}

const getters = {
    exercises(state) {
        return state.exercises
    },
    currentExercise(state) {
        return state.currentEx
    },
    currentSet(state) {
        return state.currentSet
    },
    showSnackbar(state){
        return state.showSnackbar
    },
    duration(state) {
        return state.duration
    }
}

const actions = {
    [END_SINGLE_SET](context, seriesInfo) {
        console.log(state)
        let tempExe = state.exercises.find(ex => ex.id === seriesInfo.exId)
        state.currentSet += 1
    },
    [CURRENT_EXERCISE](context, exercise) {
        state.currentEx = exercise
        console.log(exercise.userReps.length)
        let userSetsDone = exercise.userReps.length
        if(userSetsDone == 0) {
            state.currentSet = 1
            return;
        }
        state.currentSet = userSetsDone - 1
    },
    [BACK_ONE_SET](context, exercise) {
        console.log(exercise)
        state.currentEx = exercise
        if(state.currentSet <= 1) return;
        state.currentSet -= 1
    },
    [SHOW_TRAINING_SNACKBAR](context, show) {
        state.showSnackbar = show
    },
    [TRAINING_PRESET_CHANGE](context, presetNo) {
        state.exercises = []
        //commit fetch from db
        setTimeout(()=> state.exercises = FirebaseService.getExercises(presetNo), 1000)
        //in promise callback set state
        
    }
}

const mutations = {
    [SET_CURRENT_SET](state, setNo) {
        state.currentSet = setNo
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}

// exerciseModel = {
//     name: "",
//     displayName: "",
//     description: "",
//     defaultSeries: 4,
//     setsDone: 0,
//     defaultReps: 12,
//     userSeries: 5,
//     userReps: [1, 2, 3, 4, 5], //this array length must be equal to userSeries
//     weights: [1, 2, 3, 4, 5] //same as above
// }

