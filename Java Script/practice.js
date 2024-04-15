 const arr=[ 1,2,3,4,5,6,7,8,9];

//  arr.forEach( (ele, index, arr)=>{
//     arr[index]= ele * 2;
//  })

//  console.log(arr);
 
 // build a polyfil for forEach

//  Array.prototype.myForEach = function (cb){
    
//     for (let index=0 ;index< this.length ;index++){
//         cb(this[index], index, this);
//    }
//  };

//   arr.myForEach ( (ele, index, arr)=>{
//     arr[index]= ele * 2;
//  })

//  console.log(arr);


// const arr1=arr.map((elem, index, arr)=>{
//     return elem * 2;
// })

//console.log(arr1);

// buideing as polyfil for map function

// Array.prototype.myMap= function (cb){
//     let newArr=[];
//     for(let index=0; index<this.length;index++){
//         newArr.push(cb ( this[index], index, this));
//     }
//     return newArr;
// }


// const arr2=arr.myMap ( ( elem, index, arr)=>{
//     return elem * 2;
// })

// console.log(arr2);


// buidling a polytfil for filter function

// const arr3=arr.filter ( ( elem, index, arr) => {
//      return elem%3 ===0;
// })

// polytfil for filter function

Array.prototype.myFilter = function ( cb ) {
    let newArr =[];
    for ( let index=0; index< this.length; index++ ){
        if( cb( this[index], index, arr)){
            newArr.push(this[index]);
        }
    }
    return newArr;
}
 const arr4 = arr.myFilter( (elem, index, arr )=>{
    return elem%4 ===0;
 })

console.log(arr);
console.log(arr4);

