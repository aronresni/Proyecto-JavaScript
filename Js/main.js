//Capturamos el DOM
let divHabilidades = document.getElementById("habilidades")
let btnGuardarHabilidad = document.getElementById("guardadHabilidadBtn")
let buscador = document.getElementById("buscador")
let modalBodyHabilidades = document.getElementById("modal-bodyHabilidades")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")


let habilidadesEnCarro = JSON.parse(localStorage.getItem("carrito")) || []

//creamos las funciones
function mostrarHabilidades(array) {
  divHabilidades.innerHTML = ""
  for (let habilidad of array) {
    let nuevaHabilidad = document.createElement("div")
    nuevaHabilidad.classList.add("col-12", "col-md-6", "col-lg-4", "my-1")

    nuevaHabilidad.innerHTML =
      `<div id="${habilidad.id}" class="card" style="width: 18rem;">
          <img class="card-img-top img-fluid" src="../assets/${habilidad.imagen}" alt="${habilidad.lenguaje} duracion de ${habilidad.horas}"
          <div class="card-body">
          <h4 class="card-title">${habilidad.lenguaje}</h4>
          <p>Duracion: ${habilidad.horas}</p>
          <button id="agregarBtn${habilidad.id}" class="btn btn-outline-success">Agregar al carrito</button>
          </div>
        </div>`

    divHabilidades.appendChild(nuevaHabilidad)
    let btnAgregar = document.getElementById(`agregarBtn ${habilidad.id}`)


    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(habilidad)
    })
  }
}

//Funcion para agregar al carrito
function agregarAlCarrito(habilidad){
  //Primer paso
  habilidadesEnCarro.push(habilidad)
  console.log (habilidadesEnCarro)
  localStorage.setItem("carrito", JSON.stringify(habilidadesEnCarro))

  //Usamos Sweet Aert
}



mostrarHabilidades(estanteria)