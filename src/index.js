export default {
  buildMaze: (height, width) => {
    if (isNaN(height) || isNaN(width)) {
      throw new Error('[buildMaze] height and width must be valid numbers')
    }
    height = height | 0
    width = width | 0

    let output = []
    for (let i = 0; i < height; i++) {
        output.push(Array.from({length: width}, () => Math.round(Math.random())))
    }
    console.log(output)
    return output
  }
}

// buildMaze(100,100)