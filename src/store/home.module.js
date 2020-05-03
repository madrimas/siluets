import FirebaseService from "@/common/Firebase.service"

import {
    USER_LOGGED_CHECK,
    USER_LOGIN,
    USER_REGISTER
} from "./actions.type"

import {
    SET_USER_LOGGED_IN,
    SET_EMAIL,
    SET_PASSWORD
} from "./mutations.type"



const state = {
    isUserLoggedIn: false,
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
    },
    [USER_LOGIN](context, loginObj) {
        FirebaseService.login(loginObj)
        .then(() => {
            context.dispatch(USER_LOGGED_CHECK)
        }).catch(function(error) {
            console.log("Login error" + error);
          });
    },
    [USER_REGISTER](context, registerObj) {
        FirebaseService.register(registerObj)
        .then(() => {
            context.dispatch(USER_LOGGED_CHECK)
        }).catch(function(error) {
            console.log("Register error" + error);
          });
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