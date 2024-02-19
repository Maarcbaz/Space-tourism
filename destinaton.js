const destinationArray = [
    {
        "name": "Moon",
        "images": {
            "png": "./assets/destination/image-moon.png",
            "webp": "./assets/destination/image-moon.webp"
        },
        "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    {
        "name": "Mars",
        "images": {
            "png": "./assets/destination/image-mars.png",
            "webp": "./assets/destination/image-mars.webp"
        },
        "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    {
        "name": "Europa",
        "images": {
            "png": "./assets/destination/image-europa.png",
            "webp": "./assets/destination/image-europa.webp"
        },
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    {
        "name": "Titan",
        "images": {
            "png": "./assets/destination/image-titan.png",
            "webp": "./assets/destination/image-titan.webp"
        },
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
]
// NAMED VARIABLES
const destination_header = document.querySelector(".destination_header")
const destination_paragraph = document.querySelector(".destination_paragraph")
const destinationDistance = document.querySelector(".destinationDistance")
const destinationTime = document.querySelector(".destinationTime")
// IMAGES 
const des_webapp = document.querySelector(".des_webapp")
const des_png = document.querySelector(".des_png")
// BUTTONS
const destination_toggle_btn = document.querySelectorAll(".destination_btn button")
const destination_hover_btn = document.querySelectorAll("button")
dest1Func = () => {
    const destArray1 = destinationArray[0]
    function destinationTarget() {
        if (destination_toggle_btn[0].click) {
            destination_hover_btn[0].style.borderBlockEndColor = "inherit"
            destination_hover_btn[1].style.borderBlockEndColor = ""
            destination_hover_btn[2].style.borderBlockEndColor = ""
            destination_hover_btn[3].style.borderBlockEndColor = ""
            destination_toggle_btn[0].classList.add("actibeBtn")
            destination_toggle_btn[1].classList.remove("actibeBtn")
            destination_toggle_btn[2].classList.remove("actibeBtn")
            destination_toggle_btn[3].classList.remove("actibeBtn")
        } else {
            destination_toggle_btn[0].classList.remove("actibeBtn")
        }
    } destinationTarget()
    // NAMED VARIBLES
    destination_header.innerHTML = destArray1.name
    destination_paragraph.innerHTML = destArray1.description
    destinationDistance.innerHTML = destArray1.distance
    destinationTime.innerHTML = destArray1.travel
    // IMAGES
    des_webapp.setAttribute("src", destArray1.images.webp)
    des_webapp.setAttribute("alt", "moon")
    des_png.setAttribute("src", destArray1.images.png)
    des_png.setAttribute("alt", "moon")
}
dest1Func()
dest2Func = () => {
    const destArray2 = destinationArray[1]
    function destinationTarget() {
        if (destination_toggle_btn[1].click) {
            destination_hover_btn[1].style.borderBlockEndColor = "inherit"
            destination_hover_btn[0].style.borderBlockEndColor = ""
            destination_hover_btn[2].style.borderBlockEndColor = ""
            destination_hover_btn[3].style.borderBlockEndColor = ""
            destination_toggle_btn[1].classList.add("actibeBtn")
            destination_toggle_btn[0].classList.remove("actibeBtn")
            destination_toggle_btn[2].classList.remove("actibeBtn")
            destination_toggle_btn[3].classList.remove("actibeBtn")
        } else {
            destination_toggle_btn[1].classList.remove("actibeBtn")
        }
    } destinationTarget()
    // NAMED VARIABLES 
    destination_header.innerHTML = destArray2.name
    destination_paragraph.innerHTML = destArray2.description
    destinationDistance.innerHTML = destArray2.distance
    destinationTime.innerHTML = destArray2.travel
    // IMAGES 
    des_webapp.setAttribute("src", destArray2.images.webp)
    des_webapp.setAttribute("alt", "Mars")
    des_png.setAttribute("src", destArray2.images.png)
    des_png.setAttribute("alt", "Mars")
}

dest3Func = () => {
    const destArray3 = destinationArray[2]
    function destinationTarget() {
        destination_hover_btn[2].style.borderBlockEndColor = "inherit"
        destination_hover_btn[0].style.borderBlockEndColor = ""
        destination_hover_btn[1].style.borderBlockEndColor = ""
        destination_hover_btn[3].style.borderBlockEndColor = ""
        if (destination_toggle_btn[2].click) {
            destination_toggle_btn[2].classList.add("actibeBtn")
            destination_toggle_btn[0].classList.remove("actibeBtn")
            destination_toggle_btn[1].classList.remove("actibeBtn")
            destination_toggle_btn[3].classList.remove("actibeBtn")
        } else {
            destination_toggle_btn[2].classList.remove("actibeBtn")
        }
    } destinationTarget()
    // NAMED VARIABLES
    destination_header.innerHTML = destArray3.name
    destination_paragraph.innerHTML = destArray3.description
    destinationDistance.innerHTML = destArray3.distance
    destinationTime.innerHTML = destArray3.travel
    // IMAGES 
    des_webapp.setAttribute("src", destArray3.images.webp)
    des_webapp.setAttribute("alt", "Europa")
    des_png.setAttribute("src", destArray3.images.png)
    des_png.setAttribute("alt", "Europa")
}
dest4Func = () => {
    const destArray4 = destinationArray[3]
    function destinationTarget() {
        if (destination_toggle_btn[3].click) {
            destination_hover_btn[3].style.borderBlockEndColor = "inherit"
            destination_hover_btn[1].style.borderBlockEndColor = ""
            destination_hover_btn[2].style.borderBlockEndColor = ""
            destination_hover_btn[0].style.borderBlockEndColor = ""
            destination_toggle_btn[3].classList.add("actibeBtn")
            destination_toggle_btn[0].classList.remove("actibeBtn")
            destination_toggle_btn[1].classList.remove("actibeBtn")
            destination_toggle_btn[2].classList.remove("actibeBtn")
        } else {
            destination_toggle_btn[3].classList.remove("actibeBtn")
        }
    } destinationTarget()
    // NAMED VARIBLES
    destination_header.innerHTML = destArray4.name
    destination_paragraph.innerHTML = destArray4.description
    destinationDistance.innerHTML = destArray4.distance
    destinationTime.innerHTML = destArray4.travel
    // IMAGES 
    des_webapp.setAttribute("src", destArray4.images.webp)
    des_webapp.setAttribute("alt", "Titan")
    des_png.setAttribute("src", destArray4.images.png)
    des_png.setAttribute("alt", "Titan")
}