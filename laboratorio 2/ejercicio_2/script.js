//random number
let numR = Math.floor(Math.random()*100)+1
let final = false;


for(let i = 1;i<=7;i++){
    //guess 
    let guess = parseInt(prompt("Guess the number(1-100)"));

    if(guess === numR){
        alert("You are RIGHT!!!!" +i );
        final = true;
        break;
    }else if(guess < numR){
    alert("NOT CORRECT.... the number more big "+" now you have : "+(7-i));
    }else
        alert("NOT CORRECT....the number more small"+" now you have : "+(7-i));
    }

if(!final){
    alert("the number is : " + numR);
}
