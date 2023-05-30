
const ogHBOX = document.querySelector(".HBox");
const ogITEM = document.querySelector(".HItem");
const Form = document.querySelector(".InputForm");
const board = document.querySelector(".Board");
let gridSize = 1;

let drawing = false;
/**
 * Clear Board and rebuild it with the selected value 
 */

function reCreateBoard(){

    for(let i = board.childNodes.length - 1; i > 0;i--){
        board.childNodes[i].remove();
    } 
    // clear the board  
    for(let i = 0 ; i < gridSize;i++){
        let newDiv = ogHBOX.cloneNode(false);
        newDiv.style = "";
        board.appendChild(newDiv);
        for(let j = 0 ; j < gridSize;j++){
            let newHoriz = ogITEM.cloneNode(false);
            newDiv.appendChild(newHoriz);
            newHoriz.style = "";
        }
    }
    
    for(let i = 0 ; i < document.querySelectorAll("HItem").length;i++){
        document.querySelectorAll("HItem")[i].onmouseover = function(){
            console.log("drawing");
        }
    }
}

function Color(Item){
    Item.style["backgroundColor"] = "black";
}

Form.addEventListener("submit",function(event){
    event.preventDefault();
    let num = document.querySelector(".EnterNum").value;
    if(!isNaN(num) && (num >= 0 && num < 76)){
        gridSize = num;
        reCreateBoard();
    }
    else{
        window.alert("Number not in range 0 - 75 or Isn't a number");
    }
})

board.onmousedown = function(event){
    console.log("down");
    drawing = true;
    if (event.target.className == "HItem" && drawing == true){
        let Item = event.target;
        Color(Item);
    }
}

board.onmouseup = function(){
    if (drawing){
        console.log("up");
        drawing = false;
    }
}

board.onmouseleave = function(){
    if (drawing){
        console.log("up");
        drawing = false;
    }
}

document.addEventListener("mouseover",function(event){
    if (event.target.className == "HItem" && drawing == true){
        let Item = event.target;
        Color(Item);
    }
})