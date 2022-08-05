'use strict';

const xNumber = 5;
const answer = prompt('Укажите любое кол-во целых чисел кратных 5 (через запятую)');

if (answer === null) {
   console.log('Ответ не получен!');
} else {
   const values = answer.split(',');
   const result = [];
   for (let i = 0; i < values.length; i++) {
      const number = +values[i];
      if (number !== 0 && number % xNumber === 0) {
         result.push(number);
      }
   }
   if (result.length > 0) {
      console.log(`Найдены числа, кратные ${xNumber}, в количестве ${result.length}шт:`);
      console.log(result.join(', '));
   } else {
      console.log(`Числа которые, кратны ${xNumber}, не найдены`)
   }
}
