//Capturamos el DOM
let divHabilidades = document.getElementById("habilidades")
let btnGuardarHabilidad = document.getElementById("guardadHabilidadBtn")
let buscador = document.getElementById("buscador")
let modalBodyHabilidades = document.getElementById("modal-bodyHabilidades")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")
let divCompra = document.getElementById("precioTotal")
let loaderTexto = document.getElementById("loaderTexto")
let loader = document.getElementById("loader")


let habilidadesEnCarro = JSON.parse(localStorage.getItem("carrito")) || []

//creamos las funciones
function mostrarHabilidades(array) {
  console.log(array)
  divHabilidades.innerHTML = ""
  array.forEach((habilidad) => {
    let nuevaHabilidad = document.createElement("div")
    nuevaHabilidad.classList.add("col-12", "col-md-6", "col-lg-4", "my-1")

    nuevaHabilidad.innerHTML =
      `<div id="${habilidad.id}" class="card" style="width: 18rem;">
          <img class="card-img-top img-fluid" src="../assets/${habilidad.imagen}" alt="${habilidad.lenguaje} duracion de ${habilidad.horas}"
          <div class="card-body">
          <h4 class="card-title">Challenge de ${habilidad.lenguaje}</h4>
          <p>Duracion: ${habilidad.horas} horas</p>
          <p>${habilidad.stack}</p>
          <button id="agregarBtn${habilidad.id}" class="btn btn-outline-success">Inscribirme al Challenge</button>
          <button id="agregarBtn${habilidad.id}" class="btn btn-outline-success">Info</button>
          </div>
        </div>`

    divHabilidades.appendChild(nuevaHabilidad)
    let btnAgregar = document.getElementById(`agregarBtn${habilidad.id}`)


    btnAgregar.addEventListener("click", () => {
      agregarAlCarrito(habilidad)
    })
  })

}

//Funcion para agregar al carrito


//Function para imprimir el modal del carrito  


    //Capturo elemento dom sin guardarlo en la variable


      //Eliminar el dom

      //eliminar array de comprar

      //Eliminar Storage

      //Vuelvo a calcular el total




//function calcular total

//function tnuscador ternario


  //con ternario


//Evento de agregar al carro
botonCarrito.addEventListener("click", () => {
  cargarProductosCarrito(habilidadesEnCarro)
})

setTimeout(() => {
  loaderTexto.innerHTML = ""
  loader.remove()
  mostrarHabilidades(estanteria)
}, 1000);

