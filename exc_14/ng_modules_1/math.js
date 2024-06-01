export function findMax(num1, num2) {
  if (num1 > num2) {
    return `max: ${num1}`;
  } else if (num2 > num1) {
    return `max: ${num2}`;
  }
  return `${num1}=${num2}`;
}

console.log(findMax(20, 20));
