/*
Output:
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
    return customers.map((person) =>
        `Hello ${person.first_name} ${person.last_name}`
    );
}

/*
Output:
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
    return customers
        // first, filter over the user to get the ones over 60
        .filter(item => item.age > 60)
        // then map over them to make a greeting
        .map(item => `Hello ${item.first_name} ${item.last_name}!`);
}


/*
Output:
4532
*/

export function addAllAges(customers) {
    return customers.reduce((acc, person) =>
        acc + person.age
    , 0);
}

/*
Output:
4.5
*/

export function getAverageCoolFactor(customers) {
    const total = customers.reduce((acc, person) =>
        acc + person.cool_factor, 0);
    return +((total / customers.length).toFixed(1));
}

/*
Output:
{
    female: 4,
    male: 3,
    nonbinary: 2,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
    const result = customers.reduce((acc, person) => {
        if(acc[person.gender]) {
            acc[person.gender]++;
        } else {
            acc[person.gender] = 1;
        }
        return acc;
    }, {});
    return result;
}

/*
Output:
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
    const result = customers.reduce((acc, person) => {
        if(person.car_make === 'Ford') {
            if(acc[person.gender]) {
                acc[person.gender]++;
            } else {
                acc[person.gender] = 1;
            }
        }
        return acc;
    }, {});
    return result;
}

//////////////////////////////////////////////////////////
///////////// STRETCH GOALS /////////////////////////////
/////////////////////////////////////////////////////////

/*
Output:
{
    ford: {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    mercedes:  {
        female: 3,
        male: 2,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
    const result = customers.reduce((acc, person) => {
        if(acc[person.car_make]) {
            acc[person.car_make] = customers.reduce((genderCounterObj, innerPerson) => {
                const gender = person.gender;
                const carObj = acc[person.car_make];
                if(carObj[gender] && person.id === innerPerson.id) {
                    genderCounterObj[gender]++;
                } else if(!carObj[gender] && person.id === innerPerson.id){
                    genderCounterObj[gender] = 1;
                }
                return genderCounterObj;
            }, acc[person.car_make]);
        } else {
            const gender = person.gender;
            acc[person.car_make] = {
                [gender]: 1
            };
        }
        return acc;
    }, {});
    return result;
}

/*
Output:
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/


export function getAllCoolFactorsOfEachCar(customers) {
    const result = customers.reduce((acc, person) => {
        if(!acc[person.car_make]) {
            acc[person.car_make] = customers
                .filter((innerPerson) => person.car_make === innerPerson.car_make)
                .map((innerPerson) => innerPerson.cool_factor);
        }
        return acc;
    }, {});
    return result;
}

/*
Output:
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
    const result = customers.reduce((acc, person) => {
        if(!acc[person.car_make]) {
            const averageCoolFactorArray = customers
                .filter((innerPerson) => person.car_make === innerPerson.car_make)
                .map((innerPerson) => innerPerson.cool_factor);
            const additionOfCoolFactors = averageCoolFactorArray.reduce((count, currentItem) => {
                count += currentItem;
                return count;
            }, 0);
            acc[person.car_make] = +((additionOfCoolFactors / averageCoolFactorArray.length).toFixed(1));
        }
        return acc;
    }, {});
    return result;
}


/*
Output:
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20:  38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
    const result = customers.reduce((acc, person) => {
        const ageGroup = person.age.toString().split('')[0] + '0';
        if(acc[ageGroup]) {
            acc[ageGroup]++;
        } else {
            acc[ageGroup] = 1;
        }
        return acc;
    }, {});
    return result;
}

/*
Output:
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
    const result = customers.reduce((acc, person) => {
        const ageGroup = person.age.toString().split('')[0] + '0';
        if(acc[ageGroup]) {
            acc[ageGroup].push(person.cool_factor);
        } else {
            acc[ageGroup] = [person.cool_factor];
        }
        return acc;
    }, {});
    return result;
}


/*
Output:
// break the customers into age demographic blocks. For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
    const result = customers.reduce((acc, person) => {
        const ageGroup = person.age.toString().split('')[0] + '0';
        if(acc[ageGroup]) {
            acc[ageGroup].push(person.cool_factor);
        } else {
            acc[ageGroup] = [person.cool_factor];
        }
        return acc;
    }, {});
    for(let ageGroup of Object.keys(result)) {
        const total = result[ageGroup].reduce((acc, currentItem) => acc + currentItem, 0);
        result[ageGroup] = +((total / result[ageGroup].length).toFixed(1));
    }
    return result;
}

