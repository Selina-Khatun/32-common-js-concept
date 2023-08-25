function kitchen(){
    let roast=0;
    return function(){
        roast++;
return roast;
    }
}
const firstSever=kitchen();
console.log(firstSever());
// output:  1
console.log(firstSever());
// output:  2
console.log(firstSever());
// output:  3
console.log(firstSever());
// output:  4

function stopWatch(){
    let counter=0;
    return function(){
        counter++;
        return counter;
    }
}
console.log(stopWatch());
// output :
// [Function (anonymous)]