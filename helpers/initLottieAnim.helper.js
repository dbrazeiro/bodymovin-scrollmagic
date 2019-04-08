var initLottieAnim = function(options){
    // var initLottieAnim = this;
    // var lottieParams = [];
    // var initAnim = [];
    // var triggerElement = [];
    var scrollMagicController = new ScrollMagic.Controller();
    var triggersCollection = document.querySelectorAll("[data-bmsm-trigger-elem]");

    $.each(triggersCollection, function(idx, lottieElem){
        var animToInit;
        var elemDataset = lottieElem.dataset;
        var delay = elemDataset.bmsmAnimationDelay && +elemDataset.bmsmAnimationDelay;
        var triggerElementId = "#" + elemDataset.bmsmTriggerElem;
        var offset = elemDataset.bmsmOffset;
        var elemAnimData = elemDataset.bmsmAnimationData;
        var animElemId = lottieElem.getAttribute("id");
        var timeOutCollection = [];
        var lottieParams = {
            container: document.getElementById(animElemId),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationData[elemAnimData]
        };

        animToInit = lottie.loadAnimation(lottieParams);

        var scene = new ScrollMagic.Scene({
            triggerElement: triggerElementId,
            offset: offset
        });

        if(options.addIndicators === true) {
            scene.addIndicators();
        }

        function setDelay(){
            // return function(){
                // animToInit.stop();
                timeOutCollection[idx] = setTimeout(function(){
                    animToInit.play();
                    // console.log("anim!!");
                }, delay);
            // };
        };

        function clearDelay(){
            clearTimeout(timeOutCollection[idx]);
        };

        scene
        .on('enter', function () {
            animToInit.goToAndStop(0);
            animToInit.setSpeed(1);
            animToInit.setDirection(1);
            // console.log(delay)
            if(delay !== undefined) {
                setDelay();
                // console.log("asdasd")
                // setTimeout(function(){
                //     animToInit.play();
                //     console.log("anim!!");
                // }, delay);
            } else {
                animToInit.play();
            }

        })
        .on('leave', function () {
            clearDelay();
            // animToInit.goToAndStop(0);
            animToInit.setSpeed(1);
            animToInit.setDirection(-1);
            animToInit.play();
        })
        .addTo(scrollMagicController);

    });
}