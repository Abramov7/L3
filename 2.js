let min = Number(prompt('Введите минимум: ', 0));
let max = Number(prompt('Введите максимум: ', 0));
let step = Number(prompt('Введите шаг: ', 0));

for ( let i=min; i<=max; i+=step) {
    console.log(i);
}