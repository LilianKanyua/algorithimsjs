//Question one
let num = [45,12,6,89,2,5]
  let target = 6;
let firstIndex = 0;
let lastIndex = num.length-1;
let middleIndex = Math.floor((firstIndex+lastIndex)/2);

while(num[middleIndex]!==firstIndex<=lastIndex){
    console.log(middleIndex);
    console.log(firstIndex);
    console.log(lastIndex);
    if(num[middleIndex]>6){
        lastIndex=middleIndex-1;
    }  else{
        lastIndex=middleIndex+1;
    }
    middleIndex=Math.floor((firstIndex+lastIndex)/2);
    }
    return num[middleIndex]===lastIndex-1;
    }
    }
