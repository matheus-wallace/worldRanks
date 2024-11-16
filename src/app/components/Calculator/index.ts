const calculator = (
  value1: number,
  value2: number,
  operator: string,
): number | null | string => {
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value2 !== 0 ? value1 / value2 : null;
    default:
      throw new Error("Operador inválido");
  }
};

export default calculator;
