// Variables
var canvas: HTMLCanvasElement = <HTMLCanvasElement>(document.getElementById("mycanvas"));
var context: CanvasRenderingContext2D = canvas.getContext("2d");
var t1: HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
//-------------------------------------------------------------------------------------------------------------------

// Moving the Needle
function Needle() { //needle
    context.clearRect(0, 0, canvas.width, canvas.height);
    var needle1 = new needle(+t1.value, context);
    
    dial.drawdial();
    needle1.drawneedle()
}

// Dial
var dial = new Dial(context, canvas); //dial
dial.drawdial();

// Needle when slider is off
var origineedle = new needle(+t1.value, context); //needle of no input is given
origineedle.drawneedle();

//---------------------------------------------------------------------------------------------------------------------