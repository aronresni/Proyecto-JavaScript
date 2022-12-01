//Contructor de productos
class Habilidad {
    constructor(id, lenguaje, stack, horas, imagen) {
        //atributos
            this.id = id,
            this.lenguaje = lenguaje,
            this.stack = stack,
            this.horas = horas,
            this.imagen = imagen
    }
    //metodo
    mostraData() {
        console.log(`El lenguaje es ${this.lenguaje}, el nivel es ${this.stack} y su cantidad de horas son ${this.horas}`)
    }
}
//Especificamos informacion de las habilidades
/*
const habilidad1 = new Habilidad (1,"Html","Principiante",48,"html.png")

const habilidad2 = new Habilidad (2,"Css", "Principiante", 34,"css.png")

const habilidad3 = new Habilidad (3, "JavaScript", "Intermedio", 29,"javascript.png")

const habilidad4 = new Habilidad (4, "React", "Intermedio",53,"logoreact.png")

const habilidad5 = new Habilidad (5, "Solidity", "Dificil" ,67, "solidity.png")

const habilidad6 = new Habilidad (6, "Ruby", "Intermedio" ,47, "ruby.png")

const habilidad7 = new Habilidad (7, "MySQL", "Dificil" ,45, "mysql.png")
*/
//creamos array de stock

let estanteria = []
const cargarEstanteria = async () => {
    //ruta relativa del html al .Json y abrimos con liver Server
    const response = await fetch("../challenge.json")
    const data = await response.json()
    console.log(data)
    for (let habilidad of data) {
        let habilidadNueva = new Habilidad(habilidad.id, habilidad.lenguaje, habilidad.stack, habilidad.horas, habilidad.imagen)
        estanteria.push(habilidadNueva)
    }

}
cargarEstanteria()
console.log(estanteria)
//Evalua si entra por primera vez a la pagina
//Inicializamos estanterias con operador OR
if (localStorage.getItem("estanteria")) {
    estanteria = JSON.parse(localStorage.getItem("estanteria"))
}
else {
    //Si entra por primera vez ser resetea el array original
    console.log("Seteando array original")
    cargarEstanteria()
    console.log(estanteria)
    localStorage.setItem("estanteria", JSON.stringify(estanteria))
}