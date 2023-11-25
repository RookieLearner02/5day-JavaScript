/* 
Obective of this program is to practice adding, removing and updating values
in an array of objects

In This Program, We are going to do the following

1. Create an empty array called "cars".

2. Add three car objects to the "cars" array. 
Each car object should have the following properties:
   - make: "Toyota"
   - model: "Camry"
   - year: 2018

3. Remove the first car object from the "cars" array.

4. Add a new car object to the "cars" array with the following properties:
   - make: "Honda"
   - model: "Civic"
   - year: 2020

5. Update the "model" property of the second car object 
in the array to "Accord".

6. Print the final "cars" array after performing the above operations

*/

// Creating array called 'Cars' and adding three car objects

let cars = [{
    make: 'Toyota',
    model: 'Camry',
    year: 2018
}, {
    make: 'Ford',
    model: 'Mustang',
    year: 2023
},{
    make: 'Honda',
    model: 'CR-V',
    year: 2021
}]

cars.splice(0, 1) // This will remove the first car object from the array

cars.push({
    make: 'Honda',
    model: 'Civic',
    year: 2020
}) // This will add Honda Civic(2020) to the array

cars[1].model = 'Accord' // This will modify the model of second car object

console.log(cars) // Printing the final Form of the array


