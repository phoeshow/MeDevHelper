<template>
  <v-layout wrap row align-start>
    <v-flex xs12>
      <v-card>
        <v-card-title>
          setting
        </v-card-title>
        <v-flex xs3>
          <mock-setting-list></mock-setting-list>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MockSettingList from './MockSettingList'
export default {
  components: {
    MockSettingList
  }
}
</script>
