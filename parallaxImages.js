import gojoImage from "./src/images/gojo.webp";
import orbImage from "./src/images/orb.png";
import rocksZeroImage from "./src/images/rocks-zero.png";
import rocksOneImage from "./src/images/rocks-one.png";
import rocksTwoImage from "./src/images/rocks-two.png";
import rocksThreeImage from "./src/images/rocks-three.png";
import rocksFourImage from "./src/images/rocks-four.png";
import rocksFiveImage from "./src/images/rocks-five.png";
import rocksSixImage from "./src/images/rocks-six.png";
import rocksSevenImage from "./src/images/rocks-seven.png";

const parallaxImageData = [
  {
    image: gojoImage,
    startPos: [-100, "50%"],
    endPos: [-100, "50%"],
    startScale: 1,
    endScale: 0.4,
    width: 400,
    height: 600,
    layer: 5,
  },
  {
    image: orbImage,
    startPos: [450, "calc(50% - 93px)"],
    endPos: [320, "calc(50% - 46px)"],
    startScale: 0,
    endScale: 2.5,
    width: 40,
    height: 40,
    layer: 10,
  },
  {
    image: rocksZeroImage,
    startPos: [-100, "50%"],
    endPos: [40, "50%"],
    startScale: 1,
    endScale: 1.2,
    width: 80,
    height: 80,
    layer: 10,
  },
  {
    image: rocksOneImage,
    startPos: [-100, "50px"],
    endPos: [250, "50px"],
    startScale: 1,
    endScale: 1.3,
    width: 60,
    height: 80,
    layer: 10,
  },
  {
    image: rocksTwoImage,
    startPos: [-100, "330px"],
    endPos: [180, "330px"],
    startScale: 1,
    endScale: 1.3,
    width: 50,
    height: 50,
    layer: 10,
  },
  {
    image: rocksThreeImage,
    startPos: [-100, "520px"],
    endPos: [260, "520px"],
    startScale: 1,
    endScale: 0.8,
    width: 60,
    height: 70,
    layer: 1,
  },
  {
    image: rocksFourImage,
    startPos: [-100, "780px"],
    endPos: [300, "780px"],
    startScale: 1,
    endScale: 0.8,
    width: 60,
    height: 40,
    layer: 1,
  },
  {
    image: rocksFiveImage,
    startPos: [-100, "950px"],
    endPos: [250, "950px"],
    startScale: 1,
    endScale: 0.8,
    width: 60,
    height: 50,
    layer: 1,
  },
  {
    image: rocksSixImage,
    startPos: [-100, "1150px"],
    endPos: [160, "1150px"],
    startScale: 1,
    endScale: 1.3,
    width: 50,
    height: 50,
    layer: 10,
  },
  {
    image: rocksSevenImage,
    startPos: [-100, "1300px"],
    endPos: [190, "1300px"],
    startScale: 1,
    endScale: 1.3,
    width: 60,
    height: 60,
    layer: 10,
  },
];

export default parallaxImageData;
