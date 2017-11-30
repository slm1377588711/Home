//window.onload=function(){
//    var canvas=document.getElementById("Mycanvas")
//    var context=canvas.getContext("2d");
//    context.fillStyle="#ff0000";
//    context.fillRect(50,25,100,50);   <!--距离左边和顶部的距离，后两个参数是矩形本身的长宽 -->
//}
function load()
{
    myform=document.getElementById("myform");
    myform.a.addEventListener("change",doChangeEvent,false);
    myform.b.addEventListener("change",doChangeEvent,false);
}
function doChangeEvent(even)
{
    myform.result.value=parseInt(myform.a.value)+parseInt(myform.b.value);
}
window.addEventListener("load",load,false);