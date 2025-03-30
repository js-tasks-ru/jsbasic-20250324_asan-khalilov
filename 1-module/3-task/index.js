function ucFirst(str) {
  // ваш код...
  if (!str) return str
  let result = `${str[0].toUpperCase()}${str.slice(1)}`
  return result
}