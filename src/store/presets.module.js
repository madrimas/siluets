import FirebaseService from "@/common/Firebase.service"

import {
    START_PRESETS_FETCH,
    CONFIRM_PRESET_CREATION,
    CANCEL_PRESET_CREATION,
    ADD_TO_TRAINING,
    REMOVE_EXERCISE_FROM_PRESET,
    REMOVE_PRESET
} from "./actions.type"

import {
    SET_FOCUSED_PRESET,
    SET_FOCUSED_PRESET_ID,
    SET_PRESETS,
    SET_CREATE_DIALOG,
    SET_CREATED_PRESET_NAME,
    SET_EDITION_MODE
} from "./mutations.type"


const state = {
    focusedPreset: null,
    focusedPresetId: null,
    presets: null,
    expanded: [],
    createDialog: false,
    createdPresetName: '',
    editionMode: false
}

const getters = {
    focusedPreset(state) {
        return state.focusedPreset
    },
    focusedPresetId(state) {
        return state.focusedPresetId
    },
    presets(state) {
        return state.presets
    },
    expanded(state) {
        return state.expanded
    },
    createDialog(state) {
        return state.createDialog
    },
    createdPresetName(state) {
        return state.createdPresetName
    },
    editionMode(state) {
        return state.editionMode
    }
}

const actions = {
    [START_PRESETS_FETCH](context) {
        console.log("Action triggered: ",START_PRESETS_FETCH)
        if(state.presets === null) {
            FirebaseService
            .getPresets()
            .then(presets => {
                context.commit(SET_PRESETS, presets)
            })
        }
        
    },
    [CONFIRM_PRESET_CREATION](context) {
        //here we should asynchronously get id from db for preset and then update it in whole state
        //so this preset should be added to state as it is, paralely we save it in db
        //any changes will be commited to db after interaction with user
        state.presets.push({
            presetId: null,
            presetName: state.createdPresetName,
            presetAssigned: 0,
            isPresetAssigned: false,
            exercises: []
        })
        context.commit(SET_CREATED_PRESET_NAME, '')
    },
    [CANCEL_PRESET_CREATION](context) {
        context.commit(SET_CREATED_PRESET_NAME, '')
    },
    [ADD_TO_TRAINING](context, exerciseComposed) {
        let preparedExercise = {
            exerciseId: exerciseComposed.exercise.id,
            externalExerciseId: exerciseComposed.exercise.id,
            exerciseName: exerciseComposed.exercise.name
        }
        let editedPreset = state.presets
                            .find(p => p.presetId === exerciseComposed.presetId)

        editedPreset.exercises.push(preparedExercise)
        console.log(exerciseComposed)
    },
    [REMOVE_EXERCISE_FROM_PRESET](context, exerciseAndPreset) {
        let editedPreset = state.presets
                    .find(p => p.presetId === exerciseAndPreset.preset.presetId)

        console.log("Edited preset: ", editedPreset)
        let indexToRemove = null;
        editedPreset.exercises.forEach((exercise, i) =>  {
            if(exercise.exerciseId === exerciseAndPreset.exercise.exerciseId) {
                indexToRemove = i;
            }
        }) 

        if(indexToRemove !== null) {
            editedPreset.exercises.splice(indexToRemove, 1)
        }
    }, 
    [REMOVE_PRESET](context, preset) {
        //first remove it from vuex store
        let presetIdToRemove = null;
        state.presets.forEach((p, i) => {
            if(p.presetId === preset.presetId) {
                presetIdToRemove = i;
            }
        })
        if(presetIdToRemove !== null) {
            state.presets.splice(presetIdToRemove, 1);
        }
        //secondly 
        FirebaseService.removePreset(preset);
    }
}

const mutations = {
    [SET_FOCUSED_PRESET](state, preset) {
        state.focusedPreset = preset
    },
    [SET_FOCUSED_PRESET_ID](state, presetId) {
        state.focusedPresetId = presetId
    },
    [SET_PRESETS](state, presets) {
        presets.forEach(p => {
            state.expanded[p.presetId] = false
        })
        state.presets = presets
    },
    [SET_CREATE_DIALOG](state, value) {
        console.log(value)
        state.createDialog = value
    },
    [SET_CREATED_PRESET_NAME](state, value) {
        state.createdPresetName = value
    },
    [SET_EDITION_MODE](state) {
        state.editionMode = !state.editionMode
    }
}

preset: {
    enabled: true
}

export default {
    state,
    getters,
    actions,
    mutations
}