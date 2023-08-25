print5();
// SyntaxError: Unexpected number
console.log(print10);
// output :ReferenceError: print10 is not defined
// at Object.<anonymous> (C:\projectsss666\32-common-js-concept\hoisting.js:2:13)
// print10();
for (let i=0;i<5; i++){
    // console.log(i);
//   output:
//   0
//   1
//   2
//   3
//   4
}
// console.log('outside',i);
// ReferenceError: i is not defined
//     at Object.<anonymous> (C:\projectsss666\32-common-js-concept\hoisting.js:16:23)
function print5(){

    console.log('inside print5',5);
//   *****  if you do not call print5() above, you will get output:print 5();
//     ^

// SyntaxError: Unexpected number***//
// when you call print5() above 
//     output:
//     inside print5 5
}
var print10= function(){

console.log('inside print10', 10);
// output:undefined
}

