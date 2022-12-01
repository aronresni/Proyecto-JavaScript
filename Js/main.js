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
function agregarAlCarrito(habilidad) {
  //Primer paso
  habilidadesEnCarro.push(habilidad)
  console.log(habilidadesEnCarro)
  localStorage.setItem("carrito", JSON.stringify(habilidadesEnCarro))

  //Usamos Sweet Alert
  Swal.fire({
    //position: "top-end" ,
    tittle: "Ha agregado una habilidad",
    icon: "success",
    confirmButtonText: "Entendido",
    confirmButtonColor: "green",
    timer: 2500,
    text: `La habilidad ${habilidad.lenguaje} con la duracion de ${habilidad.horas} horas ha sido agregada`,

  })

}
//Function para imprimir el modal del carrito  
function cargarProductosCarrito(array) {
  modalBodyHabilidades.innerHTML = ""
  array.forEach((habilidadesEnCarro) => {
    modalBodyHabilidades.innerHTML += `
    <div class="card border-primary mb-3" id ="habilidadesEnCarro${habilidadesEnCarro.id}" style="max-width: 540px;">
        <img class="card-img-top" height="300px" src="assets/${habilidadesEnCarro.imagen}" alt="${habilidadesEnCarro.lenguaje}">
        <div class="card-body">
                <h4 class="card-title">${habilidadesEnCarro.titulo}</h4>
            
                <p class="card-text">$${habilidadesEnCarro.precio}</p> 
                <button class= "btn btn-danger" id="botonEliminar${habilidadesEnCarro.id}"><i class="fas fa-trash-alt"></i></button>
        </div>    
    </div>
`
  })
  array.forEach((habilidadesEnCarro, indice) => {
    //Capturo elemento dom sin guardarlo en la variable
    document.getElementById(`botonEliminar${habilidadesEnCarro.id}`).addEventListener("click", () => {

      //Eliminar el dom
      let cardHabilidad = document.getElementById(`habiliadadesEnCarro ${habilidadesEnCarro.id}`)
      cardHabilidad.remove()
      //eliminar array de comprar
      habilidadesEnCarro.splice(indice, 1)
      console.log(habilidadesEnCarro)
      //Eliminar Storage
      localStorage.setItem(`carrito`, JSON.stringify(habilidadesEnCarro))
      //Vuelvo a calcular el total
      compraTotal(array)
    })
  })
  compraTotal(array)
}



//function calcular total
function compraTotal(array) {
  let acumulador = 0
  acumuladormulador = array.reduce((acc, habilidadesEnCarro) => acc + habilidadesEnCarro.precio, 0)
  console.log(acumulador)
  acumulador == 0 ? divCompra.inner = `No hay productos en el carrito` : divCompra.innerHTML`El total de su carrito es ${acumulador}`
}
//function tnuscador ternario
function buscarInfo(buscado, array) {
  let busqueda = array.filter(
    (habilidad) => habilidad.id.toLowerCase().includes(buscado.toLowerCase()) || habilidad.lenguaje.toLowerCase().includes(buscado.toLowerCase())
  )

  //con ternario
  busqueda.length == 0 ?
    (coincidencia.innerHTML = `<h3 class="text-success m-2">No hay coincidencias con su búsqueda.. a continuación tiene todo nuestro catálogo disponible</h3>`, mostrarCatalogo(array))
    : (coincidencia.innerHTML = "", mostrarHabilidades(busqueda))
}

//Evento de agregar al carro
botonCarrito.addEventListener("click", () => {
  cargarProductosCarrito(habilidadesEnCarro)
})

setTimeout(() => {
  loaderTexto.innerHTML = ""
  loader.remove()
  mostrarHabilidades(estanteria)
}, 1000);

