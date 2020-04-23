<template>
  <div>
    <md-list md-expand-single="true">
      <md-subheader>Training presets</md-subheader>

      <md-list-item v-for="preset in presets" :key="preset.presetId" md-expand>
        <md-icon>network_wifi</md-icon>
        <span class="md-list-item-text">{{ preset.presetName }}</span>
        <md-switch />

        <md-list slot="md-expand">
          <md-list-item
            v-for="exercise in preset.exercises"
            :key="exercise.exerciseId"
            class="md-inset"
          >{{ exercise.exerciseName }}</md-list-item>
        </md-list>
      </md-list-item>
    </md-list>
    <md-speed-dial class="md-bottom-right">
      <md-speed-dial-target to="/creator/">
        <md-icon>add</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { START_PRESETS_FETCH } from "@/store/actions.type";

export default {
  name: "presets",
  methods: {},
  computed: {
    ...mapGetters(["focusedPreset", "focusedPresetId", "presets"])
  },
  mounted() {
    this.$store.dispatch(START_PRESETS_FETCH);
  }
};
</script>