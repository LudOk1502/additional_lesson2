/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
1. перебрати його циклом while*/
arrayNums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
document.write(`<div>`);
let i = 0;
while (i < arrayNums.length) {
    document.write(`${arrayNums[i]} `);
    i++;
}
document.write(`</div>`);
/*2. перебрати його циклом for*/
document.write(`<div>`);
for (let num of arrayNums) {
    document.write(`${num} `);
}
document.write(`</div>`);
/*3. перебрати циклом while та вивести  числа тільки з непарним індексом*/
document.write(`<div>`);
let j = 0;
while (j < arrayNums.length) {
    if (j % 2 !== 0) {
        document.write(`${arrayNums[j]} `);
    }
    j++;
}
document.write(`</div>`);
/*4. перебрати циклом for та вивести  числа тільки з непарним індексом*/
document.write(`<div>`);
for (let i = 0; i < arrayNums.length; i++) {
    if (i % 2 !== 0) {
        document.write(`${arrayNums[i]} `);
    }
}
document.write(`</div>`);
/*5. перебрати циклом while та вивести  числа тільки парні  значення*/
document.write(`<div>`);
let n = 0;
while (n < arrayNums.length) {
    if (arrayNums[n] % 2 === 0) {
        document.write(`${arrayNums[n]} `);
    }
    n++;
}
document.write(`</div>`);
/*6. перебрати циклом for та вивести  числа тільки парні  значення*/
document.write(`<div>`);
for (let num of arrayNums) {
    if (num % 2 === 0) {
        document.write(`${num} `);
    }
}
document.write(`</div>`);
/*7. замінити кожне число кратне 3 на слово "okten"*/

for (let num of arrayNums) {
    if (num % 3 === 0) {
        num = 'okten';
    }
    document.write(`${num} `);
}

/**8. вивести масив в зворотньому порядку.*/
document.write(`<div>`);
for (let k = arrayNums.length - 1; k >= 0; k--) {
    document.write(`${arrayNums[k]} `);
}
document.write(`</div>`);
/*/!*9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
*1. (с заду на перед)*!/*/
document.write(`<div>`);
let a = arrayNums.length - 1;
while (a >= 0) {
    document.write(`${arrayNums[a]} `);
    a--;
}
document.write(`</div>`);
/*2. (с заду на перед)*/
document.write(`<div>`);
for (let l = arrayNums.length - 1; l >= 0; l--) {
    document.write(`${arrayNums[l]} `);
}
document.write(`</div>`);
/*3. (с заду на перед)*/
document.write(`<div>`);
let p = arrayNums.length - 1;
while (p >= 0) {
    if (p % 2 !== 0) {
        document.write(`${arrayNums[p]} `);
    }
    p--;
}
document.write(`</div>`);
/*4. (с заду на перед)*/
document.write(`<div>`);
for (let r = arrayNums.length - 1; r >= 0; r--) {
    if (r % 2 !== 0) {
        document.write(`${arrayNums[r]} `);
    }
}
document.write(`</div>`);
/*5. (с заду на перед)*/
document.write(`<div>`);
let z = arrayNums.length - 1;
while (z >= 0) {
    if (arrayNums[z] % 2 === 0) {
        document.write(`${arrayNums[z]} `);
    }
    z--;
}
document.write(`</div>`);
/*6. (с заду на перед)*/
document.write(`<div>`);
for (let c = arrayNums.length - 1; c >= 0; c--) {
    if (arrayNums[c] % 2 === 0) {
        document.write(`${arrayNums[c]} `);
    }
}
document.write(`</div>`);
/*7. (с заду на перед)*/
document.write(`<div>`);
for (let o = arrayNums.length - 1; o >= 0; o--) {
    if (arrayNums[o] % 3 === 0) {
        arrayNums[o] = 'okten';
    }
    document.write(`${arrayNums[o]} `);
}
document.write(`</div>`);
/*10 створити пустий масив та :
- заповнити його 50 парними числами за допомоги циклу.*/
let array2N = [];
document.write(`<div>`);
for (let i = 1; i < 51; i++) {
    array2N[i] = 2 * i;
    document.write(`${array2N[i]} `);
}
document.write(`</div>`);
/*- заповнити його 50 непарними числами за допомоги циклу.*/
document.write(`<div>`);
for (let i = 1; i < 51; i++) {
    array2N[i] = (2 * i) - 1;
    document.write(`${array2N[i]} `);
}
document.write(`</div>`);

/*Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)*/
document.write(`<div>`);
for (let i = 1; i < 21; i++) {
    array2N[i] = Math.random();
    document.write(`${array2N[i]} `);
}
document.write(`</div>`);
/*d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732*/
document.write(`<div>`);
for (let i = 1; i < 21; i++) {
    array2N[i] = Math.floor(Math.random() * 732) + 8;
    document.write(`${array2N[i]} `);
}
document.write(`</div>`);
/* 2. Вивести за допомогою console.log кожен третій елемент*/
for (let i = 3; i < 21; i += 3) {
    console.log(array2N[i]);
}
/* 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
for (let i = 3; i < 21; i += 3) {
    if (array2N[i] % 2 === 0) {
        console.log(array2N[i]);
    }
}
/* 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив*/
let arrayElem3 = [];
let x = 0;
for (let i = 3; i < 21; i += 3) {
    if (array2N[i] % 2 === 0) {
        arrayElem3[x] = array2N[i];
        x++;
    }
    console.log(arrayElem3);
}
/* 5. Вивести кожен елемент масиву, сусід справа якого є парним
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56*/
for (let i = 1; i < 21; i++) {
    if (array2N[i] % 2 === 0) {
        console.log(array2N[i - 1]);
    }
}
/* 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/
document.write(`<div>`);
let shopping = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < shopping.length; i++) {
    sum = sum + shopping[i];
}
average = sum / shopping.length;
document.write(average);
document.write(`</div>`);
/* 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/
document.write(`<div>`);
let arrayX = [];
let arrayY = [];
let y = 0;
for (let i = 1; i < 11; i++) {
    arrayX[i] = Math.floor(Math.random() * 100) + 10;
    document.write(`${arrayX[i]} `);
}
for (let key in arrayX) {
    arrayY[y] = arrayX[key] * 5;
    y++;
}
document.write(`<div>${arrayY} </div>`);
document.write(`</div>`);
/* 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/
document.write(`<div>`);
let arrayMixs = [1, 'two', true, false, 78, 'nine', 12, 33, true, 'ten'];
let arrayNum = [];
let q = 0;
for (let num of arrayMixs) {
    if (typeof num == 'number') {
        arrayNum[q] = num;
        document.write(`${arrayNum[q]} `);
        q++;
    }
}
document.write(`</div>`);
