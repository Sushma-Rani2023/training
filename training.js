// Concept of variables in js
var x=5;
let y=6;
console.log(x,y);
console.log(y)

var x=5;
function add(data){
    
    return x
}

function ne(){
    let x;
    let y=6;
    y+=1;
    return y
    
}
// Arrow function 
hii=(x)=>x+1
console.log(hii(x))

// Ternary operator in javascript
console.log(5==6?'Hi':'No')
console.log(5=='5'?'Hi':'No')
console.log(5==='5'?'Hi':'No')

// Concept of loops in Javascript

var arr=[1,'Sushma',true,0]
for (var i in arr){
    console.log(i,arr[i]);

}


var arr2=[1,'Sushma',true,0];
for (i of arr2)
{
    console.log(i)
}


console.log(y)
console.log(ne())
console.log(add(x))
