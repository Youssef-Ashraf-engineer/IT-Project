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
        body.style.transition='2s'
        localStorage.setItem("theme", "light")
        color_check()
    } else{
        body.style.background='black'
        body.style.color='white'
        body.style.transition='2s'
        localStorage.setItem("theme", "dark")
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
        body.style.transition='0s'

    }
    color_check()
})
function color_check(){
console.log(localStorage.getItem("theme"))
    if(localStorage.getItem("theme")=="light"){
        document.documentElement.style.setProperty('--c1', '#ffffff');
        document.documentElement.style.setProperty('--c2', '#a8dadc');
        document.documentElement.style.setProperty('--c3', '#f1faee');
        document.documentElement.style.setProperty('--c4', '#457b9d');
        document.documentElement.style.setProperty('--c5', '#ffE066');
        document.documentElement.style.setProperty('--c6', 'red');
        document.documentElement.style.setProperty('--c7', 'red');
        document.documentElement.style.setProperty('--c8', 'red');
    }
    else if(localStorage.getItem("theme")=="dark"){
        document.documentElement.style.setProperty('--c1', '#121212');
        document.documentElement.style.setProperty('--c2', '#3a86ff');
        document.documentElement.style.setProperty('--c3', '#e0e0e0');
        document.documentElement.style.setProperty('--c4', '#1f2a44');
        document.documentElement.style.setProperty('--c5', '#c9a14a');
        document.documentElement.style.setProperty('--c6', 'black');
        document.documentElement.style.setProperty('--c7', 'black');
        document.documentElement.style.setProperty('--c8', 'black');
}
else{
    console.log("bla")
}
}