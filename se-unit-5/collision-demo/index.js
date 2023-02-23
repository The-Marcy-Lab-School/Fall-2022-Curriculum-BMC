let condition1p = document.querySelector("#condition1");
let condition2p = document.querySelector("#condition2");
let condition3p = document.querySelector("#condition3");
let condition4p = document.querySelector("#condition4");


let box1 = {
  element: document.querySelector("#box1"),
  x: 300,
  y: 150,
  width: 100,
  height: 100,
}
let box2 = {
  element: document.querySelector("#box2"),
  x: 0,
  y: 0,
  width: 100,
  height: 100,
}

document.addEventListener("mousemove", moveBox);

function moveBox(e) {
  box2.x = e.x;
  box2.y = e.y;
  box2.element.style.left = box2.x + 'px'
  box2.element.style.top = box2.y + 'px'
  
  doCollide(box2, box1);
}

function doCollide(objA, objB) {
  let condition1 = objA.x < objB.x + objB.width;
  condition1p.innerText = 'left < right: ' + condition1;
  
  let condition2 = objA.x + objA.width > objB.x
  condition2p.innerText = 'right > left: ' + condition2;
  
  let condition3 = objA.y < objB.y + objB.height;
  condition3p.innerText = 'top < bottom: ' + condition3;
  
  let condition4 = objA.y + objA.height > objB.y
  condition4p.innerText = 'bottom > top: ' + condition4;
  
  return condition1 && condition2 && condition3 && condition4;
}








