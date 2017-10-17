<template>
  <v-navigation-drawer clipped permanent v-model="drawer" :mini-variant="miniNavigation" app>
    <v-list dense>
      <template v-for="(item,index) in navigation">
        <v-subheader v-if="item.header" v-text="item.header" :key="index"></v-subheader>
        <v-divider v-else-if="item.divider" v-bind:inset="item.inset" :key="index"></v-divider>
        <v-list-tile v-else :key="index" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <div class="scroll-nav">
      <v-btn icon @click="miniNavigation = !miniNavigation">
        <v-icon>
          {{ miniNavigation ? 'last_page' : 'first_page'}}
        </v-icon>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Navigation',

  data () {
    return {
      drawer: true,
      miniNavigation: false,
      navigation: [
        { header: 'Mock' },
        { icon: 'device_hub', title: 'MockServer', to: '/mockserver' },
        { icon: 'settings', title: 'MockManager', to: '/mockmanager' },
        { divider: true, inset: true }
      ]
    }
  }
}
</script>

<style scoped>
.scroll-nav{
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>


