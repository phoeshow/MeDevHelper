<template>

    <v-expansion-panel>
      <v-expansion-panel-content v-for="(apiItem,i) in apiList" :key="apiItem._id" lazy>
        <div slot="header">Item{{i}}</div>
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
