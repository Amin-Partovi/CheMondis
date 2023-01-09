function generateRandomColor() {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  let randColor = randomNumber.toString(16).padStart(6, "0");
  return `#${randColor.toUpperCase()}`;
}

export default generateRandomColor;
