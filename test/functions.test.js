// IMPORT MODULES under test here:
import {
    greetUsersOverAge60,
    greetUsers,
    addAllAges,
    getAverageCoolFactor,
    getTotalOfEachGender,
    getGenderBreakdownOfFordOwners,
    getGenderBreakdownOfEachCar
} from '../functions.js';
import customers from './data.js';

const { test, skip } = QUnit;

test('greetUsers', (expect) => {
    const expected = ['Hello Suzi Summerson',
        'Hello Boot Penton',
        'Hello Cacilia Caramuscia',
        'Hello Mattie Mungane',
        'Hello Kathryne Gostling',
        'Hello Cristal Oakman',
        'Hello Mahmud Shingler',
        'Hello Kenny Kepe',
        'Hello Elena Guisby',
        'Hello Irene Kynvin',
        'Hello Debor Lashmar',
        'Hello Christian Churchill',
        'Hello Fawnia Cowdroy',
        'Hello Eli Perigo',
        'Hello Parker Goodboddy',
        'Hello Leeland Bonome',
        'Hello Lowe Driussi',
        'Hello Tracy Chidlow',
        'Hello Dimitri Ochiltree',
        'Hello Sascha Yanin',
        'Hello Emmaline Horribine',
        'Hello Erinna Swires',
        'Hello Erroll Reade',
        'Hello Ilaire O\'Codihie',
        'Hello Anatol Gulley',
        'Hello Celestine Teodori',
        'Hello Brandi Sawdon',
        'Hello Atlanta Oneil',
        'Hello Salomone Merkle',
        'Hello Alta Sulter',
        'Hello Marys Allsopp',
        'Hello Marilin Ellacott',
        'Hello Alexandros Cornell',
        'Hello Matti Haller',
        'Hello Henryetta Cheng',
        'Hello Gennie Saura',
        'Hello Sherwynd Wiggans',
        'Hello Thorn McMeekin',
        'Hello Esmaria Moukes',
        'Hello Dietrich Gladebeck',
        'Hello Karol Rosa',
        'Hello Manya Fodden',
        'Hello Casi Waterland',
        'Hello Munroe Walthall',
        'Hello Tannie Sedman'];

    const actual = greetUsers(customers);

    expect.deepEqual(actual, expected);
});


test('greetUsersOverAge60', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Cristal Oakman!',
        'Hello Kenny Kepe!',
        'Hello Dimitri Ochiltree!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Alexandros Cornell!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsersOverAge60(customers);

    expect.deepEqual(actual, expected);
});

test('addAllAges', (expect) => {
    const expected = 2125;

    const actual = addAllAges(customers);

    expect.deepEqual(actual, expected);
});


test('getAverageCoolFactor', (expect) => {
    const expected = 5.1;

    const actual = getAverageCoolFactor(customers);

    expect.deepEqual(actual, expected);
});

test('getTotalOfEachGender', (expect) => {
    const expected = { Male: 23,
        Female: 19,
        Genderqueer: 1,
        'Non-binary': 1,
        Bigender: 1 };

    const actual = getTotalOfEachGender(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfFordOwners', (expect) => {
    const expected =
    { Male: 2, Female: 1 };

    const actual = getGenderBreakdownOfFordOwners(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfEachCar', (expect) => {
    const expected = { Lexus: { Male: 1 },
        Volvo: { Male: 1, Female: 1 },
        Mitsubishi: { Male: 1 },
        Chrysler: { Female: 1, Genderqueer: 1 },
        'Alfa Romeo': { Male: 1 },
        Subaru: { Female: 1 },
        Chevrolet: { Male: 3, Female: 1 },
        Mercury: { Male: 1 },
        Scion: { Female: 1 },
        Oldsmobile: { Male: 1 },
        Toyota: { Female: 1, Male: 2, Bigender: 1 },
        Buick: { Female: 1, Male: 1 },
        GMC: { Female: 2, Male: 2 },
        Dodge: { Female: 2, Male: 1 },
        'Mercedes-Benz': { Female: 1 },
        Cadillac: { 'Non-binary': 1, Male: 1 },
        Pontiac: { Female: 1 },
        Eagle: { Male: 1 },
        Ford: { Male: 2, Female: 1 },
        Mazda: { Male: 1 },
        Audi: { Female: 1 },
        BMW: { Male: 1 },
        Peugeot: { Female: 1 },
        Porsche: { Female: 1, Male: 1 },
        Jeep: { Female: 1 },
        Infiniti: { Female: 1 },
        Kia: { Male: 1 } };

    const actual = getGenderBreakdownOfEachCar(customers);

    expect.deepEqual(actual, expected);
});

skip('getAllCoolFactorsOfEachCar', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorOfEachCar', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactor', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getCoolFactorsByAgeBracket', (expect) => {
    const expected = true;

    const actual = greetUsers();

    expect.equal(actual, expected);
});

skip('getAverageCoolFactorByAgeBracket', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});