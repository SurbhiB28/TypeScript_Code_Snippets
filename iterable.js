var iterable = [2, 7, 8];
function createIterable(arr) {
    var count = 0;
    return { next: function () {
            return count < arr.length ?
                { value: arr[count++],
                    done: false } :
                { value: undefined,
                    done: true };
        }
    };
}
var myIterable = createIterable(iterable);
console.log(myIterable.next());
console.log(myIterable.next());
console.log(myIterable.next());
console.log(myIterable.next());
