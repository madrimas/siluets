<template>
  <div>
    <md-progress-spinner
      class="center-spinner" v-if="exercises == null" :md-diameter="100" :md-stroke="10" md-mode="indeterminate"
    ></md-progress-spinner>
    <md-empty-state v-else-if="exercises.length === 0" class="md-accent" md-rounded
      md-icon="clear"
      md-label="No workout assigned to preset"
      md-description="Assign preset in presets tab and then use it."
    ></md-empty-state>
    <md-steppers md-vertical v-else-if="exercises.length > 0">
      <md-step v-for="ex in exercises" :key="ex.id" :md-label="ex.displayName" :md-description="ex.description" v-on:click="changeExercise(ex)">
        <span class="md-subheading">Current set {{ currentSet }}</span>

        <md-field>
          <label>Reps</label>
          <md-input v-model="ex.userReps[currentSet - 1]" type="number" required></md-input>
          <span class="md-helper-text">How many times you pushed</span>
        </md-field>

        <md-field>
          <label>Weight</label>
          <md-input v-model="ex.weights[currentSet - 1]" type="number" required></md-input>
          <span class="md-helper-text">Weight of bar [kg]</span>
        </md-field>

        <md-button class="md-raised md-primary" v-on:click="endSingleSet(ex)">Set done</md-button>
        <md-button class="md-raised md-accent" v-on:click="backOneSet(ex)">Back</md-button>

        <md-snackbar md-position="center" :md-duration="duration" :md-active="showSnackbar" md-persistent
        >
          <span>You have to enter number of reps and weight</span>
          <md-button class="md-primary" @click="closeSnackbar">OK</md-button>
        </md-snackbar>
        <!-- <span class="md-body-1">Body 1</span> -->
      </md-step>
    </md-steppers>

    <div class="bottom-bar">
      <md-bottom-bar md-type="shift">
        <md-bottom-bar-item id="bottom-bar-item-training-1" md-label="Training 1" md-icon="looks_one" @click="presetChange(1)"/>
        <md-bottom-bar-item id="bottom-bar-item-training-2" md-label="Training 2" md-icon="looks_two" @click="presetChange(2)"/>
        <md-bottom-bar-item id="bottom-bar-item-training-3" md-label="Training 3" md-icon="looks_3" @click="presetChange(3)" />
        <md-bottom-bar-item id="bottom-bar-item-training-4" md-label="Training 4" md-icon="looks_4" @click="presetChange(4)" />
      </md-bottom-bar>
    </div>
  </div>
</template>

//steps should be generated for each excersise in training program


<script>
import {
  END_SINGLE_SET,
  CURRENT_EXERCISE,
  BACK_ONE_SET,
  SHOW_TRAINING_SNACKBAR,
  TRAINING_PRESET_CHANGE
} from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "training",
  methods: {
    endSingleSet: function(exercise) {
      if (!this.verifyRequiredFields(exercise)) return;

      this.$store.dispatch(END_SINGLE_SET, exercise.id);
    },
    changeExercise: function(ex) {
      this.$store.dispatch(CURRENT_EXERCISE, ex);
    },
    backOneSet: function(ex) {
      if (!this.verifyRequiredFields(ex)) return;

      this.$store.dispatch(BACK_ONE_SET, ex);
    },
    closeSnackbar: function() {
      this.$store.dispatch(SHOW_TRAINING_SNACKBAR, false);
    },
    verifyRequiredFields: function(ex) {
      let reps = ex.userReps[this.currentSet - 1];
      let weights = ex.weights[this.currentSet - 1];

      if (reps === undefined || weights === undefined) {
        this.$store.dispatch(SHOW_TRAINING_SNACKBAR, true);
        setTimeout(() => {
          this.$store.dispatch(SHOW_TRAINING_SNACKBAR, false);
        }, this.duration);
        return false;
      }
      return true;
    },
    presetChange: function(presetNo) {
      this.$store.dispatch(TRAINING_PRESET_CHANGE, presetNo);
    }
  },
  computed: {
    ...mapGetters([
      "exercises",
      "currentExercise",
      "currentSet",
      "showSnackbar",
      "duration"
    ])
  },
  mounted() {
    this.$store.dispatch(TRAINING_PRESET_CHANGE, 1);
  }
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  width: 100%;
  position: absolute;
  bottom: 0px;
}
.center-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
}
.md-accent {
 text-align: center;
 top: 100px;
}
</style>