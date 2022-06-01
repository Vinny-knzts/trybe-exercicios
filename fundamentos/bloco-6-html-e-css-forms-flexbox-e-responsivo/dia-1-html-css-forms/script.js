const button = document.querySelector('button')

function def(evento) {
  evento.preventDefault()
}

button.addEventListener('click', def)
