<template>
  <div>
    <md-progress-spinner
      class="center-spinner"
      v-if="muscleCategories == null"
      :md-diameter="100"
      :md-stroke="10"
      md-mode="indeterminate"
    ></md-progress-spinner>
    <md-content v-if="muscleCategorySelection" class="md-scrollbar grid-content">
      <md-card class="card" v-for="muscle in muscleCategories" :key="muscle.id" md-with-hover>
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="4:3">
            <img :src="getImgUrl(muscle.name)" alt="Skyscraper" />
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <span class="md-title">{{ muscle.name }}</span>
            </md-card-header>
            <md-card-actions>
              <md-button class="md-raised md-primary" @click="clickedMuscle(muscle)">Select</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </md-content>
    <md-content v-if="!muscleCategorySelection" class="md-scrollbar muscle-content">
      <md-card v-for="exercise in exercisesInCategory" :key="exercise.id" class="wide-card">
        <md-card-header>
          <div class="md-title">{{ exercise.name }}</div>
          <div class="md-subhead">{{ exercise.license_author }}</div>
        </md-card-header>

        <md-card-media>
          <!-- <img src="/assets/examples/card-image-1.jpg" alt="People" /> -->
        </md-card-media>

        <md-card-content>{{ exercise.description }}</md-card-content>

        <md-card-actions>
          <md-button @click="addToTraining(exercise)">Add to training</md-button>
        </md-card-actions>
      </md-card>
    </md-content>
    <md-speed-dial class="md-bottom-left">
      <md-speed-dial-target to="/presets/">
        <md-icon>keyboard_arrow_left</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  START_CATEGORIES_FETCH,
  HANDLE_MUSCLE_CHOICE,
  AFTER_CHOOSE_ACTION
} from "@/store/actions.type";

export default {
  name: "presets-creator",
  computed: {
    ...mapGetters([
      "muscleCategories",
      "muscleCategorySelection",
      "exercisesInCategory"
    ])
  },
  methods: {
    getImgUrl: function(imgName) {
      let urlName = imgName.replace(/\s/g, "");
      return require(`@/assets/images/${urlName}.png`).default;
    },
    clickedMuscle: function(muscle) {
      this.$store.dispatch(HANDLE_MUSCLE_CHOICE, muscle);
      console.log("You clicked: ", muscle);
    },
    addToTraining: function(exercise) {
      let presetId = this.$route.params.presetId;

      let exerciseComposed = {
            exercise: exercise,
            presetId: presetId
        }

      this.$store.dispatch(AFTER_CHOOSE_ACTION, exerciseComposed); //todo: rename to choose_exercise_action or sth
      this.$router.push({ name: "presets" });
    }
  },
  mounted() {
    this.$store.dispatch(START_CATEGORIES_FETCH);
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  width: 320px;
  margin: 4px;
  object-fit: cover;
}
.wide-card {
  position: relative;
  margin: 4px;
  object-fit: cover;
}
.muscle-content {
  margin: 10px;
  max-width: 100%;
  max-height: calc(98vh - 60px);
  overflow: auto;
}
.grid-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 15px;
  max-width: 100%;
  max-height: calc(98vh - 60px);
  overflow: auto;
}
</style>
