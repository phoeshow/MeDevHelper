<template>
  <v-layout wrap row>
    <v-flex xs12>
      <v-card :height="'100%'">
        <v-card-title class="indigo white--text">
          <span class="subheading">Setting</span>
          <span class="body-1 ml-4">{{currentProject.name}} ---</span>
          <span class="body-1">{{currentProject.version}}</span>
          <v-spacer></v-spacer>
          <v-btn icon small @click="createProjectDialog = true" dark class="my-0">
            <!-- 创建新工程 -->
            <v-icon>create_new_folder</v-icon>
          </v-btn>
          <v-btn small icon dark @click="createNewApi" class="my-0">
            <!-- 在当前工程中创建新设置 -->
            <v-icon>note_add</v-icon>
          </v-btn>
          <v-btn small icon dark class="my-0">
            <v-icon>sort</v-icon>
          </v-btn>
          <!-- 创建新工程的对话框 -->
          <v-dialog v-model="createProjectDialog" persistent max-width="500px">
            <v-card>
              <v-card-title>
                <span class="headline">Create Project</span>
              </v-card-title>
              <v-form v-model="valid" ref="createProjectForm" lazy-validation>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      
                        <v-flex xs12 sm6 md6>
                          <v-text-field 
                            label="Project name" 
                            required 
                            :rules="nameRules"
                            v-model="createProject.name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                          <v-text-field
                            label="Version" 
                            required 
                            :rules="versionRules"
                            v-model="createProject.version"></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                          <v-text-field 
                            label="Description"
                            required 
                            :rules="descriptionRules"
                            v-model="createProject.description"></v-text-field>
                        </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click.native="closeCreateDialog">Close</v-btn>
                  <v-btn color="blue darken-1" flat @click.native="createProjectHandler" :disabled="!valid">Save</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
          <!-- 对话框结束 -->
        </v-card-title>
        <v-card-text class="px-0 py-0 setting-card">
          <v-layout row wrap>
            <v-flex xs3 :style="{overflowY:'scroll'}" class="hidden-scrollbar right-border-div">
              <project-list
                :projectList="projectList"  
              ></project-list>
            </v-flex>
            <v-flex xs9 class="grey hidden-scrollbar" :style="{overflowY:'scroll'}">
              <api-list
                :apiList="apiList"></api-list>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectList from './ProjectList'
import ApiList from './ApiList'
import {mapActions} from 'Vuex'
export default {
  data () {
    return {
      valid: false,
      createProjectDialog: false,
      createProject: {
        name: '',
        version: '',
        description: ''
      },
      nameRules: [
        (v) => {
          return !!v || 'Name is required'
        }
      ],
      versionRules: [
        (v) => !!v || 'Version is required'
      ],
      descriptionRules: [
        (v) => !!v || 'Description is required'
      ]
    }
  },
  components: {
    ProjectList,
    ApiList
  },
  methods: {
    async createProjectHandler () {
      // 点击创建项目按钮
      if (this.$refs.createProjectForm.validate()) {
        let projectData = {
          name: this.createProject.name,
          version: this.createProject.version,
          description: this.createProject.description
        }
        try {
          await this.actionAddProject(projectData)
          this.closeCreateDialog()
        } catch (err) {
          console.log(err)
        }
      }
    },
    closeCreateDialog () {
      this.$refs.createProjectForm.reset()
      this.createProjectDialog = false
    },
    createNewApi () {
      // 在当前project中添加一个新的api文档,其实是在当前的配置中添加一个新的空白文档
      this.actionAddApi()
    },
    ...mapActions({
      actionAddProject: 'addProject',
      acitonGetProjectList: 'getProjectList',
      actionAddApi: 'addApi'
    })
  },

  computed: {
    projectList () {
      return this.$store.state.MockManager.projectList
    },
    apiList () {
      return this.$store.state.MockManager.apiList
    },
    currentProject () {
      return this.$store.state.MockManager.currentProject
    }
  },

  mounted () {
    this.acitonGetProjectList()
  }
}
</script>
<style scoped>
.setting-card{
  height:calc(100vh -  80px - 56px - 56px); /* all screen height - (toolbar+container paddingtop) - card title - footbar height */
  overflow: hidden;
}
.right-border-div{
  border-right: 1px solid rgba(0,0,0,0.12);
}
</style>
