//Question one
let arrayOne=[45,12,6,89,2,5];
function sortArray(arrayOne){
    if(arrayOne.length<=1){
        return arrayOne;
    }
    let middArr=Math.floor(arrayOne.length/2);
    let leftArr=arrayOne.slice(0,middArr);
    let rightArr=arrayOne.slice(middArr);
    return mergeArr(sortArray(leftArr),sortArray(rightArr));
}
function mergeArr(leftArr,rightArr){
    let newArr=[];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
      newArr.push(leftArr.shift());
        }
        else{
            newArr.push(rightArr.shift());
        }
    }
    return[...newArr,...leftArr,...rightArr];
}
console.log(sortArray(arrayOne));



//search
let arrayTwo=[2,5,6,12,45,89];
let targ=6;
function search(arrayTwo,targ){
  leftSide=0;
  rightSide=arrayTwo.length-1;
  while(leftSide<=rightSide){
    let middside=Math.floor(leftSide+rightSide/2);
    if(arrayTwo[middside]===targ){
        return middside;
    }
    else if(arrayTwo[middside]<targ){
        rightSide= middside-1;
    }
           else{
               leftSide=middside+1;
           } 
        }
        return null;
    }
    console.log(search(arrayTwo,targ));

  




//Question two
function arrange(array){
    if(array.length<=1){
        return array;
    }
    let middle=Math.floor(array.length/2);
    let left=array.slice(0,middle);
    let right=array.slice(middle);
    console.log({left});
    console.log({right});
    return merging(arrange(left),arrange(right));
}
function merging(left,right){
    let empty=[];
    while(left.length && right.length){
        if(left[0]>right[0]){
            empty.push(left.shift());
        }
        else{
            empty.push(right.shift());
        }
    }
    return [...empty,...left,...right]
}

let array=[123,89,5,23,9,56];
console.log(arrange(array));


//question3
let arr2=[1,4,78,2,67,3];
function sort(arr2){
    if(arr2.length<=1){
        return arr2;
    }
    let midd=Math.floor(arr2.length/2);
    let lefty=arr2.slice(0,midd);
    let righty=arr2.slice(midd);
    return mergeArr(sort(lefty),sort(righty));
}
function mergeArr(lefty,righty){
    let emptyArr=[];
    while(lefty.length && righty.length){
        if(lefty[0]<righty[0]){
            emptyArr.push(lefty.shift());
        }
        else{
            emptyArr.push(righty.shift());
        }
    }
    return[...emptyArr,...lefty,...righty];
}
console.log(sort(arr2));

let arr3=[1,2,3,4,67,78];
let target=34;
function searching(arr3){
    let left=0;
    let right= arr3.length-1;
   while(left<=right){
   let mid=Math.floor(left+right/2);
   if(arr3[mid]===target){
       return mid
   }
   else if(arr3[mid]<target){
       right=mid-1;
   }
   else{
       left=mid+1;
   }
   }
   return null;
}
console.log(searching(arr3,target));