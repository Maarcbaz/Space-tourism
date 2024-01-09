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
open.addEventListener('click', () => {
    if(overlayNav.style.display == 'block') {
        overlayNav.style.display = 'none'
    } else {
        overlayNav.style.display = 'block'
    }    
})
