/*
Objective is practicing adding, removing, and updating Values in an array

In This Program, We are going to do the following

1. Create an empty array called "fruits".

2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

3. Remove the first fruit from the array.

4. Add "grape" to the end of the array.

5. Update the second fruit in the array to "pear".

6. Print the final "fruits" array after performing the above operations.

*/

// Creating the array called 'Fruits'

let fruits = ['apple', 'banana', 'orange']
// Added apple, banana, and orange to the fruits array

fruits.splice(0, 1) //This will remove the First fruit from the array 

fruits.push('grape') //This will add grape to end of the array

fruits[1] = 'pear'

console.log(fruits) // This is added to see the current version of the array