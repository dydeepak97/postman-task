(function(){

    'use strict'
    
    console.log("Router Started");
    
    angular.module('searchApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    
    function RoutesConfig( $stateProvider, $urlRouterProvider ){
    
      //default
      $urlRouterProvider.otherwise('/search');
    
      console.log("RoutesConfig Working");
    
      //UI States
      $stateProvider
        .state('search', {
          url:'/search',
          templateUrl: 'src/view/searchMain.html',
          controller:'searchMainController',
          controllerAs: 'searchBar'
        //   resolve: {
        //     videoList : ['youtubeService', function(youtubeService){
        //       return youtubeService.getSearchData('ed sheeran');
        //     }]
        //   }
        });
    }
    
})();
    