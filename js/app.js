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




var controllers = {};

controllers.PeopleCtrl = function($scope, $http){
    window.scope = $scope;
    $scope.page = {name:'people'};
    $scope.url = './img/people/people.json';

    $scope.images = [];
    $scope.currentImage = {};

    $scope.handleImagesLoaded = function(data, status){
        $scope.images = data;
        $scope.currentImage = $scope.images[0];
    }

    $scope.fetch = function(){
        $http.get($scope.url).success($scope.handleImagesLoaded)  ;
    }

    $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
    };
    $scope.fetch();
                   
};
controllers.SituationsCtrl = function($scope, $http){
    window.scope = $scope;
    $scope.page = {name:'situations'};
    $scope.url = './img/situations/situations.json';

    $scope.images = [];
    $scope.currentImage = {};

    $scope.handleImagesLoaded = function(data, status){
        $scope.images = data;
        $scope.currentImage = $scope.images[0];
    }

    $scope.fetch = function(){
        $http.get($scope.url).success($scope.handleImagesLoaded)  ;
    }

    $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
    };
    $scope.fetch();
                   
};

controllers.LittleNeitzscheCtrl = function($scope, $http){
    window.scope = $scope;
    $scope.page = {name:'little neitzsche'};
};

controllers.AssFestivalCtrl = function($scope, $http){
    window.scope = $scope;
    $scope.page = {name:'the ass festival'};
    
};
controllers.WoodcutsCtrl = function($scope, $http){
    window.scope = $scope;
    $scope.page = {name:'woodcuts'};
    
};
               
gallery.controller(controllers);

/* TODO
function AlbumCtrl($scope, $http){
    $scope.url = 'images.json';
    $scope.images = [];
    $scope.imageCategories = [];
    $scope.currentImage = {};

    $scope.handleImagesLoaded = function(data, status){
        $scope.images = data;
        $scope.currentImage = _.first($scope.images);
        $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category') );
    }

    $scope.fetch = function(){
        $http.get($scope.url).success($scope.handleImagesLoaded)  ;
    }

    $scope.setCurrentImage = function(image){
        $scope.currentImage = image;
    };
    $scope.fetch();
}
 **TODO
 $scope._Index=0;

        $scope.isActive = function(index)  {
            return $scope._Index === index;
        }

        $scope.showPrev = function(){
            $scope._Index = ($scope._Index >0) ?  --$scope._Index : $scope.myPictures.length - 1;
        }

        $scope.showNext = function () {
            $scope._Index = ($scope._Index < $scope.myPictures.length - 1) ? ++$scope._Index : 0;
        }

        $scope.showPicture = function(index){
            $scope._Index = index;
        }
 **
 **/