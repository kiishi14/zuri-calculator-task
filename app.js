let number1 = window.prompt('Enter Your First Number');
let op = window.prompt('Enter operator, +-/*%');
let number2 = window.prompt('Enter Your Second Number');

number1 = parseFloat(number1);
number2 = parseFloat(number2);

let add = number1 + number2
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
let remain = number1 % number2;

if(op == '+'){
    window.alert(`The answer is ${add} \nWell done champ!`);
}else if(op == '-'){
    window.alert(`The answer is ${sub} \nWell done champ!`);
}else if(op == '/'){
    window.alert(`The answer is ${div} \nWell done champ!`);
}else if(op == '*'){
    window.alert(`The answer is ${mult} \nWell done champ!`);
}else if(op == '%'){
    window.alert(`The answer is ${remain} \nWell done champ!`);
}else{
    window.alert(`Enter the right operator!!`);
}