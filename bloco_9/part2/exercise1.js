const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const temperatureInFahrenheit = (temperature) =>
  console.log(
    `It is currently ${(temperature * 9) / 5 + 32} fahrenheit at Mars`
  );
const greet = (temperature) =>
  console.log(
    `Hi there! curiosity here. Right now is ${temperature} degree at Mars`
  );

const sendMarsTemperature = (functionality) => {
  const temperature = getMarsTemperature();
  setTimeout(() => functionality(temperature), messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);
