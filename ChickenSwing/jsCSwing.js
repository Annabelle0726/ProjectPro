if(typeof document.hidden !== "undefined") {

    function chickenRun(){
        var domSwing = document.getElementById('swinging'),
            domShadow = document.getElementById('shadow');
        if (document.hidden) {
            domSwing.style.animationPlayState = "paused";
            domShadow.style.animationPlayState = "paused";
        } else {
            domSwing.style.animationPlayState = "running";
            domShadow.style.animationPlayState = "running";
        }
    }
    document.addEventListener('visibilitychange', chickenRun, false);
}