'use strict'
var point=0

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
            point++
            break;   
        case "n" :
            
        case "no" :
            //console.log("you are wrong")
            alert("you are wrong")
            break;



    }


} 

let x =5;
let usr;
for (let i=0;i<4;i++) {
 usr=prompt("Geuss a number between 0 and 10 ")
 usr=Number(usr)
 if (usr >x){
    alert("pick a lower number")
 }
 else if (usr==x){
     alert("You are right ")
     point++
     break;
 }
 else {
     alert("pick a higher number")
 }
      

}
alert("The number is" + x)




let arr_gs=["the god father","fight club","pain and gain"]

for (let i=0;i<6;i++){
    let the_gs=prompt(" geuse  one of my fav movies!!")
    the_gs=the_gs.toLowerCase()
    for(var z=0;z<3;z++){
        if (the_gs==arr_gs[z]){
        alert("you are right ")
        point++
        break;
        }
    
       

    }
    
    if (the_gs==arr_gs[z]){
        
        break;}
    alert("you are wrong ")  



}

alert("my fav movies are" + arr_gs)


alert("you where right "+point +"times")




alert("it was nice to see you "+ n)