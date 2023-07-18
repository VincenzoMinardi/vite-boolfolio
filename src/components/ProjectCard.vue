<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    props: {
        project: {
            type: Object,
            required: true
        }
    },

    methods: {
        getImageUrl(image) {
            return image
                ? this.store.baseImage + 'storage/' + image : this.store.baseImage + 'storage/default.jpg';
        },
    },
};
</script>


<template>
    <div class="card col" style="width: 18rem;">
        <img :src="getImageUrl(project.image)" class="card-img-top" :alt="project.title">
        <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <h5>{{ project.date }}</h5>
            <h5>{{ project.name }}</h5>
            <h5>{{ project.surname }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <router-link :to="{ name: 'projects.show', params: { show: showId } }">Link</router-link>


        </div>
    </div>
</template>

<style lang="scss"></style>



