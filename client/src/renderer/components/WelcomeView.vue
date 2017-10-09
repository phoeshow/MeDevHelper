<template>
  <v-layout row wrap justify-center align-start id="wrapper">
    <v-flex xs12 class="mt-3">
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex>
              <v-text-field
                label="Port"
                v-model="port"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-btn @click="openServer">start</v-btn>
          <v-btn @click="endServer">end</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import Server from '../../server/app'
  export default {
    name: 'welcome',
    data () {
      return {
        server: [],
        port: ''
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      openServer () {
        // open the server
        this.server = new Server(4000)
      },
      endServer () {
        this.server.close(err => {
          if (!err) {
            console.log('is closed')
          } else {
            console.log(err)
          }
        })
      }
    }
  }
</script>

<style></style>
