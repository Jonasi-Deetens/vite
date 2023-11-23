import parallaxItemsList from "./parallaxItemsList";

export function createParallaxHeader() {
  const header = document.createElement("header");
  header.id = "parallax-container";

  const overlayDiv = document.createElement("div");
  overlayDiv.classList.add("overlay-picture");
  header.appendChild(overlayDiv);
  
  const inverse = document.createElement("div");
  inverse.classList.add("inverse-picture");
  header.appendChild(inverse);

  return header;
}

export function setParallaxBackground(image) {
  const element = document.querySelector("#parallax-container");
  element.style.backGroundImage = image;
}

export function setParallaxOverlay(image) {
  const overlay = document.querySelector(".overlay-picture");
  overlay.style.backGroundImage = image;
}

export function addParallaxImage(data) {
  const imageInfo = data.image.split("/")[3].split(".");
  const imageName = imageInfo[0];

  const header = document.querySelector("#parallax-container");
  const div = document.createElement("div");
  div.classList.add(imageName + "-picture");
  div.style.backgroundImage = "url(" + data.image + ")";
  div.style.bottom = data.startPos[0] + "px";
  div.style.left = data.startPos[1];
  header.appendChild(div);

  const parallaxItem = {
    element: div,
    startPosition: data.startPos,
    endPosition: data.endPos,
    startScale: data.startScale,
    endScale: data.endScale,
  };
  parallaxItemsList.addItem(parallaxItem);
}

export function parallaxScroll(scrollPos, maxScroll) {
  const calculatePosDifference = (start, end) => {
    let startValue = 0;
    let endValue = 0;
    let result = 0;

    if (end.includes("%")) {
      let startCharList = start.split(" ");
      let endCharList = end.split(" ");

      if (endCharList.length > 1) {
        startValue = parseInt(startCharList[2].split("px"));
        endValue = parseInt(endCharList[2].split("px"));
        result = (endValue - startValue) * (scrollPos / maxScroll) + "px";
      } else result = "-50%";
    } else {
      startValue = parseInt(start.split("px"));
      endValue = parseInt(end.split("px"));
      result = (endValue - startValue) * (scrollPos / maxScroll) + "px";
    }
    return result;
  };

  document.querySelector(".inverse-picture").style.width = (scrollPos / maxScroll) * 100 + "%";
  parallaxItemsList.getAllItems().forEach((item) => {
    item.element.style.transform =
      "translateY(" + (item.startPosition[0] - item.endPosition[0]) * (scrollPos / maxScroll) + "px)";
    item.element.style.transform +=
      "translateX(" + calculatePosDifference(item.endPosition[1], item.startPosition[1]) + ")";
    item.element.style.transform +=
      "scale(" + (item.startScale + (item.endScale - item.startScale) * (scrollPos / maxScroll)) + ")";
  });
}
