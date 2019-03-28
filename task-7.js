let arr = [1,2,3,4];
let summ = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
        summ += arr[i];
    }
}

console.log(summ);
