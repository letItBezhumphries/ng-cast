angular.module('video-player')

  .component('videoPlayer', { //this 'videoPlayer' refers to videoPlayer tag in app.html 
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      video: '<',
      function: '<'        
    },
    
  });
