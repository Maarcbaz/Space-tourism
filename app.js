let navPath = window.location.pathname;
let navlinks = document.querySelectorAll('.links_h')
navlinks.forEach(link => {
    if(link.href.includes(`${navPath}`)) {
        link.classList.add('active')
        console.log(navPath);
    }
})
let overlayNav = document.querySelector('.overlay') 
let open = document.querySelector('.open')
let all_nav = document.querySelector('.all')
open.addEventListener('click', () => {
    if(overlayNav.style.width == '230px') {
        overlayNav.style.width = '0'
    } else {
        overlayNav.style.width = '230px'
    }    
})
all_nav.addEventListener('click', () => {
    if (overlayNav.style.width == '230px') {
        overlayNav.style.width = '0'
    }
})