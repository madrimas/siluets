import Vue from "vue";
import Vuex from "vuex"

import training from './training.module'
import presetCreator from './presetCreator.module'
import presets from './presets.module'
import home from './home.module'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        training,
        presetCreator,
        presets,
        home
    }
});