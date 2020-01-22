//Twój

let arguments = process.argv;

arguments.forEach((val, index) => {
    if(index>=2){
        setTimeout(() => {
            console.log(val);
        },Number(val)*1000)
    }
});