<template>
  <div>
    <md-steppers md-vertical>
      <md-step v-for="ex in exercises" :key="ex.id" :md-label="ex.displayName" :md-description="ex.description"> 
      </md-step>
    </md-steppers>
  </div>
</template>

//steps should be generated for each excersise in training program


<script>
import { END_SINGLE_SERIES } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
  name: "training",
  methods: {
    endSingleSeries: function(exerciseInfo) {
      //exercise info should have id, numOfSeries, weightOfSeries
      this.$store.dispatch(END_SINGLE_SERIES, { exerciseInfo });
    }
  },
  computed: {
    ...mapGetters(["exercises"])
  }
};
</script>