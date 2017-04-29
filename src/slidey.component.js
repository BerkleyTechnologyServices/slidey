import template from './slidey.html';
import controller from './slidey.controller.js';

export default {
  require: {
    parentSlidey: '^^?btsSlidey'
  },
  bindings: {
    opened: '=?',
    contentWidth: '@',
    reflowContainer: '@',
    onClose: '&?',
    onCloseFinished: '&?'
  },
  controller,
  template,
  transclude: true
};
