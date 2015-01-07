/**
 *
 * Created by ryan on 2015/1/4.
 */
if(typeof jscript === 'undefined'){
    jscript = function(){};
}

jscript.browser = function(){

}

jscript.browser.getBrowserIdentity = function(){
    return navigator.appName + " " + navigator.appVersion;
}


