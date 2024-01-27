const celciusInput = document.querySelector("#celciusInput");
const fahrenheitInput = document.querySelector("#fahrenheitInput");
const kelvinInput = document.querySelector("#kelvinInput");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celciToFahAndKevin(e) {
  const cTemp = parseFloat(e.target.value);

  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;

  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahToCelKevin(e) {
  const fTemp = parseFloat(e.target.value);

  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp + 459.67) * (5 / 9);

  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvToCelFah(e) {
  const kTemp = parseFloat(e.target.value);

  const cTemp = kTemp - 273.15;
  const fTemp = (9 / 5) * (kTemp - 273) + 32;

  celciusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}

celciusInput.addEventListener("input", celciToFahAndKevin);
fahrenheitInput.addEventListener("input", fahToCelKevin);
kelvinInput.addEventListener("input", kelvToCelFah);
