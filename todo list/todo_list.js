/**
 * Created by jacki on 11/2/17.
 */
//function addList() {
//    var newListElem, inputText;
//    newListElem = document.createElement("div");
//    newListElem.setAttribute("class","todo-list-item");
//
//    inputText = document.createElement("input");
//    inputText.setAttribute("type","text");
//    inputText.setAttribute("name","list-item");
//    inputText.setAttribute("tabindex","-1");
//
//    newListElem.appendChild(inputText);
//
//    document.getElementById("todo-list").appendChild(newListElem);
//
//
//}

var addButton = document.querySelector("[data-icon=plus]");

addButton.addEventListener("click", addInputBox);


function addListItem(e) {
    var list, item, label, text, checkmark, checkbox;

    if(document.getElementById("input-box").value.trim() !== "" && e.keyCode == 13) {
        text = document.createElement("span");
        text.setAttribute("class","text");
        text.textContent = document.getElementById("input-box").value;

        label = document.createElement("label");
        label.setAttribute("class","checkbox");

        item = document.createElement("div");
        item.setAttribute("class","list-item");

        list = document.getElementById("todo-list");
        //list.addEventListener("mouseover",);

        checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");

        checkmark = document.createElement("span");
        checkmark.setAttribute("class","checkmark");


        label.appendChild(checkbox);
        label.appendChild(checkmark);

        item.appendChild(label);
        item.appendChild(text);

        list.appendChild(item);

        clearInputBox();
    }

}

function addInputBox() {
    var inputBox;

    //if (document.getElementById("input-box")) {
    //    document.getElementById("input-box").focus();
    //}
    //else {
        inputBox = document.createElement("input");
        inputBox.setAttribute("type", "text");
        inputBox.setAttribute("id", "input-box");
        inputBox.addEventListener("keypress", addListItem);
        document.getElementById("todo-list").appendChild(inputBox);
        document.getElementById("input-box").focus();
        document.getElementById("input-box").addEventListener("blur",clearInputBox);
    //}
    //else {
    //    document.getElementById("input-box").focus();
    //}
}

function clearInputBox() {
    document.getElementById("input-box").remove();
}
