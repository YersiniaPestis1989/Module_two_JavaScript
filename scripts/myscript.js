"use sctrict"

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const studentScores = {
    Коля: '99',
    Вася: '35',
    Петя: '70',
    Таня: '95',
    Оля: '50',
    Саша: '20'
}

let sum = 0;
for (key in salaries) {
    sum += salaries[key]
}
console.log(`Сумма всех зарплат равна ${sum}`);


for(key in studentScores){
    if (+studentScores[key] < 80){
        console.log(`Студент ${key} не проходит отбор`);
        delete studentScores[key]
    }
}
console.log(`Отличники у нас: `, studentScores);