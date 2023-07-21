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
            <h5>{{ project.name }} {{ project.surname }}</h5>

            <!-- Assuming ArrTechnology and ArrType are arrays of objects -->
            <div v-for="technology in ArrTechnology" :key="technology.technology">
                <h5>{{ technology.technology }}</h5>
            </div>

            <div v-for="(type, index) in ArrType" :key="index">
                <h5>{{ type.type }}</h5>
                <h5>{{ type.collabs }}</h5>
            </div>


            <p class="card-text">{{ project.description }}</p>
            <router-link :to="{ name: 'projects.show', params: { project_id: project.id } }"
                class="btn btn-primary mt-auto">View</router-link>
        </div>
    </div>
</template>
  

<style lang="scss"></style>



