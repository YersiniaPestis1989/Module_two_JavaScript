"use sctrict"
const purpose = 400000; //цель
let profit = "10000"; //дополнительный доход
let money =  Number(prompt("Ваш месячный доход", 1000)); // месячный доход
let extraMoney = Number(prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`)); // возможный доход
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "еда, квартплата"); // возможные расходы
let amount =  Number(prompt("Во сколько обойдутся обязательные статьи расходов?", 1000)); // обязательные расходы
let deposit =  confirm("Есть ли у вас вклад в банке?")

while (isNaN(money)  || isNaN(amount) || isNaN(extraMoney)) {
    alert("Введите данные заново, обращая внимание на формат");
    let money =  Number(prompt("Ваш месячный доход", 1000));
    let amount =  Number(prompt("Во сколько обойдутся обязательные статьи расходов?", 1000));
    let extraMoney = promt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`);
}

const getAccumulatedIncome = (x, y, z) => {return (x + y) - z};
const getTargetMonth = (sum, purpose) => {Math.ceil(purpose/sum)};

let accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount); // прибыль
let budgetDay = Math.floor(accumulatedIncome/30); // бюджет на день

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет:  ${getAccumulatedIncome(money, extraMoney, amount)} рублей`);
console.log(`Ваша цель накопить ${purpose} рублей с учетом всех ваших расходов будет достигнута через`, getTargetMonth(accumulatedIncome, purpose) + ' месяца');
console.log(`Дневной бюджет: ${budgetDay} рублей`);

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
}
