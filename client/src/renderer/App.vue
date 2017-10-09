<template>
  <div id="app">
    <v-app dark>
      <v-navigation-drawer permanent clipped :mini-variant="isMiniNavigation">
        <v-list>
          
          <v-list-tile tag="a" @click="toggleNavgation">
            <v-list-tile-action>
              <v-icon>{{isMiniNavigation ? 'chevron_right' : 'chevron_left'}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile 
            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in items"
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed>
        <v-toolbar-title>{{title}}</v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid fill-height>
            <v-slide-y-transition mode="out-in">
              <router-view></router-view>
            </v-slide-y-transition>
        </v-container>
      </main>
      <v-footer :fixed="fixed">
        <v-spacer></v-spacer>
        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'memock-client',
    data: () => ({
      fixed: true,
      items: [
        { icon: 'apps', title: 'Mock', to: '/' },
        { icon: 'bubble_chart', title: 'Configure', to: '/inspire' }
      ],
      navigation: true,
      title: 'MeMock',
      mockserver: [], // 全局保存实例化后的服务器,
      isMiniNavigation: true
    }),
    methods: {
      toggleNavgation () {
        this.isMiniNavigation = !this.isMiniNavigation
      }
    }
  }
</script>

<style lang="stylus">
  @import './assets/stylus/main.styl'
</style>


<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
