// event listeners

document.querySelector("#activate-flight").addEventListener("click", (event) => {
  let currentPowerId = event.target.id.split("-")[1]
 activatePower(currentPowerId)
})

document.querySelector("#activate-mindreading").addEventListener("click", (event) => {
  mindreadingHandlerFunction();
})

document.querySelector("#activate-xray").addEventListener("click", (event) => {
  xrayHandlerFunction();
})

document.querySelector("#activate-all").addEventListener("click", (event) => {
  activateAllPowers();
})

document.querySelector("#deactivate-all").addEventListener("click", (event) => {
  deactivateAllPowers();
})


// event handler functions

const activatePower = (sectionId) => {
  let currentPowerSection = document.getElementById(sectionId)
  currentPowerSection.classList.remove("disabled");
  currentPowerSection.classList.add("enabled");
}

const flightHandlerFunction = () => {
 const flightSection = document.querySelector("#flight")
 flightSection.classList.remove("disabled");
 flightSection.classList.add("enabled")
}

const mindreadingHandlerFunction = () => {
  const mindreadingSection = document.querySelector("#mindreading")
  mindreadingSection.classList.remove("disabled");
  mindreadingSection.classList.add("enabled");
}


const xrayHandlerFunction = () => {
  const xraySection = document.querySelector("#xray")
  xraySection.classList.remove("disabled");
  xraySection.classList.add("enabled");
}

const powers = document.querySelectorAll(".power")

const activateAllPowers = () => {
  for (let i = 0; i < powers.length; i++) {
    let currentPower = powers[i];
    currentPower.classList.remove("disabled")
    currentPower.classList.add("enabled")
  }
}

const deactivateAllPowers = () => {
  for (let i = 0; i < powers.length; i++) {
    let currentPower = powers[i];
    currentPower.classList.remove("enabled")
    currentPower.classList.add("disabled")
  }
}

