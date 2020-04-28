import ExercisesService from "@/common/Exercises.service"

import {
    START_CATEGORIES_FETCH,
    START_EXERCISES_FETCH
} from "./actions.type"

import {
    SET_MUSCLE_CATEGORIES,
    SET_FETCHED_EXERCISES
} from "./mutations.type"

const state = {
    muscleCategories: []
}

const getters = {
    muscleCategories(state) {
        return state.muscleCategories
    }
}

const actions = {
    [START_CATEGORIES_FETCH](context) {
        state.muscleCategories = null
        ExercisesService.getMuscleCategories()
        .then(({ data }) => {
            context.commit(SET_MUSCLE_CATEGORIES, data.results)
        })
    },
    [START_EXERCISES_FETCH](context, category) {
        ExercisesService.getWorkoutsForCategory(category)
            .then(({ data }) => {
                context.commit(SET_FETCHED_EXERCISES, data.results)
            })
    }
}

const mutations = {
    [SET_MUSCLE_CATEGORIES](state, categories) {
        state.muscleCategories = categories;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}