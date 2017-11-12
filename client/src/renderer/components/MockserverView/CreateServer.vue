<template>
  <v-card class="mb-3">
    <v-card-title class="indigo white--text subheading">
      Create Server
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4>
          <v-text-field label="Port" v-model="port"></v-text-field>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm12 md4>
          <v-select 
            label="Project"
            ></v-select>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm12 md2>
          <v-btn color="green" dark @click="createServer">
            <v-icon>play_arrow</v-icon>
            start
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import Server from '../../../server/app'
import EventBus from '../../eventbus'
export default {
  data () {
    return {
      port: ''
    }
  },

  methods: {
    createServer () {
      let server = new Server(this.port)
      server.server.on('error', this.onError)
      server.start()
      if (server.server.listening) {
        // this.$store.commit('ADD_MOCK_SERVER', server)
        EventBus.$emit('createServer', server)
      }
    },
    onError (error) {
      if (error.syscall !== 'listen') {
        throw error
      }
      let bind = 'Port ' + this.port
      let message = {}
      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          message.text = bind + ' requires elevated privileges'
          message.color = 'error'
          message.show = true
          EventBus.$emit('message', message)
          console.error(bind + ' requires elevated privileges')
          break
        case 'EADDRINUSE':
          message.text = bind + ' is already in use'
          message.color = 'error'
          message.show = true
          EventBus.$emit('message', message)
          console.error(bind + ' is already in use')
          break
        default:
          throw error
      }
      EventBus.$emit('message', message)
    }
  }
}
</script>
