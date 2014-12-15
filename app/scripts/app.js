(function () {
  'use strict';

  angular.module('blog', ['ngRoute', 'blog.controllers', 'blog.templates']);

  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/post-list.tpl.html',
        controller: 'PostListCtrl',
        controllerAs: 'postlist'
      })
      .when('/post/:postId', {
        templateUrl: 'views/post-detail.tpl.html',
        controller: 'PostDetailCtrl',
        controllerAs: 'postdetail'
      });
  }

  angular
   .module('blog')
   .config(config);
})();
