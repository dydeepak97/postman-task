(function(){

    /* 
        This is the main controller for the state.
        Used for getting user input from html page and creating a reqParms obj,
        calling the API function through service,
        storing the result of API call,
        sorting the result array,
        sending result array data to component for displaying.
    */

    'use strict';
    
    angular.module('searchApp')
    .controller('searchMainController', searchMainController);
    
    searchMainController.$inject = ['youtubeService']; //Service injected to handle API calls
    
    function searchMainController(youtubeService){
        var $ctrl = this;
       
        //Parameters object
        $ctrl.reqParams = [];

        //Var for status of errors
        $ctrl.err = false;

        //Initializing Default values for sort
        //Default sorting is by name in ascending order
        $ctrl.sortBy = "name";
        $ctrl.order = "asc";

        //Default values for req params
        $ctrl.reqParams.searchTerm = "";
        $ctrl.reqParams.maxItems = "10";
        $ctrl.reqParams.searchType = "video"
        
        //To store List of videos
        $ctrl.resultList = [];

        //Compare function to compare names
        $ctrl.byName = function (a, b){
            let r;
            if($ctrl.order == "asc"){
                r = 1; 
            }
            else{
                r = -1              //To Reverse the order of sorting
            }
            if(a.snippet.title > b.snippet.title){
                return r;
            }
            if(a.snippet.title < b.snippet.title){
                return (-1 * r);
            }
            return 0;
        }

        //Compare function to compare publish dates
        $ctrl.byDate = function (a, b){
            let r;
            if($ctrl.order == "asc"){
                r = 1;
            }
            else{
                r = -1          //To Reverse the order of sorting
            }
            if(a.snippet.publishedAt > b.snippet.publishedAt){
                return r;
            }
            if(a.snippet.publishedAt < b.snippet.publishedAt){
                return (-1 * r);
            }
                return 0;
        }
        
        //Called when user clicks search button
        $ctrl.searchHandler = function(){
            $ctrl.getYoutubeSearch($ctrl.reqParams);    //send API params to the API handling function.
        }

        //Called when user clicks Sort button
        $ctrl.sortHandler = function(){
            console.log("resultList before sort : ", $ctrl.resultList);
            if ($ctrl.sortBy == "name"){
                $ctrl.resultList = $ctrl.resultList.sort($ctrl.byName);     //For sorting by Name
            }
            else if($ctrl.sortBy == "date"){
                $ctrl.resultList = $ctrl.resultList.sort($ctrl.byDate);    //For sorting by Date
            }
            console.log("resultList after sort : ", $ctrl.resultList);
            console.log("PLS");         
        }

        /*Function to call Youtube Service 
            Stores the result in a promise obj response. 
            Populates the resultList array when promise is resolved.
        */
        $ctrl.getYoutubeSearch = function(reqParams){
           
            console.log("Search button clicked");
           
            let response = youtubeService.getSearchData(reqParams);      //API function called.
            
            response.then(function(result){
                console.log(result.data.items[0].snippet.channelTitle);
                $ctrl.resultList = result.data.items;           //Sorting by default sort params
                $ctrl.sortHandler();
                $ctrl.err = false;                                 
            })
            .catch(function(error){
                $ctrl.err = true;
                console.log("WTF : ", error);
                return "ERROR";
            });
        };
    }   
    
})();
    