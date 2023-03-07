"use sctrict"
const purpose = 400000; //цель
let profit = "10000"; //дополнительный доход
let money =  Number(prompt("Ваш месячный доход", 1000)); // месячный доход
let extraMoney = Number(prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`)); // возможный доход
let expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "еда, квартплата"); // возможные расходы
let amount =  Number(prompt("Во сколько обойдутся обязательные статьи расходов?", 1000)); // обязательные расходы
let deposit =  confirm("Есть ли у вас вклад в банке?")

function proof(item, msg) {
    while (isNaN(item) || (item ==="") || item === 0){ item = Number(prompt(msg))}
}
proof(money, `Ваш месячный доход`);
proof(amount, `Во сколько обойдутся обязательные статьи расходов?`);
proof(extraMoney, `Перечислите возможный доход за ваши дополнительные работы: ${profit}?`);

const getAccumulatedIncome = (x, y, z) => {return (x + y) - z};
const getTargetMonth = (sum, purpose) => {return Math.ceil(purpose/sum)};

let accumulatedIncome = getAccumulatedIncome(money, extraMoney, amount); // прибыль
let budgetDay = Math.floor(accumulatedIncome/30); // бюджет на день

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет:  ${accumulatedIncome} рублей`);

if(getTargetMonth(accumulatedIncome, purpose) < 0){
    console.log(`Цель не будет достигнута`);
}
else {
    console.log(`Ваша цель накопить ${purpose} рублей с учетом всех ваших расходов будет достигнута через`, getTargetMonth(accumulatedIncome, purpose) + ' месяца');
}

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

/*Усложненное задание*/
const arr = [`458`,`25`,`87`,`11`,`654`,`33`,`264`];
//Первый способ
const arr2 = arr.map((item => {
    if(item.startsWith(`2`) || item.startsWith(`4`)){
        console.log(item)
    }
}
))
console.log(`Первый способ`);
console.log(arr2);
//второй способ
console.log(`Второй способ`);
arr.forEach(element => {
    if(element.startsWith(`2`) || element.startsWith(`4`)){
        console.log(element);
    }
});
//третий способ
console.log(`Третий способ`);
arr.filter((item) => {
    if(item.startsWith(`2`) || item.startsWith(`4`)){
        console.log(item)
    }
})


let userString = 10;

const stringProof = (str) => {
    if (typeof str == "string") 
    {str = str.trim();
        if(str.length >30){
            str = str.slice(0, 30) + '...';
        }
        console.log(str);
    }
    else{
        console.log(`Это не строка`)}
}
stringProof(userString)