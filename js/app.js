var gallery = angular.module('gallery', ['ngRoute']);

gallery.config(function($routeProvider){
    $routeProvider.
        when('/people', {templateUrl: 'partials/people.html', controller: 'PeopleCtrl'}).
        when('/situations', {templateUrl: 'partials/situations.html', controller: 'SituationsCtrl'}).
        when('/little-neitzsche', {templateUrl: 'partials/little-neitzsche.html', controller: 'LittleNeitzscheCtrl'}).
        when('/ass-festival', {templateUrl: 'partials/ass-festival.html', controller: 'AssFestivalCtrl'}).
        when('/woodcuts', {templateUrl: 'partials/woodcuts.html', controller: 'WoodcutsCtrl'}).
        otherwise({redirectTo:'/people'});
});


gallery.factory('PictureGetter', function($http){
    return {
        getPictures: function(url,callback){
            $http.get(url).success(callback);
        }
    }
});

var controllers = {};

controllers.PeopleCtrl = function($scope, PictureGetter){
    $scope.page = {name:'people'};
    $scope.url = './img/people/people.json';
    PictureGetter.getPictures($scope.url, function(pictures, status){
        $scope.images = pictures;
        $scope.currentImage = $scope.images[0];
        
        $scope.setCurrentImage = function(image){
            $scope.currentImage = image;
        };
    });                 
}

controllers.SituationsCtrl = function($scope, PictureGetter){
    $scope.page = {name:'situations'};
    $scope.url = './img/situations/situations.json';
    PictureGetter.getPictures($scope.url, function(pictures, status){
        $scope.images = pictures;
        $scope.currentImage = $scope.images[0];
        
        $scope.setCurrentImage = function(image){
            $scope.currentImage = image;
        };
    });                 
}

controllers.LittleNeitzscheCtrl = function($scope, PictureGetter){
    $scope.page = {name:'little neitzsche'};
    $scope.url = './img/little-neitzsche/little-neitzsche.json';
    PictureGetter.getPictures($scope.url, function(pictures, status){
        $scope.images = pictures;
        $scope.currentImage = $scope.images[0];
        
        $scope.setCurrentImage = function(image){
            $scope.currentImage = image;
        };
    });                 
}

controllers.AssFestivalCtrl = function($scope, PictureGetter){
    $scope.page = {name:'ass festival'};
    $scope.url = './img/ass-festival/ass-festival.json';
    PictureGetter.getPictures($scope.url, function(pictures, status){
        $scope.images = pictures;
        $scope.currentImage = $scope.images[0];
        
        $scope.setCurrentImage = function(image){
            $scope.currentImage = image;
        };
    });                 
}

controllers.WoodcutsCtrl = function($scope, PictureGetter){
    $scope.page = {name:'woodcuts'};
    $scope.url = './img/woodcuts/woodcuts.json';
    PictureGetter.getPictures($scope.url, function(pictures, status){
        $scope.images = pictures;
        $scope.currentImage = $scope.images[0];
        
        $scope.setCurrentImage = function(image){
            $scope.currentImage = image;
        };
    });                 
}

               
gallery.controller(controllers);

