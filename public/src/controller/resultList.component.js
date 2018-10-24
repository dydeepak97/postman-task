(function(){

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
    