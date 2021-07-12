
// Using the array below, place all of the dogs names into a
// seperate array.

const myPets = [
    { name: "Spot", type: "dog", age: 4},
    { name: "Bella", type: "cat", age: 5 },
    { name: "Pete", type: "parrot", age: 8},
    { name: "Bella", type: "dog", age: 2}
]

let dogNames = [];

for (let i = 0; i < myPets.length; i++) {
    // console.log(myPets[i].name);
    if (myPets[i].type === "dog") {
        dogNames.push(myPets[i].name);
    }
}

console.log(dogNames);