function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length <= 0) {
    throw new Error("[ERROR] Input must be a non-empty array of numbers");
  }

  let total = 0;
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value !== "number") {
      throw new Error("[ERROR] Input must be a non-empty array of numbers");
    }

    total += value;
    if (value < min) min = value;
    if (value > max) max = value;
  }

  return {
    average: total / arr.length,
    min,
    max,
    length: arr.length,
  };
}

export { analyzeArray };
