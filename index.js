while (true) {
   let result = prompt('Введите число больше 100', 100);
   if (result <= 100 ) {
    alert('Введите другое число');
   } else {
    alert('Вы ввели верное число');
    break;
   }
}