class Calculator{
    constructor () {
      this.arr = [];
   } 
  
   
  set_slot(x){
    this.arr.push(this.last);
    return this.arr[x - 1];
  }

  get_slot(){
    return this.arr;
  }
 
  add(sum){
   sum = 0;
    
    for(let i = 0; i < arguments.length; i++){
      sum += parseFloat(arguments[i]);
      this.Last = sum;
    }
    return sum;    
}

multiply(product) {
   product = 1;
  
  for(let i = 0; i < arguments.length; i++){
    product *= parseFloat(arguments[i]);
    this.Last = product;
  }
  return product;    
  } 

last(){
  return this.Last;
  
}

}
let calculator = new Calculator()
calculator.add(1, 2)
calculator.multiply(2, 5)