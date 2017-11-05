<template>
  <v-toolbar class="indigo" dark app fixed clipped-left :style="{zIndex:5}">
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <div style="-webkit-app-region: no-drag">
      <v-btn icon @click="minimize" class="mx-0" small>
        <v-icon>remove</v-icon>
      </v-btn>
      <v-btn icon @click="maximize" class="mx-0" small>
        <v-icon>crop_square</v-icon>
      </v-btn>
      <v-btn icon @click="close" class="mx-0" small>
        <v-icon>clear</v-icon>
      </v-btn>
    </div>
    
  </v-toolbar>
</template>
<script>
import {remote} from 'electron'
export default {
  data () {
    return {
      title: 'MeDevHelper'
    }
  },
  methods: {
    minimize () {
      let window = remote.BrowserWindow.getFocusedWindow()
      window.minimize()
    },
    maximize () {
      let window = remote.BrowserWindow.getFocusedWindow()
      let currStatus = window.isMaximized()
      if (currStatus) {
        window.unmaximize()
      } else {
        window.maximize()
      }
    },
    close () {
      let window = remote.BrowserWindow.getFocusedWindow()
      window.close()
    }
  }
}
</script>
