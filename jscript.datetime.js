/**
 *
 * Created by ryan on 2015/1/4.
 */
if(typeof jscript === 'undefined'){
    jscript = function(){};
}

jscript.datetime = function(){

}
jscript.datetime.getNumberDaysInMonth = function(inMonth,inYear){
    inMonth -= 1;
    var leapYear = this.isLeapYear(inYear);
    if(leapYear){
        leapYear = 1;
    }
    else{
        leapYear = 0;
    }

    if(inMonth ==3 || inMonth == 5 ||inMonth == 8 || inMonth == 10){
        return 30;
    }
    else if(inMonth == 1){
        return 28 + leapYear;
    }
    else{
        return 31;
    }
}

jscript.datetime.isLeapYear = function(inYear){
    if((inYear%4 ==- 0 && inYear%100 != 0) || inYear%400 ==0){
        return true;
    }
    else{
        return false;
    }
}
