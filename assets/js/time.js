let counter = parseInt(sessionStorage.getItem("counter")) || 0

const incrementCounter = function () {
  counter++
  sessionStorage.setItem("counter", counter)
  document.getElementById("counter").textContent = counter
}

setInterval(incrementCounter, 1000)
