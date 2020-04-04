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
    chooseExpenses: function(){
        for (let i=0; i<2; i++) {
            let answer_1 = prompt("Введите обязательную статью расходов в этом месяце", ""), 
            answer_2 = +prompt("Во сколько обойдется?", "");
            if (typeof(answer_1)==='string' && answer_1 != null && answer_1 != "" && answer_2 != null && answer_2 != "" && answer_1.length <50) {
            appData.expenses[answer_1] = answer_2;
            } else {
                i--;
            }}
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Ошибочка...!");
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        let items;
        do {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            }
            while (typeof(items)=== "Number" || items == "" || items == null);
        appData.income = items.split(', ');
        let additionalItem;
        do {
            additionalItem = prompt('Может что-то еще?', '');
            }
            while (typeof(additionalItem)=== "Number" || additionalItem == "" || additionalItem == null);
        appData.income.push(additionalItem);
        appData.income.sort();
        let listOfIncomes = 'Способы дополнительного заработка: ';
        appData.income.forEach(function(item, i){
        listOfIncomes += ((i+1) + ': ' + item + '; ');});
        alert(listOfIncomes);
    }
};

console.log('Наша программа включает в себя данные: ');
for (let key in appData){
    console.log(key + ': ' + appData[key]);
}