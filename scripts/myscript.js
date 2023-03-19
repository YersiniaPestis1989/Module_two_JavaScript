"use sctrict"
let income = document.querySelector(`#income`)
let money; // месячный доход
income.addEventListener(`input`, (e) => {
    money = Number(e.target.value);
})

let additionalIncome = document.querySelector(`#additionalIncome`);
let profit; //дополнительный доход
additionalIncome.addEventListener(`input`, (e) => {
    profit = e.target.value;
})

let sumAdditionalIncome = document.querySelector(`#sumAdditionalIncome`);
let extraMoney; // возможный доход
sumAdditionalIncome.addEventListener(`input`, (e) => {
    extraMoney = Number(e.target.value);
})

let expensesInput = document.querySelector(`#expenses`);
let expenses; // возможные расходы
expensesInput.addEventListener(`input`, (e) => {
    expenses = e.target.value;
});

let amountInput = document.querySelector(`#amount`);
let amount; // обязательные расходы
amountInput.addEventListener(`input`, (e) => {
    amount = Number(e.target.value);
});

let savings = document.querySelector(`#savings`);
let purpose; //цель
savings.addEventListener(`input`, (e) => {
    purpose = Number(e.target.value);
})

let perionInput = document.querySelector(`#period`);
let period; // период накопления
perionInput.addEventListener(`input`, (e) => {
    period = Number(e.target.value);
})

const getAccumulatedIncome = (x, y, z) => {return (x + y) - z};
const getTargetMonth = (sum, purpose) => {return Math.ceil(purpose/sum)};

const btnResult = document.querySelector(".calculator__items-submit");
btnResult.addEventListener(`click`, () => {
    let AccumulatedIncome = getAccumulatedIncome(money, extraMoney, amount);
    let budgetDay = Math.floor(AccumulatedIncome/30);
    let budgetMounth = Math.ceil(purpose/AccumulatedIncome);
    

    document.querySelector(`#sumMoney`).textContent = AccumulatedIncome; // прибыль
    document.querySelector(`#sumMoneyDay`).textContent = budgetDay; // бюджет на день
    document.querySelector(`#sumMoneyPurpose`).textContent = purpose;
    document.querySelector(`#purpose`).textContent = getTargetMonth(AccumulatedIncome, purpose);
    if (Math.floor(budgetDay) > 6000)
        {
            document.querySelector(`#incomeLevel`).textContent = "У вас высокий уровень дохода";
        }
        else if  (budgetDay > 3000 && budgetDay < 6000)
        {
            document.querySelector(`#incomeLevel`).textContent = "У вас средний уровень дохода";
        }
        else if  (budgetDay > 0 && budgetDay < 3000)
        {
            document.querySelector(`#incomeLevel`).textContent = "К сожалению, у вас уровень дохода ниже среднего";
        }
        else if (budgetDay < 0) {
            document.querySelector(`#incomeLevel`).textContent = "Что-то пошло не так";
        }
})

// function proof(item, msg) {
//     while (isNaN(item) || (item ==="") || item === 0){ item = Number(prompt(msg))}
// }
// proof(money, `Ваш месячный доход`);
// proof(amount, `Во сколько обойдутся обязательные статьи расходов?`);
// proof(extraMoney, `Перечислите возможный доход за ваши дополнительные работы: ${profit}?`);


// if(getTargetMonth(accumulatedIncome, purpose) < 0){
//     console.log(`Цель не будет достигнута`);
// }
// else {
//     console.log(`Ваша цель накопить ${purpose} рублей с учетом всех ваших расходов будет достигнута через`, getTargetMonth(accumulatedIncome, purpose) + ' месяца');
// }

