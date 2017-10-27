/**
 * Created by jacki on 10/26/17.
 */

var checkElement = document.getElementById('end');
returnChildren(checkElement);


function returnChildren(checkElement) {
    var rootElement = document.documentElement;

    findElemInDom(rootElement);

    function findElemInDom(passingElem) {
        var childrenArray = passingElem.children;
        parseArrayLikeObj(childrenArray).forEach(function (elem) {
            if (elem.isEqualNode(checkElement)) {
                return parseArrayLikeObj(elem.children).forEach(function (elem) {
                    console.log(elem.textContent);
                });
            }
            else if (elem.contains(checkElement)) {
                return findElemInDom(elem);
            }
        });
    }

    function parseArrayLikeObj(arrayLikeObject) {
        return Array.prototype.slice.call(arrayLikeObject);
    }
}

