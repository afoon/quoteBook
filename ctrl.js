angular.module('app')
.controller("quoteBookCtrl",function($scope, quoteBookSrv){
$scope.test = "Issa Test";
$scope.quotes= quoteBookSrv.quotes;
$scope.removeQuote= function(index){
    quoteBookSrv.removeQuote(index);
};
$scope.addQuote = function(quoteObj){
    quoteBookSrv.addQuote(quoteObj);
    $scope.newQuote = {};
}
})