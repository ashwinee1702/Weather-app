async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "da5cc509bc967933cf9f957a7a06eb9b"; // your key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = data.main.temp + "°C";
    document.getElementById("description").textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").innerHTML =
      `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="weather icon">`;
  } catch (err) {
    alert("City not found!");
  }
}
