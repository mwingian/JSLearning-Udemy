const originalObject = {
    name: "Vasia",
    surName: "Kozaczenko",
    properties: {
        house: "Big and beutiful",
        car: "News and expensive"
    } 
};

// for (let i = 0; i < originalObject.length; i++) {
//     console.log(`Value with property ${i} equals ${originalObject[i]}`);
// }

for (let value in originalObject) {
    if (typeof(originalObject[value]) === 'object') {
        for(let subValue in originalObject[value]) {
            console.log(`Value with property ${value} equals ${originalObject[value][subValue]}`);
        }
    } else {
        console.log(`Value with property ${value} equals ${originalObject[value]}`);
    } 
}


const initialObject = {
    a: 5,
    b: 10,
    c: {
        y: 11,
        x: 12
    }
}
function getObjectCopy(object) {
    let objectCopy = {};
    let key;
    for (key in object) {
        objectCopy[key] = object[key];
    }
    return objectCopy;
}

const testObject = getObjectCopy(initialObject);

testObject.a = 10;
testObject.c.y = 13;

console.log(testObject);
console.log(initialObject);

const objectOne = {
    a: 12,
    b: 13,
    c: 14
};

const objectTwo = {
    d: 15,
    e: 16,
    f: 17
};

const summObject = Object.assign (objectOne, objectTwo);

console.log(summObject);


// Task 1

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};


// function showExperience (plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));

// personalPlanPeter.showAgeAndLangs = 
//     function (plan) {
//         let langOutput = plan.skills.languages.join(' ').toUpperCase();
//         let ageOutput = plan.age;
//         console.log(`Мне ${ageOutput} и я владею языками: ${langOutput}`);
//     };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     console.log(personalPlanPeter.skills.exp);
// }

// function showProgrammingLangs(plan) {
//     let output = '';
//     const {programmingLangs} = plan.skills;
//     for(let key in programmingLangs) {
//         output += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     return output;
// }

// console.log(showProgrammingLangs(personalPlanPeter));



// function showProgrammingLangs(plan) {
//     if (typeof(personalPlanPeter.skills.programmingLangs) === 'object') {
//         for (let key in personalPlanPeter.skills.programmingLangs) {
//             console.log(`Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]}`);
//         }
//     } else {
//         console.log(" ");
//     }
// }




personalPlanPeter.showAgeAndLangs = function (plan) {
        let langOutput = plan.skills.languages.join(' ').toUpperCase();
        let ageOutput = plan.age;
        console.log(`Мне ${ageOutput} и я владею языками: ${langOutput}'`);
    };


// const personalPlanDavid = {
//     name: "David",
//     age: "30",
//     skills: {
//         languages: ['pl', 'ua'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         let langOutput = personalPlanPeter.skills.languages.join(' ').toUpperCase();
//         let ageOutput = personalPlanPeter.age;
//         console.log(`Мне ${ageOutput} и я владею языками: ${langOutput}'`);
//     }
// };




let testObj = {
    name: 'Serh',
    surName: 'Zas',
    lang: ['ru', 'eng'],
}


testObj.getInfo =
    function () {
      return `My name is ${testObj.name}`;
    }

console.log(testObj.getInfo());

let addedArray = testObj.lang.join(' ').toUpperCase();

console.log(addedArray);

console.log(testObj);


function showExperience(plan) {
    return personalPlanPeter.skills.exp;
}

console.log(showExperience(personalPlanPeter));


// Task 2

// const {languages, programmingLangs} = personalPlanPeter.skills;

function showProgrammingLangs (plan) {
    if (typeof(personalPlanPeter.skills.programmingLangs) === 'object') {
        for (let key in personalPlanPeter.skills.programmingLangs) {
            return `Язык ${key} изучен на ${personalPlanPeter.skills.programmingLangs[key]}\n`;
        }
    } else {
        return
    }
}

console.log(showProgrammingLangs(personalPlanPeter));



// function showProgrammingLangs (plan) {
//     if (typeof(personalPlanPeter.skills.programmingLangs) === 'object') {
//          console.log(`Язык ${personalPlanPeter.skills.programmingLangs.js} изучен на ${personalPlanPeter.skills.programmingLangs['js']}`)
//     } else {
//         console.log(" ");
//     }
// }

showProgrammingLangs(personalPlanPeter);


const options = {
    width: 1200,
    heights: 800,
    background: {
        color: 'red',
        opacity: 0.2
    }
}

// function getInfoAboutObject (object) {
//     for (let value in object) {
//         if (typeof(object[value]) === 'object') {
//             for (let key in object[value]) {
//                 console.log(`The value named ${value} equals ${object[value][key]}`);
//             }
//         } else {
//             console.log(`The value named ${value} equals ${object[value]}`);
//         }
//     }
// };


for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let subKey in options[key]) {
            console.log(`The property ${subKey} equals ${options[key][subKey]}`);
        }
    } else {
        console.log(`The property ${key} equals ${options[key]}`);
    }
}


const objectino = {
    name: "something",
    surName: "also something",
    sizes: {
        foot: 44,
        hand: 25
    }
}

for(key in objectino) {
    if (typeof(objectino[key]) === 'object') {
        for (value in objectino[key]) {
            console.log(`Value ${value} equals ${objectino[key][value]}`);
        }
    } else {
        console.log(`Vale ${key} equals ${objectino[key]}`);
    }
};


const protoObject = {
    a: 15,
    b: 'Proto'
}

protoObject.getString = function () {
    return this.a + this.b;
};


console.log(protoObject.getString());

const firstObject = {
    name: 'No name',
    age: 25,
    isMarried: false
};

function getObjectCopy (object) {
    let objCopy = {};
    for (let value in object) {
        objCopy[value] = object[value];
    };
    return objCopy;
};


let alterredObject = getObjectCopy(firstObject);
console.log(alterredObject);

const newObject = {};
const objectAlign = Object.assign(firstObject, newObject);

console.log(objectAlign);

const layeredObject = {
    objectOne: {
        a: 15,
        b: 12,
        objectTwo: {
            c: 13,
            d: 14,
            objectThree: {
                e: 'type of one',
                objectFour: {
                    isItGonnaCrush: true
                }
            }
        }
    }
}


let newObjectForm = {...layeredObject};

console.log(newObjectForm);

const layeredObjectCopy = Object.assign ({}, layeredObject);

console.log(layeredObjectCopy);

// Написать функцию для проверки объекта на то, пустой он или нет isEmpty();
const emptyObj = {};

function isEmpty (obj) {
    if (obj.length === 0) {
        return 'Empty!'
    } else {
        return 'Not empty!'
    }
};

console.log(isEmpty(emptyObj));


const primaryObj = {
    a: 15,
    b: 14,
    c: 13
};

const secondaryObj = {
    a: 11,
    b: 10,
    c: 9
};


const objectAdd = {...primaryObj,...secondaryObj};

console.log(objectAdd);