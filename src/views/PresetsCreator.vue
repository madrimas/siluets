<template>
  <div>
     <md-progress-spinner
      class="center-spinner" v-if="muscleCategories == null" :md-diameter="100" :md-stroke="10" md-mode="indeterminate"
    ></md-progress-spinner>
    <md-card v-for="muscle in muscleCategories" :key="muscle.id"> 
      <md-card-media-cover md-text-scrim>
       <md-card-media md-ratio="4:3">
          <img :src="getImgUrl(muscle.name)" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">{{ muscle.name }}</span>
            <span class="md-subhead">16/9 image</span>
          </md-card-header>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
    <!-- <img :src="getImgUrl('Anteriordeltoid')" alt="Skyscraper"> -->

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
    imageUrl: function() {
      // console.log(imgName.value)
      // let urlName = imgName.replace(/\s/g, '')
      console.log(require(`@/assets/images/Latissimusdorsi.png`))
      return require(`@/assets/images/Latissimusdorsi.png`).default
    }
  },
  methods: {
    getImgUrl: function(imgName) {
      let urlName = imgName.replace(/\s/g, '')
      console.log(require(`@/assets/images/${urlName}.png`))
      return require(`@/assets/images/${urlName}.png`).default

    }
  },
  mounted() {
    this.$store.dispatch(START_CATEGORIES_FETCH)
  }
};
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
