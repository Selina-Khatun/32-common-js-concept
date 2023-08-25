// primitive type are pass by value

let num1=5;
let num2=7;
function multiply(a,b){
    a=27;
    const result=a*b;
    // console.log(result); 
    // output:189
    return result;
  
}
//*** */ console.log(result);
// output: C:\projectsss666\32-common-js-concept\passby.js:13
// console.log(result);
//             ^

// ReferenceError: result is not defined
console.log(num1);
// output:5
multiply(num1,num2);
console.log(num1);
// output:5

// ****object and array are pass by reference****//
let student1={name:'jalil',partner: 'borsha'};
let student2={name:'raj',partner:'anika'};
function makeMovie(couple1,couple2){
    couple1.name='ononto';
    couple2.name='mim';
}

//  console(student1,student2);

// output:
// C:\projectsss666\32-common-js-concept\passby.js:33

// console(student1,student2);

// output:^

// TypeError: console is not a function
console.log(student1,student2);
// output:
// { name: 'jalil', partner: 'borsha' } { name: 'raj', partner: 'anika' }
makeMovie(student1,student2);
console.log(student1,student2);
// output:
// { name: 'ononto', partner: 'borsha' } { name: 'mim', partner: 'anika' }