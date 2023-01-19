import { suma, resta, division, multiplicacion } from "./funciones";

export function showResult(element, num1, num2, op) {
  let resultado = 0;
  if(op == "suma") resultado = suma(num1, num2) 
  if(op == "resta") resultado = resta(num1, num2) 
  if(op == "division") resultado = division(num1, num2) 
  if(op == "multip") resultado = multiplicacion(num1, num2) 

  element.innerHTML = `Result is ${resultado}`;
}
