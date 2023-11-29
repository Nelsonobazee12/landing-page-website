
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-bar");
    //const navlink = document.querySelectorAll(".nav-bar ul li");

   document.addEventListener('DOMContentLoaded', () => {

  
    menu.addEventListener("click", () => {
        
        nav.classList.toggle("active");
        document.querySelector('body').classList.toggle.remove('active')
    //     navlink.forEach((links, index) => {
    //         if(links.style.animation){
    //             links.style.animation = ''
    //         }else {
    //             links.style.animation = `navFade 0.5s ease forwards $(index / 7 + 1.5)s`;
    //         }
    // })

})
}) 
    // navlink.forEach((links, index) => {
    //   links.style.animation = `navFade 0.5s ease forwards $(index / 7 + 1.5)s`;
    // })

