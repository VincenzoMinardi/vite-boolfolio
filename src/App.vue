<script>
import ProjectList from './components/ProjectList.vue';

export default {

  components: {
    ProjectList
  }
};
</script>








<template>
  <div class="container">
    <router-view></router-view>
    <ProjectList />


  </div>
</template>



<style lang="scss">
@import 'bootstrap/scss/bootstrap';
</style>
