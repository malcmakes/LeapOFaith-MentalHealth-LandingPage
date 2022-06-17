const navBurger = () => {

const headerNew = document.querySelector('header')
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links-li');


burger.addEventListener('click', () => {
   const navActiveState= nav.classList.toggle('nav-active');


    if (navActiveState) {

        headerNew.style.backgroundColor = "#43aa8b";
        headerNew.style.width = "100%";
        // console.log('background changed')
    }

        else {
            headerNew.style.backgroundColor = "transparent";
            // console.log('background normal')
        }

 
    navLinks.forEach((link,index) => {
        if (link.style.animation){
            link.style.animation =''
            
            
        }
        else {
           
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.4}s`;
            
        
        
        }
        console.log(index / 7);


        if (link.style.animation) {
           
        }
    })


})

}
// navBurger()

export default navBurger




