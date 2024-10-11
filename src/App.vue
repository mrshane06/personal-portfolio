<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Education">Education and Experience</router-link> |
    <router-link to="/Projects">Projects</router-link> |
    <router-link to="/Contacts">Contact Page</router-link> 
  </nav>
  <router-view/>
  <div>
      <Footer-comp>

      </Footer-comp>
  </div>
</template>
<script>
import FooterComp from './components/FooterComp.vue'
export default{
  components:{
    FooterComp
  }
}
</script>
<style>
body{
  background-color: #b3cf99;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: #2c3e50;
  text-align: center;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}

nav {
  text-align: right;
  padding: 30px;
  background-color: #CEDECD;
  box-shadow: 7px 7px 7px;
}

nav a { 
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
