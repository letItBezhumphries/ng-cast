angular.module('video-player')

  .component('app', { //'app' here refers to the tag for app.htm   
    templateUrl: '/src/templates/app.html',

    controller: function(youTube) {
      this.query = '';
      this.data = window.YOUTUBE_API_KEY;
      this.videos = window.exampleVideoData; // 
      this.currentVideo = exampleVideoData[0]; // set the currentVideo to be the exampleVideoData at index 0
      this.videoclick = (video) => { //newVideo will need to be added manually in app.html
        // console.log(video);
        this.currentVideo = video; //setting the currentVideo to the clicked video
      };

      // this.searchvideos = (data) => {
      //   this.videos = this.data;
      //   this.currentVideo = this.videos[0];
      // };


      this.searchthis = (data) => {
        youTube.search(data)
      }
    }
   
  });
