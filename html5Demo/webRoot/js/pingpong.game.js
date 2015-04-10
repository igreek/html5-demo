/**
 * Created by ArtistNinth on 15-4-2.
 */
var KEY={
    UP:38,
    DOWN:40,
    W:87,
    S:83
}
var pingpong={}
pingpong.pressedKeys=[];
pingpong.ball={
    speed:5,
    x:150,
    y:100,
    directionX:1,
    directionY:1
}


$(function(){
  console.info("-------");
  pingpong.timer=setInterval(gameloop,30);
  $(document).keydown(function(e){
      pingpong.pressedKeys[e.which]=true;
  });
  $(document).keyup(function(e){
       pingpong.pressedKeys[e.which]=false;
   });
});

function gameloop(){
    moveBall();
    movePaddle();
}
/**
 * 控制球拍的移动
 */
function movePaddle(){
    if(pingpong.pressedKeys[KEY.UP]){
        var top=parseInt($("#paddleB").css("top"));
        $("#paddleB").css("top",top-5);
    }
    if(pingpong.pressedKeys[KEY.DOWN]){
        var top=parseInt($("#paddleB").css("top"));
        $("#paddleB").css("top",top+5);
    }

    if(pingpong.pressedKeys[KEY.W]){
        var top=parseInt($("#paddleA").css("top"));
        $("#paddleA").css("top",top-5);
    }

    if(pingpong.pressedKeys[KEY.S]){
        var top=parseInt($("#paddleA").css("top"));
        $("#paddleA").css("top",top+5);
    }
}

/**
 * 控制球拍移动
 */
function moveBall(){
    //
    console.info("moveBall");
    var playgroundHeight=parseInt($("#playground").height());
    var playgroundWidth=parseInt($("#playground").width());
    var ball =pingpong.ball;

    if(ball.y+ball.speed*ball.directionY>playgroundHeight){
        ball.directionY=-1;
    }

    if(ball.y+ball.speed*ball.directionY<0){
        ball.directionY=-1;
    }

    if(ball.x+ball.speed*ball.directionX>playgroundWidth){
        ball.directionX=-1;
    }

    if(ball.x+ball.speed*ball.directionX<0){
        ball.directionX=-1;
    }

    ball.x+=ball.speed*ball.directionX;
    ball.y+=ball.speed*ball.directionY;

    $("#ball").css({
       "left":ball.x,
       "top":ball.y
    });
}