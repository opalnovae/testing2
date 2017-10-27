/**
 * Created by jacki on 10/26/17.
 */

//testing
var checkElement = document.getElementById('start');
var passFunct = console.log;
returnChildren(checkElement, passFunct);


//takes an element as an argument and console.log's its immediate children text.
function returnChildren(checkElement, passFunct) {
    (checkElement.childNodes).forEach(function (elem) {
        if(elem.childNodes.length === 0) {
            passFunct(elem);
        }
        else {
            passFunct(elem);
            returnChildren(elem, passFunct);
        }
    });

}

if(!NodeList.hasOwnProperty("forEach")){
    NodeList.prototype.forEach = function() {
        Array.prototype.forEach.call(this,0);
    }
}