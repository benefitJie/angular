var routerApp = angular.module('routerApp', ['ui.router', 'controllers']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'home.html'
		})
		.state('product', {
			url: '/product',

			templateUrl: 'product.html'
		})

		// home页下的内嵌视图list（当点击ui-sref=".list"会路由到此）
		.state('home.list', {
			url: '/list',
			templateUrl: 'home-list.html',

		})

		// home页下的内嵌视图paragraph （当点击ui-sref=".paragraph"）
		.state('home.paragraph', {
			url: '/paragraph',
			template: 'I could sure use a scoop of ice-cream. '
		})

		.state('home.list.li01', {
			url: '/li01',
			templateUrl: 'li01.html',
		})
		.state('home.list.li02', {
			url: '/li02',
			templateUrl: 'li02.html',
		})

		.state('about', {
			url: '/about',
			views: {
				'': {
					templateUrl: 'about.html'
				},
				'columnOne@about': {
					template: '<p>This is columnOne show area !! </p>'
				},
				'columnTwo@about': {
					templateUrl: 'table-data.html',
					controller: 'Controller'
				}
			}

		});

});