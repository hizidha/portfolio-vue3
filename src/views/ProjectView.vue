<template>
  <div>
    <h2 class="h2-title">List of Project</h2>
    <div class="container">
      <div class="row rowPro">
        <div class="col-md-4" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project"></ProjectCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCardView.vue'
import { projects } from "../service/projects"

export default {
  name: 'ProjectView',
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projects
    };
  }
};
</script>

<style>
.rowPro {
  margin-bottom: 4.5rem;
}
</style>
