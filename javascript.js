let menuCloseButtton = document.querySelector("#menu-close-button");
let menulist = document.querySelector("#menulist");
let menuOpenButton = document.querySelector("#menu-open-button");

menuCloseButtton.onclick = () => {
  menulist.style.setProperty("display", "none");
  // neceitamos el menu
  // tenemos que ponerle display none al menu
  // menu.classList.toggle('bx-x')
};

menuOpenButton.onclick = () => {
  menulist.style.setProperty("display", "block");
};

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  autoWidth: true,
  autoplay: true,
  height: "500px",
});

splide.mount();

//GALLERY//
let galleryImages = document.querySelectorAll(".gallery-image");
// let getLatestOpenedImg;
let windowwidth = window.innerWidth;
let newImg;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getFullImgUrl = image.src;

      //  getLatestOpenedImg = index + 1;

      let container = document.body;
      let newFullImgUrlWindow = document.createElement("div");
      container.appendChild(newFullImgUrlWindow);
      newFullImgUrlWindow.setAttribute("class", "img-window");
      newFullImgUrlWindow.setAttribute("onclick", "closeImg()");

      newImg = document.createElement("img");
      newFullImgUrlWindow.appendChild(newImg);
      newImg.setAttribute("src", getFullImgUrl);

      newImg.onload = function () {
        console.log("Image loading");
        let imgWidth = this.width;
        // let calcImgToEdge =((windowwiidth - imgWidth) / 2) - 80;

        // let newNextBtn = document.createElement("a");
        // let btnNextText = document.createTextNode("Next");
        // newNextBtn.appendChild(btnNextText);
        // container.appendChild(newNextBtn);
        // newNextBtn.setAttribute("class", "img-btn-prev");
        // newNextBtn.setAttribute("onclick", "changeImg()");
        // newNextBtn.style.cssFloatText = "Next";

        // let newPrevBtn = document.createElement("a");
        // let btnPrevText = document.createTextNode("Prev");
        // newPrevBtn.appendChild(btnPrevText);
        // container.appendChild(newPrevBtn);
        // newPrevBtn.setAttribute("class", "img-btn-prev");
        // newPrevBtn.setAttribute("onclick", "changeImg()");
        // newPrevBtn.style.cssFloatText = "Prev"
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
}

//listen to the arrows

document.addEventListener("keydown", (event) => {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  if (key === "ArrowRight") {
    switchPic("right");
  } else if (key === "ArrowLeft") {
    switchPic("left");
  }
});

// function to switch picture

function switchPic(direction) {
  const imagesArray = Array.from(galleryImages);
  console.log(imagesArray);
  const currentImageIndex = imagesArray.findIndex((image) => {
    return image.src === newImg.src;
  });

  if (direction === "right") {
    if (imagesArray.length === currentImageIndex + 1) {
      newImg.src = imagesArray[0];
    } else {
      newImg.src = imagesArray[currentImageIndex + 1].src;
    }
  } else if (direction === "left") {
    if (currentImageIndex === 0) {
      newImg.src = imagesArray[imagesArray.length - 1];
    } else {
      newImg.src = imagesArray[currentImageIndex - 1].src;
    }
  }
}
//const getTitle = async () => {
//const response = fetch("http://localhost:1337/api/about");
//const titleData = await response.json();
//const title = titleData.data.title;
//console.log("title", title);
//const titleElement = document.querySelector("#titleElement");
//titleElement.innerHTML = title;
// };

// getTitle()
