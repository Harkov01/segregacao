function disableZoom(){
    var viewport=document.querySelector('meta[name="viewport"]');
    if(viewport){
        viewport.content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';}
    }

function disableCtrlScroll(event){
    if(event.ctrlKey&&event.deltaY){
        event.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded',function(){
    disableZoom();
    document.addEventListener('wheel',disableCtrlScroll,{passive:false});
    document.addEventListener('keydown',disableCtrlScroll,{passive:false});
});