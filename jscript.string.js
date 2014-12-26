if (typeof jscript == 'undefined'){
    jscript = function(){}
}

jscript.string = function(){}

jscript.string.sampleFunction = function(){}

jscript.string.substrCount = function(inStr,inSearchStr){
    if (inStr == null || inStr == "" ||
        inSearchStr == null || inSearchStr == "") {
        return 0;
    }
    var splitChars = inStr.split(inSearchStr);
    return splitChars.length - 1;
}