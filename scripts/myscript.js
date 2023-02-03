"use sctrict"
let money = 30000;
let profit = "10000";
let expenses = "питание, коты, здоровье, квартплата";
let purpose = 400000;
let period = 12;
let budgetDay = (money + Number(profit)) / 30;

console. log ('Тип данных переменной money —', typeof money);
console. log ("Тип данных переменной", money, typeof profit);
console. log ("Период равен", period, "месяцев");
console. log ("Цель заработать", purpose, "рублей");
// Первый способ
console. log ("Дневной бюджет —", budgetDay, "рублей");
// Второй способ
console. log (`Дневной бюджет — ${budgetDay} рублей`);
// Третий способ
console. log (`Дневной бюджет — ${(money + Number(profit)) / 30} рублей`);

