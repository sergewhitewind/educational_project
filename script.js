"use strict";

let money = +prompt ("Ваш бюджет на месяц?", "");
let time = prompt ("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: [money],
    timeData: [time],
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
let answer_1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer_2 = +prompt("Во сколько обойдется?", "");
appData.expenses[answer_1] = answer_2;
alert (money/30);
console.log (appData.expenses);
console.log (appData);