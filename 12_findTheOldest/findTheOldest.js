const findTheOldest = function(people) {

    let oldestPerson;
    let oldAge = 0;
    const currentYear = new Date().getFullYear();

    people.forEach(person => {
        let age;

        if (person.yearOfDeath === undefined) {
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > oldAge) {
            oldAge = age;
            oldestPerson = person;
        }
    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
