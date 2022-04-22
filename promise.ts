/*let complete = false
let prom = new Promise(function(resolve, reject){
    if(complete){
        resolve("Successfull");
    }else{
        reject("Reject")
    }
})
console.log(prom)
*/
/*
function prom(complete){
  return new Promise(function(resolve, reject){
        if(complete){
            resolve("Successfull");
        }else{
            reject("Reject")
        }
    })
}
    console.log(prom(true))
*/
/*
function prom(complete){
    return new Promise(function(resolve, reject){
        console.log("Fetching data")
        setTimeout(() => {
            if(complete){
                resolve("Successfull");
            }else{
                reject("Reject")
            }
        }, 1000)
        })
    }
    let onfulfilment = (result) => {
        console.log(result)
    }
    let onRejection = (error) => {
        console.log(error)
    }
    prom(true).then(onfulfilment).catch(onRejection)
*/

function prom(a,b){
    return new Promise(function(resolve, reject){
        console.log("Fetching data")
        var c = a/b
        setTimeout(() => {
            if(c){
                resolve(`Answer is: ${c}`);
            }else{
                reject("failed")
            }
        }, 1000)
        })
    }
    prom(5,2).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })