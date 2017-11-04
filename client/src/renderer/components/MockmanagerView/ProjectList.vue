<template>
  <v-list two-line>
    <template v-for="project in projectList">
      <div :key="project._id">
        <v-list-tile   @click="setCurrentProject(project)">
          <v-list-tile-content>
            <v-list-tile-title class="body-2">
              {{ project.name }}
              <span class="caption grey--text text--lighten-1 ml-2">v.{{project.version}}</span>
            </v-list-tile-title>
            <v-list-tile-sub-title class="caption">{{ project.description }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-menu bottom left>
              <v-btn icon slot="activator" small>
                <v-icon>more</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile @click="deleteProject(project._id)">
                  <v-list-tile-title>DELETE</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
      </div>      
    </template>
  </v-list>
</template>
<script>
export default {
  name: 'project-list',

  data () {
    return {
      createDialog: false
    }
  },

  methods: {
    setCurrentProject (project) {
      // set current project
      this.$store.dispatch('setCurrentProject', project)
      // get current project's api configures
      this.$store.dispatch('getApis')
    },
    deleteProject (id) {
      // delete project
      this.$store.dispatch('deleteProjectById', id)
    }
  },

  props: {
    projectList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

