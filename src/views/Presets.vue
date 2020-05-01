<template>
  <div>
    <md-toolbar md-elevation="0">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Training presets</h3>
      </div>
      <div class="md-toolbar-section-end">
        <!-- In edition mode you should be able to add/delete exercises -->
        <md-button class="md-primary" v-on:click="toggleEditionMode()">Edition mode</md-button>
        <!-- Create is to make whole new training routine (popup to enter name etc.) -->
        <md-button class="md-primary" v-on:click="create()">Create</md-button>
      </div>
    </md-toolbar>

    <md-dialog-prompt
      :md-active.sync="createDialog"
      v-model="createdPresetName"
      md-title="New preset name"
      md-input-maxlength="30"
      md-input-placeholder="Type your preset name"
      md-confirm-text="Done"
      @md-confirm="onConfirm"
      @md-cancel="onCancel"
    />

    <md-list md-expand-single="true">
      <md-list-item
        v-for="preset in presets"
        :key="preset.presetId"
        :md-expanded.sync="expanded[preset.presetId]"
        md-expand
      >
        <md-icon>fitness_center</md-icon>
        <span class="md-list-item-text">{{ preset.presetName }}</span>
        <md-switch v-if="editionMode" v-model="preset.isPresetAssigned" />

        <md-list slot="md-expand">
          <md-list-item
            v-for="exercise in preset.exercises"
            :key="`${preset.presetId}-${exercise.exerciseId}`"
            class="md-inset"
          >
            <span class="md-list-item-text">{{ exercise.exerciseName }}</span>
            <md-button v-if="editionMode" @click="deleteExercise(preset, exercise)" class="md-icon-button md-list-action">
              <md-icon class="md-primary">delete_outline</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-list-item>
    </md-list>
    <md-speed-dial v-if="editionMode" class="md-bottom-right">
      <md-speed-dial-target @click="getToRoute()">
        <md-icon>add</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  START_PRESETS_FETCH,
  CONFIRM_PRESET_CREATION,
  CANCEL_PRESET_CREATION,
  REMOVE_EXERCISE_FROM_PRESET
} from "@/store/actions.type";
import {
  SET_CREATE_DIALOG,
  SET_CREATED_PRESET_NAME,
  SET_EDITION_MODE
} from "@/store/mutations.type";

export default {
  name: "presets",
  methods: {
    create: function() {
      this.$store.commit(SET_CREATE_DIALOG, true);
    },
    onConfirm: function(event) {
      this.$store.dispatch(CONFIRM_PRESET_CREATION);
    },
    onCancel: function() {
      this.$store.dispatch(CANCEL_PRESET_CREATION);
    },
    toggleEditionMode: function() {
      this.$store.commit(SET_EDITION_MODE);
    },
    getToRoute: function() {
      let expandedId = 0;

      this.$store.getters.expanded.forEach((val, i) => {
        if (val === true) {
          expandedId = i;
        }
      });

      this.$router.push({ name: "creator", params: { presetId: expandedId } });
    },
    deleteExercise: function(preset, exercise) {
      let exerciseAndPreset = {
        preset: preset,
        exercise: exercise
      }

      console.log("Delete exercise: ", exerciseAndPreset)
      this.$store.dispatch(REMOVE_EXERCISE_FROM_PRESET, exerciseAndPreset)
    }
  },
  computed: {
    ...mapGetters([
      "focusedPreset",
      "focusedPresetId",
      "presets",
      "expanded",
      "editionMode"
    ]),
    createDialog: {
      get: function() {
        return this.$store.getters.createDialog;
      },
      set: function(value) {
        this.$store.commit(SET_CREATE_DIALOG, value);
      }
    },
    createdPresetName: {
      get: function() {
        return this.$store.getters.createdPresetName;
      },
      set: function(value) {
        this.$store.commit(SET_CREATED_PRESET_NAME, value);
      }
    }
  },
  mounted() {
    this.$store.dispatch(START_PRESETS_FETCH);
  }
};
</script>