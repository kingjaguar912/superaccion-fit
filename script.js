// Menú de navegación
const botonMenu = document.querySelector("#menu-toggle");
const navegacionPrincipal = document.querySelector("#main-nav");

function cerrarMenu() {
  navegacionPrincipal.classList.remove("nav-open");
  botonMenu.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

botonMenu.addEventListener("click", () => {
  const menuAbierto = navegacionPrincipal.classList.toggle("nav-open");

  botonMenu.setAttribute("aria-expanded", String(menuAbierto));
  document.body.classList.toggle("menu-open", menuAbierto);
});

navegacionPrincipal.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", cerrarMenu);
});

// Sugerencias de comida //
const botonIdeaComida = document.querySelector("#food-button");
const botonActualizarIdea = document.querySelector("#food-refresh");
const panelIdeaComida = document.querySelector("#food-suggestion");
const textoIdeaComida = document.querySelector("#food-suggestion-text");

const ideasDeComida = [
  "Si hoy comés arroz, probá sumarle un huevo y alguna verdura que tengas a mano. Un cambio pequeño puede hacer el plato más variado.",
  "¿Tostadas para desayunar? Podés acompañarlas con fruta o yogur, si tenés. No hace falta complicar la mañana.",
  "A una pasta sencilla podés agregarle tomate, zanahoria rallada o una legumbre. Elegí lo que tengas en casa.",
  "Si tu almuerzo suele ser muy liviano, agregá una fuente de proteína como huevo, pollo, lentejas o porotos.",
  "Hoy pensá en sumar un color a tu plato: una fruta o verdura que te guste y que sea fácil de conseguir.",
  "¿Merienda rápida? Un sándwich simple puede quedar más completo si combinás pan, huevo o queso y alguna verdura.",
];

function mostrarIdeaDeComida() {
  const indiceAleatorio = Math.floor(Math.random() * ideasDeComida.length);

  textoIdeaComida.textContent = ideasDeComida[indiceAleatorio];
  panelIdeaComida.hidden = false;
}

botonIdeaComida.addEventListener("click", mostrarIdeaDeComida);
botonActualizarIdea.addEventListener("click", mostrarIdeaDeComida);

const formularioContacto = document.querySelector("#contact-form");
const campoNombre = document.querySelector("#contact-name");
const campoEmail = document.querySelector("#contact-email");
const campoMensaje = document.querySelector("#contact-message");
const errorNombre = document.querySelector("#name-error");
const errorEmail = document.querySelector("#email-error");
const errorMensaje = document.querySelector("#message-error");
const mensajeExito = document.querySelector("#form-success");

function validarNombre(mensajeError) {
  const nombreValido = campoNombre.value.trim().length >= 2;

  errorNombre.textContent = nombreValido ? "" : mensajeError;
  return nombreValido;
}

function validarEmail(mensajeRequerido, mensajeInvalido) {
  const emailIngresado = campoEmail.value.trim() !== "";
  const emailValido = emailIngresado && campoEmail.checkValidity();

  if (!emailIngresado) {
    errorEmail.textContent = mensajeRequerido;
  } else if (!emailValido) {
    errorEmail.textContent = mensajeInvalido;
  } else {
    errorEmail.textContent = "";
  }

  return emailValido;
}

function validarMensaje() {
  const mensajeValido = campoMensaje.value.trim() !== "";

  errorMensaje.textContent = mensajeValido
    ? ""
    : "Contanos algo para poder orientarte.";
  return mensajeValido;
}

function limpiarEstadoDeEnvio() {
  mensajeExito.textContent = "";
}

campoNombre.addEventListener("input", () => {
  validarNombre("Ingresá al menos 2 caracteres.");
  limpiarEstadoDeEnvio();
});

campoEmail.addEventListener("input", () => {
  validarEmail("Ingresá tu email.", "Revisá el formato del correo.");
  limpiarEstadoDeEnvio();
});

campoMensaje.addEventListener("input", () => {
  validarMensaje();
  limpiarEstadoDeEnvio();
});
 
formularioContacto.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const nombreValido = validarNombre(
    "Ingresá un nombre de al menos 2 caracteres.",
  );
  const emailValido = validarEmail(
    "Ingresá tu email.",
    "Ingresá un email válido.",
  );
  const mensajeValido = validarMensaje();
  const formularioValido = nombreValido && emailValido && mensajeValido;

  if (!formularioValido) {
    return;
  }

  const pilaresSeleccionados = [
    ...document.querySelectorAll('input[name="pillar"]:checked'),
  ].map((opcion) => opcion.value);

  const datosConsulta = {
    name: campoNombre.value,
    email: campoEmail.value,
    pillar: pilaresSeleccionados,
    message: campoMensaje.value,
  };

  try {
    const respuesta = await fetch("http://localhost:3000/api/consultas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosConsulta),
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok) {
      throw new Error(resultado.mensaje);
    }

    mensajeExito.textContent = resultado.mensaje;
    formularioContacto.reset();

  } catch (error) {
    console.error("Error al enviar la consulta:", error);
    mensajeExito.textContent =
      "No pudimos enviar tu consulta. Intentá nuevamente.";
  }
});
