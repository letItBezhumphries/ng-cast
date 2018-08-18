angular.module('video-player')

  .component('search', {
    bindings: {
      searchvideos: '<',
      textval: '<',
      searchthis: '='
    },
    controller: function() {
      this.search = () => {
        youTube.search('anthony', this.searchvideos);
      }
    },
    templateUrl: 'src/templates/search.html',
  });
