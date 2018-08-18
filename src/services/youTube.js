angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, appendvideos) {
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
      }).then(function(data) {
          console.log('whats up my doggie ', appendvideos)
         appendvideos(data.data.items)
         console.log(data.data.items);
      });
    };
  }); 
