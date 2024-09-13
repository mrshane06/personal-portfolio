<template>
  <div id="about">
    <h1>A little bit about me:</h1>
  </div>
  <div class="row">
    <section id="colorAbout" v-for="about in aboutData()" :key="about">
          <div class="row">    
            <div class="col-md-6 col-sm-12">
              <about-comp>
                  <template #about>
                    <img :src='about.me' id="me">
                  </template>
              </about-comp>
              </div>
              <div class="col-md-6 col-sm-12">
              <about-comp>
                  <template #about>
                    <h4 class="aboutText">{{about.about}}</h4>
                  </template>
              </about-comp>
            </div>
          </div>
    </section>
  </div>
</template>
<script>
import AboutComp from '@/components/AboutComp.vue';
export default {
  components:{
    AboutComp,
  },
  methods:{
        aboutData(){
            return this.$store.state.about
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
  #about{
    padding: 10px;
  }
  #me{
    width: 240px;
    height: 300px;
  }
  .aboutText{
  width: 400px;
  padding: 25px;
  place-items: center;
  margin: auto;
  }
</style>
