<template>
  <div id="about_info">
      <div>
        <h2 class="aboutHead">A little bit about me:</h2>
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
          <h2 class="whoop">Technical Skills</h2>
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
        <div>
            <h2 class="whoop1">Soft Skills</h2>
          </div>
          <div class="bottom2">
            <section v-for="soft in softSkillsData()" :key="soft">
              <soft-skills-comp>
                <template #softImg>
                  <img :src='soft.softImg' id="skill">
                </template>
                <template #soft>
                  <h4 class="skillText">{{soft.soft}}</h4> 
                </template>
              </soft-skills-comp>
            </section>
          </div>
      </div>
  </div>
</template>
<script>
import AboutComp from '@/components/AboutComp.vue';
import SkillsComp from '@/components/SkillsComp.vue';
import SoftSkillsComp from '@/components/SoftSkillsComp.vue';
export default {
  components:{
    AboutComp,
    SkillsComp,
    SoftSkillsComp
  },
  methods:{
        aboutData(){
            return this.$store.state.about
        },
        skillsData(){
            return this.$store.state.skills
        },
        softSkillsData(){
            return this.$store.state.softSkills
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
  #about_info{
    display: flex;
  }
  /* about */
  .aboutHead{
    padding-left: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  #me{
    width: 240px;
    height: 300px;
    margin-left: 30px;
  }
  .aboutText{
  width: 330px;
  padding: 17px;
  font-size: 14px;
  place-items: center;
  margin: auto;
  margin-left: 30px;
  }
  /* skills */
  .whoop{
    padding-top: 30px;
  }
  .bottom{
    margin-top: 35px;
    display: grid;
    width: 1000px;
    margin-left: 80px;
    grid-template-columns: repeat(7 ,1fr);
  }
  .bottom2{
    margin-top: 35px;
    display: grid;
    width: 1000px;
    margin-left: 150px;
    grid-template-columns: repeat(6 ,1fr);
  }
  #skill{
    border-radius: 20px;
    width: 105px;
    height:100px;
    transition: 1s;
  }

  #skill:hover{
    transform: rotate(10deg);
}

  /* media queries */


  /* 840px */

  @media only screen and (max-width:840px){
  #about_info{
    display: block;
  }
  /* about */
  .aboutHead{
    padding: 15px;
  }
  #me{
    margin-left: 0px;
  }
  .aboutText{
    width: 450px;
    padding: 17px;
    font-size: 18px;
    place-items: center;
    margin: auto;
    margin-left: 165px;
  }
  /* skills */
  .whoop{
    padding-top: 0px;
  }
  .bottom{
    margin-top: 35px;
    display: grid;
    width: 800px;
    margin-left: 20px;
    grid-template-columns: repeat(5 ,1fr);
  }
  .bottom2{
    margin-top: 35px;
    display: grid;
    width:800px;
    margin-left: 20px;
    grid-template-columns: repeat(5 ,1fr);
  }
}

  /* 400px */

@media only screen and (max-width:400px){
  #about_info{
    display: block;
  }
  /* about */
  .aboutHead{
    padding-left: 0px;
  }
  #me{
    margin-left: 0px;
  }
  .aboutText{
    width: 330px;
    padding: 17px;
    font-size: 14px;
    place-items: center;
    margin: auto;
    margin-left: 5px;
  }
  /* skills */
  .whoop{
    padding-top: 0px;
  }
  .bottom{
    margin-top: 35px;
    display: grid;
    width: 300px;
    margin-left: 35px;
    grid-template-columns: repeat(2 ,1fr);
  }
  .bottom2{
    margin-top: 35px;
    display: grid;
    width: 300px;
    margin-left: 35px;
    grid-template-columns: repeat(2 ,1fr);
  }
}

/* 360px */

@media only screen and (max-width:360px){
  /* about */
  .aboutText{
    width: 300px;
  }
  /* skills */
  .whoop{
    padding-top: 0px;
  }
  .bottom{
    margin-left: 20px;
  }
  .bottom2{
    margin-left: 25px;
  }
}

/* 320px */

@media only screen and (max-width:320px){
  /* about */
  .aboutText{
    width: 280px;
    margin-left: 0px;
  }
  /* skills */
  .bottom{
    margin-left: 5px;
  }
  .bottom2{
    margin-left: 5px;
  }
}
</style>
