// var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]

function sortAscending(arr){
    const length = arr.length;

    for (let i = 0; i < length; i ++) {
        for (let j = i + 1; j < length; j ++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
}

