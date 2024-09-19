<template>
    <div>
        <section id="proj-card" v-for="projects in projectsData()" :key="projects">
            <projects-comp>
                <div class="card" style="width: 18rem;">
                    <template >
                        <img :src="projects.Pimage" class="card-img-top" alt="">
                    </template>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </projects-comp>
        </section>
    </div>
</template>
<script>
import ProjectsComp from '@/components/ProjectsComp.vue';
export default {
    components:{
        ProjectsComp
    },
    methods: {
        projectsData(){
            return this.$store.state.projects
        },
    },
    computed:{
        getData(){
            return this.$store.dispatch ('getData')
        }
    },
    mounted(){
        this.getData
    }

}
</script>
<style>
    
</style>