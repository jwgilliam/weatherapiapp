import { getWeather, useWeather } from "./weatherProvider.js";
import weatherComponent from "./weather.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".weather")

const weatherListComponent = () => {
  eventHub.addEventListener("zipCodeSearchClicked", event => {
    console.log('going to get the weather')
    getWeather(event.detail.selectedZip).then(
      () => {
        const weather = useWeather()
        render(weather)
      }
    )
  })

  const render = (element) => {
    contentTarget.innerHTML = `
      <section class="weather_box">
        <p class="weather_title">Your five day forecast</p>
        <div class="weather_cards">
          ${element.map(currentElement => {
      const [prefix, time] = currentElement.dt_txt.split(" ")
      if (time === "12:00:00") {
        return weatherComponent(currentElement)
      }
    }).join("")
      }
        </div>
      </section>
    `
  }
}

export default weatherListComponent