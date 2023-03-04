"use sctrict"

let number = Math.floor(Math.random() * 10) + 1;
function bot() {
        userNumber = Number(prompt("Введите любое число от 1 до 10"));
        console.log("загаданное число "+ number);
        
        if (userNumber === 0 ) {alert(`Игра окончена`)}
        else if (number == userNumber) {
            alert("Вы угадали!");
            if (result = confirm("Хотели бы сыграть еще?")){
                number = Math.floor(Math.random() * 10) + 1;
                bot();
            }
            else {alert(`Пока!`); return;}
        }
        else if (number < userNumber) {
            alert(`Загаданное число меньше`);
            bot()
        }
        else if (number > userNumber) {
            alert(`Загаданное число больше`);
            bot()
        }
        else if (isNaN(userNumber)) {
            alert(`Это не число`);
            bot()
        }
        
        }
    
    bot();

// function bot(b) {
//     // let number = Math.floor(Math.random() * 10) + 1;
//     userNumber = Number(prompt("Введите любое число от 1 до 10"));
//     let number = 5;
//     console.log("загаданноен число "+number);
//     // let i = 0; 
//     let tryP = 10; 
    
//     if (number == b) {
//         alert("Вы угадали!");
//         if (result = confirm("Вы угадали!!! Хотели бы сыграть еще?")){
//             bot(b);
//         }
//     }
//     if (number < b &&) {
//         alert(`Загаданное число меньше, у вас осталось ${tryP-1} попыток`);
//         // tryP--;
//         // i++;
//         console.log(`i равно ${i}, а try равно ${tryP}`);
//         bot(b)
//     }
//     if (number > b) {
//         alert(`Загаданное число больше, у вас осталось ${tryP-1} попыток`);
//         // tryP--;
//         // i++;
//         console.log(`i равно ${i}, а try равно ${tryP}`);
//         bot(b)
//     }
//     if (isNaN(b)) {
//         alert(`Это не число, у вас осталось ${tryP-1} попыток`);
//         // tryP--;
//         // i++;
//         console.log(`i равно ${i}, а try равно ${tryP}`);
//         bot(b)
//     }
//     else{
//         if (result = confirm("Попытки закончились, хотите сыграть еще?")){
//             bot(b);
//         }
//         else {
//             alert("Ну и ладно, пока!");
            
//         }
//       }
//     }

// bot(userNumber);
