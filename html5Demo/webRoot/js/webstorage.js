/**
 * Created by ArtistNinth on 15-3-26.
 */
var num=0;
var txt;
var btn;
window.onload=function(){
    txt=document.getElementById("txt");
    btn=document.getElementById("btn");
    //判断session是否离线存储
    if(sessionStorage.num){
        num=sessionStorage.num;
    }else{
        num=0;
    }
    btn.onclick=function(){
        num++;
        sessionStorage.num=num;
        showNum();
    }
}
function showNum(){
    txt.innerHTML=num;
}