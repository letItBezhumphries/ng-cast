angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      videoclick: '<',
      function: '<' //setting $ctr to have property called function
    },

    templateUrl: 'src/templates/videoList.html',
  });
