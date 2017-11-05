<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(apiItem,i) in apiList" :key="apiItem._id" lazy>
      <div slot="header">
        <v-layout row>
          <v-flex xs4 class="text-break">
            {{apiItem.name}}
          </v-flex>
          <v-flex xs8 class="caption grey--text">
            {{apiItem.api}}
          </v-flex>
        </v-layout>
      </div>
          <api-config :index="i"></api-config>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import ApiConfig from './Apiconfig'
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

