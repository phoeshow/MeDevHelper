<template>
  <v-app id="inspire" dark>
    <Navigation></Navigation>
    <Toolbar></Toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <router-view></router-view>
        </v-container>
      </v-content>
    </main>
    <VFooter></VFooter>
  </v-app>
</template>

<script>
  import Navigation from '@/components/AppView/Navigation'
  import VFooter from '@/components/AppView/Footer'
  import Toolbar from '@/components/AppView/Toolbar'
  import EventBus from './eventbus/eventbus'
  import Server from '../server/app'
  export default {
    data: () => ({
      serverList: []
    }),

    components: {
      Navigation,
      VFooter,
      Toolbar
    },

    methods: {
      createServer (port, config) {
        console.log(port)
        console.log(config)
        let server = new Server(port)
        this.serverList.push(server)
      }
    },

    mounted () {
      EventBus.$on('createServer', payload => {
        console.log(payload)
        this.createServer(payload.port, payload.config)
      })
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
