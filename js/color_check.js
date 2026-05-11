function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active")
  }
  document.addEventListener('click', function(event) {
  const nav = document.querySelector('.nav-links');
  const toggle = document.querySelector('.menu-toggle');

  if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      nav.classList.remove('active');
  }
});
const toggle=document.getElementById('toggoldark')
const body=document.querySelector('body')

toggle.addEventListener('click',function() {
    this.classList.toggle('bi-moon')
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background='white'
        body.style.color='black'
        body.style.transition='0.8s'
        localStorage.setItem("theme", "light")
        // document.querySelector(".hero").style.backgroundImage="url('../images/hero_image.jpg')"
        color_check()
    } else{
        body.style.background='black'
        body.style.color='white'
        body.style.transition='0.8s'
        localStorage.setItem("theme", "dark")
        // document.querySelector(".hero").style.backgroundImage="url('../images/hero_image_d.jpg')"
        color_check()
    }
})


window.addEventListener("load",function ()  {
    if(localStorage.getItem("theme")=="dark"){
        console.log(localStorage.getItem("theme"))
        document.getElementById('toggoldark').classList.toggle('bi-moon')
        document.getElementById('toggoldark').classList.toggle('bi-brightness-high-fill')
        body.style.background='black'
        body.style.color='white'
        body.style.transition='0.8s'
        // document.querySelector(".hero").style.backgroundImage="url('../images/hero_image_d.jpg')"
        
    }
    else{
        // document.getElementById('toggoldark').classList.toggle('bi-moon')
        // document.getElementById('toggoldark').classList.toggle('bi-brightness-high-fill')
        body.style.background='white'
        body.style.color='black'
        body.style.transition='0.8s'
    }

    color_check()
})
function color_check(){
console.log(localStorage.getItem("theme"))
    if(localStorage.getItem("theme")=="light" || localStorage.getItem("theme")!="dark"){
        document.documentElement.style.setProperty('--c1', '#ffffff');
        document.documentElement.style.setProperty('--c2', '#a8dadc');
        document.documentElement.style.setProperty('--c3', '#f1faee');
        document.documentElement.style.setProperty('--c4', '#457b9d');
        document.documentElement.style.setProperty('--c5', '#ffE066');
        document.documentElement.style.setProperty('--c6', 'red');
        document.documentElement.style.setProperty('--c7', 'red');
        document.documentElement.style.setProperty('--c8', '#121212');
        document.documentElement.style.setProperty('--m1', '#FFFFFF');
        document.documentElement.style.setProperty('--u1', '#759bb1');
        document.documentElement.style.setProperty('--m3', 'red');
        document.documentElement.style.setProperty('--m4', 'red');
        document.documentElement.style.setProperty('--y1', '#FFFFFF');
        document.documentElement.style.setProperty('--y2', '#F1FAEE');
        document.documentElement.style.setProperty('--y3', '#1d3557');
        document.documentElement.style.setProperty('--y4', '#A8DADC');
        document.documentElement.style.setProperty('--y5', '#1d3557');
        document.documentElement.style.setProperty('--y6', '#457B9D');
        document.documentElement.style.setProperty('--y7', '#1d3557');
        document.documentElement.style.setProperty('--y8', '#386480');
        document.documentElement.style.setProperty('--y9', '#2c4e63');
    }
    else if(localStorage.getItem("theme")=="dark"){
        document.documentElement.style.setProperty('--c1', '#121212');
        document.documentElement.style.setProperty('--c2', '#3a86ff');
        document.documentElement.style.setProperty('--c3', '#e0e0e0');
        document.documentElement.style.setProperty('--c4', '#1f2a44');
        document.documentElement.style.setProperty('--c5', '#c9a14a');
        document.documentElement.style.setProperty('--c6', 'black');
        document.documentElement.style.setProperty('--c7', 'black');
        document.documentElement.style.setProperty('--c8', '#ffffff');
        document.documentElement.style.setProperty('--m1', '#1e1e1ea8');
        document.documentElement.style.setProperty('--u1', '#e0e0e0');
        document.documentElement.style.setProperty('--m3', 'red');
        document.documentElement.style.setProperty('--m4', 'red');
        document.documentElement.style.setProperty('--y1', '#121212');
        document.documentElement.style.setProperty('--y2', '#cfcfcf');
        document.documentElement.style.setProperty('--y3', '#C9A14A');
        document.documentElement.style.setProperty('--y4', '#3A86FF');
        document.documentElement.style.setProperty('--y5', '#FFFFFF');
        document.documentElement.style.setProperty('--y6', '#256e9b');
        document.documentElement.style.setProperty('--y7', '#1F2A44');
        document.documentElement.style.setProperty('--y8', '#b18e42');
        document.documentElement.style.setProperty('--y9', '#967838');
}
else{
    console.log("bla")
}
}
const loggedIn = JSON.parse(sessionStorage.getItem("loggedInUser"));
document
if(!loggedIn){
    document.querySelector(".fa-user").style.display="none"
    document.querySelector(".profilebtn").style.display="none"
}
else{
document.querySelectorAll(".loginbtn, .regbtn").forEach(el => {
    el.style.display = "none";
})
}