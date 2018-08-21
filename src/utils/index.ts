export const randomFloat = (low = 0, high = 1) => {
  return low + Math.random() * (high - low)
}

export const randomInt = (low = 0, high = 9) => {
  return low + Math.floor(Math.random() * (high - low + 1))
}

export const randomName = (len = 6) => {
  const charPool = []
  for (let i = 0; i < len; i += 1) {
    const startCodeNum = i > 0 ? 97 : 65
    const endCodeNum = startCodeNum + 25
    const codeNum = randomInt(startCodeNum, endCodeNum)
    charPool.push(String.fromCharCode(codeNum))
  }
  return charPool.join('')
}
