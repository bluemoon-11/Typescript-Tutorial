//Union
let subscriber : number | any = '1M'

let apiResquestStatus : 'pending' | 'success' | 'error' = 'pending'

let airLineSeat : 'aisle' | 'middle' | 'window' = 'middle'

airLineSeat  = "aisle"

const orders = ['12', '34' , '13' , '35']
// let currentOrder;
let currentOrder : string | undefined;
for(let order of orders){
    if(order === '28'){
        currentOrder = order
        break
    }
}

console.log(currentOrder)