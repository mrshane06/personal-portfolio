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
          <h2>Hello there , my name is Keegan Niekerk: <br><br> and I am an Aspiring Fullstack Developer.</h2>
          <br>
          <a href="/about"><button> View More </button></a>
          <a href="/about"><button> View More </button></a>
        </div>
        <br><br>
        <hr>
    </section>
</template>

<style scoped> 
@keyframes rotate{
  100% {transform: rotate(360deg);}
}
button{
  margin-left: 30px;
  margin-right: 30px;
}
#logo{
  height: 185px;
  width: 185px;
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
    background-color: #ccd8c1;
    color: #2c3e50;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    
  }
  button:hover{
    box-shadow: 1px 1px 1px;
  }

  /* Media Queries */

  /* 840px */
  
  @media only screen and (max-width:840px){
  #logo{
    margin-top: 50px;
  }
  button{
    margin-left: 30px;
    margin-right: 30px;
  }
  #links{
    margin-top: 50px;
    margin-left: 90%;
  }
  #logo{
    height: 325px;
    width: 325px;
    padding: 20px;
    animation: rotate 5s infinite ease;
  }
  h2{
    padding-top: 40px;
  }
  button{
    margin: 30px;
  }
}

  /* 400px */

  @media only screen and (max-width:400px){
  #logo{
    margin-top: 0px;
  }
  button{
    margin-left: 30px;
    margin-right: 30px;
  }
  #links{
    margin-top: 0px;
    margin-left: 85%;
  }
  h2{
    padding-top: 0px;
  }
  #logo{
  height: 200px;
  width: 200px;
  padding: 0px;
  animation: rotate 5s infinite ease;
}
}
</style>
