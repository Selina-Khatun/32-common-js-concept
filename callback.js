function greeting(greetingHandler,name){
    greetingHandler(name);
    console.log(greeting);
    // nothing will appear in the output
    console.log( greetingHandler);
  // nothing will appear in the output
}
const name='halim mama';
// const numbers=[45,54,78];
// const laptop ={
//     price:45000,brand:'lenovo',memory:'8gb'
// };
function greetingHandler(name){
    console.log('good Morning',name);
  // nothing will appear in the output  
}
function greetEvening(name){
    console.log('good Evening',name);
    // nothing will appear in the output   
}
function greetNight(name){
    console.log('good Night',name);  
    // nothing will appear in the output 
}
greeting(greetingHandler,'tom hanks');
// output:   good Morning tom hanks
//           [Function: greeting]
//           [Function: greetingHandler]
greeting(greetEvening,'tom hanks');
// output:good Evening tom hanks       
//        [Function: greeting]
//        [Function: greetEvening]

greeting(greetNight,'tom cruise');
// output:good Night tom cruise
//       [Function: greeting]
//       [Function: greetNight]



function submitHandler(){
    console.log('submit button clicked')

}
document.getElementById('btn-submit').addEventListener('click',submitHandler);
// output :
// C:\projectsss666\32-common-js-concept\callback.js:44
// document.getElementById('btn-submit').addEventListener('click',submitHandler);
// ^

// ReferenceError: document is not defined
//     at Object.<anonymous> (C:\projectsss666\32-common-js-concept\callback.js:44:1)