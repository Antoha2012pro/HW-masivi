// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const number = [1, 2, 3];
number[1] = 10;
console.log(number);

// 2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const ryadok = ["a", "b", "c"];
ryadok[ryadok.length] = "d";
console.log(ryadok);

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < num.length; i += 1) {
    const element = num[i];
    sum += element;
}
console.log(sum);

// 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const numberThree = [1, 2, 3, 4, 5];
for (const poryadkovo of numberThree) {
    console.log(poryadkovo);
}

// 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const ryadokTwo = ["asadasd", "b", "chfgfhd", "dasdasd", "e"];
for (let ii = 0; ii < ryadokTwo.length; ii++) {
    if (ryadokTwo[ii].length > 4) {
      console.log(ryadokTwo[ii]);
    }
}

// 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const numberFour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumTwo = 0;
for (let indexee = 0; indexee < numberFour.length; indexee++) {
    const element = numberFour[indexee];
    sumTwo += element;
}
console.log(sumTwo);

// 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const numberFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumThree = 0;
for (let index = 0; index < numberFive.length; index++) {
    const elementTwo = numberFive[index];
    if (elementTwo % 2 === 0) {
        sumThree += elementTwo;
    }
}
console.log(sumThree);