"use sctrict"
let userNumber = Number(prompt("Введите любое число от 1 до 10"));

// while (isNaN(userNumber) || (userNumber > 10)) {
//     alert("Введите данные заново, обращая внимание на формат");
//     userNumber = Number(prompt("Введите любое число от 1 до 10"));
// }
// console.log("мое число "+userNumber);
// console.log("загаданноен число "+number);

function bot(b) {
    // let number = Math.floor(Math.random() * 10) + 1;
    userNumber = Number(prompt("Введите любое число от 1 до 10"));
    let number = 5;
    console.log("загаданноен число "+number);
    let i = 0; 
    let tryP = 10; 
    for (tryP--, i++) {
    if (number == b && i < tryP) {
        alert("Вы угадали!");
        if (result = confirm("Вы угадали!!! Хотели бы сыграть еще?")){
            bot(b);
        }
    }
    if (number < b && i < tryP) {
        alert(`Загаданное число меньше, у вас осталось ${tryP-1} попыток`);
        // tryP--;
        // i++;
        console.log(`i равно ${i}, а try равно ${tryP}`);
        bot(b)
    }
    if (number > b) {
        alert(`Загаданное число больше, у вас осталось ${tryP-1} попыток`);
        // tryP--;
        // i++;
        console.log(`i равно ${i}, а try равно ${tryP}`);
        bot(b)
    }
    if (isNaN(b)) {
        alert(`Это не число, у вас осталось ${tryP-1} попыток`);
        // tryP--;
        // i++;
        console.log(`i равно ${i}, а try равно ${tryP}`);
        bot(b)
    }
    else{
        if (result = confirm("Попытки закончились, хотите сыграть еще?")){
            bot(b);
        }
        else {
            alert("Ну и ладно, пока!");
            
        }
      }
    }
}
bot(userNumber);