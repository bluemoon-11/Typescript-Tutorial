// failure of type assertion

//example-1

let response : any = '42'

// no suggestion in next line
// let numericLength : number = response.length

// forcefull type assertion

let numericLength:number = (response as string).length

//example-2

type Book = {
    name: string
}

let bookString  = '{"name" : "One thing"}'

// suppose data is in local storage ( stored as string)
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)


//example-3

const inputElement  = document.getElementById("username") as HTMLInputElement

//example-4

let value:any
value = 'chai'

value = [1,2,3]

value = 2.5

value.toUpperCase() // no error

let newValue:unknown

newValue = 'chai'

newValue = [1,2,3]

newValue = 2.5

// newValue.toUpperCase() // error
//guarantee
if(typeof newValue === "string"){
    newValue.toUpperCase();
}
