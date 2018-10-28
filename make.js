function make(...args){
    let array = [];
    array = array.concat(args);

    return function makeSum(...argums){
        if(!(argums[0] instanceof Function)){
            array = array.concat(argums);
            return makeSum;
        }else{
            return array.reduce(argums[0]);
        }  
    }
}