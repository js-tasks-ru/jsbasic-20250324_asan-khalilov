function factorial(n) {
  // ваш код...
  let result = 1
  if (n === 0 || n === 1) return result
  for (let i = 1; i < n + 1; i++) {
    result *= i
  }
  return result
}