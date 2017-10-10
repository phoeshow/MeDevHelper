<template>
  <v-layout row wrap align-content-space-between justify-center>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          Create Server
        </v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs4>
              <v-text-field label="Port" v-model="port"></v-text-field>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs4>
              <v-select label="Config"></v-select>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs2>
              <v-btn icon color="green" @click="createServer">
                <v-icon>play_arrow</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import EventBus from '../../eventbus/eventbus'
export default {
  name: 'MockserverView',

  data () {
    return {
      port: ''
    }
  },

  methods: {
    createServer () {
      // 开启一个服务器 ，但是服务器不是开启在当前组件中，而是开启在全局
      EventBus.$emit('createServer', {port: this.port, config: 'some conf'})
    }
  }
}
</script>
