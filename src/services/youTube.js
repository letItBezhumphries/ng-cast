angular.module('video-player')
  .service('youTube', function($http) {
      this.search = function(query, callback) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
            key: window.YOUTUBE_API_KEY,
            part: 'snippet',
            q: query,
            maxResults: 10, 
            embeddableVideos: 'true',
        },
      }).then(function searchthis1({data}) {
        console.log(data)
      })
    }
  }); 
