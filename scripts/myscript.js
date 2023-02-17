"use sctrict"

const purpose = 400000;
let money =  Number(prompt("Ваш месячный доход", 1000));
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "еда, квартплата");
let amount =  Number(prompt("Во сколько обойдутся обязательные статьи расходов?", 1000));
let deposit =  confirm("Есть ли у вас вклад в банке?")

while (isNaN(money)  || isNaN(amount)) {
    alert("Введите данные заново, обращая внимание на формат");
    let money =  Number(prompt("Ваш месячный доход", 1000));
    let amount =  Number(prompt("Во сколько обойдутся обязательные статьи расходов?", 1000));
}

let budgetMonth = money - amount;
let budgetDay = Math.floor((money - amount) / 30);
console.log (`Месячный бюджет — ${budgetMonth} рублей`);
console.log (`Накопить ${purpose} рублей получится через ${Math.ceil(purpose/budgetMonth)} месяцев`);
console.log (`Дневной бюджет — ${budgetDay} рублей`);

if (budgetDay > 6000)
{
    console.log("У вас высокий уровень дохода");
}
else if  (budgetDay > 3000 && budgetDay < 6000)
{
    console.log("У вас средний уровень дохода");
}
else if  (budgetDay > 0 && budgetDay < 3000)
{
    console.log("К сожалению, у вас уровень дохода ниже среднего");
}
else if (budgetDay < 0) {
    console.log("Что-то пошло не так");

