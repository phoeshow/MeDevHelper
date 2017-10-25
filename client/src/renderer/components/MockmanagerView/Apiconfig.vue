<template>
  <v-layout row wrap>
    <v-flex xs6 class="px-1">
      <v-text-field
        name="input-1"
        label="Name"
      ></v-text-field>
    </v-flex>
    <v-flex xs6 class="px-1">
      <v-text-field
        name="input-2"
        label="API"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 class="px-1">
      <v-text-field
        name="input-3"
        label="description"
      ></v-text-field>
    </v-flex>
    <v-flex xs12>
      <code-editor></code-editor>
    </v-flex>
  </v-layout>
</template>
<script>
import CodeEditor from './CodeEditor'
export default {
  data () {
    return {
      code: ''
    }
  },
  methods: {

  },
  computed: {

  },
  mounted () {

  },
  components: {
    CodeEditor
  }
}
</script>
