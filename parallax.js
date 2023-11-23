export function addParallaxImages(element) {
  const images = [
    "./images/overlay.png",
    "./images/gojo.webp",
    "./images/orb.png",
    "./images/rocks-zero.png",
    "./images/rocks-one.png",
    "./images/rocks-two.png",
    "./images/rocks-three.png",
    "./images/rocks-four.png",
    "./images/rocks-five.png",
    "./images/rocks-six.png",
    "./images/rocks-seven.png",
  ];

  const createHiddenBackground = () => {
    const domain = document.createElement("div");
    domain.classList.add("domain-picture");
    element.appendChild(domain);
  };

  const createParallaxPictureElements = () => {
    images.forEach((image) => {
      const imageInfo = image.split("/")[2].split(".");
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

    window.onscroll = () => {
      updateParallax();
    };
  };

  init();

  const updateParallax = () => {
    const maxScroll = 400;
    const scrollPos = window.scrollY;
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

    rocksOnePicture.style.transform = "translateY(" + -380 * (scrollPos / maxScroll) + "px)";
    rocksOnePicture.style.transform += "scale(" + (0.5 + scrollPos / maxScroll) + ")";

    rocksTwoPicture.style.transform = "translateY(" + -520 * (scrollPos / maxScroll) + "px)";
    rocksTwoPicture.style.transform += "scale(" + (1.5 - scrollPos / maxScroll) + ")";

    rocksThreePicture.style.transform = "translateY(" + -300 * (scrollPos / maxScroll) + "px)";
    rocksThreePicture.style.transform += "scale(" + (0.5 + scrollPos / maxScroll) + ")";

    rocksFourPicture.style.transform = "translateY(" + -400 * (scrollPos / maxScroll) + "px)";
    rocksFourPicture.style.transform += "scale(" + (1.5 - scrollPos / maxScroll) + ")";

    rocksFivePicture.style.transform = "translateY(" + -500 * (scrollPos / maxScroll) + "px)";
    rocksFivePicture.style.transform += "scale(" + (1.9 - scrollPos / maxScroll) + ")";

    rocksSixPicture.style.transform = "translateY(" + -400 * (scrollPos / maxScroll) + "px)";
    rocksSixPicture.style.transform += "scale(" + (0.5 + scrollPos / maxScroll) + ")";

    rocksSevenPicture.style.transform = "translateY(" + -460 * (scrollPos / maxScroll) + "px)";
    rocksSevenPicture.style.transform += "scale(" + (1.5 - scrollPos / maxScroll) + ")";
  };
}
