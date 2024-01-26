let valuesFrom0to255 = [];
for (let j = 0; j <= 255; j++) {
  valuesFrom0to255.push(j);
}

const getRandomNo = () => {
  return Math.floor(Math.random() * 255);
};

randomColorChanger = () => {
  let rgbColorValue = "rgb(";
  for (let i = 0; i < 3; i++) {
    if (i == 0) {
      rgbColorValue = rgbColorValue.concat(a);
    }
    if (i == 1) {
      rgbColorValue = rgbColorValue.concat(",", a);
    }
    if (i == 2) {
      rgbColorValue = rgbColorValue.concat(",", a, ")");
    }
  }
  console.log(rgbColorValue);
  document.body.style.backgroundColor = rgbColorValue;
};
