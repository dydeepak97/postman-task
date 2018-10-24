(function(){

    'use strict';
    
    console.log("Youtube Service Created");
    
    angular.module('ApiHandler')
    .service('youtubeService', youtubeService)
    .constant('YoutubeApiBasePath', 'https://www.googleapis.com/youtube/v3/search')
    .constant('YoutubeApiKey', 'AIzaSyDZG3SLq7wiOW7AOct9NTeExXyUXKn2xwk');
    
    youtubeService.$inject = ['$http' , 'YoutubeApiBasePath', 'YoutubeApiKey'];
    
    function youtubeService($http, YoutubeApiBasePath, YoutubeApiKey){
      console.log("Youtube Service Instance Running");
      var service = this;
    
      service.getSearchData = function(searchTerm, maxItems, searchType){
    
        console.log("Youtube Service Called");
        
        //Using default 'order' in API as 'relevance' since sorting is to be done on client side.(Specified Requirement)
        var response = $http({
            method: 'GET',
            url: YoutubeApiBasePath,
            params:{
                part: 'snippet',
                key: YoutubeApiKey,
                q: searchTerm,
                maxResults : maxItems,
                type : searchType
            }
        });
          return response;
    
          // return response.then(function(result){
          //     console.log(result.data.items[0].snippet.channelTitle);
          //     service.allItems = result.data.items;
          //
          //     // service.searchList=[];
          //     //
          //     // for( var i=0 ; i<service.allItems.length ; i++){
          //     //   if(service.allItems[i].description.indexOf(searchTerm) != -1){
          //     //     service.searchList.push(service.allItems[i]);
          //     //   }
          //     // }
          //
          //     return result.data.items;
          // }).catch(function(error){
          //   return "ERROR";
          // });;
        }
    
    }
    
    })();
    