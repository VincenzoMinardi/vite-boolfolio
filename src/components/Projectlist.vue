<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            ArrProjects: []
        };
    },
    created() {
        axios.get('http://localhost:8000/api/projects')
            .then(response => {
                this.ArrProjects = response.data.data;
            })
    }
};
</script>




<template>
    <div class="container d-flex flex-wrap mt-3 gap-5">
        <ProjectCard v-for="project in ArrProjects" :key="project.id" :project="project" />
    </div>
</template>

<style lang="sass">

</style>