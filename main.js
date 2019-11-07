console.log("hi");

var init = "var a = String.fromCharCode; var r = eval;";

var aBetterFunction = "window[((![]+[])[+!![]])]"; //charCode
var rBetterFunction = "window[((!![]+[])[+!![]])]"; //eval

function makeNumberBetter(n){
    var s = "(";

    for(var i = 0; i < n; i++){
        s += "(+!![])+";
    }
    s = s.substring(0, s.length - 1) + ")";

    return s;
}

function getBetterLetterNum(lt){
    var s = "";
    lt = lt.charCodeAt(0);
    return makeNumberBetter(lt);
}

function getLetter(lt){
    var num = getBetterLetterNum(lt);
    return "(" + aBetterFunction + "(" + rBetterFunction + "(" + num + ")" + "))";
}
function makeStringBetter(s){
    var betterString = "";
    for(var i = 0; i < s.length; i++){
        betterString += "" + getLetter(s[i]) + "+";
    }

    betterString = betterString.substring(0, betterString.length - 1);

    return betterString;
}

function getFullCode(s){
    return init + rBetterFunction + "(" + rBetterFunction + "(" + makeStringBetter(s) + "))";
}