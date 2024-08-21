function arrElement<T>(arr: T[], index:number):any{
  if(arr.length<index+1){
    return false;
  } else {
    return arr[index];
  }
}
console.log(arrElement<string>(['a'], 1));
