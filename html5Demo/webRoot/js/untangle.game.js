/**
 * Created by ArtistNinth on 15-4-3.
 */
function Circle(x,y,radius){
    this.x=x;
    this.y=y;
    this.radius=radius;
}

function Line(startPoint,endPoint,thickness){
    this.startPoint=startPoint;
    this.endPoint=endPoint;
    this.thickness=thickness;
}

var untanglegame={
    circles:[],
    thineLineThickness:1,
    lines:[]

};

function drawLine(ctx,x1,y1,x2,y2,thickness){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth=thickness;
    ctx.strokeStyle="#cfc";
    ctx.stroke();
}
/**
 * 画圆
 * @param ctx
 * @param x
 * @param y
 * @param radius
 */

function drawCircle(ctx,x,y,radius){
    ctx.fillStyle="rgba(200,200100,.9)";
    ctx.beginPath();
    ctx.arc(x, y,radius,0,Math.PI*2,true);
    ctx.fill();
}


$(function(){
    var cav=document.getElementById("game");
    var ctx=cav.getContext("2d");
    var circleRadius=10;
    var width=cav.width;
    var height=cav.height;
    for(var i=0;i<5;i++){
        var x=Math.random()*width;
        var y=Math.random()*height;
        drawCircle(ctx,x,y,circleRadius);
        //保存对象的状态
        untanglegame.circles.push(new Circle(x,y,circleRadius));
    }
    for(var i=0;i<untanglegame.circles.length;i++){
        var startPoint=untanglegame.circles[i];
        for(var j=0;j<i;j++){
            var endPoint=untanglegame.circles[j];
            drawLine(ctx,startPoint.x,startPoint.y,endPoint.x,endPoint.y,1);
            //保存直线状态
            untanglegame.lines.push(new Line(startPoint,endPoint,untanglegame.thineLineThickness));
        }
    }

});