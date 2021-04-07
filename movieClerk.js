
// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine) {
    let total = 25
    if (peopleInLine[0] !== 25) {
      return 'NO'
    }
    for(let i = 1; i < peopleInLine.length; i++) {
      const currentPerson = peopleInLine[i]
      const hasChange = (currentPerson - 25) <= total
      const exactChange = currentPerson === 25
      if (exactChange) {
        total += currentPerson
      } else if (hasChange) {
        total = total + currentPerson - (currentPerson - 25)
      } else {
        return 'NO'
      }
    }
    return 'YES'
  }


  //TESTS
  Test.assertEquals(tickets([25, 25, 50, 50]), "YES");
Test.assertEquals(tickets([25, 100]), "NO");