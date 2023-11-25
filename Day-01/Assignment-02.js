/*
Objective is we are practicing adding, removing and updating values in objects

In This Program, We are going to do the following


1. Create an empty object called "person".

2. Add the following properties to the "person" object:
   - name: "John"
   - age: 30
   - city: "New York"

3. Remove the "age" property from the "person" object.

4. Add a new property called "job" with the value "Engineer" to the "person" object.

5. Update the "city" property of the "person" object to "San Francisco".

6. Print the final "person" object after performing the above operations.

*/

// Creating the object and adding the properties

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

delete person.age // This will delete the age property from person

person.job = 'Engineer' //This will add job property to the person object

person.city = "San Franciso" // This will modify city property from New York to San Franciso

console.log(person) // Printing the Final object form