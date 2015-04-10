/**
 * Created by ArtistNinth on 15-3-26.
 */
var ta;
var btn;
window.onload=function(){
    ta=document.getElementById("txt");
    btn=document.getElementById("btn");
    if(localStorage.text){
        ta.value=localStorage.text;
    }
    btn.onclick=function(){
        localStorage.text=ta.value;
    }

}