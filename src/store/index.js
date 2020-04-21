import Vue from "vue";
import Vuex from "vuex"

import training from './training.module'
import presetCreator from './presetCreator.module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        training,
        presetCreator
    }
});