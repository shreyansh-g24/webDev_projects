// To change the background color when clicked
let colorArr = ["green", "black", "white", "red", "tomato", "aqua", "yellow", "orange", "purple", "blue"];

let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

function changeBgc(hexCharArr){
    let hexCode = "#";
    for(let i = 0; i < 3; i++){
        let random = Math.floor(Math.random() * hexCharArr.length);
        hexCode += hexCharArr[random];
    }
    // let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = hexCode;
}

function handleEvent(){
    document.addEventListener("click",function(){changeBgc(hex)});
}
handleEvent();

