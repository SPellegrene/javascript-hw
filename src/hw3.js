var myVarOne = [10, 20, 30, 40][1, 2, 3]
var myVarTwo = [10, 20, 30,40][3, 2, 1]

   console.assert(myVarOne === 40)
   console.assert(myVarTwo === 20)

// It passes because it reads the last value of myVarOne and the first value of myVarTwo.
