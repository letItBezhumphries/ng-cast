angular.module('video-player')

  .component('app', { //'app' here refers to the tag for app.htm   
    templateUrl: '/src/templates/app.html',

    controller: function(youTube) {
  
      this.data = window.YOUTUBE_API_KEY;
      this.videos = window.exampleVideoData; 
      this.currentVideo = exampleVideoData[0]; // set the currentVideo to be the exampleVideoData at index 0
      this.search = youTube.search;
      
      this.videoclick = (video) => { //newVideo will need to be added manually in app.html
        // console.log(video);
        this.currentVideo = video; //setting the currentVideo to the clicked video
      };

      // this.searchvideos = (data) => {
      //   this.videos = this.data;
      //   this.currentVideo = this.videos[0];
      // };

     this.appendvideos = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
     }

      this.searchthis = (data) => {
        console.log('eric is really cool ', data);
        console.log('what is love ', this.query)
        this.search(data, this.appendvideos);
      };
    }
   
  });
