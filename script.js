const set = document.querySelector(".set");
const clear = document.querySelector(".clear");
const color = document.querySelector(".color");
const erase = document.querySelector(".erase");
const grid = document.querySelector(".grid");

set.addEventListener("click",modifyGrid);
clear.addEventListener("click",removeGrid);
color.addEventListener("click",applyBackGround)
erase.addEventListener("click",eraseBackGround)

function setGrid(number){
    for(let i = 0;i < number;i++){
    const parent = document.createElement("div");
    parent.classList.add("parent");
    grid.appendChild(parent);
    }

    const parents = document.querySelectorAll(".parent")
    parents.forEach(item => {
    for(let j = 0;j < number; j++){
    const child = document.createElement("div");
    child.classList.add("child");
    item.appendChild(child);
    }
 })
}



function modifyGrid(){
    let num = prompt("Set the density of grid:");
    if(grid.children.length){
        removeGrid();
    }
        setGrid(num);

}
    //let range = [...Array(25).keys()]
    

function removeGrid(){
    grid.innerHTML = "";
}
 


function applyBackGround(){
    const children = document.querySelectorAll(".child");
    children.forEach(item => item.addEventListener("mouseover",(e)=>{
        item.classList.add("pink");
    }))
}


function eraseBackGround(){
    const children = document.querySelectorAll(".child");
    children.forEach(child => child.addEventListener("mouseover",(e)=>{
        child.classList.remove("pink");
    }))
}