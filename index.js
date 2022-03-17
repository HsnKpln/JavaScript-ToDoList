function newElement(){
    let x = document.querySelector('#task').value;
    
    var list = document.getElementById("list");
    let y = document.createElement("li");
    y.innerHTML = x;
    list.appendChild(y);
    var lis = document.getElementById("list").childNodes;
    for (let i = 0; i < lis.length; i++) {
        const element = lis[i];
        if(element.localName!="li") continue;
        element.addEventListener("click", liClick);
    }
    
    
}

function deleteElement(){
    
}
function liClick() {
    //console.log(this);
   // this.style.backgroundColor = 'gray';
   // this.style.textDecoration = 'line-through';
    this.remove();
}
function doubleClick() {
    console.log("this");
    this.style.backgroundColor = 'red';
    this.style.textDecoration = 'none';
}



// function load(){
//     var lis = document.getElementById("list").childNodes;
    

//     for (let i = 0; i < lis.length; i++) {
//         const element = lis[i];
//         if(element.localName!="li") continue;
//         element.addEventListener("click", liClick);

//         // const btn = document.createElement("button");
//         // btn.setAttribute("id","btn1");
//         // btn.setAttribute("name","btn1");
//         // btn.innerText="x";
//         // btn.style.cssText="color:yellow; background:black; font-size:16px; padding:8px;";
//         // btn.onclick=liClick();
//         // element.appendChild(btn)
        
//     }
// }



