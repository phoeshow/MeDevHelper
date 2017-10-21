<template>
  <v-layout wrap row align-start>
    <v-flex xs12>
      <v-card dark>
        <v-card-title class="py-1 deep-orange">
          <span>Setting</span>
          <v-spacer></v-spacer>
          <v-btn icon @click="createDialog = true" dark>
            <v-icon>add</v-icon>
          </v-btn>
          <v-dialog v-model="createDialog" persistent max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Add new setting</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md4>
                      <v-text-field label="Setting name" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Description" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="createDialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="createDialog = false">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>
        <v-flex xs3>
          <mock-setting-list></mock-setting-list>
        </v-flex>
        <v-flex xs9>
          
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MockSettingList from './MockSettingList'
export default {
  data () {
    return {
      createDialog: false
    }
  },
  components: {
    MockSettingList
  }
}
</script>
