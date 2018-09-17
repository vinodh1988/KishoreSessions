/*var=1;

while(i<=20)
    {
        console.log(i);
        i++;
    }

do{
    i--;
    console.log(i);
}while(i>0);

for(var x=0;x<=30;x=x+2)
    console.log(x);
*/

/*var a=[12,"terry","89.34","34"]

for(var x=0;x<a.length;x++)
    console.log(a[x]);*/

/*var temp="laury";

for(x in temp)
    console.log(temp[x]);*/

/*// About type of
console.log(typeof(234));
console.log(typeof('lord'));
console.log(typeof([1,2,3]));
*/
/*
var a=12
var b=12

if(a===b)
    console.log("A and B are equal")
else
    console.log("They are not equal")
    */
/*
var a="12";
var b=12;

console.log(Number(a)+b)

*/

function test()
{
  console.log("The function is running!!!!");  

}

function test2(p="Johan"){
    console.log("Passed:::"+p);
}

function test3(a=128,b=90){
    return a+b;
}
console.log(test());
console.log(test());
test2('Ravi');
test2('Naman');
test2();

console.log(test3(1,2));
console.log(test3(12));
console.log(test3());