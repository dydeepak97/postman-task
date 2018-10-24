(function(){

    /* 
      This component is used to display the list of video obtained from search.
      Result array obtained from main controller.
      A default $ctrl controller is created which provides access to data in component.
      One way binding used. 
    */

    'use strict';
    
    console.log("resultList Component created");
    
    angular.module('searchApp')
    .component('resultList', {
      templateUrl:'src/view/resultList.html',
      bindings: {
        result: '<'
      }
    });
    
})();
    