<template>
    <div>
      <div class="back-to">
        <router-link to="/">
          <a class="back-to-text">Back to Previous</a>
        </router-link>
      </div>
      <div>
        <h2 class="h2-title">Project Detail</h2>
        <div class="container">
          <div class="row col-md-12">
            <div class="d-flex justify-content-center">
                <img  :src="projectById.imgUrl" :alt="projectById.title" height="350"> <!-- :src="projectById.imgUrl" -->
            </div>
            <h5 class="card-title detail-pro2">{{ projectById.title }}</h5>
            <p class="card-text detail-pro3">{{ projectById.description }}</p>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { projects } from "../service/projects";
  
  export default {
    name: 'DetailProject',
    data() {
      return {
        projects: projects
      };
    },
    computed: {
      projectById() {
        return this.projects.find((project) => project.id === this.$route.params.id);
      },
    },
  };
  </script>
  
<style scoped>
    h5.detail-pro2 {
        margin-top: 1rem;
        padding-top: 2rem;
        text-align: justify;
    }
    p.detail-pro3 {
        margin-top: 0.75rem;
        font-size: 14px;
        color: var(--vt-c-text-dark-2);
    }

    .back-to, .back-to:hover {
        margin: 0rem 1.5rem 2.25rem 1.5rem;
        padding-top: 0.25rem;
        font-size: 13px;
    }

    .back-to-text:hover {
        color: var(--vt-c-primary-color);
    }
</style>
  