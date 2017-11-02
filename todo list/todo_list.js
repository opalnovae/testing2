/**
 * Created by jacki on 11/2/17.
 */
function addList() {
    var newListElem, inputText;
    newListElem = document.createElement("div");
    newListElem.setAttribute("class","todo-list-item");

    inputText = document.createElement("input");
    inputText.setAttribute("type","text");
    inputText.setAttribute("name","list-item");
    inputText.setAttribute("tabindex","-1");

    newListElem.appendChild(inputText);

    document.getElementById("todo-list").appendChild(newListElem);


}

//having an issue focusing on input element