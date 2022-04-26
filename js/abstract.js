"use strict";
/*abstract class FooCommand {}

class BarCommand extends FooCommand {}

//const fooCommand: FooCommand = new FooCommand();

const barCommand = new BarCommand();
*/
class FooCommand {
}
//class BarErrorCommand  extends FooCommand {} 
class BarCommand extends FooCommand {
    execute() {
        return `Command Bar executed`;
    }
}
const barCommand = new BarCommand();
barCommand.execute();
