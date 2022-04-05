const findTheOldest = function(people) {
    let maxAge = 0
    let result = 0
    for (person in people) {
        if (people[person].yearOfDeath === undefined) {
            people[person].yearOfDeath = new Date().getFullYear();
        }
        let age = people[person].yearOfDeath - people[person].yearOfBirth;
        if (age > maxAge) {
            maxAge = age;
            result = person;
        }
    }
    return people[result]
};

// Do not edit below this line
module.exports = findTheOldest;
