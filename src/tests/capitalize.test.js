import { capitalize } from "js/capitalize";

test("should exist", () => {
  expect(capitalize).toBeDefined();
});

test.each([
  ["hello", "Hello"],
  ["world", "World"],
  ["123abc", "123abc"],
  ["!help!", "!help!"],
  ["hello world", "Hello world"],
])("should capitalize '%s' to '%s'", (input, expected) => {
  expect(capitalize(input)).toBe(expected);
});

test("should take empty values and do nothing", () => {
  expect(capitalize("")).toBe("");
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
  expect(() => capitalize(invalidInput)).toThrow("[ERROR] Input is not a string");
});