let bi = 5;

function isUndefined (variable) {
    if (typeof(variable) === undefined) {
        console.log('Variable is declared, but empty!');
    } else if (typeof(variable) !== undefined) {
        console.log(`Variable is not empty, it's value equal ${variable}!`); 
    }
}

isUndefined(bi);

// Always false

let primIsNull = null,
    primIsUndefinde,
    primIsZero = 0,
    primIsEmptyString = '',
    primIsNan = NaN;

console.log(!!primIsNull);
console.log(!!primIsUndefinde);
console.log(!!primIsZero);
console.log(!!primIsEmptyString);
console.log(!!primIsNan);

// Преобразование в строчный тип данных

// 1) Преобразование с помощью конкатинации

let numberOne = 5;

console.log(typeof(numberOne));
console.log(typeof('Your IQ is equal to' + numberOne));

// 2) Преобразование с помощью специального объекта String

const myAge = 30;

console.log(typeof(myAge));
console.log(typeof(String(myAge)));

// 3) Преобразование с помощью интерполяции

const myMoneyTarget = 20000;

console.log(typeof(myMoneyTarget));
console.log(typeof(`Я хочу заработать ${myMoneyTarget} к концу 2023 года!`));

// Преобразование в чисельный тип данных

// 1) Преобразование с помощью унарного плюса

const someString = '452';

console.log(typeof(someString));
console.log(typeof(+someString));
console.log(+someString);

// 2) Преобразование с помощью специального объекта Number

const stringToNumberContent = '17071993';

console.log(typeof(stringToNumberContent));
console.log(typeof(Number(stringToNumberContent)));
console.log(stringToNumberContent);

// Преобразование с помощью функции ParsInt;

const stringToInt = '125';

console.log(typeof(stringToInt));
console.log(typeof(parseInt(stringToInt)));
console.log(parseInt(stringToInt));
// Преобразование в булевый тип данных

// 1) Первый метод, использование двойного (НЕ) -> [!!];

let resultVariable = 0;
console.log(typeof(resultVariable));
console.log(typeof(!!resultVariable));
// 2) Второй метод, это использовать специальный объект Boolean и обернуть в него переменную или выражение;

let output = '';

console.log(typeof(Boolean(output)));

// 3) Третий метод, это использовать оператор логического ветвления if;  
let statement = '';

function getResponse (state) {
    if (state) {
        console.log('Uploading...');
    }
}

getResponse(statement);


// async function changePage() {
//     var pages = await powerbi.embeds[powerbi.embeds.length - 1].getPages();
//     var pageName = pages[$parameters.index].name;

//     await powerbi.embeds[powerbi.embeds.length - 1].SetPage(pageName);
// };

// (async () => {
//     await changePage();
// })();