// let x = 5;
// x++;
// alert(++x);
// console.log(x);

// alert(++x);

// Output 5 with incremention, but after the moment that alert method will show x value which equals to 5. After, value of variable x will be increased. (-)

// console.log([] + false - null + true);

// Output is NaN. JS will transform empty array [] to an empty string, after false (boolean) will be transformed to a string equal "false" and added to empty string. When we try to substruct null from string equal "false" we will receive a NaN, because we cannot conduct math operation on string type of data in JS. (+)


// let a = 1;
// let b = a = 2;

// alert(a);

// Output is 2 because in a code above we: a) declare variable (a) and assign number 1 as it`s value, b) we declare variable with name (b) and firstly assign value of variable (a which equals 1) and then we assign value to both of variables equal to number 2. In case of primitive data types, we can change values of both variables at once. In case of more complex data types, like objects and array, such approach will not work. (Incorrect)

// Output will be 2. 


// alert("1"[0]);


// 

// console.log(2 && 1 && NaN && 0 && undefined);

// console.log(!!( a && b ));
// console.log((a && b));
// console.log("Ёжик" < "яблоко");

// let d = [1, 2, 3];
// let e = [1, 2, 3];

// console.log(d == e);

// alert(+Infinity);


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

let {openNow} = restorantData.openNow;

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}



console.log(isOpen(openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData); 
console.log(copy);