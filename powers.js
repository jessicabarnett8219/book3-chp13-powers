
document.querySelector("#activate-flight").addEventListener("click", (event) => {
  flightHandlerFunction();
})

const flightHandlerFunction = () => {
 const flightSection = document.getElementById("flight")
 flightSection.classList.remove("disabled");
 flightSection.classList.add("enabled")
}