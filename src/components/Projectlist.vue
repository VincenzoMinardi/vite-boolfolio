<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            ArrProjects: [],

        };
    },





    created() {
        axios
            .get('http://localhost:8000/api/projects', {
                params: {
                    page: this.last_page,
                }

            })
            .then(response => {
                this.ArrProjects = response.data.data;
                this.nPages = response.data.last_page;

            });
    },
};
</script>




<template>
    <div class="container d-flex flex-wrap mt-3 gap-5">
        <ProjectCard v-for="project in ArrProjects" :key="project.id" :project="project" />
    </div>

    <nav>
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li v-for="Page in nPages" :key="Page" class="page-item" :class="{ active: page == activePage }"><a
                    class="page-link" href="#">{{ page }}</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<style lang="sass">

</style>