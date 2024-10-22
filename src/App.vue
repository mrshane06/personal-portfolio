<template>
  <div>
    <div>
        <navbar-comp>

        </navbar-comp>
    </div>
    <router-view/>
    <div>
        <Footer-comp>

        </Footer-comp>
    </div>
  </div>
</template>
<script>
import FooterComp from './components/FooterComp.vue'
import NavbarComp from './components/NavbarComp.vue';
export default{
  components:{
    FooterComp,
    NavbarComp
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
  text-align: right;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
