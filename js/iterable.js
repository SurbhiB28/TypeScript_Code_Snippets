"use strict";
let iterable = [2, 7, 8];
function createIterable(arr) {
    let count = 0;
    return { next: function () {
            return count < arr.length ?
                { value: arr[count++],
                    done: false } :
                { value: undefined,
                    done: true };
        }
    };
}
let myIterable = createIterable(iterable);
console.log(myIterable.next());
console.log(myIterable.next());
console.log(myIterable.next());
console.log(myIterable.next());
