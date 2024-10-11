<template>
    <div>
        <div>
            <h2>Education</h2>
        </div>
        <div class="edu">
            <section  class="ed" v-for="education in educationData()" :key="education">
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
        <div class="expHead">
            <h2>Experiences</h2>
        </div>
        <div class="exp">
            <section v-for="exp in experienceData()" :key="exp">
                <experience-comp>
                    <template #company>
                        <h3>{{exp.company}}</h3>
                    </template>
                    <br>
                    <template #image>
                        <img :src='exp.image' class="eduImg">
                    </template>
                    <br>
                    <template #position>
                        <h4>{{ exp.position }}</h4>
                    </template>
                    <br>
                    <template #years>
                        <h4> years : {{exp.years}}</h4>
                    </template>
                </experience-comp>
            </section>
        </div>
    </div>  
</template>
<script>
import EducationComp from '@/components/EducationComp.vue';
import ExperienceComp from '@/components/ExperienceComp.vue';
export default {
    components:{
        EducationComp,
        ExperienceComp
    },
    methods: {
        educationData(){
            return this.$store.state.education
        },
        experienceData(){
            return this.$store.state.experience
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
    /* education */
    h2{
        margin-top: 40px;
    }
    .eduImg{
        width: 80px;
        height: 80px;
    }
    .ed{
        width: 340px;
        padding-left: 85px;
    }
    .edu{
        display: grid;
        grid-template-columns: repeat(3 ,1fr);
    }
    /* experience */
    .expHead{
        margin-top: 0;
    }
</style>