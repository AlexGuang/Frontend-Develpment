
function giveNumber(){
    let normalArray = [];
    let newNumber = 0
    let normalBall="Normal Ball Set is: ";
    let powerBall="The Power Ball is: ";
    for(let i = 0; i < 7; i++){
        do{
            newNumber=  Math.floor(35*Math.random())+1;
            console.log("第"+i+"轮")
            console.log("i: "+i);
            console.log(newNumber);
        }while(normalArray.includes(newNumber))
        normalArray.push(newNumber);
        if(i==0){
            normalBall+= newNumber;
        }else{
            normalBall= normalBall+", "+newNumber;
        }
        
      
    }
    powerBall+= Math.floor(20*Math.random())+1

    console.log(normalArray);
    document.querySelector(".red").innerHTML=normalBall;
    document.querySelector(".gold").innerHTML=powerBall;
}