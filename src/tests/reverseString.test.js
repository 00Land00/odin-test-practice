import { reverseString } from "js/reverseString";

test("should exist", () => {
  expect(reverseString).toBeDefined();
});

test.each([
  ["hello", "olleh"],
  ["123", "321"],
  ["!", "!"],
  ["", ""],
])("should reverse '%s' to get '%s'", (input, expected) => {
  expect(reverseString(input)).toBe(expected);
});

test.each([
  123,
  true,
  {},
  [],
  null,
  undefined,
  NaN
])("should throw an error for invalid input: %p", (invalidInput) => {
  expect(() => reverseString(invalidInput)).toThrow("[ERROR] Input is not a string");
});