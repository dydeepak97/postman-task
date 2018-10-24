(function(){

    'use strict';
    
    angular.module('searchApp')
    .controller('searchMainController', searchMainController);
    
    searchMainController.$inject = ['youtubeService'];
    
    function searchMainController(youtubeService){
        var $ctrl = this;
        $ctrl.searchTerm = "";

        $ctrl.sortBy = "date";
        $ctrl.order = "dsc";
        $ctrl.maxItems = 10;
        $ctrl.searchType = "video"
        
        $ctrl.resultList = [];

        $ctrl.byName = function (a, b){
            let r;
            if($ctrl.order == "asc"){
                r = 1;
            }
            else{
                r = -1
            }
            if(a.snippet.title > b.snippet.title){
                return r;
            }
            if(a.snippet.title < b.snippet.title){
                return (-1 * r);
            }
                return 0;
        }

        $ctrl.byDate = function (a, b){
            let r;
            if($ctrl.order == "asc"){
                r = 1;
            }
            else{
                r = -1
            }
            if(a.snippet.publishedAt > b.snippet.publishedAt){
                return r;
            }
            if(a.snippet.publishedAt < b.snippet.publishedAt){
                return (-1 * r);
            }
                return 0;
        }
        
        $ctrl.searchHandler = function(){
            $ctrl.getYoutubeSearch($ctrl.searchTerm, $ctrl.maxItems, $ctrl.searchType );
        }

        $ctrl.sortHandler = function(){
            console.log("resultList before sort : ", $ctrl.resultList);
            if ($ctrl.sortBy == "name"){
                $ctrl.resultList = $ctrl.resultList.sort($ctrl.byName);
            }
            else if($ctrl.sortBy == "date"){
                $ctrl.resultList = $ctrl.resultList.sort($ctrl.byDate);    
            }
            console.log("resultList after sort : ", $ctrl.resultList);
            console.log("PLS");         
        }

        $ctrl.getYoutubeSearch = function(searchTerm , maxItems, searchType){
            console.log("Search button clicked");
            let response = youtubeService.getSearchData(searchTerm , maxItems, searchType);
        
            //FOR TEST, Remove later
            console.log("Youtube Response JSON:" , response);
            
            response.then(function(result){
                console.log(result.data.items[0].snippet.channelTitle);
                $ctrl.resultList = result.data.items;
            }).catch(function(error){
                console.log("WTF : ", error);
                return "ERROR";
            });
        };
    }
    
    
    })();
    