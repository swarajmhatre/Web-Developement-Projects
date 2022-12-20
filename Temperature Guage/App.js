// Variables
var canvas = (document.getElementById("mycanvas"));
var context = canvas.getContext("2d");
var t1 = document.getElementById("t1");
//-------------------------------------------------------------------------------------------------------------------
// Moving the Needle
function Needle() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var needle1 = new needle(+t1.value, context);
    dial.drawdial();
    needle1.drawneedle();
}
// Dial
var dial = new Dial(context, canvas); //dial
dial.drawdial();
// Needle when slider is off
var origineedle = new needle(+t1.value, context); //needle of no input is given
origineedle.drawneedle();
//---------------------------------------------------------------------------------------------------------------------
//# sourceMappingURL=App.js.map