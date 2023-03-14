const promise = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const random = Math.random();
        if (random > 0.5) {
            console.log(`it was above .5 ${random}`);
            resolve('hi')
        } else {
            console.log(`it was below .5 ${random}`);
            reject('Too bad')
        }
    }, 0);

}); 

console.log(promise);

promise
    .then(response => console.log(response))
    .catch(error => console.log(error))
