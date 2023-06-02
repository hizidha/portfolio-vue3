<script setup>
    import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      currentPage: 'home',
    };
  },
};
</script>

<template>
  <nav>
      <ul class="nav d-flex justify-content-between fixed-top mainNav">
        <div class="gmbr-1">
          <img src="../assets/logo-nav.png" alt="logos" height="65">
        </div>
        <div>
          <li class="nav-item btn">
              <RouterLink to="/" :class="{ active: $route.name === 'HomePage' }">Home</RouterLink>
          </li>
          <li class="nav-item btn">
              <RouterLink to="/contact" :class="{ active: $route.name === 'ContactPage' }">Contact</RouterLink>
          </li>
        </div>
    </ul>
  </nav>
</template>

<style scoped>
.gmbr-1 {
  padding-top: 0.2rem;
}

nav {
  margin-bottom: 1.5rem;
}
.active {
  font-weight: 625;
  color: var(--vt-c-black-mute);
}
.mainNav {
    background-color: var(--color-background-primary);
    padding: 0rem 3rem;
}
.nav-item {
    border: none;
    padding: 1.25rem 2rem 1.5rem 2rem;
}
</style>