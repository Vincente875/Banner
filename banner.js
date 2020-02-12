var  bannerStatus = 1;
var bannnerTimer = 4000;

window.onload = function(){
    bannerLoop();
}

var startBannerLoop = setInterval(function() {
    bannerLoop();
}, bannnerTimer);

function bannerLoop (){
    if(bannerStatus === 1) {
        document.getElementById("imgban2").style.opacity = "0";
        setTimeout(function () {  
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000px";
            document.getElementById("imgban2").style.right = "-1200px";
            document.getElementById("imgban2").style.zIndex = "1500px";
            document.getElementById("imgban3").style.right = "1200px";
            document.getElementById("imgban3").style.zIndex = "500px";
        }, 500);
        
        setTimeout(function () {
        document.getElementById("imgban2").style.opacity = "1";
        bannerStatus = 2;
        }, 1000);
    }
    else if(bannerStatus === 2) {
        document.getElementById("imgban3").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000px";
            document.getElementById("imgban3").style.right = "-1200px";
            document.getElementById("imgban3").style.zIndex = "1500px";
            document.getElementById("imgban1").style.right = "1200px";
            document.getElementById("imgban1").style.zIndex = "500px";
        }, 500);

        setTimeout(function () {
            document.getElementById("imgban3").style.opacity = "1";
            bannerStatus = 3;
        }, 1000);
    }
    else if (bannerStatus === 3) {
        document.getElementById("imgban1").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000px";
            document.getElementById("imgban1").style.right = "-1200px";
            document.getElementById("imgban1").style.zIndex = "1500px";
            document.getElementById("imgban2").style.right = "1200px";
            document.getElementById("imgban2").style.zIndex = "500px";
        }, 500);

        setTimeout(function () {
            document.getElementById("imgban1").style.opacity = "1";
            bannerStatus = 1;
        }, 1000);
}
}