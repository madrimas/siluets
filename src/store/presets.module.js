import FirebaseService from "@/common/Firebase.service"

import {
    START_PRESETS_FETCH
} from "./actions.type"

import {
    SET_FOCUSED_PRESET,
    SET_FOCUSED_PRESET_ID,
    SET_PRESETS
} from "./mutations.type"


const state = {
    focusedPreset: null,
    focusedPresetId: null,
    presets: null
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
    }
}

const actions = {
    [START_PRESETS_FETCH](context) {
        state.presets = null
        FirebaseService
            .getPresets()
            .then(presets => {
                context.commit(SET_PRESETS, presets)
            })
    }
}

const mutations = {
    [SET_FOCUSED_PRESET](state, preset) {

    },

    [SET_FOCUSED_PRESET_ID](state, presetId) {

    },

    [SET_PRESETS](state, presets) {
        state.presets = presets
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