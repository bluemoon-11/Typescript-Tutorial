function getChai(kind : string | number) {
    if(typeof getChai === 'string'){
        return `Making ${kind} chai`
    }else{
        return `chai order : ${kind}`
    }
}

function serveChai(msg : string) {
    if(msg){
        console.log(`${msg}`);
    }
    console.log(`default chai`);
}

function chaiOrder (order : `small` | `medium` | `large` | number ){
    if(order === `small`){ //exhaustive check
        return `small cuttong chai`
    }
    if(order === `medium`){ //exhaustive check
        return `large cuttong chai`
    }
    if(order === `large`){ //exhaustive check
        return `large cuttong chai`
    }
    return `chai id : ${order}`
}

//BestPractices
class KulhadChai {
    serve(){
        return `Kulhad Chai`
    }
}

class CuttingChai {
    serve(){
        return `Cutting Chai`
    }
}

function serve(chaiType : CuttingChai | KulhadChai){
    if(chaiType instanceof CuttingChai ){
        return chaiType.serve()
    }
}

//
type chaiOrder = {
    type : string
    sugar : number
}

// function isChaiOrder(obj:any) :obj is chaiOrder{
//     return(

//     )
// }

// _____________________________________________________________
// Example - 

type MasalaChai = { type : "masala" , spiceLevel : number}
type GingerChai = { type : "ginger" , amount : number}
type ElaichiChai = { type : "elaichi" , aroma: number}

type Chai = MasalaChai | GingerChai | ElaichiChai

function makeChai(order : Chai){
    switch(order.type){
        case "masala" :
            return `Masala Chai`
        case "elaichi" :
            return `Elaichi Chai`
        case "ginger" :
            return `Ginger Chai`
    }
}

// checking specific property
function brew(order : MasalaChai | GingerChai){
    if("spiceLevel" in order) { //only in masala chai
        // ...
    }
}
let arr1 = ['Cow', 'Bird']
function isStringArray(arr: unknown) : arr is string[] {
     return Array.isArray(arr) && arr.every(item => typeof item === 'string')
}