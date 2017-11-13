<template>
  <v-toolbar class="indigo" dark app fixed clipped-left dense :style="{zIndex:5}">
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
export default {
  data () {
    return {
      title: 'Dev Tools'
    }
  },
  methods: {

  }
}
</script>
