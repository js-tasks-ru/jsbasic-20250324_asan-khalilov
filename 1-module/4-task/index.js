function checkSpam(str) {
  // ваш код...
  let normalizedStr = str.toLowerCase();

  if (normalizedStr.includes("1xbet") || normalizedStr.includes("xxx")) {
    return true;
  }

  return false;
}