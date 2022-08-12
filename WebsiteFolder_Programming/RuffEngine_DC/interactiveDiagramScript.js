
/** 
    //document.getElementById("UPDATECamScreenDVDiv_Child").addEventListener("mousedown", activateWindow);
document.querySelector("#UPDATECamScreenDVDiv_Child button").addEventListener("mousedown", activateWindow);





function activateWindow(event){

    console.log("wat");

    var result = event.valueOf();

    console.log(result);



}

*/


function testFunc(){

    console.log("wat");
    

}

//START OF UPDATE CAMSCREENDV FUNC
//Note this function is not working as expected. It is englarging the entire div instead of just zooming in.
function zoomInUPDATECamScreenDVDescBox(){
    console.log("wa");
    // var box = document.querySelector("#UPDATECamScreenDVDiv_Child article iframe").style.transform = "scale(2)";

}
function activateUPDATECamScreenDVDescBox(){

    var box = document.querySelector("#UPDATECamScreenDVDiv_Child article").style.visibility = "visible";

}

function deactivateUPDATECamScreenDVDescBox(){
    var box = document.querySelector("#UPDATECamScreenDVDiv_Child article").style.visibility = "hidden";

}

//END OF UPDATE CAMSCREENDV FUNC



//START OF UPDATE CAMHATS FUNCS

function activateUPDATECamHatsDescBox(){
    var box = document.querySelector("#UPDATECamHatsDiv article").style.visibility = "visible";

}











