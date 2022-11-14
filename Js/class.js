//Contructor de productos
class Habilidad {
    constructor(id, lenguaje, nivel, horas, imagen) {
        //atributos
            this.id = id,
            this.lenguaje = lenguaje,
            this.nivel = nivel,
            this.horas = horas,
            this.imagen = imagen
    }
    //metodo
    mostraData() {
        console.log(`El lenguaje es ${this.lenguaje}, el nivel es ${this.nivel} y su cantidad de horas son ${this.horas}`)
    }
}
//Especificamos informacion de las habilidades
const habilidad1 = new Habilidad (1,"Html","Principiante",48,"html.png")

const habilidad2 = new Habilidad (2,"Css", "Principiante", 34,"css.png")

const habilidad3 = new Habilidad (3, "JavaScript", "Intermedio", 29,"javascript.png")

const habilidad4 = new Habilidad (4, "React", "Intermedio",53,"logoreact.png")

//creamos array de stock
let estanteria=[]
//Evalua si entra por primera vez a la pagina
//Inicializamos estanterias con operador OR
if(localStorage.getItem("estanteria")){
    estanteria=JSON.parse(localStorage.getItem("estanteria"))
}
else{
    //Si entra por primera vez ser resetea el array original
    console.log("Seteando array original")
    estanteria.push(habilidad1, habilidad2, habilidad3, habilidad4,)
    localStorage.setItem("estanteria", JSON.stringify (estanteria))
}