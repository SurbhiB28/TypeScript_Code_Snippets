/*abstract class FooCommand {}

class BarCommand extends FooCommand {}

//const fooCommand: FooCommand = new FooCommand(); 

const barCommand = new BarCommand();  
*/
abstract class FooCommand {
    abstract execute(): string;
  }
  
  //class BarErrorCommand  extends FooCommand {} 
  
  class BarCommand extends FooCommand {
    execute() {
      return `Command Bar executed`;
    }
  }
  
  const barCommand = new BarCommand();
  
  barCommand.execute(); 