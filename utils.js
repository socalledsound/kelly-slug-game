const loadCoinImages = (objectsImg) => {
  const coinImages = Array.from({length:6}, (el, i) => {
    return objectsImg.get(i*84,0,84,84)
  })
  return coinImages
}

const loadBlobImages = (runImg) => {
  const runImages = Array.from({length:3}, (el, i) => {
    return runImg.get(i * 300, 0, 350, 386)
  })
  return runImages
}

