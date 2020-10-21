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
  const messageTime = Math.random() <= 0.6;
  setTimeout(() => {
    if (messageTime) functionality(temperature);
    else onError('Robot is busy');
  }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);
