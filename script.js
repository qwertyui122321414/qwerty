let drad=false;
let phant=false;
function onMousedown(e){
e.preventDefault();
const clickedElement=e.target;
if (clickedElement.className.includes('item')){
    clickedElement.style.opacity='0.6'
    DradElement=clickedElement;
}
}
function createPhantElement(e){
    phantElement=document.createElement('div');
    phantElement.className='phant'
    phantElement.style.backgroundColor=DradElement.style.backgroundColor;
phantElement.style.left=e.pageX - DragElement.offsetWidth/2+'px' 
phantElement.style.left=e.pageY - DragElement.offsetHeight/2+'px'
document.body.appendChild(phantElement)
}
function updatePhantElement(e){
    const list=document.querySelector('#list')
    phantElement.style.left=e.pageX - DragElement.offsetWidth/2+'px' 
    phantElement.style.left=e.pageY - DragElement.offsetHeight/2+'px'
phantElement.style.zindex="-1"
const lowerElement=document.elementFromPoint(e.clientX,claentY)
phantElement.style.zIndex="1";
if(lowerElement==nul||lowerElement==DradElement||!lowerElement.className.includes('item')) return;
if(lowerElement ==list.lastChhild){
    list.removeChild(DradElement);
    list.appendChild(DradElement);
}
else if(lowerElement.previousSibling==DradElement){
    list.insertBefore(DradElement,lowerElement.nextSibling)

}
else{
    list.removeChild(DradElement);
    list.insertBefore(DradElement,lowerElement)
}
else{
    list.removeChild(DradElement)
    list.insertBefore(DradElement,lowerElement)
}

}
function onMouseMove(e){
 if(!DradElement) return;
 if(!phantElement) createPhantElement(e);
 else updatePhantElement(e)
}
function onMouseUp(){
if(DradElement){
    DradElement.style.opacity='1'
    DradElement=false;

}
if(phantElement){
    document.body.removeChild(phantomElement);
    phantElement=false
}





}
document.addEventListener('mousedown',onMouseDown)
document.addEventListener('mousemove',onMouseDown)
document.addEventListener('mouseup',onMouseUp)




