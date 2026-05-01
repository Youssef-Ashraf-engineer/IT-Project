 /*Please don't even touch anything in this files:(b.css&c.css&&yy.js) because it's forbidden 
also add your hotel page in:payment.htm as shown inside..Thanks!  */
const select = document.querySelector("#theme-select")

console.log(select)

const applyTheme = (theme) => {
  document.body.className = theme-${theme}
  localStorage.setItem("theme", theme)
}

select.addEventListener("change", (event) => {
  applyTheme(event.target.value)
})

const savedTheme = localStorage.getItem("theme") || "light"

applyTheme(savedTheme)
select.value = savedTheme
