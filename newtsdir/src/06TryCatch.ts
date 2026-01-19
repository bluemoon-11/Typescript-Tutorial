//example-1
try{

} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error", error);
}
