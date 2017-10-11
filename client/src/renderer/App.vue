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
      :color="color"
      top
      v-model="snackbar"
    >
      {{ toastsText }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
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
    serverList: [],
    timeout: 6000,
    snackbar: false,
    color: 'error',
    port: '',
    toastsText: ''
  }),

  components: {
    Navigation,
    VFooter,
    Toolbar
  },

  methods: {
    createServer (port, config) {
      console.log(`当前服务器将要使用的端口号是：${port}`)
      console.log(`服务器的设置内容为：${config}`)
      this.port = port
      let server = new Server(port)
      server.on('error', this.onError)
      if (server.listening) {
        this.serverList.push(server)
      }
    },
    onError (error) {
      if (error.syscall !== 'listen') {
        throw error
      }
      var bind = 'Port ' + this.port

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          this.toastsText = bind + ' requires elevated privileges'
          this.color = 'error'
          this.snackbar = true
          console.error(bind + ' requires elevated privileges')
          break
        case 'EADDRINUSE':
          this.toastsText = bind + ' is already in use'
          this.color = 'error'
          this.snackbar = true
          console.error(bind + ' is already in use')
          break
        default:
          throw error
      }
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
@import './assets/stylus/main.styl';
</style>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

/* Global CSS */
</style>
