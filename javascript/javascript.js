// array creation and array intialisation
let a=[2,3,4,5,6,7];
console.log("Array created : "+a);

// array manipulation 
//adding elements to the array
a.push(9);
console.log("element added : "+a);

a.unshift(1);
console.log(a);

//removing elements to the array
a.pop();
console.log("removing elements : "+a);

a.shift();
console.log(a);

// array searching 
//using indexOf() 
console.log("searching for an index of element 4 : "+a.indexOf(4));

//reversing the array
let arr=[23,89,10,78,45,67,32];
console.log(arr);
arr.reverse();
console.log("reverse of an array : "+arr);

//sorting an array
arr.sort();
console.log("sorting an array : "+arr);
let len=arr.length-1;

//finding maximum and minimum of an array
console.log("Maximum : "+arr[len]);
console.log("Minimum : "+arr[0]);

//inserting an element in specific index
console.log(arr);
arr[4]=50;
console.log("inserting in index 4 : "+arr);

//deleting an element in  specific index
let c=3;
for(i=c;i<arr.length;i++){
    arr[i]=arr[i+1];
}
arr.pop();
console.log("deleting in index 3 : "+arr);

//rotating an array
let arr1=[1,2,3,4,5];
console.log(arr1);
let len1=arr1.length -1;
let j=0;
let k=len1;
while(j<k){
    let temp=arr1[j];
    arr1[j]=arr1[k];
    arr1[k]=temp;
    j++;
    k--;
}
console.log("rotating an array : "+arr1);

//grouping array elements
let arr2=[1,2,3];
let arr3=[4,5];
for(i=0;i<arr3.length;i++){
    arr2.push(arr3[i]);
}
console.log(arr2);

//intersection of an array
let arr4=[1,2,3,4,5];
let arr5=[2,3,4,6,7];
console.log("same elements in two arrays: \narray1: "+arr4+"\narray2: "+arr5);
for(i=0;i<arr4.length;i++){
    for(j=0;j<arr5.length;j++){
        if(arr4[i]==arr5[j])
            console.log(arr4[i]);
    }
}

//implementing queue in array
// first in first out
let arr6=[2,3,4,5,6];
function addition(ele){
    arr6.push(ele);
    console.log(arr6);
}

function remove(){
    arr6.shift();
    console.log(arr6);
}
console.log("implementing queue in array : ");
console.log(arr6);
addition(8);
remove();

//implementing stack in array
// last in first out
let arr7=[2,3,4,5,6,7];
function add(ele){
    arr7.push(ele);
    console.log(arr7);
}

function removelast(){
    arr7.pop();
    console.log(arr7);
}
console.log("implementing stack in array : ");
console.log(arr7);
add(9);
removelast();


