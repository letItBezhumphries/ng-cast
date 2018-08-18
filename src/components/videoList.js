angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      videoclick: '<'
    },

    templateUrl: 'src/templates/videoList.html',
  });
