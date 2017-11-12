<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(apiItem,i) in apiList" :key="apiItem._id" lazy>
      <div slot="header">
        <v-layout row align-center>
          <v-flex xs3 class="text-break">
            {{apiItem.name}}
          </v-flex>
          <v-flex xs6 class="caption grey--text" >
            <span>
              {{apiItem.method}}
            </span>
            <span class="ml-2">
              {{apiItem.api}}
            </span>
          </v-flex>
          <v-flex xs3>
            <!-- 新功能，将操作进一步提取到外层 -->
            <v-btn icon small class="my-0 mx-1" @click.stop="toggleActiveApi(i)">
              <v-icon 
                :color="apiItem.isActive ? 'green' : 'grey lighten-2'"
              >play_arrow</v-icon>
            </v-btn>
            <v-btn icon small class="my-0 mx-1" @click.stop="saveApi(i)">
              <v-icon>save</v-icon>
            </v-btn>
            <v-btn icon small class="my-0 mx-1" @click.stop="deleteApi(i)">
              <v-icon>remove_circle</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
          <api-config :index="i"></api-config>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import {mapActions} from 'vuex'
import ApiConfig from './Apiconfig'
import eventBus from '../../eventbus'
export default {
  name: 'mock-setting-apiconfig',
  data () {
    return {

    }
  },
  components: {
    ApiConfig
  },
  props: {
    apiList: {
      type: Array,
      required: true
    }
  },
  computed: {
  },
  methods: {
    ...mapActions({
      actionSaveApi: 'updateApi',
      actionDeleteApi: 'deleteApi',
      actionToggleActiveApi: 'toggleActiveApi'
    }),
    saveApi (index) {
      this.actionSaveApi(index)
    },
    deleteApi (index) {
      this.actionDeleteApi(index)
    },
    async toggleActiveApi (index) {
      try {
        await this.actionToggleActiveApi(index)
      } catch (err) {
        eventBus.$emit('message', {text: err.message, color: 'error', show: true})
      }
    }
  }
}
</script>

<style scoped>
.text-break{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 5px;
}
</style>

