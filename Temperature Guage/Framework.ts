//Dial
class Dial { 
    public context: CanvasRenderingContext2D;
    public canvas: HTMLCanvasElement;
    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.context = context;
        this.canvas = canvas;
    }
    drawdial() {
        this.context.beginPath(); //innercircle
        context.arc(400, 300, 193, 2 * Math.PI, 0);
        context.lineWidth = 2;
        context.strokeStyle = "black";
        this.context.stroke();

        context.beginPath(); //outercircle
        context.arc(400, 300, 200, 2 * Math.PI, 0);
        context.strokeStyle = "black";
        context.lineWidth = 4;
        context.font = "20pt Lucida Console"; //numbers
        context.fillStyle = "green"; 
        context.fillText("0", 190, 420);
        context.fillStyle = "darkblue";
        context.fillText("30", 150, 310);
        context.fillStyle = "green";
        context.fillText("60", 175, 195);
        context.fillStyle = "darkblue";
        context.fillText("90", 274, 115);
        context.fillStyle = "green";
        context.fillText("120", 375, 90);
        context.fillStyle = "darkblue";
        context.fillText("150", 495, 115);
        context.fillStyle = "green";
        context.fillText("180", 585, 205);
        context.fillStyle = "darkblue";
        context.fillText("210", 610, 308);
        context.fillStyle = "green";
        context.fillText("240", 580, 420);
        context.stroke();

        for (var i = -70;  i <= 10; i++){ // 3 Degree Marks
            let angle = i *(Math.PI/60); 
            let r = 190;
            this.context.beginPath();
            let x1 = 400 + Math.cos(angle) * r;
            let y1 = 300 + Math.sin(angle) * r;
            let x2 = 400 + Math.cos(angle) * (r -10);
            let y2 = 300 + Math.sin(angle) * (r -10 );
            this.context.lineWidth = 2;
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2, y2);
            this.context.strokeStyle = "Blueviolet";
            this.context.stroke();
        }
        for (var i = -7;  i <= 1; i++){ //30 Degree Marks
            let angle = i *(Math.PI/6); 
            let r = 190;
            this.context.beginPath();
            let x1 = 400 + Math.cos(angle) * r;
            let y1 = 300 + Math.sin(angle) * r;
            let x2 = 400 + Math.cos(angle) * (r -20);
            let y2 = 300 + Math.sin(angle) * (r -20 );
            this.context.lineWidth = 2;
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2, y2);
            this.context.strokeStyle = "Red";
            this.context.stroke();
        }

    }
}

//---------------------------------------------------------------------------------------------------------------

//Needle
class needle { 
    private angle: number;
    public context: CanvasRenderingContext2D;
    constructor(
        angle: number,
        context: CanvasRenderingContext2D,
    ) {
        this.angle = angle;
        this.context = context;
    }
    drawneedle() {
        let r = 190;
        let r1 = 20;
        let ang = ((this.angle - 210) * Math.PI) / 180;
        let ang1 = ((this.angle - 290) * Math.PI) / 180;
        let ang2 = ((this.angle - 130) * Math.PI) / 180;
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(400+ r1*(Math.cos(ang1)), 300+ r1*(Math.sin(ang1)));
        context.lineTo(400+ r*(Math.cos(ang)), 300+ r*(Math.sin(ang)));
        context.moveTo(400+ r1*(Math.cos(ang2)), 300+ r1*(Math.sin(ang2)));
        context.lineTo(400 + r * (Math.cos(ang)), 300 + r * (Math.sin(ang)));
        context.strokeStyle = "purple";
        context.stroke();

        //outer circle
        context.beginPath();
        context.arc(400, 300, 20, 2 * Math.PI, 0);
        context.strokeStyle = "black";
        this.context.stroke();
        
        // inner circle
        this.context.beginPath();
        context.arc(400, 300, 14, 2 * Math.PI, 0);
        this.context.fillStyle = "black";
        context.strokeStyle = "black";
        this.context.fill();
        this.context.stroke();
    }
}

//---------------------------------------------------------------------------------------------------------