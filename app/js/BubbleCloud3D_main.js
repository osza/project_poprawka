 $(function() {
     $(".frame").to3DBubbleCloud();

     var options = {
         showBubblesOutOfFrameBorders: false // default is true
     }
     $("#hideBubblesOutOfFrame").to3DBubbleCloud(options);

     var options = {
         angularSpeedMultiplier: 3, // default is 1
         maxAngularSpeed: 24, //defaults to 8
         showBubblesOutOfFrameBorders: false // default is true
     }
     $("#fasterBubbles").to3DBubbleCloud(options);

     var options = {
         angularSpeedMultiplier: 3, // default is 1
         maxAngularSpeed: 24, //defaults to 8
         showBubblesOutOfFrameBorders: false, // default is true
         distributeBubblesRandomly: true // default is false
     }
     $("#randomDistribution").to3DBubbleCloud(options);
 });