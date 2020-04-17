<template>
  <div class="home">
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <md-tabs class="md-primary" md-sync-route>
            <md-tab id="tab-home" md-label="Training" to="/training"></md-tab>
            <md-tab id="tab-pages" md-label="Presets" to="/presets"></md-tab>
            <md-tab id="tab-posts" md-label="Measurements" to="/measurements"></md-tab>
            <md-tab id="tab-favorites" md-label="Progress" to="/progress"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>
    </md-app>

    <router-view></router-view>


  </div>
</template>

<script>
export default {
  name: "home"
};
</script>