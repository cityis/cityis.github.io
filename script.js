const navbar = document.getElementById('navbar')

// const media = document.matchMedia("(width < 700px")

// media.addEventListener('change', (e) => updateNavbar(e))

// function updateNavbar(e){
//     const isMobile = e.matches
//     if(isMobile){
//         navbar.setAttribute('inert', '')
//     } else{
//         navbar.removeAttribute('inert')
//     }
// }

function openSidebar(){
    navbar.classList.add('show')
    openSidebar.setAttribute('aria-expanded', 'true')
    // navbar.removeAttribute('inert')
}

function closeSidebar(){
    navbar.classList.remove('show')
    openSidebar.setAttribute('aria-expanded', 'false')
    // navbar.setAttribute('inert', '')
}   

const navLinks = document.querySelectorAll('nav ul a')
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar()
    })
})

// updateNavbar(media)

console.log(navLinks);