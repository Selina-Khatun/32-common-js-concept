// array like object

function sum(a,b,c){
    const args=[...arguments];
    // console.log(args);
    // nothing will appear in the output
    const result =a+b+c;
    return result;
}
// console.log(arguments);
//the output will show you many things like arrays , objects .

const total=sum(4,5,6,7,8,9);
// console.log(total);
// output:15
console.log(sum.length);
// output:3

