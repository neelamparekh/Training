var EVEN =[];
var ODD =[];
var TENS=[];

for(var i = 1; i<=100; i++)
{
if (i%2==0 && i%10!=0){
    EVEN.push(i); 
}
else if (i%2==1)
{
    ODD.push(i); 
}
else if (i%10==0){
    TENS.push(i);
}
}
console.log(EVEN);
console.log(ODD);
console.log(TENS);