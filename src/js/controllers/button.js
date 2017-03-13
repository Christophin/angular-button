function ButtonController   ($scope)    {
    $scope.likes = 0;
    $scope.toggle = true;
    $scope.like = 'Likes';
    $scope.addLike = function   ()  {
        if ($scope.toggle) {
            $scope.likes += 1;
        } else  {
            $scope.likes -= 1;
        }
        if ($scope.likes === 1)   {
            $scope.like = 'Like'
        } else {
            $scope.like = 'Likes'
        }
    };
    $scope.toggleLike = function    ()  {
        $scope.toggle = !$scope.toggle
    }
}

ButtonController.$inject = ['$scope'];

export default ButtonController;