const operaciones = require("./operaciones");

function parsearArgumento(argv) {
  objetoRespuesta = {};
  if (argv.includes("+")) {
    objetoRespuesta.operacion = "+";
  }
  if (argv.includes("-")) {
    objetoRespuesta.operacion = "-";
  }
  if (argv.includes("/")) {
    objetoRespuesta.operacion = "/";
  }
  if (argv.includes("*")) {
    objetoRespuesta.operacion = "*";
  }

  const arrayNumeros = argv.split(objetoRespuesta.operacion);
  const primerNumero = parseFloat(arrayNumeros[0]);
  const segundoNumero = parseFloat(arrayNumeros[1]);

  objetoRespuesta.primerTermino = primerNumero;
  objetoRespuesta.segundoTermino = segundoNumero;

  return objetoRespuesta;
}

function mapaOperaciones(objeto) {
  const mapa = {
    "+": operaciones.sumar,
    "-": operaciones.restar,
    "/": operaciones.dividir,
    "*": operaciones.multiplicar,
  };
  var ejecutor = mapa[objeto.operacion];

  return ejecutor(objeto.primerTermino, objeto.segundoTermino);
}

function main() {
  const objetoArgumentos = parsearArgumento(process.argv[2]);

  const respuesta = mapaOperaciones(objetoArgumentos);

  console.log(respuesta);
}

main();

//esta modificacion la hice desde la nube, para pullear a local
