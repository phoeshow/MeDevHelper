<template>
  <v-layout wrap row>
    <v-flex xs12>
      <v-card dark :height="'100%'">
        <v-card-title class="deep-orange py-1">
          <span>Setting</span>
          <v-spacer></v-spacer>
          <v-btn icon small @click="createDialog = true" dark>
            <v-icon>create_new_folder</v-icon>
          </v-btn>
          <v-btn small icon dark>
            <v-icon>note_add</v-icon>
          </v-btn>
          <v-btn small icon dark>
            <v-icon>sort</v-icon>
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
        <v-layout row wrap>
          <v-flex xs3>
            <mock-setting-list></mock-setting-list>
          </v-flex>
          <v-flex xs9>
            <api-list></api-list>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import MockSettingList from './MockSettingList'
import ApiList from './ApiList'
export default {
  data () {
    return {
      createDialog: false
    }
  },
  components: {
    MockSettingList,
    ApiList
  }
}
</script>
