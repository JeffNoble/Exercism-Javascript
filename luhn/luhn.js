//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Luhn {
  constructor(str) {
    this.arr=[]
    this.flag = 0
    let check
    for(let i = 0 ;i< str.length ; i++){
      check= str[i];
      if(parseInt(check, 10)!=NaN){

        this.arr.push(parseInt(check))
        if (isNaN(check)) { return 0 }
      }else{
        if (isNaN(check)) { return 0 }

      }
    };
  }


  get valid() {
    let x
    let total = 0
    if(this.flag==0){
      for(let i=0;i<this.arr.length;i++){
        if (i % 2 ==0) {
          x= this.arr[i] * 2
          if (x>9){x=x-9}
        }
          total = total + x
      }
      if (total%10==0)return true
      else return false 
    }else{
      

      }
    }

}
