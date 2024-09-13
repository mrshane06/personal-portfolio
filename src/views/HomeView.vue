<template>
    <section>
      <div id="links">
        <p><a href="https://github.com/mrshane06" target="_blank"><img src="https://mrshane06.github.io/vue-portfolio-images/logos/github%20logo.png"  class="git1" ></a></p>
        <p><a href="https://www.linkedin.com/in/keegan-niekerk-bb1278309/" target="_blank"><img src="https://mrshane06.github.io/vue-portfolio-images/logos/linkedin.png"  class="linkedin" ></a></p>
      </div>
      <div id="animate">
        <img src="https://mrshane06.github.io/personal-portfolio-images/logos/Logo2.png" id="logo">
      </div>
        <div>
          <h2>Hello there , my name is <em>Keegan Niekerk:</em></h2>
          <h2>and I am an Aspiring Fullstack Developer.</h2>
          <br>
          <a href="/about"><button>click here to view more</button></a>
        </div>
        <br><br>
        <hr>
    </section>
</template>

<style scoped> 
@keyframes rotate{
  100% {transform: rotate(360deg);}
}
#logo{
  height: 200px;
  width: 200px;
  padding: 26px;
  animation: rotate 5s infinite ease;
}
#links{
  margin-left: 95%;
}
.linkedin{
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
.git1{
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  button{
    background-color: #CEDEDC;
    color: #2c3e50;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  button:hover{
    box-shadow: 1px 1px 1px;
  }
</style>
