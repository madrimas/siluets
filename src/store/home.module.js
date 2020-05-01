import FirebaseService from "@/common/Firebase.service"

import {
    USER_LOGGED_CHECK
} from "./actions.type"

import {
    SET_USER_LOGGED_IN
} from "./mutations.type"



const state = {
    isUserLoggedIn: false
}

const getters = {
    isUserLoggedIn(state) {
        return state.isUserLoggedIn
    }
}

const actions = {
    [USER_LOGGED_CHECK](context, value) {
        let isUserLoggedIn = FirebaseService.isUserLoggedIn()
        console.log("dupa", isUserLoggedIn)

        context.commit(SET_USER_LOGGED_IN, isUserLoggedIn)
    }
}

const mutations = {
    [SET_USER_LOGGED_IN](state, value) {
        state.isUserLoggedIn = value
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}