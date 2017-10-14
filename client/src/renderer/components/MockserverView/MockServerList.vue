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
    }
  }
}
</script>
