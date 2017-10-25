<template>

    <v-expansion-panel>
      <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
        <div slot="header">Item{{i}}</div>
        <v-card flat>
          <v-card-text class="grey lighten-3">
            <api-config></api-config>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>

</template>

<script>
import ApiConfig from './Apiconfig'
export default {
  name: 'mock-setting-apiconfig',
  data () {
    return {}
  },
  components: {
    ApiConfig
  }
}
</script>
