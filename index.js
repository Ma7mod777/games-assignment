import { Home } from "./home.js";
import { game } from "./apis.js";
let x = "shooter"
var gamesContainer = document.getElementById("gamesContainer")
var gamedetails = document.getElementById("gamedetails");
var closeicon = document.getElementById("closeicon");
var detailsparent = document.getElementById("detailsparent")

var mmorpg = document.getElementById("mmorpg");
var shooter = document.getElementById("shooter");
var sailing = document.getElementById("sailing");
var permadeath = document.getElementById("permadeath");
var superhero = document.getElementById("superhero");
var pixel = document.getElementById("pixel");

mmorpg.addEventListener("click", () => {

    shooter.classList.remove("activeclick")
    sailing.classList.remove("activeclick")
    permadeath.classList.remove("activeclick")
    superhero.classList.remove("activeclick")
    pixel.classList.remove("activeclick")
    mmorpg.classList.add("activeclick")

})
shooter.addEventListener("click", () => {

    shooter.classList.add("activeclick")
    sailing.classList.remove("activeclick")
    permadeath.classList.remove("activeclick")
    superhero.classList.remove("activeclick")
    pixel.classList.remove("activeclick")
    mmorpg.classList.remove("activeclick")

})
sailing.addEventListener("click", () => {

    shooter.classList.remove("activeclick")
    sailing.classList.add("activeclick")
    permadeath.classList.remove("activeclick")
    superhero.classList.remove("activeclick")
    pixel.classList.remove("activeclick")
    mmorpg.classList.remove("activeclick")

})
permadeath.addEventListener("click", () => {

    shooter.classList.remove("activeclick")
    sailing.classList.remove("activeclick")
    permadeath.classList.add("activeclick")
    superhero.classList.remove("activeclick")
    pixel.classList.remove("activeclick")
    mmorpg.classList.remove("activeclick")

})
superhero.addEventListener("click", () => {

    shooter.classList.remove("activeclick")
    sailing.classList.remove("activeclick")
    permadeath.classList.remove("activeclick")
    superhero.classList.add("activeclick")
    pixel.classList.remove("activeclick")
    mmorpg.classList.remove("activeclick")

})
pixel.addEventListener("click", () => {

    shooter.classList.remove("activeclick")
    sailing.classList.remove("activeclick")
    permadeath.classList.remove("activeclick")
    superhero.classList.remove("activeclick")
    pixel.classList.add("activeclick")
    mmorpg.classList.remove("activeclick")

})




gamesContainer.innerHTML = `<div class="loader mx-auto"></div>`

let b = new Home(x);
b.getData();
b.displayData()

var alllinks = Array.from(document.querySelectorAll("li"))

alllinks.forEach((link) => link.addEventListener("click", (e) => {
    x = e.target.innerHTML;

    gamesContainer.innerHTML = `<div class="loader mx-auto"></div>`
    let y = new Home(x)
    y.getData()
    y.displayData()


}))





gamesContainer.addEventListener("click", (e) => {

    if (e.target.id != "gamesContainer") {

        gamedetails.classList.remove("d-none");
        gamesContainer.classList.add("d-none")
        detailsparent.innerHTML = `<div class="loader mx-auto mt-5"></div>`

        let v = new game(e.target.id)

        v.gameDetails()
        v.displaydetails()

    }

})


closeicon.addEventListener("click", () => {

    gamedetails.classList.add("d-none")
    gamesContainer.classList.remove("d-none")


})

