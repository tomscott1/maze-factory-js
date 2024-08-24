import backtrack from './backtrack'

export default {
  buildMaze: (width, height) => {
    if (isNaN(height) || isNaN(width)) {
      throw new Error('[buildMaze] height and width must be valid numbers')
    }
    height = height | 0
    width = width | 0

    let output = []
    for (let i = 0; i < height; i++) {
        output.push(Array.from({length: width}, () => Math.round(Math.random())))
    }
    return output
  },

  generateBacktrack: (width, height) => {
    return backtrack.generate(width, height)
  }

}

// buildMaze(100,100)