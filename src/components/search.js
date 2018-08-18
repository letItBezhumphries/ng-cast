angular.module('video-player')

  .component('search', {
    bindings: {
      search: '<',
      textVal: '=',
    },
    templateUrl: 'src/templates/search.html',
    controller: function() {
      
    },
  });
