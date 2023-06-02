<template>
    <div class="card">
      <img :src="project.imgUrl" :alt="project.title" class="card-img-top"> <!-- src="..\assets\img-rvc.png":src="project.imgUrl" -->
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ truncateDescription(project.description) }}</p>
        <div class="card-btn">
          <router-link :to="{ name: 'DetailProject', params: { id: project.id } }" class="card-link">
            <button class="btn-br btn-cards">Detail Project</button>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ProjectCard',
    props: ['project'],
    methods: {
      truncateDescription(description) {
        const maxLength = 185;
        if (description.length > maxLength) {
          return description.substring(0, maxLength) + '...';
        } else {
          return description;
        }
      }
  }
};
</script>
 
<style>
  .card, .card-title {
    text-align: center;
  }

  .card {
    padding: 0rem;
    margin-bottom: 1.5rem;
  }

  .card-title {
    color: var(--vt-c-primary-color);
  }

  .card-text {
    color: var(--vt-c-text-light-2);
    font-weight: 500;
    font-size: 13.5px;
    text-align: justify;
    margin: 1rem 0rem 1.5rem 0rem;
  }

  .card-btn {
    text-align: justify;
  }

  .btn-cards {
    margin: 0rem;
    padding: 0.5rem 1.35rem 0.7rem 1.35rem;
    border-radius: 3.5px;
  }

</style>
  