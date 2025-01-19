export const rgbToHex = (rgb) => {
  const rgbArray = rgb.match(/\d+/g);
  return `#${((1 << 24) | (parseInt(rgbArray[0]) << 16) | (parseInt(rgbArray[1]) << 8) | parseInt(rgbArray[2]))
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};
