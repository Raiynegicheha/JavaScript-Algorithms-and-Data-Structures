// There are two methods that i used to solve this task.
//the find() method.
// the for loop

//using the find()
function findElement(arr, func) {
  return arr.find(func);
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


//using the for loop
function findElement(arr, func) {
  let num = 0;

  for(let i = 0; i < arr.length; i++){
    num = arr[i];
    if(func(num)){
      return num;
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
