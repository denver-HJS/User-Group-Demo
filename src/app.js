import angular from 'angular'
import 'angular-ui-router'

// Project components
import {name as homeName, homeController} from './partials/home/homeController'
import {helloWorld} from './shared/directives/helloWorld'
import appConfig from './config/routes.js'

var mainApp = angular.module('demoApp', ['ui.router'])
                .controller(homeName, homeController)
                //.directive(helloWorld.className, helloWorld.directiveFactory)
                .config(appConfig)

export default mainApp
