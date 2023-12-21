function FizzBuzz() {
    for (let i = 0; i < 1001; i++) {
        console.log(i);

        if(i%3==0){
            console.log("Fizz") };
        if(i%5==0){
            console.log("Buzz") };
        if(i%5==0 && i%3==0){
                console.log("FizzBuzz") };
    }

}

FizzBuzz();
console.log(FizzBuzz());

