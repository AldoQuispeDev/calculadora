const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const textoOperacion = document.getElementById("operacion");
const textoResultado = document.getElementById("resultado");
const historial = document.getElementById("historial");

const simbolos = { suma: "+", resta: "−", multiplicacion: "×", division: "÷" };

document.querySelectorAll("[data-op]").forEach((boton) => {
  boton.addEventListener("click", () => {
    const a = parseFloat(inputA.value);
    const b = parseFloat(inputB.value);
    const op = boton.dataset.op;

    try {
      const resultado = calcular(a, b, op);
      textoOperacion.textContent = `${a} ${simbolos[op]} ${b} =`;
      textoResultado.textContent = resultado;

      const item = document.createElement("li");
      item.textContent = `${a} ${simbolos[op]} ${b} = ${resultado}`;
      historial.prepend(item);
    } catch (error) {
      textoOperacion.textContent = error.message;
      textoResultado.textContent = "Error";
    }
  });
});