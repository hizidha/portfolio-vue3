<script setup>
    import { RouterLink } from 'vue-router'
    import ProjectPage from '../views/ProjectView.vue'
</script>

<template>
  <h2 class="h2-title">About Me</h2>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex align-items-center">
        <div class="wrap-desc">
          <h2 class="main-name">Adisaputra Zidha N</h2>
          <h6 class="sub-name">Undergraduate Student In Computer Engineering Program</h6>
          <p>I have intermediate level skills in Internet of Things and Machine Learning, and 
            have an interest in Software Engineering and Big Data. In addition, I am also 
            someone who has high enthusiasm in learning new things, especially supported by 
            a fun and supportive environment.</p>
          <RouterLink to="/contact">
            <button class="btn-1 btn-br">Contact Me</button>
          </RouterLink>
        </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/photo-profile.jpg" alt="photo-profile" class="img-fluid" height="425" width="425">
      </div>
    </div>
  </div>
  <br><br><br>

  <ProjectPage />
  <br><br>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style>
  .row {
    margin: 2.5rem 0rem;
  }

  .img-fluid {
    border: 5px var(--vt-c-primary-color) solid;
    border-radius: 10px;
    filter: brightness(70%);
  }

  .main-name {
    color: var(--vt-c-primary-color);
    margin: 0.25rem 0rem;
    font-weight: 625;
  }

  .sub-name {
    color: var(--vt-c-white-soft);
    margin-bottom: 0.85rem;
    font-size: 15px;
    font-weight: 500;
  }

  p {
    color: var(--vt-c-text-dark-2);
    text-align: justify;
    margin-bottom: 1.5rem;
  }

  .btn-1 {
    padding: 0.4rem 2rem 0.55rem 2rem;
    border-radius: 4px;
    color: var(--vt-c-white);
    font-size: 14.5px;
  }

  .wrap-desc {
    margin-right: 2.25rem;
  }
</style>
