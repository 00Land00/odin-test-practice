function caesarCipher(str, shift) {
  if (typeof str !== "string") {
    throw new Error("[ERROR] Input must be a string");
  }

  if (!Number.isInteger(shift) || shift <= 0) {
    throw new Error("[ERROR] Shift must be a positive integer");
  }

  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Uppercase A-Z
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      // Lowercase a-z
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }

      return char; // Non-letter characters unchanged
    })
    .join("");
}

export { caesarCipher };
