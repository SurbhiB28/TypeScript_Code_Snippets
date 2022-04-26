function foo() {
    console.log(this);
  }
  
  foo(); 
  let bar = {
    foo
  }
  bar.foo();