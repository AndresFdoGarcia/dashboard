const draggables = document.querySelectorAll(".list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

draggables.forEach(element => {
    element.addEventListener("dragstart",function(){
        element.classList.add("dragging");   
    });

    element.addEventListener("dragend",function(){
        element.classList.remove("dragging")
    });
});

rightBox.addEventListener("dragover",function(e){
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    rightBox.appendChild(draggable);
});

leftBox.addEventListener("dragover",function(e){
    e.preventDefault();    
    const draggable = document.querySelector(".dragging");
    leftBox.appendChild(draggable);
});