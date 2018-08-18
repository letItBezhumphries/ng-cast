angular.module('video-player')

  .component('search', {
    bindings: {
      searchvideos: '<',
      textval: '<',
      searchthis: '<'
    },
    controller: function() {
      // this.search = () => {
      //   youTube.search('laker', this.searchvideos);
      // };


    },
    templateUrl: 'src/templates/search.html',
  });
