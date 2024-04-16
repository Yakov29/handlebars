import people from "../templates/data.json" 
import data from "../templates/layout.hbs"
const container = document.querySelector(".container")
function pasteData () {
    container.innerHTML = data({people})
}

pasteData()