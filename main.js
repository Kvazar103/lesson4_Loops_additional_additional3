
// 1. Створити пустий масив та :
console.log("1. Створити пустий масив та :")
let emptyArray=[];
//     a. заповнити його 50 парними числами за допомоги циклу.
console.log("a. заповнити його 50 парними числами за допомоги циклу.")
for(let i=0;i<100;i+=2){
    emptyArray[i]=i;
}
emptyArray=emptyArray.filter(function (el) {
    return (el != null && el != "" || el === 0);  //!!!видалення пустих елементів масиву!!!! 
});                                               /////МОЖНА ЩЕ ТАК ЗРОБИТИ: emptyArray=emptyArray.filter(Boolean);
console.log(emptyArray)      /////АЛЕ ЦЕ ВИДАЛИТЬ НОЛЬ

//     b. заповнити його 50 непарними числами за допомоги циклу.
console.log("b. заповнити його 50 непарними числами за допомоги циклу.")
let nepArr=[];
for(let i=1;i<100;i+=2){
    nepArr[i]=i;
}
nepArr=nepArr.filter(Boolean); //видалення методом .filter пустих елементів масиву
Array.prototype.push.apply(emptyArray,nepArr);  // додавання двох масивів в однин emptyArray 
console.log(emptyArray)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
console.log("c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)")
let randomArr=[];
for(let i=0;i<20;i++) {
    randomArr[i]=Math.random()
}
Array.prototype.push.apply(emptyArray,randomArr);
console.log(emptyArray)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
console.log("d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)")
let random20=[];
function getRandomIntInclusive(min, max) {           ///Отримання випадкового цілого числа у заданому інтервалі, включно
    min = Math.ceil(min);     
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
for(let i=0;i<20;i++){
    random20[i]= getRandomIntInclusive(8,732);
}
Array.prototype.push.apply(emptyArray,random20);
console.log(emptyArray)
// 2. Вивести за допомогою console.log кожен третій елемен
console.log("2. Вивести за допомогою console.log кожен третій елемен")
for(let i=0;i<emptyArray.length;i+=2){
    console.log(emptyArray[i])
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log("3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.")
    for(let i=0;i<emptyArray.length;i+=2){
        if(emptyArray[i]%2==0){
            console.log(emptyArray[i])
        }
     }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log("4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив")
let newEmptyArray=[];
    for(let i=0;i<emptyArray.length;i+=2){
        if(emptyArray[i]%2==0){
            // console.log(emptyArray[i])
            newEmptyArray[i]=emptyArray[i];
        }
    }
newEmptyArray=newEmptyArray.filter(function (el){
    return (el!=null && el!='' || el===0)
});
console.log(newEmptyArray)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
console.log("5. Вивести кожен елемент масиву, сусід справа якого є парним")
for(let i=0;i<emptyArray.length;i++){
    if(emptyArray[i+1]%2==0){
        console.log(emptyArray[i])
    }
}
console.log(emptyArray)

// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let example=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for(let i=0;i<example.length;i++){
//     if(example[i+1]%2==0){
//         console.log(example[i])
//     }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log("6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.")
let shopCost=[100,250,50,168,120,345,188];
console.log("середній чек=(сума всіх покупок)/(кількість покупок)")
let sum=0;
for(let i=0;i<shopCost.length;i++){
    sum+=shopCost[i];
}
let average_check=sum/shopCost.length;
console.log(average_check)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log("7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.")
let randomArray=[12,5,21,1232,54,22,15,6,2,5,90,320];
let element;
let newRandomArray=[];
let c=0;
for(let random of randomArray){
    element=random*5;
    console.log(element)
    newRandomArray[c++]=element
}
console.log(newRandomArray)
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log("8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, " +
    "і якщо елемент є числом - додати його в інший масив.")
let differentArray=['f',2,true,true,false,'2',20,true,54332,12,90,'array',false,9,6];
let arrayNumber=[];
let t=0;
for(let differ of differentArray){
    if(typeof differ==='number'){
        console.log(differ)
        arrayNumber[t++]=differ;
    }
}
console.log(arrayNumber)
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
console.log(" Дано 2 масиви з рівною кількістю об'єктів.\n" + "Масиви:")
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
console.log("З'єднати в один об'єкт користувача та місто з відповідними \"id\" та \"user_id\" .\n" +
    "Записати цей об'єкт в новий масив");
console.log("***********************************************");
let usersWithCities=[{},{},{},{}]
for(let userWithId of usersWithId){
    for(let i=0;i<citiesWithId.length;i++){
       if(citiesWithId[i].user_id===userWithId.id){
           usersWithCities[i].id=userWithId.id
           usersWithCities[i].name=userWithId.name
           usersWithCities[i].age=userWithId.age
           usersWithCities[i].status=userWithId.status
           usersWithCities[i].address={user_id:citiesWithId[i].user_id,country:citiesWithId[i].country,city:citiesWithId[i].city}
       }
    }
}
console.log(usersWithCities)

// // // Example
//     let usersWithCitiess = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// console.log(usersWithCitiess)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
console.log("Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.")
let arrayTen=[1,2,4,5,213,12,94,21,0,47];
for(let i=0;i<arrayTen.length;i++){
    if(arrayTen[i]%2==0){
        console.log(arrayTen[i])
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
console.log("Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. " +
    "За допомогою будь-якого циклу скопіювати значення одного масиву в інший.")
let emptyArrayTen=[];
for(let i=0;i<arrayTen.length;i++){
    emptyArrayTen[i]=arrayTen[i];
}
console.log(emptyArrayTen)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
console.log("Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.")
let lettersArray=['a', 'b', 'c'];
let p='';
for(let i=0;i<lettersArray.length;i++){
    p+=lettersArray[i]
}
console.log(p)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
console.log("Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.")
let k=0;
let x='';
while (k<lettersArray.length){
    x+=lettersArray[k];
    k++;
}
console.log(x)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
console.log("Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.")
let l='';
for(let letterArray of lettersArray){
    l+=letterArray;
}
console.log(l)
