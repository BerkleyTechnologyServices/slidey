import angular from 'angular';

const module = angular.module('app', [
  'bts.slidey'
]);

class AppController {
  constructor() {
    this.modalOpened = true;
  }

  closed() {
    console.log('closing');
  }

  closeFinished() {
    console.log('finished closing!');
  }

  toggle(name) {
    this[name] = !this[name];
  }
}

module.controller('AppController', AppController);
