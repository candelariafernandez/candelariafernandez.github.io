let menuCloseButtton = document.querySelector('#menu-close-button');
let menulist = document.querySelector('#menulist');
let menuOpenButton = document.querySelector ('#menu-open-button')

menuCloseButtton.onclick = () => {
    menulist.style.setProperty("display", "none")
    console.log("asd")    
    // neceitamos el menu
    // tenemos que ponerle display none al menu

    // menu.classList.toggle('bx-x')
}

menuOpenButton.onclick = ()=>{
 menulist.style.setProperty("display", "block")
}

var splide = new Splide( '.splide', {
  type    : 'loop',
   perPage : 3,
   focus: 'center',
   autoWidth: true,
   autoplay: true,
 } );
  
splide.mount();
