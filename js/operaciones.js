function calcular(a, b, operacion) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Escribe dos números válidos");
  }

  switch (operacion) {
    case "suma":
      return a + b;
    case "resta":
      return a - b;
    case "multiplicacion":
      return a * b;
    case "division":
      if (b === 0) throw new Error("No se puede dividir entre cero");
      return a / b;
    default:
      throw new Error("Operación no válida");
  }
}