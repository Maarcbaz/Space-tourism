const crewAray = [
    {
        "name": "Douglas Hurley",
        "images": {
            "png": "./assets/crew/image-douglas-hurley.png",
            "webp": "./assets/crew/image-douglas-hurley.webp"
        },
        "role": "Commander",
        "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
        "name": "Mark Shuttleworth",
        "images": {
            "png": "./assets/crew/image-mark-shuttleworth.png",
            "webp": "./assets/crew/image-mark-shuttleworth.webp"
        },
        "role": "Mission Specialist",
        "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
        "name": "Victor Glover",
        "images": {
            "png": "./assets/crew/image-victor-glover.png",
            "webp": "./assets/crew/image-victor-glover.webp"
        },
        "role": "Pilot",
        "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
        "name": "Anousheh Ansari",
        "images": {
            "png": "./assets/crew/image-anousheh-ansari.png",
            "webp": "./assets/crew/image-anousheh-ansari.webp"
        },
        "role": "Flight Engineer",
        "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
]
// VARIABLE COONTENT 
const crew_contents_header = document.querySelector(".crew_contents_header")
const crew_contents_name = document.querySelector(".crew_contents_name")
const crew_contents_paragraph = document.querySelector(".crew_contents_paragraph")
// IMAGE CONTENT
const crewImg_desktop = document.querySelector(".crewImg_desktop")
const crewImg_mobile = document.querySelector(".crewImg_mobile")
const button = document.querySelector(".ativeBtn")
const crew_toggle__btns = document.querySelectorAll(".crew_toggle__btn button")
crew_toggle__btns.forEach(crew_toggle__btn => {
    crew_toggle__btn.currentTarget += ".ativeBtn"
})
console.log(crew_toggle__btns[1]);
// CREW DEFAULT 
crew1Func = () => {
    const crewDefault = crewAray[0]
    function crewTarget() {
        if (crew_toggle__btns[0].click) {
            crew_toggle__btns[0].classList.add("ativeBtn")
            crew_toggle__btns[1].classList.remove("ativeBtn")
            crew_toggle__btns[2].classList.remove("ativeBtn")
            crew_toggle__btns[3].classList.remove("ativeBtn")
        } else {
            crew_toggle__btns[0].classList.remove("ativeBtn")

        }
    } crewTarget()
    // NAMED VARIABLES
    crew_contents_header.innerHTML = crewDefault.role
    crew_contents_name.innerHTML = crewDefault.name
    crew_contents_paragraph.innerHTML = crewDefault.bio
    // IMAGES 
    crewImg_desktop.setAttribute("src", crewDefault.images.png)
    crewImg_desktop.setAttribute("alt", "Douglas Hurley")
    crewImg_mobile.setAttribute("src", crewDefault.images.webp)
    crewImg_mobile.setAttribute("alt", "Douglas Hurley")
}
crew1Func()
// crew2Func()
crew2Func = () => {
    const crewAray2 = crewAray[1]
    function crew2Target() {
        if (crew_toggle__btns[1].click) {
            crew_toggle__btns[1].classList.add("ativeBtn")
            crew_toggle__btns[0].classList.remove("ativeBtn")
            crew_toggle__btns[2].classList.remove("ativeBtn")
            crew_toggle__btns[3].classList.remove("ativeBtn")
        } else {
            crew_toggle__btns[1].classList.remove("ativeBtn")
        }
    }
    crew2Target()
    // crew_toggle__btns[1].classList.add("ativeBtn")
    // NAMED VARIABLES 
    crew_contents_header.innerHTML = crewAray2.role
    crew_contents_name.innerHTML = crewAray2.name
    crew_contents_paragraph.innerHTML = crewAray2.bio
    // IMAGES 
    crewImg_desktop.setAttribute('src', crewAray2.images.png)
    crewImg_desktop.setAttribute("alt", "Mark Shuttleworth")
    crewImg_mobile.setAttribute('src', crewAray2.images.webp)
    crewImg_mobile.setAttribute("alt", "Mark Shuttleworth")
}
// CREW3FUNC 
crew3Func = () => {
    const crewAray3 = crewAray[2]
    crew_toggle__btns[2].classList.add("ativeBtn")
    function crewTarget3() {
        if (crew_toggle__btns[2].click) {
            crew_toggle__btns[2].classList.add("ativeBtn")
            crew_toggle__btns[0].classList.remove("ativeBtn")
            crew_toggle__btns[1].classList.remove("ativeBtn")
            crew_toggle__btns[3].classList.remove("ativeBtn")
        } else {
            crew_toggle__btns[2].classList.remove("ativeBtn")
        }
    } crewTarget3()
    // NAMED VARIABLES 
    crew_contents_header.innerHTML = crewAray3.role
    crew_contents_name.innerHTML = crewAray3.name
    crew_contents_paragraph.innerHTML = crewAray3.bio
    // IMAGES 
    crewImg_desktop.setAttribute("src", crewAray3.images.png)
    crewImg_desktop.setAttribute("alt", "Victor Glover")
    crewImg_mobile.setAttribute("src", crewAray3.images.webp)
    crewImg_mobile.setAttribute("alt", "Victor Glover")
}
crew4Func = () => {
    const crewAray4 = crewAray[3]
    function crewTarget4() {
        if (crew_toggle__btns[3].click) {
            crew_toggle__btns[3].classList.add("ativeBtn")
            crew_toggle__btns[0].classList.remove("ativeBtn")
            crew_toggle__btns[1].classList.remove("ativeBtn")
            crew_toggle__btns[2].classList.remove("ativeBtn")
        }
        else {
            crew_toggle__btns[3].classList.remove("ativeBtn")
        }
    }
    crewTarget4()
    // NAMED VARIABLES
    crew_contents_header.innerHTML = crewAray4.role
    crew_contents_name.innerHTML = crewAray4.name
    crew_contents_paragraph.innerHTML = crewAray4.bio
    // IMAGES
    crewImg_desktop.setAttribute("src", crewAray4.images.png)
    crewImg_desktop.setAttribute("alt", "Anousheh Ansari")
    crewImg_mobile.setAttribute("src", crewAray4.images.webp)
    crewImg_mobile.setAttribute("alt", "Anousheh Ansari")
}