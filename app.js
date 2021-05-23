let w=prompt("what is your weight (kg)")
let h=prompt("what is your height(cm)")
let a=prompt("whats your age " )
let f=prompt("whats your activity factor (1.2 or 1.5 or 1.7)")

let bmr =10*w+6.25*h-5*a+5
c=bmr*f

alert("your bmr is " + bmr ) 
alert (" your calories per day " +c )





