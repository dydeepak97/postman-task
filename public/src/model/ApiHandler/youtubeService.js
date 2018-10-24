(function(){

    'use strict';
    
    console.log("Youtube Service Created");
    
    angular.module('ApiHandler')
    .service('youtubeService', youtubeService)
    .constant('YoutubeApiBasePath', 'https://www.googleapis.com/youtube/v3/search')
    .constant('YoutubeApiKey', 'AIzaSyDZG3SLq7wiOW7AOct9NTeExXyUXKn2xwk');  //There are better ways to hide api key but...
    
    youtubeService.$inject = ['$http' , 'YoutubeApiBasePath', 'YoutubeApiKey'];
    
    function youtubeService($http, YoutubeApiBasePath, YoutubeApiKey){
        console.log("Youtube Service Instance Running");
        var service = this;
        
        //Accepts reqParams obj which contains parameters for API call
        service.getSearchData = function(reqParams){
    
            console.log("Youtube Service Called");
            
            //Using default 'order' in API as 'relevance' since sorting is to be done on client side.(Specified Requirement)
            //Other params are provided
            var response = $http({
                method: 'GET',
                url: YoutubeApiBasePath,
                params:{
                    part: 'snippet',
                    key: YoutubeApiKey,
                    q: reqParams.searchTerm,
                    maxResults : reqParams.maxItems,
                    type : reqParams.searchType
                }
            });
            return response;  //A promise obj to be resolved by calling function.
        }
    }  
})();
    