let navPath = window.location.href;
let navlinks = document.querySelectorAll('.links_h')
navlinks.forEach(link => {
     if(link.href.includes(`${navPath}`)) {
        link.classList.add('active')
        console.log(navPath);
    }
})
let overlayNav = document.querySelector('.overlay') 
let open = document.querySelector('.open')
let contaiener = document.querySelector('.container')
open.addEventListener('click', () => {
    if(overlayNav.style.width == '230px') {
        overlayNav.style.width = '0'
    } else {
        overlayNav.style.width = '230px'
    }    
})
contaiener.addEventListener('click', () => {
    if (overlayNav.style.width == '230px') {
        overlayNav.style.width = '0'
    }
})
let navpathSm = window.location.href 
let navlinksSm = document.querySelectorAll('.links_sm')
navlinksSm.forEach(linkSm => {
   if (linkSm.href.includes(`${navpathSm}`)) {
        linkSm.classList.add('activeSm')
   }
})

        // function setActivePage(pageId) {
        //     // Reset all content elements
        //     var contentElements = document.getElementsByClassName('content');
        //     for (var i = 0; i < contentElements.length; i++) {
        //         contentElements[i].style.display = 'none';
        //     }

        //     // Reset all navigation items
        //     var navItems = document.getElementsByClassName('nav-item');
        //     for (var i = 0; i < navItems.length; i++) {
        //         navItems[i].classList.remove('active');
        //     }

        //     // Set the selected page as active
        //     document.getElementById(pageId).style.display = 'block';
        //     event.currentTarget.classList.add('active');
        // }
