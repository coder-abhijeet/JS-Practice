const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*maxNum-minNum+1)+minNum;

let guess;
let attempts=0;
let running=true;

while(running){
    guess=window.prompt(`Guess a number between ${minNum}-${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert("Enter a valid number.");
    }
    else if (guess<minNum || guess>maxNum){
        window.alert(`Enter the number between ${minNum} and ${maxNum}`);
    }
    else {
        attempts++
        if (guess<answer){
            window.alert(`TOO LOW! Try Again`);
        }
        else if (guess>answer){
            window.alert(`TOO HIGH! Try Again`);
        }
        else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            break;
        }
    }
}