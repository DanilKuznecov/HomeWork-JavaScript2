console.log('"ЗАДАНИЕ - а"');


var age = +prompt('Введите свой возраст:')
console.log(age);

if (age <= 18) {
    alert('"Вы ещё молоды, Вам нужно учится"')
}else if (age <=50) {
    alert('"Вам нужно работать"')
}else if (age <=59) {
    alert('"Вам скоро на пенсию"')
}else if (age <=100) {
    alert('"Вы пенсионер"')
}else (age <=101 && isNaN(age)) 
    alert('"Что-то пошло не так!"');




console.log('"ЗАДАНИЕ - b"');


var num = +prompt('"Введите время в цифрах"')

switch(num) {
    case 0:
        alert('00:00 ночи')
        break;
    case 1:
        alert('1 час ночи')
        break;
    case 2:
        alert('2 часа ночи')
        break;
    case 3:
        alert('3 часа ночи')
        break;
    case 4:
        alert('4 часа ночи')
        break;
    case 5:
        alert('5 часов ночи')
        break;
    case 6:
        alert('6 часов утра')
        break;
    case 7:
        alert('7 часов утра')
        break;
    case 8:
        alert('8 часов утра')
        break;
    case 9:
        alert('9 часов утра')
        break;
    case 10:
        alert('10 часов дня')
        break;
    case 11:
        alert('11 часов дня')
        break;
    case 12:
        alert('12 часов дня')
        break;
    case 13:
        alert('1 час дня')
        break;
    case 14:
        alert('2 часа дня')
        break;
    case 15:
        alert('3 часа дня')
        break;
    case 16:
        alert('4 часа дня')
        break;
    case 17:
        alert('5 часов дня')
        break;
    case 18:
        alert('6 часов вечера')
        break;
    case 19:
        alert('7 часов вечера')
        break;
    case 20:
        alert('8 часов вечера')
        break;
    case 21:
        alert('9 часов вечера')
        break;
    case 22:
        alert('10 часов вечера')
        break;
    case 23:
        alert('11 часов ночи')
        break;
}



console.log('"ЗАДАНИЕ - c"');



var a = +prompt('Введите первое число')
console.log(a);
var b = +prompt('Введите второе число')
console.log(b);
var c = +prompt('Введите третье число')
console.log(c);



if (a<b && a<c || c>a && b>a) {
    alert('Среднее число: ' + b)
}else if (b<a && b<c || c>b && c>a) {
    alert('Среднее число: ' + a)
}else if (c<a && c<b || a>c && c<b) {
    alert('Среднее число: ' + c)
}else if (a == b && b == c && a == c) {    
    alert('Все числа равны');
}else {
    if(isNaN(a) && isNaN(b) && isNaN(c)) {
        alert('Введите числовое значение!')
    }
}
    
   



	


