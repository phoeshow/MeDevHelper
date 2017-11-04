<template>
  <v-footer app fixed>
    <v-btn small icon @click="toggleNavigation">
      <v-icon>
        {{ miniNavigation ? 'last_page' : 'first_page'}}
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <span>&copy; 2017</span>
  </v-footer>
</template>
<script>
import EventBus from '../../eventbus'
export default {
  data () {
    return {
      miniNavigation: false
    }
  },

  methods: {
    toggleNavigation () {
      EventBus.$emit('toggleNavigation', {})
      this.miniNavigation = !this.miniNavigation
    }
  }
}
</script>
