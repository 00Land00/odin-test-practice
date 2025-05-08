function reverseString(str) {
  if (typeof str !== "string") {
    throw new Error("[ERROR] Input is not a string");
  }

  const strArr = str.split("");
  
  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
    const temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;

    left++;
    right--;
  }

  return strArr.join("");
}

export { reverseString };