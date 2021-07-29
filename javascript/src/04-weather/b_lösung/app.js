async function getWeather() {
  const city = document.getElementById("city").value;

  const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
  const params = `?q=${city}&appid=f3a44fe9aaf8d153e7e1a56870852478&units=metric`;

  // console.log("vor fetch");
  // fetch(baseUrl + params)
  //   .then((response) => {
  //     console.log("json() ...");
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log("data() ...");
  //     document.getElementById("outTemp").innerHTML = data.main.temp;
  //     document.getElementById("outName").innerHTML = data.name;
  //   });
  // console.log("nach fetch");

  console.log("vor fetch");
  const response = await fetch(baseUrl + params);
  console.log("json()");
  const data = await response.json();
  console.log("data");
  document.getElementById("outTemp").innerHTML = data.main.temp;
  document.getElementById("outName").innerHTML = data.name;
  console.log("ende");
}

document.getElementById("search").addEventListener("click", getWeather);
