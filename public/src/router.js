(function(){

  /* 
    For routing application states. 
    Not really required since this app has only one state but useful if more states are added.
  */

  'use strict'
    
    console.log("Router Started");
    
    angular.module('searchApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    
    function RoutesConfig( $stateProvider, $urlRouterProvider ){
    
      //default state
      $urlRouterProvider.otherwise('/search');
    
      console.log("RoutesConfig Working");
    
      //UI States
      $stateProvider
        .state('search', {
          url:'/search',
          templateUrl: 'src/view/searchMain.html',
          controller:'searchMainController',
          controllerAs: 'searchBar'
        });
    }
    
})();
    