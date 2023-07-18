<script>
import axios from 'axios';
import { store } from '../store';
import { DateTime } from 'luxon';


export default {

    data() {
        return {
            store,
            luxon: DateTime,
        };
    },

    created() {
        axios
            .get(this.store.baseImage + 'api/projects/' + this.projects)
            .then(response => {
                (response.data.success)
                this.project = response.data.results;

            });
    },
};

</script>

<template>
    <h1>{{ project.title }}</h1>
    <h2>Last modified: {{ this.luxon.now().toFormat('dd/MM/yyyy') }}</h2>
    <img :src="store.getImageUrl(project.image)" :alt="project.title" />
    <p>{{ project.description }}</p>
</template>



<style></style>
