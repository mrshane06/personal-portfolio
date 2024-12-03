import { createStore } from 'vuex'

export default createStore({
  state: {
    about:null,
    education:null,
    experiences:null,
    skills:null,
    softSkills:null,
    achievements:null,
    projects:null,
  },
  getters: {
  },
  mutations: {
    setAbout(state,payload){
      state.about = payload
    },
    setEducation(state,payload){
      state.education = payload
    },
    setExperience(state,payload){
      state.experiences = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setSoftSkills(state,payload){
      state.softSkills = payload
    },
    setAchievements(state,payload){
      state.achievements = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
  },
  actions: {
    async getData({commit}){
      let fetchInfo = await fetch ('https://mrshane06.github.io/personal-json/data/data.json')
      let data = await fetchInfo.json()
      let {about,education,experiences,skills,softSkills,achievements,projects} = data
      commit('setAbout',about)
      commit('setEducation',education)
      commit('setExperience',experiences)
      commit('setSkills',skills)
      commit('setSoftSkills',softSkills)
      commit('setAchievements',achievements)
      commit('setProjects',projects)
    }
  },
  modules: {
  }
})
