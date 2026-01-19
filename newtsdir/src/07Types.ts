// function makeChai(
//     order: {
//         type: string; 
//         sugar: number;
//         strong : boolean
//     }){
//         console.log(order);
//     }


//     function serveChai(order: {
//         type: string; 
//         sugar: number;
//         strong : boolean
//     }){
//         console.log(order);
//     }

type ChaiOrder = {
    type : string;
    sugar : number;
    strong : boolean
}
function makeChai(order : ChaiOrder){
    console.log(order);
}
function serveChai(order : ChaiOrder){
    console.log(order);
}

//example-2

type TeaRecipe = {
    water : number;
    milk : number
}

// interface TeaRecipe  {
//     water : number;
//     milk : number
// }

class MasalaChai implements TeaRecipe{
    water = 100;
    milk = 50;
}

// type CupeSize = "small" | "large"

interface CupeSize {
    size : "small" | "large"
}

class Chai implements CupeSize {
    size: "small" | "large" = "small";
}




// type Response = {ok:true} | {ok: false}
// A class can only implement an object type or intersection of object types with statically known members

interface Response{
    ok : true | false
}
class myRes implements Response{
    ok: boolean = false;
}


//union 
type TeaType = "masala" | "ginger"| "lemon" //literal types

function orderChai(t:TeaType){
    console.log(t);
}
//intersection
type BaseChai = {
    teaLeaves : number
}

type Extra = {
    masala : number
}

type masalaChaii = BaseChai & Extra

const cupe: masalaChaii = {
    teaLeaves : 2,
    masala : 1
}

type user = {
    username : string;
    bio?:string //optional values
}
const u1: user = {username : "Hitesh"}
const u2: user = {username : "Hitesh", bio: "hitesh.ai"}

type Config = {
    readonly appName : string;
    version : number
}

const cfg : Config = {
    appName : "Masterji",
    version: 1
}
// cfg.appName = "ChaiCode" //error