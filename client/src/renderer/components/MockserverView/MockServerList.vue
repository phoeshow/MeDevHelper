<template>
  <v-card>
    <v-card-title>
      Server List
    </v-card-title>
    <v-card-text>
      <v-card 
        class="mb-3"
        v-for="(server, index) in mockServerList"
        v-bind:key="index"
      >
        <v-card-text>
          <v-layout>
            <v-flex>
              {{server.port}}
              &nbsp;server is:
              {{ server.running ? 'running' : 'closed' }}
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex>
              <v-btn @click="stopServer(server)">
                stop
              </v-btn>
              <v-btn @click="openServer(server)">
                open
              </v-btn>
              <v-btn @click="deleteServer(server)">
                delete
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import EventBus from '../../eventbus/eventbus'
export default {
  name: 'mockserverlist',

  computed: {
    mockServerList () {
      return EventBus.$data.mockServerList
    }
  },

  methods: {
    stopServer (server) {
      console.log(server)
      server.close((err) => {
        if (!err) {
          server.running = false
        }
      })
    },
    openServer (server) {
      console.log('this server will open again')
      server.start()
    },
    deleteServer (server) {
      EventBus.$emit('message', {show: true, color: 'info', text: '目前还没有实现这个功能'})
    }
  }
}
</script>
