<template>
  <div>
     <md-progress-spinner
      class="center-spinner" v-if="muscleCategories == null" :md-diameter="100" :md-stroke="10" md-mode="indeterminate"
    ></md-progress-spinner>
    <md-card v-for="muscle in muscleCategories" :key="muscle.id"> 
      <md-card-media-cover md-text-scrim>
       <md-card-media>
          <!-- <img :src="getImgUrl(muscle.name)" alt="Skyscraper"> -->
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ muscle.name }}</span>
            <span class="md-subhead">16/9 image</span>
          </md-card-header>

          <!-- <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions> -->
        </md-card-area>
      </md-card-media-cover>
    </md-card>

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
    ...mapGetters([
     "muscleCategories"
    ]),
    getImgUrl: imgName => {
      console.log(imgName)
      return `/assets/images/${imgName.replace(" ", "")}.png`
    }
  },
  mounted() {
    this.$store.dispatch(START_CATEGORIES_FETCH)
  }
};
</script>