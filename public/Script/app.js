
(function(){
    function start(){
        console.log("app started")
    }
    window.addEventListener("loaded", start);
})

var myVid = document.getElementById("myVid");

function PlayPause() {
    if (myVid.paused) myVid.play();
    else myVid.pause();
}