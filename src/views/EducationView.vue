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
                        <h4>{{education.years}}</h4>
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
                    <template #jobDes>
                        <h4>{{ exp.jobDes }}</h4>
                    </template>
                    <br>
                    <template #years>
                        <h4> {{exp.years}}</h4>
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
            return this.$store.state.experiences
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
        border-radius: 20px;
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
    .exp{
        width: 340px;
        padding-left: 85px;
        margin-left: 495px;
    }
    /* media queries */

    /* 840px */

    @media only screen and (max-width:840px){
    /* education */
    .ed{
        padding-left: 18px;
    }
    .edu{
        display: grid;
        grid-template-columns: repeat(2 ,1fr);
    }
    /* experience */
    .exp{
        margin-left: 150px;
    }
}

    /* 400px */

    @media only screen and (max-width:400px){
    /* education */
    h2{
        margin-top: 35px;
    }
    .ed{
        width: 340px;
        padding-left: 18px;
    }
    .edu{
        display: grid;
        grid-template-columns: repeat(1 ,1fr);
    }
    /* experience */
    .expHead{
        margin-top: 0;
    }
    .exp{
        width: 340px;
        padding-left: 0px;
        margin-left: 18px;
    }
}

    /* 360px */

    @media only screen and (max-width:360px){
    .ed{
        padding-left: 0px;
    }
    /* experience */
    .exp{
        margin-left: 0px;
    }
}

    /* 320px */

    @media only screen and (max-width:320px){
    /* education */
    .ed{
        width: 300px;
    }
    /* experience */
    .exp{
        width: 300px;
    }
}
</style>