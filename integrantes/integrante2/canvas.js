// CREATIVE CODE STUDIO
// Programación del Canvas

// 1. OBTENER EL CANVAS

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

const ancho = canvas.width;
const alto = canvas.height;


// 2. DEFINIR PALETAS

const paletas = {

    Amanecer: [
        "#304855",
        "#509bad",
        "#c9cd8b",
        "#437989",
        "#b8a568",
        "#0b566d",
        "#0f2b376f",
        "#031435b5"
    ],

    Atardecer: [
        "#390737",
        "#8f3e44",
        "#fd9f77",
        "#f84c0d4d",
        "#dc561d",
        "#933328",
        "#6a1b009c",
        "#0e0730ce"
    ],

    Anochecer: [
        "#0b1012",
        "#20213f",
        "#ffed62b5",
        "#720606",
        "#ffa72c99",
        "#930404",
        "#000000c8",
        "#031435b5"
    ]
};


let paletaActual = paletas.Amanecer


function aleatorio(minimo, maximo) {

    return Math.random() * (maximo - minimo) + minimo;

}


function dibujarFondo() {

    const degradado = ctx.createLinearGradient(
        0, 0, 100, ancho, alto
    );

    degradado.addColorStop(0, paletaActual[0]);
    degradado.addColorStop(1, paletaActual[1]);

    ctx.fillStyle = degradado;

    ctx.fillRect(0, 0, ancho, alto);
}

function dibujarSombra() {

    const degradado = ctx.createLinearGradient(
        0, 0, 100, ancho, alto
    );

    degradado.addColorStop(0, paletaActual[6]);
    degradado.addColorStop(1, paletaActual[7]);

    ctx.fillStyle = degradado;

    ctx.fillRect(0, 380, ancho, 300);
}

function dibujarLuna() {

    ctx.beginPath();

    ctx.arc(
        300,
        370,
        150,
        0,
        Math.PI * 2
    );

    const degradado = ctx.createLinearGradient(
        0, 0, ancho, alto
    );

    degradado.addColorStop(0, "#f5f2e0");
    degradado.addColorStop(1, "#f5efdf");

    ctx.fillStyle = degradado;

    ctx.fill();
}

function dibujarBrillo1() {

    ctx.beginPath();

    ctx.arc(
        300,
        370,
        200,
        0,
        Math.PI * 2
    );

    const degradado = ctx.createLinearGradient(
        0, 0, 100, ancho, alto
    );

    degradado.addColorStop(0, paletaActual[2]);
    degradado.addColorStop(1, paletaActual[3]);

    ctx.fillStyle = degradado;

    ctx.fill();
}

function dibujarBrillo2() {

    ctx.beginPath();

    ctx.arc(
        300,
        370,
        250,
        0,
        Math.PI * 2
    );

    const degradado = ctx.createLinearGradient(
        0, 0, 100, ancho, alto
    );

    degradado.addColorStop(0, paletaActual[4]);
    degradado.addColorStop(1, paletaActual[5]);

    ctx.fillStyle = degradado;

    ctx.fill();
}

function dibujarNube () {

    ctx.beginPath();
    ctx.arc(
        20,
        360,
        50,
        0,
        Math.PI * 2
    );

    const degradado = ctx.createLinearGradient(
        0, 0, ancho, alto
    );

    degradado.addColorStop(0, "#f8f8f2");
    degradado.addColorStop(1, "#fdfdfd");

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        18,
        400,
        50,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        90,
        370,
        35,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        60,
        430,
        25,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        70,
        340,
        24,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        95,
        400,
        30,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        130,
        380,
        25,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        160,
        380,
        18,
        Math.PI,
        0,
        false
    );

    ctx.fillStyle = degradado;
    ctx.fill ();


    ctx.beginPath();
    ctx.arc(
        180,
        380,
        12,
        Math.PI,
        0,
        false
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        195,
        380,
        8,
        Math.PI,
        0,
        false
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    //ladoderecho

    ctx.beginPath();
    ctx.arc(
        500,
        370,
        50,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        480,
        400,
        50,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        440,
        380,
        35,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        540,
        410,
        25,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        470,
        340,
        24,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        560,
        380,
        30,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        600,
        380,
        25,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = degradado;
    ctx.fill ();

    ctx.beginPath();
    ctx.arc(
        400,
        380,
        18,
        Math.PI,
        0,
        false
    );

    ctx.fillStyle = degradado;
    ctx.fill ();


    ctx.beginPath();
    ctx.arc(
        380,
        380,
        12,
        Math.PI,
        0,
        false
    );

    ctx.fillStyle = degradado;
    ctx.fill ();
}

function dibujarHuecos() {

    ctx.beginPath();
    ctx.arc(
        380,
        300,
        20,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#e8ddc39b";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
        230,
        290,
        40,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#e8ddc39b";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
        380,
        450,
        20,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#e8ddc39b";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
        230,
        450,
        40,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#e8ddc39b";
    ctx.fill();
}


function dibujarCirculo(x, y, radio) {

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        radio,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#ffff";
    ctx.fill();
}

function dibujarLinea(x, y, tamaño, color) {

    ctx.beginPath();

    ctx.moveTo(x, y);

    ctx.lineTo(
        x + tamaño,
        y - tamaño
    );

    ctx.strokeStyle = "#ffff";
    ctx.lineWidth = 2;

    ctx.stroke();
}

function dibujarOla(x, y, longitud, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + longitud, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.stroke();
}



// 7. DIBUJAR FORMAS ALEATORIAS

function dibujarEstrellas() {

    for (let i = 0; i < 40; i++) {

        let x = aleatorio(0, ancho);
        let y = aleatorio(0, alto);

        let tamaño = aleatorio(1, 10);

        let color = "#ffff"

        if (i % 1 === 0) {

            dibujarCirculo(
                x,
                y,
                tamaño / 2,
                color
            );
        }
    }
}

function dibujarLineas() {

    for (let i = 0; i < 5; i++) {

        let tamaño = aleatorio(20, 40);

        let x = aleatorio(0, ancho - tamaño);
        let y = aleatorio(tamaño, 370);

        let color = paletaActual[
            2 + (i % 3)
        ];

        dibujarLinea(
            x,
            y,
            tamaño,
            color
        );
    }
}

function dibujarOlas() {
    for (let i = 0; i < 15; i++) {
        let y = aleatorio(390, alto);
        let longitud = aleatorio(10, 50);
        let x = aleatorio(0, alto - longitud);
        let color = paletaActual[2 + (i % 3)];

        dibujarOla(x, y, longitud, color);
    }
}


// 8. DIBUJAR TEXTO

function dibujarTexto() {

    ctx.fillStyle = "#ffffff";

    ctx.textAlign = "center";

    ctx.font = "bold 32px Poppins";

    ctx.fillText(
        "Paisaje",
        ancho / 2,
        alto / 2 - 15
    );

    ctx.fillText(
        "Interactivo",
        ancho / 2,
        alto / 2 + 55
    );

    ctx.font = "10px Poppins";

    ctx.fillText(
        "ART + LOGIC + DESIGN",
        ancho / 2,
        alto - 45
    );
}




function generarComposicion() {

  

    ctx.clearRect(0, 0, ancho, alto);

    dibujarFondo();

    dibujarBrillo2();

    dibujarBrillo1();

    dibujarEstrellas();

    dibujarLuna();

    dibujarNube();

    dibujarHuecos();

    dibujarLineas();

    dibujarSombra();

    dibujarOlas();

    dibujarTexto();

}


// 10. BOTONES DE COLORES

document.getElementById("Amanecer")
    .addEventListener("click", function() {

        paletaActual = paletas.Amanecer;

        generarComposicion();

    });


document.getElementById("Atardecer")
    .addEventListener("click", function() {

        paletaActual = paletas.Atardecer;

        generarComposicion();

    });


document.getElementById("Anochecer")
    .addEventListener("click", function() {

        paletaActual = paletas.Anochecer;

        generarComposicion();

    });



document.getElementById("generar")
    .addEventListener("click", function() {

        generarComposicion();

    });




document.getElementById("guardar")
    .addEventListener("click", function() {

        const enlace = document.createElement("a");

        enlace.download = "mi-arte-canvas.png";

        enlace.href = canvas.toDataURL("image/png");

        enlace.click();

    });

generarComposicion();