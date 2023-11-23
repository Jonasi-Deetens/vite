export function addParallaxImages(element) {
  const images = [
    "./src/images/overlay.png",
    "./src/images/gojo.webp",
    "./src/images/orb.png",
    "./src/images/rocks-zero.png",
    "./src/images/rocks-one.png",
    "./src/images/rocks-two.png",
    "./src/images/rocks-three.png",
    "./src/images/rocks-four.png",
    "./src/images/rocks-five.png",
    "./src/images/rocks-six.png",
    "./src/images/rocks-seven.png",
  ];

  const createHiddenBackground = () => {
    const domain = document.createElement("div");
    domain.classList.add("domain-picture");
    element.appendChild(domain);
  };

  const createParallaxPictureElements = () => {
    images.forEach((image) => {
      const imageInfo = image.split("/")[3].split(".");
      const imageName = imageInfo[0];
      const imageType = imageInfo[1];

      const picture = document.createElement("picture");

      const source = document.createElement("source");
      source.srcset = image;
      source.type = imageType;
      picture.appendChild(source);

      const img = document.createElement("img");
      img.src = image;
      img.alt = "image of " + imageName;
      img.classList.add(imageName + "-picture");
      picture.appendChild(img);

      element.appendChild(picture);
    });
  };

  const init = () => {
    createHiddenBackground();
    createParallaxPictureElements();
  };

  init();
}

export function parallaxScroll() {
  const maxScroll = 400;
  const scrollPos = window.scrollY;

  const updateParallax = () => {
    if (scrollPos <= maxScroll) {
      updatePositions(scrollPos, maxScroll);
    } else {
      updatePositions(maxScroll, maxScroll);
    }
  };

  const updatePositions = (scrollPos, maxScroll) => {
    const domainPicture = document.querySelector(".domain-picture");
    const gojoPicture = document.querySelector(".gojo-picture");
    const orbPicture = document.querySelector(".orb-picture");

    const overlay = document.querySelector(".overlay-picture");
    const rocksZeroPicture = document.querySelector(".rocks-zero-picture");
    const rocksOnePicture = document.querySelector(".rocks-one-picture");
    const rocksTwoPicture = document.querySelector(".rocks-two-picture");
    const rocksThreePicture = document.querySelector(".rocks-three-picture");
    const rocksFourPicture = document.querySelector(".rocks-four-picture");
    const rocksFivePicture = document.querySelector(".rocks-five-picture");
    const rocksSixPicture = document.querySelector(".rocks-six-picture");
    const rocksSevenPicture = document.querySelector(".rocks-seven-picture");

    domainPicture.style.width = scrollPos / (maxScroll / 100) + "%";

    if (scrollPos < 15) {
      gojoPicture.style.filter = "drop-shadow(0 0 2px black)";
      overlay.style.filter = "drop-shadow(0 -2px 5px black)";
    } else {
      gojoPicture.style.filter = "drop-shadow(0 0 8px rgb(255, 0, 208))";
      overlay.style.filter = "drop-shadow(0px -1px 3px rgb(255, 0, 208))";
    }
    gojoPicture.style.transform = "translateX(-50%)";
    gojoPicture.style.transform += "scale(" + (1 - scrollPos / ((maxScroll * 3) / 2)) + ")";

    orbPicture.style.transform = "translateY(" + 170 * (scrollPos / maxScroll) + "px)";
    orbPicture.style.transform += "translateX(" + scrollPos / (maxScroll / 50) + "px)";
    orbPicture.style.transform += "scale(" + scrollPos / (maxScroll / 1.5) + ")";

    rocksZeroPicture.style.transform = "translateX(-50%)";
    rocksZeroPicture.style.transform += "translateY(" + -420 * (scrollPos / maxScroll) + "px)";
    rocksZeroPicture.style.transform += "scale(" + scrollPos / maxScroll + ")";

    rocksOnePicture.style.transform = "translateY(" + -780 * (scrollPos / maxScroll) + "px)";
    rocksOnePicture.style.transform += "scale(" + (0.5 + scrollPos / maxScroll) + ")";

    rocksTwoPicture.style.transform = "translateY(" + -290 * (scrollPos / maxScroll) + "px)";
    rocksTwoPicture.style.transform += "scale(" + (0.2 + scrollPos / maxScroll) + ")";

    rocksThreePicture.style.transform = "translateY(" + -300 * (scrollPos / maxScroll) + "px)";
    rocksThreePicture.style.transform += "scale(" + (1.5 - scrollPos / maxScroll) + ")";
    rocksThreePicture.style.opacity = 1 - scrollPos / maxScroll / 5;

    rocksFourPicture.style.transform = "translateY(" + -600 * (scrollPos / maxScroll) + "px)";
    rocksFourPicture.style.transform += "scale(" + (1.5 - scrollPos / maxScroll) + ")";

    rocksFivePicture.style.transform = "translateY(" + -350 * (scrollPos / maxScroll) + "px)";
    rocksFivePicture.style.transform += "scale(" + (1.9 - scrollPos / maxScroll) + ")";

    rocksSixPicture.style.transform = "translateY(" + -300 * (scrollPos / maxScroll) + "px)";
    rocksSixPicture.style.transform += "scale(" + (0.5 + scrollPos / maxScroll) + ")";

    rocksSevenPicture.style.transform = "translateY(" + -360 * (scrollPos / maxScroll) + "px)";
    rocksSevenPicture.style.transform += "scale(" + (2 - scrollPos / maxScroll) + ")";
  };

  updateParallax();
}
