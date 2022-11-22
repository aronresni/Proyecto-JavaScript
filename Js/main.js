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
  console.log(array)
  divHabilidades.innerHTML = ""
  array.forEach((habilidad) => {
    let nuevaHabilidad = document.createElement("div")
    nuevaHabilidad.classList.add("col-12", "col-md-6", "col-lg-4", "my-1")

    nuevaHabilidad.innerHTML =
      `<div id="${habilidad.id}" class="card" style="width: 18rem;">
          <img class="card-img-top img-fluid" src="../assets/${habilidad.imagen}" alt="${habilidad.lenguaje} duracion de ${habilidad.horas}"
          <div class="card-body">
          <h4 class="card-title">${habilidad.lenguaje}</h4>
          <p>Duracion: ${habilidad.horas} horas</p>
          <button id="agregarBtn${habilidad.id}" class="btn btn-outline-success">Agregar al carrito</button>
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
    timer:2500,
    text:`La habilidad ${habilidad.lenguaje} con la duracion de ${habilidad.horas} horas ha sido agregada`,
  
  })

}
//Function para imprimir el modal del carrito  
function cargarProductosCarrito (array){
  modalBodyHabilidades.innerHTML=""
  array.forEach((habilidadesEnCarro)=>{
    modalBodyHabilidades.innerHTML+=`
    <div class="card border-primary mb-3" id ="habilidadesEnCarro${habilidad.id}" style="max-width: 540px;">
        <img class="card-img-top" height="300px" src="assets/${habilidadesEnCarro.imagen}" alt="${habilidad.lenguaje}">
        <div class="card-body">
                <h4 class="card-title">${habilidadesEnCarro.titulo}</h4>
            
                <p class="card-text">$${habilidadesEnCarro.precio}</p> 
                <button class= "btn btn-danger" id="botonEliminar${habilidad.id}"><i class="fas fa-trash-alt"></i></button>
        </div>    
    </div>
`
  })
}

//Evento de agregar al carro
botonCarrito.addEventListener("click", () => {
  cargarProductosCarrito(habilidadesEnCarro)
})

mostrarHabilidades(estanteria)