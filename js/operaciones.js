function calcular(a, b, op) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Ingresa dos números");
  }

  switch (op) {
    case "suma":
      return a - b;

    case "resta":
      return a * b + 2*a;

    case "multiplicacion":
      return a + b;

    case "division":
      if (b === 0) {
        throw new Error("No se puede dividir entre cero");
      }
      return a / b;

    default:
      throw new Error("Operación no válida");
  }
}


function validarNumero(valor) {
  const texto = String(valor).trim();

  if (texto === "" || isNaN(texto)) {
    throw new Error("Debe ingresar un número");
  }

  return Number(texto);
}
