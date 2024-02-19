const technologyArray = [
    {
        "name": "Launch vehicle",
        "images": {
            "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        "name": "Spaceport",
        "images": {
            "portrait": "./assets/technology/image-spaceport-portrait.jpg",
            "landscape": "./assets/technology/image-spaceport-landscape.jpg"
        },
        "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        "name": "Space capsule",
        "images": {
            "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
            "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
        },
        "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
]
// NAMED VARIABLES
const tech_name = document.querySelector(".tech_name")
const tech_description = document.querySelector(".tech_description")
// IMAGES
const tech_img_portrait = document.querySelector(".tech_img_portrait")
const tech_img_landscape = document.querySelector('.tech_img_landscape')
// BUTTONS 
const activeBtn = document.querySelector(".activeBtn")
const tech_btn = document.querySelectorAll(".tech_btn button")
tech1Func = () => {
    function techTargetDefault() {
        if (tech_btn[0].click) {
            tech_btn[0].classList.add("activeBtn")
            tech_btn[1].classList.remove("activeBtn")
            tech_btn[2].classList.remove("activeBtn")
        } else {
            tech_btn[0].classList.remove("activeBtn")
        }
    } techTargetDefault()
    const techfuncDefault = technologyArray[0]
    // NAMED VARIABLES
    tech_name.innerHTML = techfuncDefault.name
    tech_description.innerHTML = techfuncDefault.description
    // IMAGES 
    tech_img_landscape.setAttribute("src", techfuncDefault.images.landscape)
    tech_img_landscape.setAttribute("alt", "launch vehicle")
    tech_img_portrait.setAttribute("src", techfuncDefault.images.portrait)
    tech_img_portrait.setAttribute("alt", "lauch vehicle")
}
tech1Func()
tech2Func = () => {
    function techTarget2() {
        if (tech_btn[1].click) {
            tech_btn[1].classList.add("activeBtn")
            tech_btn[0].classList.remove("activeBtn")
            tech_btn[2].classList.remove("activeBtn")
        } else {
            tech_btn[1].classList.remove("activeBtn")
        }
    } techTarget2()
    const techFunc2 = technologyArray[1]
    // NAMED VARIABLES
    tech_name.innerHTML = techFunc2.name
    tech_description.innerHTML = techFunc2.description
    // IMAGES
    tech_img_landscape.setAttribute("src", techFunc2.images.landscape)
    tech_img_landscape.setAttribute("alt", "spaceport")
    tech_img_portrait.setAttribute("src", techFunc2.images.portrait)
    tech_img_portrait.setAttribute("alt", "spaceport")
}
tech3Func = () => {
    const techFunc3 = technologyArray[2]
    function techTarget3() {
        if (tech_btn[2].click) {
            tech_btn[2].classList.add("activeBtn")
            tech_btn[0].classList.remove("activeBtn")
            tech_btn[1].classList.remove("activeBtn")
        } else {
            tech_btn[2].classList.remove("activeBtn")
        }
    } techTarget3()
    // NAMED VARIABLES
    tech_name.innerHTML = techFunc3.name
    tech_description.innerHTML = techFunc3.description
    // IMAGES 
    tech_img_landscape.setAttribute("src", techFunc3.images.landscape)
    tech_img_landscape.setAttribute("alt", "space capsule")
    tech_img_portrait.setAttribute("src", techFunc3.images.portrait)
    tech_img_portrait.setAttribute("alt", 'space capsule')
}