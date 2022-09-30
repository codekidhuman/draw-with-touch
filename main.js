var mouseevent = "";
var colour = "";
var width = "";
var lax = 0;
var lay = 0;

canvas = document.getElementById("can");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", mouseDown);
function mouseDown(e)
{
mouseevent = "Mousedown";
colour = document.getElementById("colour").value;
width = document.getElementById("WOL").value;
console.log(mouseevent);
}

canvas.addEventListener("mouseup", mouseUp);
function mouseUp(e)
{
    mouseevent = 'Mouseup';
    console.log(mouseevent);
}

canvas.addEventListener("mouseleave", mouseLeave);
function mouseLeave(e)
{
    mouseevent = 'Mouseleave';
    console.log(mouseevent);
}

canvas.addEventListener("mousemove", mouseMove);
function mouseMove(e)
{
    curx = e.clientX - canvas.offsetLeft;
    cury = e.clientY - canvas.offsetTop;

    if (mouseevent == "Mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.moveTo(lax, lay);
        ctx.lineTo(curx, cury);
        ctx.stroke();
    }


    lax = curx;
    lay = cury;

}
canvas.addEventListener("touchstart", touchStart);
function touchStart(e)
{
    curx = e.touches[0].clientX - canvas.offsetLeft;
    cury = e.touches[0].clientY - canvas.offsetTop;

    lax = curx;
    lay = cury;

    
     mouseevent = 'touchstart';
    console.log(mouseevent);
}
canvas.addEventListener("touchmove", touchMove)
function touchMove(e)
{
    curx = e.touches[0].clientX - canvas.offsetLeft;
    cury = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;
        ctx.moveTo(lax, lay);
        ctx.lineTo(curx, cury);
        ctx.stroke();
    

    lax = curx;
    lay = cury;


}
