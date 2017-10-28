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
      <codemirror
        ref="myEditor"
        :code="code" 
        :options="editorOptions"
        @ready="onEditorReady"
        @focus="onEditorFocus"
        @change="onEditorCodeChange"
      ></codemirror>
    </v-flex>
    <v-flex xs12>
      <v-btn>save</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import codemirror from '../common/codemirror'
import 'codemirror/addon/edit/closebrackets' // 自动补全括号
import 'codemirror/addon/edit/matchbrackets' // 高亮匹配括号
import 'codemirror/addon/lint/json-lint'
require('codemirror/addon/lint/lint.css')
export default {
  data () {
    return {
      code: '',
      editorOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'application/json',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // editor mutil
        gutters: ['CodeMirror-lint-markers'],
        matchBrackets: true,
        autoCloseBrackets: true,
        lint: true,
        lintOnChange: true
      }
    }
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
  },
  components: {
    codemirror
  }
}
</script>
