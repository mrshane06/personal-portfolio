import { createStore } from 'vuex'

export default createStore({
  state: {
    about:null,
    education:null,
    experience:null,
    skills:null,
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
      state.experience = payload
    },
    setSkills(state,payload){
      state.skills = payload
    },
    setProjects(state,payload){
      state.projects = payload
    },
  },
  actions: {
    async getData({commit}){
      let fetchInfo = await fetch ('https://mrshane06.github.io/personal-json/data/data.json')
      let data = await fetchInfo.json()
      let {about,education,experience,skills ,projects} = data
      commit('setAbout',about)
      commit('setEducation',education)
      commit('setExperience',experience)
      commit('setSkills',skills)
      commit('setProjects',projects)
    }
  },
  modules: {
  }
})
