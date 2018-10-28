function sumOfOther(arr){
    let result = [];

    arr.forEach((el) => {
        let filteredArr = arr.filter((e) => el !== e);
        const sum = filteredArr.reduce((acc, next, index, arr) => {
            return acc + next;
        })
        result.push(sum);
    })
    return result;
}