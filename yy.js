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