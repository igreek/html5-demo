/**
 * Created by ArtistNinth on 15-3-27.
 */

var countNum=0;
function count(){
    postMessage(countNum);
    if(countNum==0){

    }
    countNum++;
    setTimeout(count,1000);
}
count();