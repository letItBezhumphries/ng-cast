angular.module('video-player')

.component('app', {
  templateUrl: '/src/templates/app.html',
  controller: function() {
    //connect to exampleVideoData file to   
    this.videos = window.exampleVideoData;
  
  }
   
});
