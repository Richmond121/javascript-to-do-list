var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
        var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li); 
    input.value="";

    // start add delete button
var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("x"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);
// END ADD DELETE BUTTON

//end and delete button

//ADD CLASS DELETE (DISPLAY: NONE)
function deleteListItem(){
    li.classList.add("delete")
}
//END ADD CLASS DELETE
// add class delete(display:none)
function deleteListItem() {
    li.classList.add("delete")
    // end class delete
}
}

function addListAfterClick() {
     if(inputLength() > 0){
       createListElement();
     }
 }
//  input.addEventListener("keyup",function (event) {
//      if(event.keyCode == 13) {
//          enterButton.click();
//      }
//  });
 function addListAfterKeypress(event) {
    if(event.keyCode == 13) {
        enterButton.click();
    }
 }



 enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keyup", addListAfterKeypress);












    
