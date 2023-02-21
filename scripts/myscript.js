let week = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
let arr = ["3578", "456", "76435", "46546", "10158", "465468", "98756"];
let date = new Date();
let now = week[date.getDay()];
print (week);
document.write('______________________________'+ "<br />");
print2(arr);

alert(now);

function print(array) {
    document.write('<b>Дни недели</b> <br />')
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "суббота" || array[i] == "воскресенье"){
            document.write(array[i].bold() + "<br />")
            
        }
        else if (array[i] == now){
            document.write("текущий день — " + array[i].italics() + "<br />")
        }
        else {
            document.write(array[i] + "<br />");
        }
    }
}

function print2(array) {
    document.write('<b>Числа</b> <br />')
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith('3') || array[i].startsWith('7')) {
            document.write(array[i].bold() + "<br />")
        }
        else {
            console.log("ничего не найдено");
        }
    }
}
