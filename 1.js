let c = 1;

for ( let i=0; i<10; i++) {
    let a = parseFloat(prompt('Введите число #'+i, 0.0));
    console.log(a);
    if (a%2 == 0){
        c = c * a;
    }
}

console.log('Итог: '+c);