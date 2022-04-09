// const findTheOldest = function(people) {
//     let maxAge = 0
//     let result = 0
//     for (person in people) {
//         if (people[person].yearOfDeath === undefined) {
//             people[person].yearOfDeath = new Date().getFullYear();
//         }
//         let age = people[person].yearOfDeath - people[person].yearOfBirth;
//         if (age > maxAge) {
//             maxAge = age;
//             result = person;
//         }
//     }
//     return people[result]
// };

const findTheOldest = (people) => {
  function age(y = new Date().getFullYear(), x) {
    return y - x;
  }
  var orderedPeople = people.sort((a, b) => {
    return age(a.yearOfDeath, a.yearOfBirth) > age(b.yearOfDeath, b.yearOfBirth)
      ? -1
      : 1;
  });

  return orderedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
