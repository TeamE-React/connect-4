export class Validation{
  constructor(playersList){
    this.playersList = playersList;
    this.errors = [];
  }

  getArrayOf(value){
    return this.playersList.map(player => player[value]);
  }

  getHashOf(array){
    let hashmap = {};
    for(let i = 0; i < array.length; i++){
      const key = array[i];
      if(hashmap[key] === undefined){
        hashmap[key] = 1;
      }
      else{
        hashmap[key]++;
      }
    }

    return hashmap;
  }

  isUnique(value){
    const hash = this.getHashOf(this.getArrayOf(value));

    for(let key in hash){
      if(hash[key] > 1){
        this.errors.push(`Please input different ${value}!`);
        return false;
      }
    }
    return true;
  }

  isNotBlank(value){
    const array = this.getArrayOf(value);
    
    for(let index in array){
      if(array[index] == ""){
        this.errors.push(`Please enter your ${value}!`);
        return false;
      }
    }
    return true;
  }

  getErrors(){ return this.errors; }
}