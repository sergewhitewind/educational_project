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
for (let i=0; i<2; i++) {
let answer_1 = prompt("Введите обязательную статью расходов в этом месяце", ""), 
answer_2 = +prompt("Во сколько обойдется?", "");
if ((typeof(answer_1))=='string' && answer_1 != null && answer_1 != "" && answer_1 != undefined && answer_2 != null && answer_2 != "" && answer_2 != undefined) {
appData.expenses[answer_1] = answer_2;
} else console.log("error in input data");
}

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

alert ("Ежедневный бюджет " + money/30);
console.log (appData.expenses);
console.log (appData);