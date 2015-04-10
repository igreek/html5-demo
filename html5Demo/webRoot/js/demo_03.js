/**
 * Created by ArtistNinth on 15-3-26.
 */
var cav=document.getElementById("cav");
var ctx=cav.getContext("2d");
//1.画出直线
//设置点的位置
ctx.moveTo(10,10);
ctx.lineTo(10,50);
ctx.stroke();

//画出一个填充的三角形
//开始新路经
ctx.beginPath();
ctx.moveTo(30,40);
ctx.lineTo(60,40);
ctx.lineTo(60,60);
//闭合路径
ctx.closePath();
//填充
ctx.fill();
//画出一个矩形(画出矩形,可以不用路线)
ctx.strokeRect(80,60,50,50);
//若改变填充颜色
ctx.fillStyle="#ff00bb";
ctx.fillRect(80,60,50,50);

//画出一个园
ctx.fillStyle="#ff00bb";
ctx.beginPath();
ctx.arc(160,60,20,0,360,true);
//闭合园
ctx.closePath();
ctx.fill();

//在画布上写字
var text="北京";
ctx.fillStyle="";
ctx.font="60px 宋体";
ctx.fillText(text, 80,160);

//在画布上画图
var img=new Image();
//指定图片来源
img.src="bomb_1.gif";
img.onload=function(){
    ctx.drawImage(img,200,100,300,400);
}
