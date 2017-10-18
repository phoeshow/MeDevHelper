<template>
  <v-layout row wrap align-content-space-between justify-center>
    <v-flex xs12>
      <CreateServer></CreateServer>
      <MockServerList></MockServerList>
    </v-flex>
  </v-layout>
</template>
<script>
import CreateServer from './CreateServer'
import MockServerList from './MockServerList'
export default {
  name: 'MockserverView',

  components: {
    CreateServer,
    MockServerList
  }
}
</script>
