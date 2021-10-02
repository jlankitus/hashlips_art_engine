const { MODE } = require("./blendMode.js");
const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "https://hashlips/nft";

const layerConfigurations = [
  {
    growEditionSizeTo: 6969,
    layersOrder: [
      { name: "Back" },
      { name: "Martian" },
      { name: "SkullBase" },
      { name: "Flower" },
      { name: "Sockets" },
      { name: "LeftEye" },
      { name: "RightEye" },
      { name: "Nose" },
      { name: "Teeth" },
      { name: "Tooth" },
      { name: "Forehead" },
      { name: "SkullDecor" },
      { name: "Mandala" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
