export default {
  generate: (width, height) => {
    return new Promise(async (resolve) => {
      // initiate cells
      let cells = []
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          cells.push({
            location: [x, y],
            pathNorth: false,
            pathEast: false,
            pathSouth: false,
            pathWest: false,
            visited: false,
          })
        }
      }

      let visitCount = 1
      // assume starting at 0, 0 can be updated later to handle custom starting cells
      let x = 0 
      let y = 0
      //                     N        E       S       W
      const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]] // this didn't get used...

      let cellStack = []
      cells[y * height + x].visited = true
      cellStack.push([x, y])

      // backtrack algorithm
      while (visitCount < width * height) {
        [x, y] = cellStack[cellStack.length - 1]
        
        let unvisitedNeighbours = []
        // North Neighbour
        if (y > 0 && !cells[(y - 1) * height + x].visited) unvisitedNeighbours.push(0)
        // East Neighbour
        if (x < width - 1 && !cells[y * height + (x + 1)].visited) unvisitedNeighbours.push(1)
        // South Neighbour
        if (y < height - 1 && !cells[(y + 1) * height + x].visited) unvisitedNeighbours.push(2)
        // West Neighbour
        if (x > 0 && !cells[y * height + (x - 1)].visited) unvisitedNeighbours.push(3)

        if (unvisitedNeighbours.length == 0) {
          // all neighbours visited therefore pop the stack
          cellStack.pop()
        } else {
          // TODO: add bias here
          let nextDirection = unvisitedNeighbours[Math.floor(Math.random() * unvisitedNeighbours.length)]
          switch (nextDirection) {
            case 0:
              // North
              cells[(y - 1) * height + x].visited = true
              cells[(y - 1) * height + x].pathSouth = true
              cells[y * height + x].pathNorth = true
              cellStack.push([x, y - 1])
              break;
            case 1:
              // East
              cells[y * height + (x + 1)].visited = true
              cells[y * height + (x + 1)].pathWest = true
              cells[y * height + x].pathEast = true
              cellStack.push([x + 1, y])
              break;
            case 2:
              // South
              cells[(y + 1) * height + x].visited = true
              cells[(y + 1) * height + x].pathNorth = true
              cells[y * height + x].pathSouth = true
              cellStack.push([x, y + 1])
              break;
            case 3:
              // West
              cells[y * height + (x - 1)].visited = true
              cells[y * height + (x - 1)].pathEast = true
              cells[y * height + x].pathWest = true
              cellStack.push([x - 1, y])
              break;
          }
          visitCount++
        }

      }
      resolve(cells)
    })
  },
}