import maze from './index'

describe('index.js', () => {

  test('mazebuild returns a 2 dimensional array equal to height and width supplied', () => {
    const height = 10
    const width = 10
    const result = maze.buildMaze(height, width)
    expect(result.length).toEqual(height)
    expect(result[0].length).toEqual(width)
  })

  test('mazebuild throws an error when given non number height and width', () => {
    const height = 'a'
    const width = null
    expect(() => {
      maze.buildMaze(height, width)
    }).toThrow('[buildMaze] height and width must be valid numbers')
  })

  test('generateBacktrack returns an array with every object visited property is true', () => {
    const height = 4
    const width = 4
    const result = maze.generateBacktrack(height, width)
    for (let i = 0; i < height * width; i++) {
      expect(result[i].visited).toBe(true)
    }
  })

})