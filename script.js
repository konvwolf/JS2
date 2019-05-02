"use strict";

/* 1. Объясните почему код даёт именно такие результаты?
Подсказка. Чтобы лучше разобраться возьмите этот код и запустите в отладчике в браузере со
включенными точками остановки. */

//пример 1
let a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c);
/* ответ: 2
Используется префиксная форма инкремента, при которой
начальное значение переменной сначала увеличивается
на единицу, а затем результат записывается в переменную.
Начальное значение переменной a - 1, к ней прибавляется
единица и результат - 2 - сохраняется в переменную c. */

//пример 2
d = b++;
alert(d);
/* ответ: 1
Используется постфиксная форма инкремента, при которой
сперва выдается начальное значение, которое затем
увеличивается на единицу. Начальное значение переменной
b - 1. Сначала 1 записывается в переменную d, после чего
переменная b увеличивается на единицу. */

//пример 3
c = 2 + ++a;
alert(c);
/* ответ: 5
В математическом выражении второе слагаемое имеет оператор
инкремента в префиксной форме. При этом после выполнения
операции из примера 1 переменная a имеет значение 2.
Соответственно переменная a увеличивается на единицу.
Затем к 2 прибавляется новое значение переменной a, то есть
число 3, а сумма получается равной 5. */


//пример 4
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
/* При выполнении предыдущих примеров переменная a уже получила
значение 3, а переменная b - значение 2. В математическом выражении
ко второму слагаемому применяется оператор инкремента в постфиксной
форме. Таким образом значение переменной b сперва прибавляется
к числу 2 и получается ответ 4, а затем увеличивается на единицу.
Конечное значение переменной b получается 3. */


/* 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий). */

let a = 2;
let x = 1 + (a *= 2);

/* После выполнения примера переменная x будет равна 5, а переменная
a - 4. Во второй строке примера в скобках указан оператор присваивания
с умножением. Такой бинарный оператор берет начальное значение переменной,
умножает его на число, указанное справа от себя, и присваивает переменной
слева от себя новое значение. В примере начальное значение переменной
a равно 2, после работы оператора присвоения с умножением 2 умножается
на 2, получается 4. Затем 4 прибавляется к 1 и получается 5. Это значение
присваивается переменной x. */


/* 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму; */

/**
 * Функция mathMagic производит одно из трех математических действий с переменными:
 * если обе переменные положительные - вычитание, если отрицательные - умножение,
 * если одна положительная, а другая отрицательная - сложение
 * @param {*} num1 первая переменная, положительная или отрицательная
 * @param {*} num2 вторая переменная, положительная или отрицательная
 * @returns возвращает результат одного из трех математических действий
 */
function mathMagic(num1, num2) {
    let numberSign1 = Math.sign(num1); // определяю знак числа
    let numberSign2 = Math.sign(num2); // определяю знак числа

    if (numberSign1 === 1 && numberSign2 === 1 || numberSign1 === 1 && numberSign2 === 0 || numberSign1 === 0 && numberSign2 === 1) {
        return num1 - num2;
    } else if (numberSign1 === -1 && numberSign2 === -1) {
        return num1 * num2;
    } else {
        return num1 + num2;
    }
}

let a = +prompt("Укажите первое число:"),
    b = +prompt("Укажите второе число:");
alert("Ваш результат: " + mathMagic(a, b));


/* 4. Реализовать основные 4 арифметические операции (+, -, / , *) в виде функций с двумя
параметрами. Обязательно использовать оператор return. */

let sum = (num1, num2) => num1 + num2; // сложение

let sub = (num1, num2) => num1 - num2; // вычитание

let div = (num1, num2) => (num1 / num2).toFixed(1);
//деление с округлением результата до 1 знака после запятой

let mul = (num1, num2) => num1 * num2; // умножение

let a = +prompt("Укажите первое число: "),
    b = +prompt("Укажите второе число: ");
alert("Результат сложения ваших чисел - " + sum(a, b) +
    ", вычитания - " + sub(a, b) +
    ", деления - " + div(a, b) +
    ", а умножения - " + mul(a, b));


/* 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций (использовать функции из задания 4) и вернуть полученное значение. */

/**
 * Функция выполняет одно из четырех арифметических действий над двумя числами. Числа могут быть
 * положительными и отрицательными. Арифметическое действие можно указать знаком или написать
 * по-русски словом.
 * @param {*} arg1 первое число
 * @param {*} arg2 второе число
 * @param {*} operation арифметическое действие: знаком (+, -, / , *) или словом (умножить, сложить)
 * @returns возвращает результат арифметического действия
 */
function mathOperation(arg1, arg2, operation) {
    let arithmetics = operation.toLowerCase();

    switch (arithmetics) {
        case "сложение":
        case "сложить":
        case "+":
            return arg1 + arg2;
        case "вычитание":
        case "вычесть":
        case "-":
            return arg1 - arg2;
        case "умножение":
        case "умножить":
        case "*":
            return arg1 * arg2;
        case "деление":
        case "разделить":
        case "делить":
        case "/":
            let divide = arg1 / arg2;
            if (Number.isInteger(divide)) { // если число не имеет знаков после запятой, вывожу результат
                return divide;
            } else {
                return divide.toFixed(2); // округляю до двух знаков после запятой
            }
    }
}

let a = +prompt("Укажите первое число: "),
    b = +prompt("Укажите второе число: "),
    c = prompt("Укажите действие: ");
alert(mathOperation(a, b, c));

/* 6. Программа должна спросить у пользователя количество денег, которое он хочет положить в банк.
Пользователь должен ввести целое число, а программа должна выдать соответствующее сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
Если пользователь введет любое другое целое число, программа также должна выдать соответствующее
сообщение, в котором будет отображено это число, а также поставить верное окончание в слове "рубль".
Для получения верного склонения слова (любого слова с числом) вам необходимо создать функцию. */

/**
 * Функция deposit по указанной пользователем сумме подставляет нужное окончание
 * в название валюты. Работает только с рублями.
 * @param {*} num сумма денег, указанная пользователем
 * @returns возвращает окончание
 */
function deposit(num) {
    if (num >= 11 && num <= 19) {
        return "ей";
    }

    num = String(num) // перевожу пользовательский ввод в строку
    let ending = +(num.charAt(num.length - 1)); // определяю последнюю цифру в числе
    let endingMinusOne = +(num.charAt(num.length - 2));
    if (ending == 0 || ending == 5 || ending == 6 || ending == 7 || ending == 8 || ending == 9 || ending == 1 && endingMinusOne == 1) {
        // 0, 5, 6, 7, 8, 9 или заканчивается на эти цифры и если 1 и в числе больше двух цифр
        return "ей";
    } else if (ending == 2 || ending == 3 || ending == 4) { // 2, 3, 4 или заканчивается на 2, 3, 4
        return "я";
    } else if (ending == 1 && num.length > 2) { // если в числе больше двух цифр
        return "ей";
    } else { // число - 1
        return "ь";
    }
}

let a = parseInt(prompt("Какую сумму вы хотите вложить?"));

if (Math.sign(a) === 1) { // если указанное число положительное, зачисляю на счет
    alert(`Ваша сумма ${a} рубл${deposit(a)} успешно зачислена!`);
} else { // число отрицательное, запрещаю вывод денег со счета
    alert(`Срок вашего вклада еще не истек, вы не можете вывести ${-a} рубл${deposit(a)}!`);
}