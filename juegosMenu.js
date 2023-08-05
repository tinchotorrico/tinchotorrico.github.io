
const container = document.querySelector(".container-games")




// Crear card desde js 

const createCard = (img,game,content,url)=>{
    // Crear etiquetas HTML
    const card = document.createElement("DIV")
    const image = document.createElement("DIV")
    const title = document.createElement("H3")
    const containerDescription = document.createElement("DIV")
    const description = document.createElement("P")
    const containerLink = document.createElement("DIV")
    const linkGame = document.createElement("a")


    // Crearle clases a los Div
    containerDescription.classList.add("container-p")
    card.classList.add("card-games")
    image.classList.add("card-image")
    containerLink.classList.add("container-link-game")
    linkGame.classList.add("link-game")

    // Añadir contenido 

    image.style.backgroundImage = `url("${img}")`
    title.textContent = game
    description.textContent = content
    linkGame.href = url
    linkGame.setAttribute("target", "_blank");

    // Acomodar elementos para que queden cheto mal

    containerLink.appendChild(linkGame)
    containerDescription.appendChild(description)
    card.appendChild(image)
    card.appendChild(title)
    card.appendChild(containerDescription)
    card.appendChild(containerLink)

    return card
}

const cargarCardsGames = async ()=>{
    const request = await fetch("json/json-card-game.txt")
    const arr = await request.json()
    // console.log(arr);
    const documentFragment = document.createDocumentFragment()

    arr.forEach(objeto =>{
        let generateCard = createCard(objeto.img,objeto.titulo,objeto.descripcion,objeto.link)
        documentFragment.appendChild(generateCard)
    })

    container.appendChild(documentFragment)
}


cargarCardsGames()

