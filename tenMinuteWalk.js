// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let vert = 0
    let horiz = 0
    if (walk.length !== 10) {
      return false
    }
    for (i = 0; i < walk.length; i++) {
      if (walk[i] === 'n') {
        vert += 1
      } else if (walk[i] === 's') {
        vert -= 1
      } else if (walk[i] === 'w') {
        horiz -= 1
      } else if (walk[i] === 'e') {
        horiz += 1
      }
    }
    return ((vert === 0) && (horiz === 0))
  }

function isValidWalkSwitch(walk) {
    let vert = 0
    let horiz = 0
    if (walk.length !== 10) {
      return false
    }
    for (i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n':
          vert++;
        case 's':
          vert--;
        case 'w':
          horiz--;
        case 'e':
          horiz++;
      }
      console.log('vert is ', vert)
      console.log('horiz is ', horiz)
    }
    return ((vert === 0) && (horiz === 0))
  }

  //TESTS

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))

console.log('----------------------')

console.log(isValidWalkSwitch(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalkSwitch(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalkSwitch(['w']))
console.log(isValidWalkSwitch(['w','w','w','e','w','e','w','e','w','e']))

// switch case statement not working properly