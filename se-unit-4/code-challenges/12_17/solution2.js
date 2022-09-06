// Option 1 (longer but clearer)
function numStringDiff(x){
  const strings = x.filter(n => typeof n === 'string')
  const nums = x.filter(n => typeof n === 'number')
  
  const strSum = strings.reduce((acc, str) => acc += +str, 0)
  const numSum = nums.reduce((acc, str) => acc += str, 0)

  return numSum - strSum
}

// Option 2 (shorter but slightly less readable)
function numStringDiff(x){
  return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}


