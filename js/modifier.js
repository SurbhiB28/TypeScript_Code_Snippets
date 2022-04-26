"use strict";
class FooBase {
}
var foo = new FooBase();
foo.x;
//foo.y; 
//foo.z; 
// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
        super();
        this.x;
        //this.y; 
        this.z;
    }
}
