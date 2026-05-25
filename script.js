const informacionDinos = {

"Tyrannosaurus Rex": {

    descripcion:
    "El Tyrannosaurus Rex, también conocido como T-Rex, fue uno de los dinosaurios carnívoros más grandes y famosos de toda la historia. Su nombre significa “rey lagarto tirano” y vivió hace aproximadamente entre 68 y 66 millones de años durante el periodo Cretácico tardío, poco antes de la gran extinción de los dinosaurios.",

    tamaño:
    "13 metros de largo.",

    peso:
    "Entre 8 y 10 toneladas.",

    alimentacion:
    "Carnívoro.",

    velocidad:
    "27 km/h.",

    dato:
    "Su mordida podía romper huesos fácilmente."
},

"Triceratops": {

    descripcion:
    "El Triceratops su nombre significa “cara de tres cuernos” fue un dinosaurio herbívoro que vivió hace aproximadamente 68 millones de años durante el periodo Cretácico tardío.",

    tamaño:
    "9 metros de largo.",

    peso:
    "12 toneladas.",

    alimentacion:
    "Herbívoro.",

    velocidad:
    "32 km/h.",

    dato:
    "Usaba sus cuernos para defenderse."
},

"Velociraptor": {

    descripcion:
    "El Velociraptor fue un dinosaurio carnívoro que vivió hace aproximadamente entre 75 y 71 millones de años durante el periodo Cretácico tardío. Su nombre significa “ladrón veloz” debido a la rapidez y habilidad que tenía para cazar. Era un cazador muy inteligente y rápido. Se alimentaba de pequeños animales y otros dinosaurios más pequeños. Los científicos creen que podía cazar en grupo para atrapar presas más grandes y peligrosas.

Una de sus características más famosas era la enorme garra curva que tenía en cada pata trasera. Esa garra podía medir varios centímetros y la utilizaba para atacar y sujetar a sus presas. Además tenía dientes afilados y mandíbulas fuertes.",

    tamaño:
    "2 metros de largo.",

    peso:
    "15 kg.",

    alimentacion:
    "Carnívoro.",

    velocidad:
    "40 km/h.",

    dato:
    "Tenía garras muy afiladas."
},

"Spinosaurus": {

    descripcion:
    "El Spinosaurus fue uno de los dinosaurios carnívoros más grandes que existieron. Vivió hace aproximadamente entre 112 y 93 millones de años durante el periodo Cretácico. Su nombre significa “lagarto espina” debido a las enormes espinas que tenía en la espalda formando una especie de vela gigante. Una de sus características más impresionantes era la enorme vela de su espalda formada por largas espinas óseas cubiertas de piel. Esa vela podía medir más de un metro y medio de altura y posiblemente le ayudaba a regular su temperatura, atraer pareja o intimidar enemigos.",

    tamaño:
    "15 metros de largo.",

    peso:
    "12 toneladas.",

    alimentacion:
    "Carnívoro.",

    velocidad:
    "Excelente nadador.",

    dato:
    "Tenía una gran vela en la espalda."
},

"Ankylosaurus": {

    descripcion:
    "El Ankylosaurus fue un dinosaurio herbívoro que vivió hace aproximadamente entre 68 y 66 millones de años durante el periodo Cretácico tardío. Su nombre significa “lagarto acorazado” porque tenía el cuerpo cubierto por una gruesa armadura ósea que lo protegía de los depredadores.Una de sus características más famosas era la enorme maza que tenía al final de la cola. Esa cola funcionaba como un martillo gigante y podía golpear con muchísima fuerza para defenderse de depredadores como el Tyrannosaurus Rex.

El Ankylosaurus vivía principalmente en zonas de bosques y llanuras de lo que actualmente es Norteamérica. Gracias a su increíble armadura es considerado uno de los dinosaurios mejor protegidos de toda la prehistoria.",

    tamaño:
    "7 metros.",

    peso:
    "6 toneladas.",

    alimentacion:
    "Herbívoro.",

    velocidad:
    "Muy lento.",

    dato:
    "Su cola funcionaba como un martillo."
},

"Brachiosaurus": {

    descripcion:
    "El Brachiosaurus fue uno de los dinosaurios más altos que existieron. Vivió hace aproximadamente entre 154 y 153 millones de años durante el periodo Jurásico. Su nombre significa “lagarto brazo” porque sus patas delanteras eran más largas que las traseras.El Brachiosaurus fue uno de los dinosaurios más altos que existieron. Vivió hace aproximadamente entre 154 y 153 millones de años durante el periodo Jurásico. Su nombre significa “lagarto brazo” porque sus patas delanteras eran más largas que las traseras.",

    tamaño:
    "12 metros de altura.",

    peso:
    "50 toneladas.",

    alimentacion:
    "Herbívoro.",

    velocidad:
    "Muy lento.",

    dato:
    "Podía alcanzar árboles gigantes."
}

};

function mostrarInfo(nombre){

    const dino = informacionDinos[nombre];

    document.getElementById("modal").style.display = "flex";

    document.getElementById("tituloModal").innerText = nombre;

    document.getElementById("textoModal").innerHTML = `

    <p>${dino.descripcion}</p>

    <br>

    <p><strong>Tamaño:</strong> ${dino.tamaño}</p>

    <p><strong>Peso:</strong> ${dino.peso}</p>

    <p><strong>Alimentación:</strong> ${dino.alimentacion}</p>

    <p><strong>Velocidad:</strong> ${dino.velocidad}</p>

    <br>

    <p><strong>Dato curioso:</strong> ${dino.dato}</p>

    `;
}

function cerrarModal(){

    document.getElementById("modal").style.display = "none";
}

function resultado(dino){

    document.getElementById("resultado").innerText =
    "Tu dinosaurio sería: " + dino;
}

const dinos = [

"Tyrannosaurus Rex",
"Velociraptor",
"Triceratops",
"Spinosaurus",
"Ankylosaurus",
"Brachiosaurus",
"Stegosaurus",
"Diplodocus",
"Allosaurus"

];

const random =
dinos[Math.floor(Math.random() * dinos.length)];

document.getElementById("dinoRandom").innerText =
"Hoy te tocó investigar sobre: " + random;

const btnModo =
document.getElementById("modoBtn");

btnModo.addEventListener("click", ()=>{

    document.body.classList.toggle("light");

});

const meteorito =
document.getElementById("meteorito");

window.addEventListener("scroll", ()=>{

    const section =
    document.getElementById("extincion");

    const posicion =
    section.getBoundingClientRect().top;

    if(posicion < window.innerHeight - 100){

        meteorito.classList.add("caer");
    }

});

const konami = [

"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"

];

let posicion = 0;

document.addEventListener("keydown", (e)=>{

    if(e.key === konami[posicion]){

        posicion++;

        if(posicion === konami.length){

            document.getElementById("konamiDino").style.display = "block";

            posicion = 0;
        }

    }else{

        posicion = 0;
    }

});
