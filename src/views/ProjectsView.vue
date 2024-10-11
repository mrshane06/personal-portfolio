<template>
  <div>
    <div>
        <h2 class="projectsHead">Previous Projects</h2>
    </div>
    <div class="projects">
        <section id="proj-card" v-for="projects in projectsData()" :key="projects">
            <projects-comp>
            <template #Pimage>
                <img :src="projects.Pimage" class="project-image" >
            </template>
            <template #Pname>
                <h3 class="project-title">{{ projects.Pname }}</h3>
            </template>
            <template #description>
                <h5 class="project-text">{{ projects.description }}</h5>
            </template>
            <template #github>
                <button class="project-btn1"><a :href="projects.github" target="_blank">Github</a></button>
            </template>
            <template #live>
                <button class="project-btn2"><a :href="projects.live" target="_blank">Hosted</a></button>
            </template>
            </projects-comp>
      </section>
    </div>
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
.projectsHead{
  padding: 10px;
}

.projects{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  text-decoration: none;
}

#proj-card{
  background-color: white;
  box-shadow: black 5px 5px 5px , -1px -1px 2px;
  width: 18rem; 
  height: 26rem;
  margin-bottom: 50px;
  margin-left: 100px;
  border-radius: 10px;
}

.project-image{
  width: 288px;
  height: 230px;
}

.project-btn1{
  padding: 10px;
  border-radius: 50px;
  background-color: #ccd8c1;
  margin-right: 15px;
}

.project-btn1 a{
  text-decoration:none;
  color: #2c3e50;
}

.project-btn2{
  padding: 10px;
  border-radius: 50px;
  background-color: #ccd8c1;
  margin-left: 15px;
}

.project-btn2 a{
  text-decoration: none;
  color: #2c3e50;
}

@media only screen and (max-width:400px){
  .projects{
    display:grid;
    grid-template-columns:repeat(1,1fr);
    text-decoration: none;
    place-content: center;
    margin-right: 100px;
  }

  #proj-card{
  background-color: white;
  box-shadow: black 5px 5px 5px , -1px -1px 2px;
  width: 16rem; 
  height: 26rem;
  margin-bottom: 50px;
  margin-left: 100px;
  border-radius: 10px;
}

.project-image{
  width: 240px;
  height: 200px;
  padding-top: 10px;
}

.project-btn1{
  padding: 10px;
  border-radius: 50px;
  background-color: #ccd8c1;
  margin-right: 15px;
}

.project-btn1 a{
  text-decoration:none;
  color: #2c3e50;
}

.project-btn2{
  padding: 10px;
  border-radius: 50px;
  background-color: #ccd8c1;
  margin-left: 15px;
}

.project-btn2 a{
  text-decoration: none;
  color: #2c3e50;
}
}

</style>