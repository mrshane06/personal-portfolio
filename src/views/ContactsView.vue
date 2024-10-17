<template>
    <div>
        <div class="contact-head">
            <h2>Lets Get In Touch</h2>
        </div>
        <div id="whoop">
            <div class="links">
                <img src="https://mrshane06.github.io/personal-portfolio-images/logos/Logo2.png" id="logo">
                <p><img src="https://mrshane06.github.io/personal-portfolio-images/logos/gmail_icon.png" id="gmail">niekerkkeegan007@gmail.com</p>
                <p><img src="https://mrshane06.github.io/personal-portfolio-images/logos/location_icon.png" id="location">Bonteheuwel , Cape Town</p>
                <p><img src="https://mrshane06.github.io/personal-portfolio-images/logos/phone_icon.png" id="phone">081 421 4195</p>
                <p><img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png" id="git"><a href="https://github.com/mrshane06" target="_blank" class="git">mrshane06</a></p>
            </div>
            <section id="bam">
                <div class="col-lg-8 mt-5 mt-lg-0 mt-md-0 mt-sm-0">
                    <form
                    action="https://formspree.io/f/xanwkokp"
                    method="POST"
                    >
                    <div class="row">
                        <div class="col-md-6 form-group">
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" class="form-control" name="email" id="surname" placeholder="Your Email" required>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <textarea class="form-control" name="comments" rows="5" placeholder="Comments" required></textarea>
                    </div>
                    <div class="text-center mt-4 send"><button id="sub" type="submit">Submit</button></div>
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
/* head */
#whoop{
    display: flex;
}
.contact-head{
    width: 260px;
    padding-top: 30px;
}
@keyframes rotate{
  100% {transform: rotate(360deg);}
}
#logo{
  height: 80px;
  width: 80px;
  padding: 26px;
  animation: rotate 5s infinite ease;
}
/* links */
.links{
    border: 2px solid black;
    height: 300px;
    margin-left: 60px;
    margin-top: 50px;
    padding: 10px;
}
#gmail{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
#location{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
#git{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
#phone{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.git{
    text-decoration: none;
}
/* contacts */
#bam{
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    display: flex;
    justify-content: center;
    padding: 48px;
}
#sub{
    width: 70px;
    margin-top: 10px;
    height: 30px;
    border-radius: 60px;
    color: rgb(91, 85, 85);
    margin-left: 80px;
}
input{
  background-color: white;
  border:rgb(77, 73, 73) 2px solid;
  width: 600px;
  height: 30px;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  margin-left: 110px;
}
textarea{
  background-color: white;
  border: rgb(77, 73, 73) 2px solid;
  width: 605px;
  height: 200px;
  margin-left: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
}
button{
  background-color: white;
  border: rgb(77, 73, 73) 2px solid;
}

    /* media queries */

    /* 840px */

@media only screen and (max-width:840px){
  .contact-head{
    padding-top: 40px;
    padding-bottom: 40px;
    width: 400px;
  }
  #whoop{
    display: block;
  }
    /* links */
  .links{
    border: 2px solid black;
    height: 300px;
    margin-left: 100px;
    margin-right: 110px;
    margin-top: 0px;
    padding: 0px;
  }
    input{
        width: 600px;
        margin-top: 10px;
        margin-left: 0px;
        padding: 5px;
        margin-left: 0px;
    }
    textarea{
        width: 605px;
        height: 180px;
        margin-left: 0px;
        margin-right: 5px;
    }
    #sub{
        margin-left: 0px;
    }
}

    /* 400px */

@media only screen and (max-width:400px){
  .contact-head{
    padding: 50px;
    width: 400px;
  }
  #whoop{
    display: block;
  }
  .contact-head{
    width: 260px;
    padding-top: 30px;
  }
    /* links */
  .links{
    border: 2px solid black;
    height: 300px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 0px;
    padding: 0px;
  }
    input{
        width: 295px;
        margin-top: 10px;
        margin-left: 0px;
        padding: 5px;
        margin-left: 0px;
    }
    textarea{
        width: 300px;
        height: 200px;
        margin-left: 0px;
        margin-right: 5px;
    }
    #sub{
        margin-left: 0px;
    }
}
</style>