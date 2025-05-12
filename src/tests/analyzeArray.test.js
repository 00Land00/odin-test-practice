import { analyzeArray } from "js/analyzeArray";

test("should exist", () => {
  expect(analyzeArray).toBeDefined();
});

test.each([
  [[1], 1, 1, 1, 1],
  [[1, 8, 3, 4, 2, 6], 4, 1, 8, 6],
])(
  "should analyze the array %p correctly",
  (input, expectedAverage, expectedMin, expectedMax, expectedLength) => {
    const analysis = analyzeArray(input);
    expect(analysis.average).toBe(expectedAverage);
    expect(analysis.min).toBe(expectedMin);
    expect(analysis.max).toBe(expectedMax);
    expect(analysis.length).toBe(expectedLength);
  },
);

test.each([
  [[], "[ERROR] Input must be a non-empty array of numbers"],
  [null, "[ERROR] Input must be a non-empty array of numbers"],
  [true, "[ERROR] Input must be a non-empty array of numbers"],
  [{}, "[ERROR] Input must be a non-empty array of numbers"],
  [[1, "2", 3], "[ERROR] Input must be a non-empty array of numbers"],
])("should throw an error for invalid input: %p", (input, expectedError) => {
  expect(() => analyzeArray(input)).toThrow(expectedError);
})