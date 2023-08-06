let list = document.querySelectorAll('.nav li')
let menuToggle = document.querySelector('.menuToggle')
let header = document.querySelector('header')

function active() {
  list.forEach(i => i.classList.remove('active'))
  this.classList.add('active')
}

list.forEach(i => i.addEventListener('click', active))

menuToggle.onclick = function () {
  header.classList.toggle('active')
}
