"use strict";
class Something {
    constructor() {
        Something.instances++;
    }
}
Something.instances = 0;
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
