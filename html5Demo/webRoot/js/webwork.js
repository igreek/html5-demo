/**
 * Created by ArtistNinth on 15-3-27.
 */

var numDIV;
var wk=null;
window.onload=function(){
    numDIV=document.getElementById("numDIV");

    document.getElementById("start").onclick=startWork;
    document.getElementById("stop").onclick=function(){
        if(wk){
            wk.terminate();
            wk=null;
        }
    }

}

function startWork(){
    if(wk){
        return;
    }
    wk=new Worker("./js/count.js");
    wk.onmessage=function(e){
        numDIV.innerHTML= e.data;
    }
}
