import { calculator } from "js/calculator";

test("should exist", () => {
  expect(calculator).toBeDefined();
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.multiply).toBeDefined();
  expect(calculator.divide).toBeDefined();
});

test.each([
  [1, 2, 3],
  [-1, 1, 0],
  [1.0, 1.25, 2.25],
])("add %d and %d to get %d", (x, y, expected) => {
  expect(calculator.add(x, y)).toBe(expected);
});

test.each([
  [1, 2, -1],
  [-1, 1, -2],
  [1.0, 1.25, -0.25],
])("subtract %d and %d to get %d", (x, y, expected) => {
  expect(calculator.subtract(x, y)).toBe(expected);
});

test.each([
  [1, 2, 2],
  [-1, 1, -1],
  [1.0, 1.25, 1.25],
])("multiply %d and %d to get %d", (x, y, expected) => {
  expect(calculator.multiply(x, y)).toBe(expected);
});

test.each([
  [1, 2, 0.5],
  [-1, 1, -1],
  [1.5, 2, 0.75],
])("divide %d and %d to get %d", (x, y, expected) => {
  expect(calculator.divide(x, y)).toBe(expected);
});

test("should throw an error for dividing by 0", () => {
  expect(() => calculator.divide(1, 0)).toThrow("[ERROR] Divide by 0 error");
});

test.each([
  ["123", 1],
  [true, 1],
  [{}, 1],
  [[], 1],
  [null, 1],
  [undefined, 1],
  [NaN, 1],
  [1, "123"],
  [1, undefined]
])("should throw an error for invalid input: %p, %p", (x, y) => {
  expect(() => calculator.add(x, y)).toThrow("[ERROR] Input must be a number");
  expect(() => calculator.subtract(x, y)).toThrow("[ERROR] Input must be a number");
  expect(() => calculator.multiply(x, y)).toThrow("[ERROR] Input must be a number");
  expect(() => calculator.divide(x, y)).toThrow("[ERROR] Input must be a number");
});
