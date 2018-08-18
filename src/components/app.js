angular.module('video-player')

  .component('app', {
    templateUrl: '/src/templates/app.html',
    bindings: {
      video: "<",
      videoclick: '<',
    },
    
    controller: function() {
      this.videoclick = () => {  //newVideo will need to be added manually in app.html
        console.log("hey");
      }

      this.videos = window.exampleVideoData;
    }
   
  });
