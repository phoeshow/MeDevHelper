<template>
  <v-card flat>
    <v-card-text class="grey lighten-3">
      <v-layout row wrap>
        <v-flex xs4>
          <v-text-field
            name="input-1"
            label="Name"
            v-model="currentApiName"
          ></v-text-field>
          <v-select
              v-bind:items="apiMethods"
              v-model="currentApiMethod"
              label="Method"
              single-line
              bottom
            ></v-select>
          <v-text-field
            name="input-2"
            label="API"
            v-model="currentApiApi"
          ></v-text-field>
          <v-text-field
            name="input-3"
            label="description"
            v-model="currentApiDescription"
          ></v-text-field>
        </v-flex>

        <v-flex xs8 class="pl-4">
          <codemirror
            ref="myEditor"
            v-model="currentApiCode"
            :options="editorOptions"
          ></codemirror>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="grey lighten-3">
      <v-btn @click="deleteApi" color="error">delete</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="saveApi">save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import codemirror from '../common/codemirror'
import 'codemirror/addon/edit/closebrackets' // 自动补全括号
import 'codemirror/addon/edit/matchbrackets' // 高亮匹配括号
import 'codemirror/addon/lint/json-lint'
import {mapActions} from 'vuex'
// import Code from './code'
require('codemirror/addon/lint/lint.css')
export default {
  data () {
    return {
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
      },
      apiMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD', 'TRACE', 'CONNECT'],
      e1: ''
    }
  },
  methods: {
    saveApi () {
      this.actionSaveApi(this.index)
    },
    ...mapActions({
      actionAddApi: 'addApi',
      actionSaveApi: 'updateApi',
      actionDeleteApi: 'deleteApi'
    }),
    deleteApi () {
      this.actionDeleteApi(this.index)
    }
  },
  computed: {
    editor () {
      return this.$refs.myEditor.editor
    },
    currentApiName: {
      get () {
        return this.$store.state.MockManager.apiList[this.index].name
      },
      set (value) {
        this.$store.commit('SET_API_NAME', {index: this.index, value: value})
      }
    },
    currentApiMethod: {
      get () {
        return this.$store.state.MockManager.apiList[this.index].method
      },
      set (value) {
        this.$store.commit('SET_API_METHOD', {index: this.index, value: value})
      }
    },
    currentApiApi: {
      get () {
        return this.$store.state.MockManager.apiList[this.index].api
      },
      set (value) {
        this.$store.commit('SET_API_API', {index: this.index, value: value})
      }
    },
    currentApiCode: {
      get () {
        return this.$store.state.MockManager.apiList[this.index].code
      },
      set (value) {
        this.$store.commit('SET_API_CODE', {index: this.index, value: value})
      }
    },
    currentApiDescription: {
      get () {
        return this.$store.state.MockManager.apiList[this.index].description
      },
      set (value) {
        this.$store.commit('SET_API_DESCRIPTION', {index: this.index, value: value})
      }
    }
  },
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  mounted () {
    // console.log('this is current editor object', this.editor)
    // console.log(Code)
  },
  components: {
    codemirror
  }
}
</script>
