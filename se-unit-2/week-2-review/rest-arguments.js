function sum(num1, num2, ...restNums) {
    console.log('restNums', restNums);
    console.log('arguments', arguments);

    let sum = num1 + num2;
    for (let i = 0; i < restNums.length; i++) {
        sum += restNums[i];
    }
    return sum;
}

console.log('sum', sum(1,2,3,4,5));