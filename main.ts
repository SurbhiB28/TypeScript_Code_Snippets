var message:string = "Hello World" 
console.log(message)


interface Point2D {
    x: number;
    y: number;
}
interface Point3D {
    x: number;
    y: number;
    z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function TakePoint2D(point: Point2D) { 
    // 
 }
TakePoint2D(point2D); 
TakePoint2D(point3D); 

console.log(null == null); 
console.log(undefined == undefined); 
console.log(null == undefined); 

//Annotation
function foo1():{a:number,b?:number}{
   
    //return {a:1,b:2};
    
    return {a:1};
  }

  //type of
  var A=2

  if (typeof A !== 'undefined') {
   
    console.log(A);
  }
  // err
  fs.readFile('someFile', (err,data) => {
    if (err) {
      // 
    } else {
      //
    }
  });
  //
  function toInt(str: string): { valid: boolean, int?: number } {
    const int = parseInt(str);
    if (isNaN(int)) {
      return { valid: false };
    }
    else {
      return { valid: true, int };
    }
  }