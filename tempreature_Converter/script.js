let activeField;

let convertCelToFahr_Kel = function () {
  let celciusField = activeField.value;
  let celToFahren = celciusField * (9 / 5) + 32;
  let celToKelvin = celciusField + 273.15;
  document.getElementById("fahrenheitField").value = celToFahren;
  document.getElementById("kelvinField").value = celToKelvin;
};

let convertFahrToCel_Kel = function () {
  let fahrenheitField = activeField.value;
  let fahrenToCel = ((fahrenheitField - 32) * 5) / 9;
  let fahrenToKelvin = (fahrenheitField - 32) * (5 / 9) + 273.15;
  document.getElementById("celciusField").value = fahrenToCel;
  document.getElementById("kelvinField").value = fahrenToKelvin;
};

let convertKelvToCel_Fahr = function () {
  let kelvinField = activeField.value;
  let kelvinToCelcius = kelvinField - 273.15;
  let kelvinToFahr = (kelvinField - 273.15) * 1.8 + 32;
  document.getElementById("celciusField").value = kelvinToCelcius;
  document.getElementById("fahrenheitField").value = kelvinToFahr;
};

let inputHandler = function (inputField) {
  activeField = inputField;

  inputField.addEventListener("input", function () {
    if (inputField === inputField.getAttribute()) {
      convertCelToFahr_Kel();
    } else if (inputField === document.getElementById("fahrenheitField")) {
      convertFahrToCel_Kel();
    } else if (inputField === document.getElementById("kelvinField")) {
      convertKelvToCel_Fahr();
    }
  });
};
