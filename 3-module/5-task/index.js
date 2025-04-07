function getMinMax(str) {
  // ваш код...
  const customArr = str
    .split(' ')
    .map(Number)
    .filter(el => !isNaN(el))

  return {
    min: Math.min(...customArr),
    max: Math.max(...customArr)
  }
}
