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
   height: "500px"
 } );
  
splide.mount();


//GALLERY//
let galleryImages = document.querySelectorAll(".gallery-image");
let getLatestOpenedImg;
let windowwidth = window.innerWidth;

if(galleryImages){
  galleryImages.forEach(function(image, index){
    image.onclick = function() {
     let getFullImgUrl = image.src;

     getLatestOpenedImg = index + 1;

     let container = document.body;
     let newFullImgUrlWindow = document.createElement("div");
    container.appendChild(newFullImgUrlWindow);
    console.log("here")
    newFullImgUrlWindow.setAttribute("class","img-window");
    newFullImgUrlWindow.setAttribute("onclick","closeImg()");
    
    let newImg = document.createElement("img");
    newFullImgUrlWindow.appendChild(newImg);
    newImg.setAttribute("src", getFullImgUrl);


    new.Img.onload = function (){
      let imgWidth = this.width;
      let calcImgToEdge =((windowwiidth - imgWidth) / 2) - 80;


      let newNextBtn = document.createElement("a");
      let btnNextText = document.createTextNode("Next");
      newNextBtn.appendChild(btnNextText);
      container.appendChild(newNextBtn);
      newNextBtn.setAttribute("class", "img-btn-prev");
      newNextBtn.setAttribute("onclick", "changeImg()");
      newNextBtn.style.cssFloatText = "";
  
      let newPrevBtn = document.createElement("a");
      let btnPrevText = document.createTextNode("Prev");
      newPrevBtn.appendChild(btnPrevText);
      container.appendChild(newPrevBtn);
      newPrevBtn.setAttribute("class", "img-btn-prev");
      newPrevBtn.setAttribute("onclick", "changeImg()");
  
    }
    


    }
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
}