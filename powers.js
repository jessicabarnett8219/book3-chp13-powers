// event listeners

document.querySelector("#activate-flight").addEventListener("click", (event) => {
  let currentPowerId = event.target.id.split("-")[1]
  activatePower(currentPowerId)
})

document.querySelector("#activate-mindreading").addEventListener("click", (event) => {
  let currentPowerId = event.target.id.split("-")[1]
  activatePower(currentPowerId)
})

document.querySelector("#activate-xray").addEventListener("click", (event) => {
  let currentPowerId = event.target.id.split("-")[1]
  activatePower(currentPowerId)})

document.querySelector("#activate-all").addEventListener("click", (event) => {
  allPowersHandler();
}
)

document.querySelector("#deactivate-all").addEventListener("click", (event) => {
  allPowersHandler();
  }
)


// event handler functions

const powers = document.querySelectorAll(".power")


const activatePower = (sectionId) => {
  let currentPowerSection = document.getElementById(sectionId)
  currentPowerSection.classList.remove("disabled");
  currentPowerSection.classList.add("enabled");
}

const allPowersHandler = () => {
  for (let i = 0; i < powers.length; i++) {
    let currentPower = powers[i];
    if (currentPower.classList.contains("disabled")) {
      currentPower.classList.remove("disabled")
      currentPower.classList.add("enabled")
    } else if (currentPower.classList.contains("enabled")) {
      currentPower.classList.remove("enabled")
      currentPower.classList.add("disabled")
    }
  }
}


