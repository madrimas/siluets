import {
    END_SINGLE_SET,
    CURRENT_EXERCISE,
    BACK_ONE_SET,
    SHOW_TRAINING_SNACKBAR,
    TRAINING_PRESET_CHANGE,
    FINISH_TRAINING
} from "./actions.type"

import {
    SET_CURRENT_SET,
    SET_TRAINING
} from "./mutations.type"

import FirebaseService from "@/common/Firebase.service"

const state = {
    exercises: null,
    currentEx: null,
    currentSet: 1,
    showSnackbar: false,
    duration: 4000,
    parentPresetId: null,
    training: {}
}

const getters = {
    exercises(state) {
        return state.training.exercises
    },
    currentExercise(state) {
        return state.currentEx
    },
    currentSet(state) {
        return state.currentSet
    },
    showSnackbar(state) {
        return state.showSnackbar
    },
    duration(state) {
        return state.duration
    },
    parentPresetId(state) {
        return state.training.parentPresetId
    },
    training(state) {
        return state.training
    }
}

const actions = {
    [END_SINGLE_SET](context, seriesInfo) {
        state.currentSet += 1
    },
    [CURRENT_EXERCISE](context, exercise) {
        state.currentEx = exercise
        let userSetsDone = exercise.userReps.length
        if (userSetsDone == 0) {
            state.currentSet = 1
            return;
        }
        state.currentSet = userSetsDone - 1
    },
    [BACK_ONE_SET](context, exercise) {
        console.log(exercise)
        state.currentEx = exercise
        if (state.currentSet <= 1) return;
        state.currentSet -= 1
    },
    [SHOW_TRAINING_SNACKBAR](context, show) {
        state.showSnackbar = show
    },
    [TRAINING_PRESET_CHANGE](context, presetNo) {
        state.exercises = null
        FirebaseService.getExercises(presetNo)
            .then(training => {
                context.commit(SET_TRAINING, training)
            })
    },
    [FINISH_TRAINING](context) {
        let exercisesTemp = JSON.parse(JSON.stringify(state.training.exercises))
        exercisesTemp.forEach((exercise, i) => {
            let userReps = exercise.userReps;
            let weights = exercise.weights;
            if (userReps[userReps.length - 1] === null || weights[weights.length - 1] === null) {
                exercisesTemp[i].userReps = userReps.filter(rep => rep !== null)
                exercisesTemp[i].weights = weights.filter(wei => wei !== null)
            }
        })

        let trainingState = {
            exercises: exercisesTemp,
            parentPresetId: state.training.parentPresetId
        }
        FirebaseService.saveTraining(trainingState)
    }
}

const mutations = {
    [SET_CURRENT_SET](state, setNo) {
        state.currentSet = setNo
    },
    [SET_TRAINING](state, training) {
        state.training = training
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
