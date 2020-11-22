numbers = [3, 9, 63, 01, 6, 81, 85, 3, 827];

function compare(a, b) {
    if(a < b) {
        return -1;
    }
    if(a > b) {
        return 1;
    }
    if(a === b) {
        return 0;
    }
}

numbers.sort(compare)

/* 
  Output: [1, 3, 3, 6, 9, 63, 81, 85, 827]
*/