import ExercisesService from "@/common/Exercises.service"

import {
    START_CATEGORIES_FETCH,
    START_EXERCISES_FETCH,
    HANDLE_MUSCLE_CHOICE,
    AFTER_CHOOSE_ACTION,
    ADD_TO_TRAINING
} from "./actions.type"

import {
    SET_MUSCLE_CATEGORIES,
    SET_FETCHED_EXERCISES,
    SET_CHOOSEN_MUSCLE,
    SET_CATEGORY_SELECTION
} from "./mutations.type"

const state = {
    muscleCategories: [],
    muscleCategorySelection: true,
    exercisesInCategory: [],
    choosenMuscle: {}
}

const getters = {
    muscleCategories(state) {
        return state.muscleCategories
    },
    muscleCategorySelection(state) {
        return state.muscleCategorySelection
    },
    exercisesInCategory(state) {
        return state.exercisesInCategory
    }
}

const actions = {
    [START_CATEGORIES_FETCH](context) {
        state.muscleCategories = null
        context.commit(SET_CATEGORY_SELECTION, true)
        context.commit(SET_CHOOSEN_MUSCLE, {})

        ExercisesService.getMuscleCategories()
            .then(({ data }) => {
                context.commit(SET_MUSCLE_CATEGORIES, data.results)
            })
    },
    [START_EXERCISES_FETCH](context, category) {
        ExercisesService.getWorkoutsForCategory(category.muscleGroup)
            .then(({ data }) => {
                context.commit(SET_FETCHED_EXERCISES, data.results)
            })
    },
    [HANDLE_MUSCLE_CHOICE](context, muscle) {
        state.exercisesInCategory = null
        let category = {
            muscleGroup: muscle.id
        }
        context.commit(SET_CHOOSEN_MUSCLE, muscle)
        context.commit(SET_CATEGORY_SELECTION, false)
        context.dispatch(START_EXERCISES_FETCH, category)
    },
    [AFTER_CHOOSE_ACTION](context, exerciseComposed) {
        context.dispatch(ADD_TO_TRAINING, exerciseComposed)
        
        context.commit(SET_CATEGORY_SELECTION, true)
        context.commit(SET_CHOOSEN_MUSCLE, {})
        context.commit(SET_FETCHED_EXERCISES, [])
    }
}

const mutations = {
    [SET_MUSCLE_CATEGORIES](state, categories) {
        state.muscleCategories = categories;
    },
    [SET_CHOOSEN_MUSCLE](state, muscle) {
        state.choosenMuscle = muscle
    },
    [SET_CATEGORY_SELECTION](state, value) {
        state.muscleCategorySelection = value
    },
    [SET_FETCHED_EXERCISES](state, value) {
        state.exercisesInCategory = value
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}