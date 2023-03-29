"use strict"

let books = document.querySelectorAll('.book')
let body = document.querySelector('body')
let book = document.querySelectorAll('.book h2 a')
let otherBook = document.querySelectorAll('.book ul li')
let advertising = document.querySelector('.adv')

books[0].before(books[1]) 
books[5].after(books[2]) 
books[3].before(books[4]) 

body.style.background = "url('./image/you-dont-know-js.jpg') center"

book[4].textContent = 'Книга 3. this и Прототипы Объектов'

advertising.style.display = 'none'

otherBook[3].after(otherBook[6]) 
otherBook[4].before(otherBook[8]) 
otherBook[9].after(otherBook[2]) 
otherBook[47].after(otherBook[55])
otherBook[50].after(otherBook[48])
otherBook[53].after(otherBook[51])

let otherBooks = otherBook[25].cloneNode(true); 
otherBooks.textContent = 'Глава 8: Запределами ES6'; 
console.log(otherBooks);
otherBook[25].after(otherBooks); 