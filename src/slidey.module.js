import angular from 'angular';
import slidey from './slidey.component.js';
import config from './slidey.config.js';

const module = angular.module('bts.slidey', []);

module.config(config);
module.component('btsSlidey', slidey);

export default module.name;
