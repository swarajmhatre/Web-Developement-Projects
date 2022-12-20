var canvas: HTMLCanvasElement = <HTMLCanvasElement>(document.getElementById("mycanvas"));
var context: CanvasRenderingContext2D = canvas.getContext("2d");
canvas.addEventListener("click", mouseclick, false); //Mouseclick Event
var rect = canvas.getBoundingClientRect();



//Upper Switch
var switch1pt: Project.Point = new Project.Point(100, 226);
var switch1: Project.Switch = new Project.Switch(switch1pt, 25, false, "Ignition", "grey", context);
switch1.draw();

//Lower Switch
var switch2pt: Project.Point = new Project.Point(100, 384);
var switch2: Project.Switch = new Project.Switch(switch2pt, 25, false, "Wiper", "grey", context);
switch2.draw();


// Strand Support
var startpt: Project.Point = new Project.Point(570, 235);
var rectangle = new Project.Rect(startpt, 15, 120, context);
rectangle.draw();


//AND GATE
var gatestpt: Project.Point = new Project.Point(310, 280);
var gatecentpt: Project.Point = new Project.Point(360, 305);
var gate = new Project.Gate(gatestpt, gatecentpt, 50, 50, 25, context);
gate.draw();


//UpperStrand
var stpt = new Project.Point(585, 260);
var endpt = new Project.Point(685, 260);
var strand1 = new Project.strands(stpt, endpt, context);
strand1.draw();

//LowerStrand
var stpt = new Project.Point(585, 330);
var endpt = new Project.Point(685, 330);
var strand2 = new Project.strands(stpt, endpt, context);
strand2.draw();

//outercircle
var outercircle: Project.Circle = new Project.Circle(480, 305, 25, 0, "grey", context);
outercircle.drawstatic();

//innercircle
var x: number = 492;
var y: number = 305
var angle: number = 0;
var incircle: Project.Circle = new Project.Circle(x, y, 10, angle, "yellow", context);
incircle.drawrotat();


//isanim vaiable
var isanim: boolean = false;

//Moseclick Function
function mouseclick(e: MouseEvent) {
  ///If Clicked inside Switch_1(Ignition Switch) 
  if (switch1.isinside(new Project.Point(e.clientX - rect.x, e.clientY - rect.y))) {
    //If Switch_1 is ON
    if (switch1.switchstate) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      switch1.switchstate = false;
      switch1.color = "grey";
      switch1.draw();
      switch2.draw();
      rectangle.draw();
      gate.draw();
      outercircle.drawstatic();
      incircle.drawrotat();
      strand1.draw();
      strand2.draw();
    }
    //If Switch_1 is OFF
    else if (switch1.switchstate == false) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      switch1.switchstate = true;
      switch1.color = "green";
      switch1.draw();
      switch2.draw();
      rectangle.draw();
      gate.draw();
      outercircle.drawstatic();
      incircle.drawrotat();
      strand1.draw();
      strand2.draw();
    }
  }
  ///If Clicked inside Switch_2(Wiper Switch)
  else if (switch2.isinside(new Project.Point(e.clientX - rect.x, e.clientY - rect.y))) {
    //If Switch_2 is ON
    if (switch2.switchstate) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      switch2.switchstate = false;
      switch2.color = "grey";
      switch1.draw();
      switch2.draw();
      rectangle.draw();
      gate.draw();
      outercircle.drawstatic();
      incircle.drawrotat();
      strand1.draw();
      strand2.draw();
    }
    //If Switch_2 is OFF
    else if (switch2.switchstate == false) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      switch2.switchstate = true;
      switch2.color = "green";
      switch1.draw();
      switch2.draw();
      rectangle.draw();
      gate.draw();
      outercircle.drawstatic();
      incircle.drawrotat();
      strand1.draw();
      strand2.draw();
    }
  }

  //If both the Switches are ON it triggers the anim() function
  if (switch1.switchstate == true && switch2.switchstate == true) {
    isanim = true;
    outercircle.color = "green";
    anim();
  }
  //If both switches are OFF
  else if (switch2.switchstate == false || switch1.switchstate == false) {
    isanim = false;
    outercircle.color = "grey";

  }
}

//Anim Function
function anim() {

  angle = angle + 2;

  context.clearRect(0, 0, canvas.width, canvas.height);
  switch1.draw();
  switch2.draw();
  rectangle.draw();
  gate.draw();
  outercircle.drawstatic();
  incircle.rotate();
  incircle.drawrotat();
  strand1.draw();
  strand1.rotate();
  strand2.draw();
  strand2.rotate();

  //Animation
  if (isanim) {
    window.requestAnimationFrame(anim);
  }

}