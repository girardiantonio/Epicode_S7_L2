// prendo inputFiled
const textAreaReference = document.getElementById("name-field")

// prendo riferimento ai 3 bottoni
const saveButton = document.getElementById("save")
const loadButton = document.getElementById("load")
const resetButton = document.getElementById("reset")

const save = function () {
  //salvo in una variabile il contenuto della textArea
  const textAreaContent = textAreaReference.value

  // Salvo nello storage il contenuto della textArea
  localStorage.setItem("name-memory", textAreaContent)
  alert("Contenuto salvato")
}

const load = function () {
  // Salviamo in memoria il contenuto della textArea prima salvata
  const memory = localStorage.getItem("name-memory")

  if (memory) {
    // Il valore è stato trovato! rimettiamolo nella text area
    textAreaReference.value = memory
    alert("Memoria caricata!")
  } else {
    // Il valore non esiste, mandiamo un alert all'utente
    alert("Memoria non trovata")
  }
}

const reset = function () {
  // svuotiamo le text area nel DOM
  textAreaReference.value = ""

  // svuotiamo anche la memoria nel localStorage
  localStorage.removeItem("name-memory")
  alert("Memoria svuotata!")
}

saveButton.addEventListener("click", save)
loadButton.addEventListener("click", load)
resetButton.addEventListener("click", reset)
