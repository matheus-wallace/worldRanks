import calculator from ".";

describe("Calculator function", () => {
  it("should add two numbers", () => {
    expect(calculator(5, 3, "+")).toBe(8);
  });

  it("should subtract two numbers", () => {
    expect(calculator(5, 3, "-")).toBe(2);
  });

  it("should multiply two numbers", () => {
    expect(calculator(5, 3, "*")).toBe(15);
  });

  it("should divide two numbers", () => {
    expect(calculator(6, 3, "/")).toBe(2);
  });

  it("should return null for division by zero", () => {
    expect(calculator(5, 0, "/")).toBeNull();
  });

  it("should throw an error for an invalid operator", () => {
    expect(() => calculator(5, 3, "%")).toThrow("Operador inválido");
  });
});
