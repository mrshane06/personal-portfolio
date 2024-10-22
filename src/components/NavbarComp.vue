<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <button
          class="navbar-burger"
          @click="toggleMenu"
          :class="{ 'is-active': isMenuActive }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
  
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/Education">Education & Experience</router-link> |
            <router-link to="/Projects">Projects</router-link> |
            <router-link to="/Contacts">Contact Page</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'NavbarComp',
    setup() {
      const isMenuActive = ref(false);
  
      const toggleMenu = () => {
        isMenuActive.value = !isMenuActive.value;
      };
  
      return {
        isMenuActive,
        toggleMenu,
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #CEDECD;
    text-align: right;
    padding: 30px;
  }
  
  .navbar-item {
    color: #2c3e50;
    padding: 10px;
  }
  
  .navbar-burger {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  
  .navbar-burger span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background: rgb(0, 0, 0);
  }
  
  .navbar-menu {
    display: none;
  }
  
  .navbar-menu.is-active {
    display: flex;
    flex-direction:column;
  }
  
  @media (min-width: 768px) {
    .navbar-menu {
      display: flex !important;
    }
    .navbar-burger {
      display: none;
    }
  }
  </style>
  