import $ from 'jquery'
import angular from 'angular';
import Rx from 'rxjs/Rx';
import mainModule from './app';

angular.element(document).ready(function () {
  angular.bootstrap(document, [mainModule.name]);
})
