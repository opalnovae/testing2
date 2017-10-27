/**
 * Created by jacki on 10/26/17.
 */

//testing
var checkElement = document.getElementById('start');
var passFunct = console.log;
returnChildren(checkElement, passFunct);


//takes an element as an argument and console.log's its immediate children text.
function returnChildren(checkElement, passFunct) {
    parseArrayLikeObj(checkElement.childNodes).forEach(function (elem) {
        if(elem.childNodes.length === 0) {
            passFunct(elem);
        }
        returnChildren(elem, passFunct);
    });

    function parseArrayLikeObj(arrayLikeObject) {
        return Array.prototype.slice.call(arrayLikeObject);
    }
}

//prints all text in document
function printText() {
    document.getElementById('end').appendChild(document.createTextNode(document.documentElement.textContent));
}