const weatherComponent = (weather) => {
  const icon = `${weather.weather.map(
    element => `${element.icon}`
  )}`

  return `
    <section class="weather_card">
    <div class="weather_header">
      <div class="weather_date">${new Date(weather.dt_txt).toLocaleDateString('en-US')}</div>
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">
    </div>
    
    <div class="weather_content">
      <div class="weather_temp">temp: ${weather.main.temp}°F</div>
      <div class="weather_condition">${weather.weather.map(
    element => `
          ${element.description}
        `
  ).join("")}
      </div>
    </div>

    </section>
  `
}

export default weatherComponent