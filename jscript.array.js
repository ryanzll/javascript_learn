if(typeof jscript === 'undefined'){
    jscript = function(){};
}

jscript.array = function(){}

jscript.array.copyArray = function(srcArray, destArray){
    var i;
    for(i = 0; i <srcArray.length; i++){
        destArray.push(srcArray[i]);
    }

    return destArray;
}

jscript.array.findInArray = function(inArray,inValue){
    var i;
    for(i = 0; i < inArray.length; i++){
        if(inArray[i] === inValue){
            return i;
        }
    }
    return -1;
}

jscript().array.arrayAverage = function(inArray){
    var i;
    var sum;
    for(i = 0; i < inArray.length; i++){
        sum += inArray[i];
    }

    return sum/inArray.length;
}