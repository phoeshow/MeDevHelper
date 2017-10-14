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
    <!-- 出错提示 -->
    <v-snackbar
      :timeout="timeout"
      :color="toastsMsg.color"
      top
      v-model="toastsMsg.snackbar"
    >
      {{ toastsMsg.toastsText }}
      <v-btn dark flat @click.native="toastsMsg.snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Navigation from '@/components/AppView/Navigation'
import VFooter from '@/components/AppView/Footer'
import Toolbar from '@/components/AppView/Toolbar'
import EventBus from './eventbus/eventbus'
export default {
  data: () => ({
    serverList: [],
    timeout: 3000,
    port: '',
    toastsMsg: {
      snackbar: false,
      color: 'error',
      toastsText: ''
    }
  }),

  components: {
    Navigation,
    VFooter,
    Toolbar
  },

  methods: {

  },

  mounted () {
    // 全局提示框，通过事件总线传递内容
    // EventBus.$emit('message', {snacbar: true, color: 'error', toastsText: 'some messages'})
    EventBus.$on('message', (message) => {
      this.toastsMsg = message
    })

    EventBus.$on('createServer', (server) => {
      EventBus.$data.mockServerList.push(server)
    })
  }
}
</script>

<style lang="stylus">
@import './assets/stylus/main.styl';
</style>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

/* Global CSS */
</style>
