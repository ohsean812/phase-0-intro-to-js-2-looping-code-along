// Code your solutions in this file

function writeCards(namesArray, event) {
    const newArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    };
    return newArray;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}
