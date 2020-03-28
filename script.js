'use strict';

let money, time;
function start() {
    do {
    money = +prompt ("Ваш бюджет на месяц?", "");
    }
    while (isNaN(money) || money == "" || money == null)
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
}
start();

let appData = {
    budget: [money],
    timeData: [time],
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

function chooseExpenses() {
for (let i=0; i<2; i++) {
let answer_1 = prompt("Введите обязательную статью расходов в этом месяце", ""), 
answer_2 = +prompt("Во сколько обойдется?", "");
if (typeof(answer_1)==='string' && answer_1 != null && answer_1 != "" && answer_2 != null && answer_2 != "" && answer_1.length <50) {
appData.expenses[answer_1] = answer_2;
} else {
    i--;
}}
}

chooseExpenses();
/*
let i = 0;
do {
    let answer_1 = prompt("Введите обязательную статью расходов в этом месяце", ""), 
    answer_2 = +prompt("Во сколько обойдется?", "");
    if ((typeof(answer_1))=='string' && answer_1 != null && answer_1 != "" && 
    answer_1 != undefined && answer_2 != null && answer_2 != "" && answer_2 != undefined) {
    appData.expenses[answer_1] = answer_2;
    i++;
    }}
    while (i<2);
*/
/*   let i = 0;
    while (i<2) {
    let answer_1 = prompt("Введите обязательную статью расходов в этом месяце", ""), 
    answer_2 = +prompt("Во сколько обойдется?", "");
    if ((typeof(answer_1))=='string' && answer_1 != null && answer_1 != "" && 
    answer_1 != undefined && answer_2 != null && answer_2 != "" && answer_2 != undefined) {
    appData.expenses[answer_1] = answer_2;
    i++;
    }
}
*/  

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();




console.log (appData.expenses);
console.log (appData);