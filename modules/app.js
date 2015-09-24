var albumsApp = angular.module ('albumsApp',[])


        albumsApp.factory('albumFactory',function($http) {
        return {
            getAlbumsAsync: function(callback,$scope){

                $http.get('albums.json').success(callback);
                },

            };


        });
        albumsApp.controller ('albumController', function ($scope,albumFactory,$filter) {
            albumFactory.getAlbumsAsync(function(results){
            console.log('albumController async returned value');
            $scope.albums = results.albums;
                });
             var predicate = 'artist';
                var predicate2 = 'title';
            $scope.changeSorting = function (){
        // your logic goes here
        var orderBy = $filter('orderBy');
   $scope.albums = orderBy($scope.albums, predicate);
        console.log('changeSorting called');
    };
     $scope.changeSorting2 = function (){
        // your logic goes here
        var orderBy = $filter('orderBy');
   $scope.albums = orderBy($scope.albums, predicate2);
        console.log('changeSorting called');
    };      
             
        });
