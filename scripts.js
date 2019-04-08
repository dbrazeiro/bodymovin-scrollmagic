jQuery(document).ready(function($){
    var lottieOptions = {
        addIndicators: true,
    };

    initLottieAnim(lottieOptions);

});

//     scene1
//     .on('enter', function () {
//       var interval = 0;
//       for (let anim in homeModalAnimations) {
//         setTimeout(function() {
//           homeModalAnimations[anim].setSpeed(1);
//           homeModalAnimations[anim].setDirection(1);
//           homeModalAnimations[anim].play();
//         }, interval);
//       interval = interval + 300;
//     }
//   })
//   .on('leave', function () {
//     for (var anim in homeModalAnimations) {
//       homeModalAnimations[anim].setSpeed(3);
//       homeModalAnimations[anim].setDirection(-1);
//       homeModalAnimations[anim].play();
//     }
//   })