<template>
  <div class="about">
    <div class="top">
      <div id="about">
  </div>
  <div id="about_info">
      <div>
        <h1>A little bit about me:</h1>
    <section v-for="about in aboutData()" :key="about">
              <about-comp>
                  <template #about>
                    <img :src='about.me' id="me">
                  </template>
              </about-comp>
              <about-comp>
                  <template #about>
                    <h4 class="aboutText">{{about.about}}</h4>
                  </template>
              </about-comp>
    </section>
  </div>
  <div class="meep">
    <div>
    <h1 class="whoop">Technical and Soft Skills</h1>
    </div>
    <div class="bottom">
      <section v-for="skills in skillsData()" :key="skills">
              <skills-comp>
                  <template #img>
                    <img :src='skills.img' id="skill">
                  </template>
                  <template #skill>
                    <h4 class="skillText">{{skills.skill}}</h4>
                  </template>
              </skills-comp>
    </section>
  </div>
  </div>
  </div>
    </div>
  </div>
</template>
<script>
import AboutComp from '@/components/AboutComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
export default {
  components:{
    AboutComp,
    SkillsComp
  },
  methods:{
        aboutData(){
            return this.$store.state.about
        },
        skillsData(){
            return this.$store.state.skills
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
<style scoped>
  /* all */
  .about{
    display: flex;
  }
  #about_info{
    display: flex;
  }
  /* about */
  #about{
    padding: 10px;
  }
  #me{
    width: 240px;
    height: 300px;
    margin-left: 30px;
  }
  .aboutText{
  width: 330px;
  padding: 25px;
  font-size: 16px;
  place-items: center;
  margin: auto;
  margin-left: 30px;
  }
  /* skills */
  .whoop{
    margin-top: 30px;
    left: 100px;
    display: flex;
    justify-content: center;
  }
  .bottom{
    margin-top: 80px;
    display: grid;
    width: 1000px;
    margin-left: 80px;
    grid-template-columns: repeat(7 ,1fr);
  }
  #skill{
    border-radius: 30px;
    width: 105px;
    height: 100px;
  }
  /* .meep{
    box-shadow:-2px 0px;
  } */
</style>
