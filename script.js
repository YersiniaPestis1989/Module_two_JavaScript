const income = document.querySelector("#income"); //доходb
const incomeLevel = document.querySelector(".form-label__income-level");// уровень дохода
const expensesList = document.querySelector("#expenses"); // расходы
const expensesLevel = document.querySelector("#expenses-level");//сумма расходов
//const deposit = document.querySelector("#deposit");
const submit = document.querySelector("#button");

let incomeIsValid = true; //валидация доходов
let expensesListIsValid = true;//валидация строки
let expensesLevelIsValid = true;//валидация расходов

const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
};

const validNumber = function (value) {
  return !isNaN(value);
};
//функция валидации чисел

const validStr = function (str) {
  const re =
    /(?:(?:^\s*[а-яА-Яa-zA-Z]+\s*,)+\s*[а-яА-Яa-zA-Z]+\s*$)|^\s*[а-яА-Яa-zA-Z]+\s*$/gmu;
  return re.test(str);
};    
//функция валидации строки

validNumber(income);
validNumber(expensesLevel);
validStr(expensesList);

const levelIncome = function (income1) { //фукция расчета уровня дохода
  income.classList.add("form__income-level");
  if (income1 / 30 > 600) {
    incomeLevel.textContent = "У вас высокий уровень дохода";
    incomeLevel.style.backgroundColor = "#5BA150";
  } else if (income1 / 30 > 300 && income1 / 30 < 600) {
    incomeLevel.textContent = "У вас средний уровень дохода";
    incomeLevel.style.backgroundColor = "#A0A150";
  } else if (income1 / 30 > 0 && income1 / 30 < 300) {
    incomeLevel.textContent =
      "К сожалению, ваш уровень дохода ниже среднего";
    incomeLevel.style.backgroundColor = "#A15050";
  } else {
    income.classList.remove("form__income-level");
  }
};

//проверка значений
const validationInput = function (item, validValue, text, borderRight = '10px') {
  if (item.value === "") {
    item.parentElement.querySelector(".form-label__text").textContent =
    text;
    item.style.border = "none";
    return true;
  } else if (validValue(item.value)) {
    item.style.border = `3px solid #5BA150`;
    item.style.borderRight = `${borderRight} solid #5BA150`;
    item.parentElement.querySelector(".form-label__text").textContent =
    text;
    return false;
  } else {
    item.style.border = `3px solid #A15050`;
    item.style.borderRight = `10px solid #A15050`;
    item.parentElement.querySelector(".form-label__text").textContent =
      "Что то пошло не так...";
    item.value = "";
    return true;
  }
};

const validationNumberInput = debounce(() => {
  incomeIsValid = validationInput(
    income,
    validNumber,
    "Ваш месячный доход",
    '3px'
  );

  levelIncome(income.value);

  submit.disabled =
    incomeIsValid || expensesListIsValid || expensesLevelIsValid;
}, 300);

const validNumberInput = debounce(() => {
  expensesListIsValid = validationInput(
    expensesList,
    validStr,
    "Перечислите возможные расходы за рассчитываемый период через запятую"
  );


  submit.disabled =
    incomeIsValid || expensesListIsValid || expensesLevelIsValid;
}, 1000);

const validationExpensesLavel = debounce(() => {
  expensesLevelIsValid = validationInput(
    expensesLevel,
    validNumber,
    "Во сколько обойдутся обязательные статьи расходов?"
  );

  submit.disabled =
    incomeIsValid || expensesListIsValid || expensesLevelIsValid;
}, 300);

income.addEventListener("input", validationNumberInput);

expensesList.addEventListener("input", validNumberInput);

expensesLevel.addEventListener("input", validationExpensesLavel);

submit.addEventListener("click", (e) => {
  console.log(
    `Ваш eжемесячный доход: ${income.value}; Ваши ежемесячные расходы: ${expensesList.value}; Сумма ваших ежемесячных расходов: ${expensesLevel.value}`
  );
  e.stopPropagation();
});

