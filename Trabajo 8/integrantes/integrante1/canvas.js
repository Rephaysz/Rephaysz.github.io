// Busca en el documento HTML el elemento <canvas> cuyo id es "lienzo".
let lienzo = document.getElementById("lienzo");
// Obtiene el contexto 2D: permite dibujar rectángulos, círculos, líneas y texto.
let ctx = lienzo.getContext("2d");

// Guarda el ancho definido en el elemento canvas; aquí es 900 píxeles.
let ancho = lienzo.width;
// Guarda el alto definido en el elemento canvas; aquí son 600 píxeles.
let alto = lienzo.height;
// Define la altura a la que termina el cielo y comienza el suelo.
let horizonte = 390;
// Lleva la cuenta del nivel mostrado actualmente.
let nivel = 1;

// ----- Arreglos: paletas de colores -----
// Cada arreglo guarda cinco colores en este orden: cielo superior, cielo inferior,
// sol, acento y detalles claros.
let paleta1 = ["#0f1530", "#D93250", "#f3c969", "#138a8f", "#ffffff"];
let paleta2 = ["#05010f", "#5b1c8c", "#ff4fd8", "#2de2e6", "#f9f871"];
let paleta3 = ["#0f380f", "#306230", "#9bbc0f", "#8bac0f", "#e0f8d0"];

// Inicializa la composición con la primera paleta de colores.
let colores = paleta1;

// ----- Función para números al azar -----
// Devuelve un número decimal aleatorio dentro del intervalo indicado.
function numeroAlAzar(minimo, maximo) {
  // Math.random() genera un valor entre 0 (incluido) y 1 (excluido).
  // Se multiplica por el tamaño del intervalo y se suma al mínimo.
  return minimo + Math.random() * (maximo - minimo);
}

// ----- Funciones para dibujar figuras -----
// Dibuja un círculo relleno usando la posición central, el radio y el color.
function dibujarCirculo(x, y, radio, color) {
  // Inicia una nueva ruta de dibujo para no unir esta figura con otra.
  ctx.beginPath();
  // Calcula el arco completo del círculo desde 0 hasta dos veces pi.
  ctx.arc(x, y, radio, 0, Math.PI * 2);
  // Selecciona el color de relleno recibido.
  ctx.fillStyle = color;
  // Rellena el círculo con el color seleccionado.
  ctx.fill();
}

// Dibuja un rectángulo relleno desde una posición con un ancho y alto dados.
function dibujarRectangulo(x, y, anchoRect, altoRect, color) {
  // Selecciona el color que tendrá el rectángulo.
  ctx.fillStyle = color;
  // Pinta el rectángulo en las coordenadas y dimensiones indicadas.
  ctx.fillRect(x, y, anchoRect, altoRect);
}

// Dibuja un triángulo relleno usando las tres esquinas y el color recibidos.
function dibujarTriangulo(x1, y1, x2, y2, x3, y3, color) {
  // Inicia una nueva ruta para construir el triángulo.
  ctx.beginPath();
  // Coloca el lápiz virtual en la primera esquina.
  ctx.moveTo(x1, y1);
  // Traza una línea hacia la segunda esquina.
  ctx.lineTo(x2, y2);
  // Traza una línea desde la segunda esquina hacia la tercera.
  ctx.lineTo(x3, y3);
  // Une automáticamente la tercera esquina con la primera.
  ctx.closePath();
  // Guarda el color recibido para rellenar la figura.
  ctx.fillStyle = color;
  // Rellena el interior del triángulo.
  ctx.fill();
}

// Dibuja una línea entre dos puntos con el color indicado.
function dibujarLinea(x1, y1, x2, y2, color) {
  // Comienza una nueva ruta independiente.
  ctx.beginPath();
  // Coloca el inicio de la línea en el primer punto.
  ctx.moveTo(x1, y1);
  // Define el punto final de la línea.
  ctx.lineTo(x2, y2);
  // Asigna el color que tendrá el trazo.
  ctx.strokeStyle = color;
  // Define el grosor del trazo en píxeles.
  ctx.lineWidth = 1.5;
  // Renderiza la línea sobre el canvas.
  ctx.stroke();
}

// ----- Partes de la composición -----

// Crea el fondo: cielo degradado y suelo oscuro.
function dibujarFondo() {
  // Crea un degradado vertical desde arriba hasta la línea del horizonte.
  let degradado = ctx.createLinearGradient(0, 0, 0, horizonte);
  // Asigna el primer color al inicio superior del degradado.
  degradado.addColorStop(0, colores[0]);
  // Asigna el segundo color al final inferior del degradado.
  degradado.addColorStop(1, colores[1]);
  // Usa el degradado como color de relleno.
  ctx.fillStyle = degradado;
  // Pinta el área de cielo hasta el horizonte.
  ctx.fillRect(0, 0, ancho, horizonte);

  // Pinta la parte restante como suelo de color oscuro.
  dibujarRectangulo(0, horizonte, ancho, alto - horizonte, "#0a0a14");
}

// Dibuja 50 estrellas pequeñas dentro de la zona superior del cielo.
function dibujarEstrellas() {
  // Repite 50 veces para crear cada estrella.
  for (let i = 0; i < 50; i++) {
    // Genera una posición horizontal aleatoria.
    let x = numeroAlAzar(0, ancho);
    // Genera una posición vertical aleatoria sobre el cielo.
    let y = numeroAlAzar(0, horizonte - 150);
    // Pinta una estrella cuadrada de 2 por 2 píxeles.
    dibujarRectangulo(x, y, 2, 2, colores[4]);
  }
}

// Dibuja un sol retro con franjas horizontales que parecen cortarlo.
function dibujarSol() {
  // Elige una posición horizontal aleatoria dentro de un margen seguro.
  let x = numeroAlAzar(250, ancho - 250);
  // Sitúa el sol aproximadamente 110 píxeles sobre el horizonte.
  let y = horizonte - 110;
  // Dibuja el círculo principal del sol.
  dibujarCirculo(x, y, 100, colores[2]);

  // Repite cinco veces para dibujar las franjas inferiores.
  for (let i = 0; i < 5; i++) {
    // Cada franja cambia ligeramente su grosor y desciende unos píxeles.
    dibujarRectangulo(x - 100, y + 20 + i * 16, 200, 3 + i, colores[1]);
  }
}

// Dibuja siete montañas triangulares sobre el horizonte.
function dibujarMontanas() {
  // Repite el proceso una vez por montaña.
  for (let i = 0; i < 7; i++) {
    // Elige una posición horizontal aleatoria.
    let x = numeroAlAzar(0, ancho);
    // Elige un ancho aleatorio para esta montaña.
    let anchoMontana = numeroAlAzar(160, 300);
    // Elige una altura aleatoria para esta montaña.
    let altoMontana = numeroAlAzar(60, 160);

    // Declara una variable que guardará el color seleccionado.
    let color;
    // Los índices pares usan el primer color de la paleta.
    if (i % 2 === 0) {
      color = colores[0];
    } else {
      // Los índices impares usan un gris oscuro fijo.
      color = "#1a1a2e";
    }

    // Dibuja el triángulo usando su base, vértice superior y color.
    dibujarTriangulo(x - anchoMontana / 2, horizonte, x, horizonte - altoMontana, x + anchoMontana / 2, horizonte, color);
  }
}

// Dibuja una cuadrícula de perspectiva sobre el suelo.
function dibujarSuelo() {
  // Calcula el centro horizontal del canvas.
  let centro = ancho / 2;

  // Recorre 25 posiciones para crear las líneas que divergen hacia fuera.
  for (let i = -12; i <= 12; i++) {
    // La línea comienza cerca del centro y termina más separada en la parte baja.
    dibujarLinea(centro + i * 18, horizonte, centro + i * 140, alto, colores[3]);
  }

  // Recorre nueve niveles para dibujar las líneas horizontales.
  for (let i = 1; i < 10; i++) {
    // Eleva cada línea usando un crecimiento cuadrático para simular perspectiva.
    let y = horizonte + i * i * 2.5;
    // Dibuja una línea horizontal a esa altura.
    dibujarLinea(0, y, ancho, y, colores[3]);
  }
}

// Dibuja 18 objetos flotantes que pueden ser monedas, bloques o gemas.
function dibujarObjetos() {
  // Repite el proceso para crear cada objeto.
  for (let i = 0; i < 18; i++) {
    // Calcula una posición horizontal distribuida con una variación aleatoria.
    let x = 40 + i * 48 + numeroAlAzar(-15, 15);
    // Calcula una posición vertical aleatoria dentro del cielo.
    let y = numeroAlAzar(190, horizonte - 30);
    // Elige un tamaño aleatorio para el objeto.
    let tam = numeroAlAzar(14, 26);
    // Obtiene otro valor aleatorio para decidir el tipo de figura.
    let tipo = Math.random();

    // Si el valor es menor que 0.33, se dibuja una moneda.
    if (tipo < 0.33) {
      // Dibuja el círculo exterior con el color del sol.
      dibujarCirculo(x, y, tam, colores[2]);
      // Dibuja el círculo interior con el segundo color de la paleta.
      dibujarCirculo(x, y, tam * 0.6, colores[1]);
    } else if (tipo < 0.66) {
      // Si el valor es menor que 0.66, se dibuja un bloque.
      // Pinta el contorno cuadrado con el color del sol.
      dibujarRectangulo(x - tam / 2, y - tam / 2, tam, tam, colores[2]);
      // Pinta el interior desplazado y reducido con el segundo color.
      dibujarRectangulo(x - tam / 2 + 4, y - tam / 2 + 4, tam - 8, tam - 8, colores[1]);
    } else {
      // Para valores restantes, se dibuja una gema de dos partes.
      // Dibuja la mitad superior de la gema.
      dibujarTriangulo(x - tam / 2, y, x, y - tam / 2, x + tam / 2, y, colores[3]);
      // Dibuja la mitad inferior con el color claro de detalle.
      dibujarTriangulo(x - tam / 2, y, x, y + tam / 1.5, x + tam / 2, y, colores[4]);
    }
  }
}

// Dibuja un robot construido con rectángulos y círculos.
function dibujarRobot() {
  // Elige una posición horizontal aleatoria dejando margen al lado derecho.
  let x = numeroAlAzar(60, ancho - 120);
  // Sitúa el personaje cerca de la parte inferior del canvas.
  let y = alto - 110;

  // Dibuja la punta de la antena como un pequeño círculo.
  dibujarCirculo(x + 30, y - 8, 5, colores[1]);
  // Dibuja el soporte vertical de la antena.
  dibujarRectangulo(x + 28, y - 4, 4, 8, "#111111");
  // Dibuja la cabeza con el color de acento.
  dibujarRectangulo(x + 6, y + 4, 48, 32, colores[3]);
  // Dibuja el ojo izquierdo con el color claro.
  dibujarRectangulo(x + 14, y + 14, 10, 10, colores[4]);
  // Dibuja el ojo derecho con el color claro.
  dibujarRectangulo(x + 36, y + 14, 10, 10, colores[4]);
  // Dibuja el cuerpo usando el segundo color de la paleta.
  dibujarRectangulo(x, y + 40, 60, 34, colores[1]);
  // Dibuja la pierna izquierda en gris oscuro.
  dibujarRectangulo(x + 10, y + 74, 12, 16, "#111111");
  // Dibuja la pierna derecha en gris oscuro.
  dibujarRectangulo(x + 38, y + 74, 12, 16, "#111111");
}

// Escribe el título, el nivel, el puntaje y la firma dentro del canvas.
function dibujarTextos() {
  // Hace que todos los textos estén centrados por defecto.
  ctx.textAlign = "center";

  // Define una fuente grande de 72 píxeles para el título.
  ctx.font = "72px Iceberg, sans-serif";
  // Usa el color del sol para el título.
  ctx.fillStyle = colores[2];
  // Escribe el título horizontalmente centrado, a 110 píxeles desde arriba.
  ctx.fillText("NIVEL INFINITO", ancho / 2, 110);

  // Reduce la fuente a 22 píxeles para el subtítulo.
  ctx.font = "22px Iceberg, sans-serif";
  // Usa el color claro de detalle.
  ctx.fillStyle = colores[4];
  // Muestra el número de nivel y una frase descriptiva.
  ctx.fillText("Nivel " + nivel + " - cada partida es unica", ancho / 2, 148);

  // Cambia la alineación para colocar el puntaje desde el lado izquierdo.
  ctx.textAlign = "left";
  // Define una fuente de 20 píxeles.
  ctx.font = "20px Iceberg, sans-serif";
  // Calcula el puntaje como mil puntos por nivel y lo muestra arriba a la izquierda.
  ctx.fillText("SCORE " + nivel * 1000, 20, 35);

  // Cambia la alineación para colocar la firma desde el lado derecho.
  ctx.textAlign = "right";
  // Reduce la fuente a 16 píxeles.
  ctx.font = "16px Iceberg, sans-serif";
  // Escribe el nombre del creador y el grupo cerca de la esquina inferior derecha.
  ctx.fillText("Rephaysz - Grupo OSH", ancho - 20, alto - 15);
}

// ----- Función principal: dibuja toda la composición -----
// Ejecuta, en orden, las funciones que forman el nivel completo.
function dibujarComposicion() {
  dibujarFondo();      // Pinta cielo y suelo.
  dibujarEstrellas();  // Añade las estrellas.
  dibujarSol();        // Añade el sol retro.
  dibujarMontanas();   // Añade las montañas.
  dibujarSuelo();      // Añade la cuadrícula inferior.
  dibujarObjetos();    // Añade monedas, bloques y gemas.
  dibujarRobot();      // Añade el personaje.
  dibujarTextos();     // Añade títulos y datos.
}

// ----- Eventos de los botones -----
// Busca el botón que selecciona la primera paleta.
let btnPaleta1 = document.getElementById("btnPaleta1");
// Busca el botón que selecciona la segunda paleta.
let btnPaleta2 = document.getElementById("btnPaleta2");
// Busca el botón que selecciona la tercera paleta.
let btnPaleta3 = document.getElementById("btnPaleta3");
// Busca el botón que genera un nuevo nivel.
let btnGenerar = document.getElementById("btnGenerar");
// Busca el botón que descarga la imagen.
let btnGuardar = document.getElementById("btnGuardar");

// Escucha los clics realizados sobre el primer botón de paleta.
btnPaleta1.addEventListener("click", function () {
  // Cambia la paleta activa a la combinación inicial.
  colores = paleta1;
  // Redibuja toda la composición con los nuevos colores.
  dibujarComposicion();
});

// Escucha los clics realizados sobre el segundo botón de paleta.
btnPaleta2.addEventListener("click", function () {
  // Cambia la paleta activa a la combinación neón.
  colores = paleta2;
  // Redibuja toda la composición con los nuevos colores.
  dibujarComposicion();
});

// Escucha los clics realizados sobre el tercer botón de paleta.
btnPaleta3.addEventListener("click", function () {
  // Cambia la paleta activa a la combinación verde.
  colores = paleta3;
  // Redibuja toda la composición con los nuevos colores.
  dibujarComposicion();
});

// Escucha los clics realizados sobre el botón Generar nivel.
btnGenerar.addEventListener("click", function () {
  // Incrementa el contador del nivel actual.
  nivel = nivel + 1;
  // Vuelve a dibujar y cambia las posiciones y tamaños aleatorios.
  dibujarComposicion();
});

// Escucha los clics realizados sobre el botón Guardar PNG.
btnGuardar.addEventListener("click", function () {
  // Crea un enlace temporal sin mostrarlo en la página.
  let enlace = document.createElement("a");
  // Define el nombre que tendrá el archivo descargado.
  enlace.download = "nivel-infinito.png";
  // Convierte el dibujo del canvas en una URL de imagen PNG.
  enlace.href = lienzo.toDataURL("image/png");
  // Simula un clic para iniciar la descarga.
  enlace.click();
});

// ----- Dibujo inicial al abrir la página -----
// Dibuja automáticamente el nivel inicial cuando el script termina de cargar.
dibujarComposicion();

// También vuelve a dibujar la composición cuando termina de cargar la página.
// Esto garantiza que la fuente Iceberg esté disponible antes del último dibujo.
window.addEventListener("load", dibujarComposicion);
