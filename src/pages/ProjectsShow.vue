<script>
import axios from 'axios';
import { store } from '../store';



export default {

    data() {
        return {
            store,
            project: null,
            // luxon: DateTime,
        };
    },

    created() {
        axios
            .get(this.store.baseImage + 'api/projects/' + this.$route.params.project)
            .then(response => {

                (response.data.success)
                this.project = response.data.results;

            });
    },
};

</script>

<template>
    <div v-if="project != null">
        <div class="card col" style="width: 18rem;">
            <img :src="store.getImageUrl(project.image)" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h3 class="card-title">{{ project.title }}</h3>
                <h5>{{ project.date }}</h5>
                <h5>{{ project.name }}</h5>
                <h5>{{ project.surname }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <router-link :to="{ name: 'projects.show', params: { project: project.id } }"
                    class="btn btn-primary mt-auto">View</router-link>
            </div>
        </div>
    </div>
</template>

<!-- <img :src="store.getImageUrl(project.image)" :alt="project.title" /> -->

<style></style>
