// angular.module('video-player')
//   .service('youTube', function() {
//      this.search = function(query, cb) {

//       $http.get('https://www.googleapis.com/youtube/v3/search', {
//         params: {
//           part: 'snippet',
//           q: 'query',
//           type: 'video',
//           maxResults: 10,
//           key: $window.YOUTUBE_API_KEY,
//           videoEmbeddable: 'true',
//         }
//       })
//       .then(function({data}) {
//         if (cb) { cb(data.items); 
//         console.log('logged'); }
//       });
//      };
//   });
