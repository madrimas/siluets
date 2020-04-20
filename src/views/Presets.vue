<template>
  <div>
     <md-list md-expand-single='true'>
      <md-subheader>Settings</md-subheader>

      <md-list-item md-expand>
        <md-icon>network_wifi</md-icon>
        <span class="md-list-item-text">WiFi</span>
        <md-switch  />    

           <md-list slot="md-expand">
            <md-list-item class="md-inset">World</md-list-item>
            <md-list-item class="md-inset">Europe</md-list-item>
            <md-list-item class="md-inset">South America</md-list-item>
          </md-list>
      </md-list-item>
      <md-divider></md-divider>


      <md-list-item expand> 
        <md-icon>bluetooth</md-icon>
        <span class="md-list-item-text">Bluetooth</span>
        <md-switch  />
      </md-list-item>
      <md-divider></md-divider>


      <md-list-item expand>
        <md-icon>data_usage</md-icon>
        <span class="md-list-item-text">Data Usage</span>
        <!-- <md-switch v-model="settings.bluetooth" /> -->
      </md-list-item>
    </md-list>
    <md-speed-dial class='md-bottom-right'>
      <md-speed-dial-target to="/creator/">
        <md-icon>add</md-icon>
      </md-speed-dial-target>
    </md-speed-dial>
  </div>
</template>

<script>

export default {
  name: "presets"
};
</script>