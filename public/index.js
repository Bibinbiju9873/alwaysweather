let weather = {
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=e157d1e2712ad4806956a0aa9e3d716a"
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            // throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        var name = JSON.parse(JSON.stringify(data));
        const temp = JSON.parse(JSON.stringify(data.main));
      const speed = data.wind;

      document.querySelector("#weather-city").innerHTML = "Weather in " + name.name;

      document.querySelector("#weather-temp").innerHTML = Math.round(temp.temp/10) + "°C";
     
      document.querySelector("#speed").innerHTML =
        "Wind speed: " + speed.speed + " km/h";

    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search-btn").addEventListener("click", function () {
    weather.search();
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather(document.getElementById("#weather-city"));