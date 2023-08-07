import "./style.css";

//form validation
const locationBox = document.getElementById("location");

locationBox.addEventListener("input", (e) => {
  if (locationBox.validity.valueMissing) {
    locationBox.setCustomValidity("I expect a location");
  } else {
    locationBox.setCustomValidity("");
  }
});

//unsafe but its a public key
const key = "f067414ad75a455cbc694714230408";

async function getWeatherFromLocation(location) {
  try {
    //get a promise from api
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
      {
        mode: "cors",
      }
    );
    //get object from promise
    const weatherData = await response.json();
    return weatherData.current.condition.text;
  } catch (error) {
    console.log(error);
  }
}

async function handleWeatherBox() {
  try {
    const weatherDiv = document.getElementsByClassName("weather")[0];
    weatherDiv.innerHTML = "";
    var weatherInfo = await getWeatherFromLocation(locationBox.value);
    const weatherBox = document.createElement("div");
    weatherBox.innerText = weatherInfo;
    weatherDiv.appendChild(weatherBox);
  } catch (error) {
    console.log(error);
  }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  if (!locationBox.validity.valid) {
    e.preventDefault();
  } else {
    handleWeatherBox();
    e.preventDefault();
  }
});
