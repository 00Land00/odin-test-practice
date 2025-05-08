const calculator = {
  add: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("[ERROR] Input must be a number");
    }

    if (isNaN(x) || isNaN(y)) {
      throw new Error("[ERROR] Input must be a number");
    }

    return x + y;
  },
  subtract: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("[ERROR] Input must be a number");
    }

    if (isNaN(x) || isNaN(y)) {
      throw new Error("[ERROR] Input must be a number");
    }

    return x - y;
  },
  multiply: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("[ERROR] Input must be a number");
    }

    if (isNaN(x) || isNaN(y)) {
      throw new Error("[ERROR] Input must be a number");
    }

    return x * y;
  },
  divide: (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("[ERROR] Input must be a number");
    }

    if (isNaN(x) || isNaN(y)) {
      throw new Error("[ERROR] Input must be a number");
    }

    if (y === 0) {
      throw new Error("[ERROR] Divide by 0 error");
    }

    return x / y;
  }
};

export { calculator };