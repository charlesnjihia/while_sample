//a code that sums all numbers between 0 and 1000 that are multiples of 3 and 5

//initialize sum to zero and i to 1000
let sum=0;
let i=1000;
//use while loop to achieve least execution time
while(--i>0){
if(i%3===0){
 sum+=i;
 }else if(i%5===0){
  sum+=i;
 
 }        
    
}



console.log('total sum of multiple of 3 and 5 below 1000: ',sum);