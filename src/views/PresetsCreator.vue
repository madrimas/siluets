<template>
  <div>
    <md-progress-spinner
      class="center-spinner"
      v-if="muscleCategories == null"
      :md-diameter="100"
      :md-stroke="10"
      md-mode="indeterminate"
    ></md-progress-spinner>
    <md-content class="md-scrollbar">
      <md-card class="card" v-for="muscle in muscleCategories" :key="muscle.id" md-with-hover>
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="4:3">
            <img :src="getImgUrl(muscle.name)" alt="Skyscraper" />
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <span class="md-title">{{ muscle.name }}</span>
              <!-- <span class="md-subhead">16/9 image</span> -->
            </md-card-header>
              <md-card-actions>
            <md-button class="md-raised md-primary" @click="clickedMuscle(muscle)">Select</md-button>
          </md-card-actions>
          </md-card-area>
        
        </md-card-media-cover>
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
import { START_CATEGORIES_FETCH } from "@/store/actions.type";

export default {
  name: "presets-creator",
  computed: {
    ...mapGetters(["muscleCategories"])
  },
  methods: {
    getImgUrl: function(imgName) {
      let urlName = imgName.replace(/\s/g, "");
      return require(`@/assets/images/${urlName}.png`).default;
    },
    clickedMuscle: function(muscle) {
      console.log("You clicked: ", muscle.name);
    }
  },
  mounted() {
    this.$store.dispatch(START_CATEGORIES_FETCH);
  }
};
</script>

<style lang="scss" scoped>
//todo: more responsivenes/scalabilty
.card {
  position: relative;
  width: 320px;
  margin: 4px;
  object-fit: cover;
}
.md-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 15px;
  max-width: 100%;
  max-height: calc(98vh - 60px);
  overflow: auto;
}
</style>
