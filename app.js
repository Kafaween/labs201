'use strict'

const n =prompt("whats your name ?")

alert(" Welcome to my site " + n)




alert("Answer these questions with Yes or No Pleas")
let q1=prompt("do i like sports")
let q2=prompt("is mansaf my fav meal")
let q3 =prompt("do i watch movies")
let q4 =prompt(" am i the best Dota 2 player  :)??")
let q5 = prompt("is milkshake my fav drink")

const arr = [q1,q2,q3,q4,q5];



arr.forEach(myFunction);

    function myFunction(x){
    switch(x.toLowerCase()){
        case "y":    
        case "yes":
            
            //console.log("you are right")
            alert("you are right")
            break;   
        case "n" :
            
        case "no" :
            //console.log("you are wrong")
            alert("you are wrong")
            break;



    }


} 
    
alert("it was to see you "+ n)


