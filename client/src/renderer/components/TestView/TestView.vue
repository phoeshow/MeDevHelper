<template>
  <v-layout row wrap align-content-space-between justify-center>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          <h5>hello</h5>
        </v-card-title>
        <v-card-text>
          <codemirror ref="myEditor"
            :code="code" 
            :options="editorOptions"
            @ready="onEditorReady"
            @focus="onEditorFocus"
            @change="onEditorCodeChange">
          </codemirror>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import codemirror from '../common/codemirror'
export default {
  data () {
    return {
      code: '',
      editorOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark'
      }
    }
  },
  components: {
    codemirror
  },
  methods: {
    onEditorReady (editor) {
      console.log('the editor is readied!', editor)
    },
    onEditorFocus (editor) {
      console.log('the editor is focus!', editor)
    },
    onEditorCodeChange (newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    }
  },
  computed: {
    editor () {
      return this.$refs.myEditor.editor
    }
  },
  mounted () {
    console.log('this is current editor object', this.editor)
    // you can use this.editor to do something...
  }
}
</script>
