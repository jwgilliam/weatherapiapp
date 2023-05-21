import { getWeather } from "../weather/weatherProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".searchFormContainer")
let searchValue = ""

const searchFormComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "zipCodeSearch") {
      searchValue = document.querySelector("#searchField").value
      const message = new CustomEvent("zipCodeSearchClicked", {
        detail: {
          selectedZip: searchValue
        }
      })
      eventHub.dispatchEvent(message)
      clickEvent.preventDefault()


    }
  })

  const render = () => {
    contentTarget.innerHTML = `
      <form class="searchForm">
        <input type="number" id="searchField" isRequired/>
        <button id="zipCodeSearch">search</button>
      </form>
    `
  }
  render()
}

export default searchFormComponent