import angular from 'angular';
import slidey from './slidey.component.js';
import config from './slidey.config.js';

const module = angular.module('slidey', []);

module.config(config);
module.component('slidey', slidey);

export default module.name;
