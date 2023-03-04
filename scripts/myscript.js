"use sctrict"

let number = Math.floor(Math.random() * 10) + 1;
let count = 3;
function bot() {
        userNumber = Number(prompt("Введите любое число от 1 до 10"));
        console.log("загаданное число "+ number);
        
    if (count >= 1){
        if (userNumber === 0 ) {alert(`Игра окончена`)}
        else if (number == userNumber) {
            alert(`Вы угадали!`);
            if (result = confirm("Хотели бы сыграть еще?")){
                number = Math.floor(Math.random() * 10) + 1;
                bot();
            }
            else {alert(`Пока!`); return;}
        }
        else if (number < userNumber) {
            count--;
            alert(`Загаданное число меньше, у вас осталось ${count} попыток`);
            bot()
        }
        else if (number > userNumber) {
            count--;
            alert(`Загаданное число больше, у вас осталось ${count} попыток`);
            bot()
        }
        else if (isNaN(userNumber)) {
            count--;
            alert(`Это не число, у вас осталось ${count} попыток`);
            bot()
        }
        
        }
        else {
            let result = confirm(`Попытки закончились, хотите сыграть ещё?`)
            if (result){
                count = 3;
                bot();
            }
            else {alert(`Ну как хотите, пока!`);}
        }
}

bot();