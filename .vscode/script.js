function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //o comando toggle faz a mesma função dos codigos abaixo

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}

  //Sistema de troca da imagem

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //se tiver light mode, adicionar a img light
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatarjoao-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/joao.jpg")
  }
}

//apenas um teste
