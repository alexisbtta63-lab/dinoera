const informacionDinos = {

"Tyrannosaurus Rex": {

    descripcion:
    "El Tyrannosaurus Rex, también conocido como T-Rex, fue uno de los dinosaurios carnívoros más grandes y famosos de toda la historia. Su nombre significa rey lagarto tirano y vivió hace aproximadamente entre 68 y 66 millones de años durante el periodo Cretácico tardío.",

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
    "El Triceratops fue un dinosaurio herbívoro conocido por sus tres cuernos gigantes y su enorme escudo óseo. Vivió durante el periodo Cretácico tardío y se defendía de depredadores como el T-Rex.",

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
    "El Velociraptor fue un dinosaurio carnívoro pequeño pero muy inteligente. Era rápido, ágil y cazaba pequeños animales utilizando sus enormes garras curvas.",

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
    "El Spinosaurus fue uno de los dinosaurios carnívoros más grandes que existieron. Se caracterizaba por la enorme vela en su espalda y por ser un excelente nadador.",

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
    "El Ankylosaurus fue un dinosaurio herbívoro protegido por una gruesa armadura natural. Su cola funcionaba como un enorme martillo para defenderse.",

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
    "El Brachiosaurus fue uno de los dinosaurios más altos del planeta. Gracias a su enorme cuello podía alcanzar árboles gigantes para alimentarse.",

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

const dinos = [

"Tyrannosaurus Rex",
"Velociraptor",
"Triceratops",
"Spinosaurus",
"Ankylosaurus",
"Brachiosaurus"

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
