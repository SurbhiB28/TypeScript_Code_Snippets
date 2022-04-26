import fetch from 'node-fetch'
/* function abc() {
    console.log('print');
 }
 
 setTimeout(() => {
    abc();
    
 }, 1000);
*/
async function test(){
    console.log("2 : message");
    const jsonData = await fetch('./student_data.json');
    console.log(jsonData)
}
console.log("1: message");
test();
console.log("5 : message");
