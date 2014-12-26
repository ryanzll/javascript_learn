jscript.array.copyArray = function(srcArray, destArray){
    var i;
    for(i = 0; i <srcArray.length; i++){
        destArray.push(srcArray[i]);
    }

    return destArray;
}