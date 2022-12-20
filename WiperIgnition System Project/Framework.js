var Project;
(function (Project) {
    //Point Class
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Project.Point = Point;
    //------------------------------------------------------------------------------------------------------------------
    //Switches
    class Switch {
        constructor(centerpt, radius, switchstate, switchtype, color, context) {
            this.centerpt = centerpt;
            this.radius = radius;
            this.switchstate = switchstate;
            this.stwitchtype = switchtype;
            this.color = color;
            this.context = context;
        }
        draw() {
            //Switch1 (Ignition Switch)
            if (this.stwitchtype == "Ignition") {
                this.context.beginPath();
                this.context.strokeStyle = this.color;
                this.context.lineWidth = 3;
                context.moveTo(this.centerpt.x + 24, this.centerpt.y);
                context.lineTo(this.centerpt.x + 80, this.centerpt.y);
                context.lineTo(this.centerpt.x + 80, this.centerpt.y + 65);
                context.lineTo(this.centerpt.x + 210, this.centerpt.y + 65);
                this.context.stroke();
                this.context.beginPath();
                context.fillStyle = "black";
                this.context.lineWidth = 1;
                context.font = "18pt Arial";
                this.context.fillText("Ignition ON", this.centerpt.x - 50, this.centerpt.y - 50);
                this.context.stroke();
                context.beginPath();
                context.fillStyle = this.color;
                context.strokeStyle = "black";
                context.arc(this.centerpt.x, this.centerpt.y, this.radius, 0, 2 * Math.PI);
                this.context.lineWidth = 7;
                this.context.stroke();
                context.fill();
                //If Switch1 is ON
                if (this.switchstate) {
                    context.beginPath();
                    context.font = "14pt Arial";
                    context.fillStyle = "black";
                    context.fillText("YES", this.centerpt.x - 20, this.centerpt.y + 8);
                    context.stroke();
                }
                //If Switch1 is OFF
                else if (this.switchstate == false) {
                    context.beginPath();
                    context.font = "14pt Arial";
                    context.fillStyle = "black";
                    context.fillText("NO", this.centerpt.x - 14, this.centerpt.y + 8);
                    context.stroke();
                }
            }
            //Switch2 (Wiper Switch)
            else if (this.stwitchtype == "Wiper") {
                this.context.beginPath();
                this.context.strokeStyle = this.color;
                this.context.lineWidth = 3;
                context.moveTo(this.centerpt.x + 24, this.centerpt.y);
                context.lineTo(this.centerpt.x + 80, this.centerpt.y);
                context.lineTo(this.centerpt.x + 80, this.centerpt.y - 65);
                context.lineTo(this.centerpt.x + 210, this.centerpt.y - 65);
                context.stroke();
                this.context.beginPath();
                context.fillStyle = "black";
                this.context.lineWidth = 1;
                context.font = "18pt Arial";
                this.context.fillText("Wiper ON", this.centerpt.x - 50, this.centerpt.y + 60);
                this.context.stroke();
                context.beginPath();
                context.fillStyle = this.color;
                context.strokeStyle = "black";
                context.arc(this.centerpt.x, this.centerpt.y, this.radius, 0, 2 * Math.PI);
                this.context.lineWidth = 7;
                this.context.stroke();
                context.fill();
                //If Switch2 is ON
                if (this.switchstate) {
                    context.beginPath();
                    context.font = "14pt Arial";
                    context.fillStyle = "black";
                    context.fillText("YES", this.centerpt.x - 20, this.centerpt.y + 8);
                    context.stroke();
                }
                //If Switch2 is OFF
                else if (this.switchstate == false) {
                    context.beginPath();
                    context.font = "14pt Arial";
                    context.fillStyle = "black";
                    context.fillText("NO", this.centerpt.x - 14, this.centerpt.y + 8);
                    context.stroke();
                }
            }
        }
        //Isinside Function
        isinside(pt) {
            let r = Math.sqrt(Math.pow(pt.x - this.centerpt.x, 2) + Math.pow(pt.y - this.centerpt.y, 2));
            if (r < this.radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
    }
    Project.Switch = Switch;
    //------------------------------------------------------------------------------------------------------------------
    //AND Gate
    class Gate {
        constructor(startpt, centerpt, width, height, radius, context) {
            this.startpt = startpt;
            this.centerpt = centerpt;
            this.width = width;
            this.height = height;
            this.radius = radius;
            this.context = context;
        }
        draw() {
            context.beginPath();
            context.rect(this.startpt.x, this.startpt.y, this.width, this.height);
            context.arc(this.centerpt.x, this.centerpt.y, this.radius, -Math.PI / 2, +Math.PI / 2);
            context.fillStyle = "grey";
            context.fill();
        }
    }
    Project.Gate = Gate;
    //------------------------------------------------------------------------------------------------------------------
    // Strand Support
    class Rect {
        constructor(startpt, width, height, context) {
            this.startpt = startpt;
            this.width = width;
            this.height = height;
            this.context = context;
        }
        draw() {
            context.beginPath();
            context.rect(this.startpt.x, this.startpt.y, this.width, this.height);
            this.context.lineWidth = 2;
            context.strokeStyle = "black";
            context.fillStyle = "blue";
            context.fill();
            context.stroke();
        }
    }
    Project.Rect = Rect;
    //------------------------------------------------------------------------------------------------------------------
    //Circle
    class Circle {
        constructor(x, y, radius, angle, color, context) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.angle = angle;
            this.context = context;
        }
        //Static Diagrams
        drawstatic() {
            this.context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, +Math.PI * 2);
            this.context.lineWidth = 2;
            context.strokeStyle = "black";
            this.context.fillStyle = this.color;
            this.context.fill();
            context.stroke();
            this.context.beginPath();
            this.context.lineWidth = 3;
            this.context.moveTo(this.x - 95, this.y);
            this.context.lineTo(this.x - this.radius, this.y);
            this.context.strokeStyle = this.color;
            this.context.stroke();
        }
        //Rotating Circle
        drawrotat() {
            this.context.beginPath();
            context.arc(this.x, this.y, this.radius, 0, +Math.PI * 2);
            this.context.lineWidth = 2;
            this.context.fillStyle = this.color;
            this.context.fill();
        }
        //Motion Generation
        rotate() {
            this.x = 480 + 12 * (Math.cos(angle * Math.PI / 180));
            this.y = 305 + 12 * (Math.sin(angle * Math.PI / 180));
        }
    }
    Project.Circle = Circle;
    //------------------------------------------------------------------------------------------------------------------
    //Strands
    class strands {
        constructor(stpt, endpt, context) {
            this.motion = "upward";
            this.color = "black";
            this._stpt = stpt;
            this._endpt = endpt;
            this.context = context;
            this._length = this.length;
            this._angle = this.angle;
        }
        get length() {
            let l = Math.sqrt(Math.pow(this._stpt.x - this._endpt.x, 2) + Math.pow(this._stpt.y - this._endpt.y, 2));
            return (l);
        }
        get angle() {
            let ang = Math.atan2(this._stpt.y - this._endpt.y, this._stpt.x - this._endpt.x) * Math.PI / 180;
            return (ang);
        }
        draw() {
            this.context.beginPath();
            this.context.moveTo(this._stpt.x, this._stpt.y);
            this.context.lineTo(this._endpt.x, this._endpt.y);
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 3;
            this.context.stroke();
        }
        //Motion Genration
        rotate() {
            if (this.motion == "upward") {
                this._angle = this._angle - 1.5;
                this._endpt.x = this._stpt.x + this._length * Math.cos(this._angle * Math.PI / 180);
                this._endpt.y = this._stpt.y + this._length * Math.sin(this._angle * Math.PI / 180);
                this.rotateCheck();
            }
            else if (this.motion == "downward") {
                this._angle = this._angle + 1.5;
                this._endpt.x = this._stpt.x + this._length * Math.cos(this._angle * Math.PI / 180);
                this._endpt.y = this._stpt.y + this._length * Math.sin(this._angle * Math.PI / 180);
                this.rotateCheck();
            }
        }
        //Motion Handling
        rotateCheck() {
            if (this._angle >= 30) {
                this.motion = "upward";
            }
            else if (this._angle <= -30) {
                this.motion = "downward";
            }
        }
    }
    Project.strands = strands;
})(Project || (Project = {}));
//   startpt: Point;
//   endpt: Point;
//   motion: string = "upward";
//   length: number;
//   angle: number = 0;
//   public context: CanvasRenderingContext2D;
//   public canvas: HTMLCanvasElement;
//   constructor(startpt: Point,  length: number, context: CanvasRenderingContext2D) {
//     this.startpt = startpt;
//     this.length = length;
//     this.context = context;
//   }
//   draw() {
//     context.beginPath();
//     context.moveTo(this.startpt.x, this.startpt.y);
//     context.lineTo(this.endpt.x, this.endpt.y);
//     this.context.strokeStyle = "black";
//     context.stroke();
//   }
//   rotate() {
//     if (this.motion == "upward") {
//       angle =angle + 0.05;
//       this.endpt.x= 585 + 60 * Math.cos(angle* Math.PI / 180);
//       this.endpt.y = 250 + 60* Math.sin(angle * Math.PI / 180);
//       console.log("dekh")
//       this.check();
//     }
//     else if (this.motion == "downward") {
//       angle = angle - 0.05;
//       this.endpt.x = 250 + 60 * Math.cos(angle * Math.PI / 180);
//       this.endpt.y = 250 + 60 * Math.sin(angle * Math.PI / 180);
//       this.check();
//     }
//   }
//     check() {
//       if (angle<= -30) {
//         this.motion = "downward"
//       }
//       else if (angle>=  30) {
//         this.motion = "upward"
//       }
//     }
//   }
// }
//# sourceMappingURL=Framework.js.map