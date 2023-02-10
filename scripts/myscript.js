"use sctrict"
let oneNumber = Number(prompt('Введите первое число', 10));
let twoNumber = Number(prompt('Введите второе число', 10));
if (isNaN(oneNumber)  || isNaN(twoNumber)) {
    console.log("Повторите ввод");
}
else {
    let resultAdd = oneNumber + twoNumber;
    let resultSub = oneNumber - twoNumber;
    let resultDiv = oneNumber / twoNumber;
    let resultMul = oneNumber * twoNumber;
    let resultRes = oneNumber % twoNumber;

    console.log(`Если ${oneNumber} + ${twoNumber}, то получим ${resultAdd.toFixed(1)}`);
    console.log(`Если ${oneNumber} - ${twoNumber}, то получим ${resultSub.toFixed(1)}`);
    console.log(`Если ${oneNumber} / ${twoNumber}, то получим ${resultDiv.toFixed(1)}`);
    console.log(`Если ${oneNumber} * ${twoNumber}, то получим ${resultMul.toFixed(1)}`);
    console.log(`Если ${oneNumber} % ${twoNumber}, то получим ${resultRes.toFixed(1)}`);
}
