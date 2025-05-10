import { caesarCipher } from "js/caesarCipher";

test("should exist", () => {
  expect(caesarCipher).toBeDefined();
});

test.each([
  ["xyz", "abc", 3],
  ["ABC", "FGH", 5],
  ["!hElLo.", "!kHoOr.", 3],
  ["123", "123", 1],
  ["abc", "abc", 26],
  ["zzz", "aaa", 1],
  ["abc", "bcd", 27],
])("should encrypt '%s' to '%s' by %d letters to the right", (input, expected, shift) => {
  expect(caesarCipher(input, shift)).toBe(expected);
});

test.each([
  [123, 1, "[ERROR] Input must be a string"],
  [{}, [], "[ERROR] Input must be a string"],
  [[], {}, "[ERROR] Input must be a string"],
  [null, 2, "[ERROR] Input must be a string"],
  ["abc", true, "[ERROR] Shift must be a positive integer"],
  ["abc", null, "[ERROR] Shift must be a positive integer"],
  ["abc", -1, "[ERROR] Shift must be a positive integer"],
  ["abc", 1.5, "[ERROR] Shift must be a positive integer"],
])("should throw an error for invalid input: %p, %p", (input, shift, expectedError) => {
  expect(() => caesarCipher(input, shift)).toThrow(expectedError);
});