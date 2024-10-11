<template>
    <div>
        <h1>Education</h1>
        <section  class="edu" v-for="education in educationData()" :key="education">
            <education-comp>
                <template #education>
               <h3>{{education.education}}</h3>
              </template>
              <br>
              <template #image>
                <img :src='education.image' class="eduImg">
              </template>
              <br>
              <template #eduDesc>
                <h4>{{ education.eduDesc }}</h4>
              </template>
              <br>
              <template #years>
                <h4> years : {{education.years}}</h4>
              </template>
            </education-comp>
        </section>
    </div>  
</template>
<script>
import EducationComp from '@/components/EducationComp.vue';
export default {
    components:{
        EducationComp
    },
    methods: {
        educationData(){
            return this.$store.state.education
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
    h1{
        width: 100px;
        padding-left: 160px;
    }
    .eduImg{
        width: 80px;
        height: 80px;
    }
    .edu{
        width: 300px;
        padding-left: 80px;
    }
</style>