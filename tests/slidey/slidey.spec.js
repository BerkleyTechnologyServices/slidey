import { expect } from 'chai';
import slidey from '../../src/slidey.module.js';

function createTransitionEvent(eventName, propertyName) {
  let transitionEvent;
  try {
    transitionEvent = new TransitionEvent(eventName, { propertyName });
  } catch (e) {
    transitionEvent = document.createEvent('TransitionEvent');
    transitionEvent.initTransitionEvent(eventName, false, false, propertyName, 0);
  }
  return transitionEvent;
}

describe('component(slidey)', () => {
  let scope, component, controller;

  beforeEach(angular.mock.module(slidey));
  beforeEach(angular.mock.inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    scope.opened = false;
    scope.closed = sinon.stub();
    scope.closeFinished = sinon.stub();

    component = $compile(`
      <bts-slidey
        opened="opened"
        content-width="{{contentWidth}}"
        on-close="closed()"
        on-close-finished="closeFinished()">
        {{value}}
      </bts-slidey>
    `)(scope);
    controller = component.controller('btsSlidey');
    scope.$digest();
  }));

  describe('defaults', () => {
    beforeEach(angular.mock.inject(($compile, $rootScope) => {
      component = $compile('<bts-slidey></bts-slidey>')(scope);
      controller = component.controller('btsSlidey');
      scope.$digest();
    }));

    it('should set default values', () => {
      expect(controller.opened).to.equal(false);
      expect(controller.contentWidth).to.equal('80%');
    });
  });

  describe('function(open)', () => {
    beforeEach(() => {
      scope.opened = false;
      scope.$digest();
    });

    it('should open the slidey', () => {
      // The `opened` class should not be present
      expect(component.attr('class').split(' ').indexOf('opened')).to.equal(-1);

      controller.open();
      expect(controller.opened).to.equal(true);

      // The `opened` class should not be present because the watch hasn't fired off
      expect(component.attr('class').split(' ').indexOf('opened')).to.equal(-1);
      scope.$digest();

      // At this point the watch should have fired off and added the `opened` class
      expect(component.attr('class').split(' ').indexOf('opened')).not.to.equal(-1);
    });
  });

  describe('function(close)', () => {
    beforeEach(() => {
      scope.opened = true;
      scope.$digest();
    });

    it('should close the slidey', () => {
      // The `opened` class should be present
      expect(component.attr('class').split(' ').indexOf('opened')).not.to.equal(-1);

      expect(scope.closed.called).to.equal(false);
      expect(scope.closed.callCount).to.equal(0);

      controller.close();
      expect(controller.opened).to.equal(false);

      expect(scope.closed.called).to.equal(true);
      expect(scope.closed.callCount).to.equal(1);

      // The `opened` class should still be present because the watch hasn't fired off
      expect(component.attr('class').split(' ').indexOf('opened')).not.to.equal(-1);
      scope.$digest();

      // At this point the watch should have fired off and removed the `opened` class
      expect(component.attr('class').split(' ').indexOf('opened')).to.equal(-1);

      expect(scope.closed.called).to.equal(true);
      expect(scope.closed.callCount).to.equal(1);
    });
  });

  describe('binding(onClose)', () => {
    beforeEach(angular.mock.inject(($compile, $rootScope) => {
      scope.opened = true;
      scope.$digest();
    }));

    it('should call onClose when overlay is closed', () => {
      controller.close();
      expect(controller.opened).to.equal(false);

      expect(scope.closed.called).to.equal(true);
      expect(scope.closed.callCount).to.equal(1);
    });
  });

  describe('binding(onCloseFinished)', () => {
    beforeEach(angular.mock.inject(($compile, $rootScope) => {
      scope.opened = false;
      scope.$digest();
    }));

    it('should call onCloseFinished when overlay close transition completes', () => {
      const event = createTransitionEvent('transitionend', 'transform');
      controller._wrapper.dispatchEvent(event);

      expect(scope.closeFinished.called).to.equal(true);
      expect(scope.closeFinished.callCount).to.equal(1);
    });

    it('should update bindings on the page when overlay close transition completes', (done) => {
      scope.value = 'test';
      scope.$digest();

      scope.closeFinished = function() {
        scope.value = null;
        setTimeout(function() {
          expect(controller._content.textContent.trim()).to.equal('');
          done();
        });
      };
      const event = createTransitionEvent('transitionend', 'transform');
      controller._wrapper.dispatchEvent(event);
    });

    it('should ignore events from non-transform transition events', () => {
      const event = createTransitionEvent('transitionend', 'opacity');
      controller._wrapper.dispatchEvent(event);

      expect(scope.closeFinished.called).to.equal(false);
      expect(scope.closeFinished.callCount).to.equal(0);
    });

    it('should ignore events when the overlay is opened', () => {
      scope.opened = true;
      scope.$digest();

      const event = createTransitionEvent('transitionend', 'transform');
      controller._wrapper.dispatchEvent(event);

      expect(scope.closeFinished.called).to.equal(false);
      expect(scope.closeFinished.callCount).to.equal(0);
    });
  });

  describe('binding(contentWidth)', () => {
    beforeEach(() => {
      scope.opened = true;
      scope.$digest();
    });

    it('should change the content width of slidey', () => {
      scope.contentWidth = '33%';
      scope.$digest();

      // The `contentWidth` should change to 33%.
      expect(controller._wrapper.style.width).to.equal('33%');

      scope.contentWidth = '77%';
      scope.$digest();

      // The `contentWidth` should change to 77%.
      expect(controller._wrapper.style.width).to.equal('77%');
    });

    it('should support formats other then percentage', () => {
      scope.contentWidth = '15px';
      scope.$digest();

      // The `contentWidth` should change to 15px.
      expect(controller._wrapper.style.width).to.equal('15px');

      scope.contentWidth = '15em';
      scope.$digest();

      // The `contentWidth` should change to 15em.
      expect(controller._wrapper.style.width).to.equal('15em');
    });
  });

  describe('function(nested)', () => {
    let nestedSlidey;
    beforeEach(angular.mock.inject(($compile, $rootScope) => {
      scope.opened = false;
      scope.nestedOpened = false;
      scope.contentWidth = '80%';
      scope.nestedContentWidth = '80%';
      component = $compile(`
        <bts-slidey opened="opened" content-width="{{contentWidth}}">
          <bts-slidey opened="nestedOpened" content-width="{{nestedContentWidth}}">

          </bts-slidey>
        </bts-slidey>
      `)(scope);
      controller = component.controller('btsSlidey');
      scope.$digest();
      nestedSlidey = component.find('bts-slidey');
    }));

    it('should support nesting slideys', () => {
      // The `opened` class should not be present
      expect(component.attr('class').split(' ').indexOf('opened')).to.equal(-1);

      scope.opened = true;
      scope.$digest();

      // At this point the watch should have fired off and added the `opened` class
      expect(component.attr('class').split(' ').indexOf('opened')).not.to.equal(-1);

      // The `opened` class should not be present
      expect(nestedSlidey.attr('class').split(' ').indexOf('opened')).to.equal(-1);

      scope.nestedOpened = true;

      // Content Width should still be 80% because the watch hasn't fired off.
      expect(controller._wrapper.style.width).to.equal('80%');

      scope.$digest();

      // At this point the watch should have fired off and added the `opened` class
      expect(nestedSlidey.attr('class').split(' ').indexOf('opened')).not.to.equal(-1);
      expect(controller._nested).to.equal(true);
      expect(controller._wrapper.style.width).to.equal('100%');
    });
  });

  describe('binding(reflowContainer)', () => {
    let modal;
    beforeEach(angular.mock.inject(($compile, $rootScope) => {
      modal = $compile(`
        <div id="modal">
          <div style="height: 400px;">Some Content</div>
          <bts-slidey opened="opened" reflow-container="{{reflowContainer}}">
            <div style="height: 600px;">Some Content</div>
            <bts-slidey opened="nestedOpened">
              <div style="height: 200px;">Some Content</div>
            </bts-slidey>
          </bts-slidey>
          <bts-slidey>Test2</bts-slidey>
        </div>
      `)(scope);
      component = modal.find('bts-slidey');
      modal = modal[0];
      // HACK(nick-woodward): Because angular doesn't by default utilize the dom for testing.
      // I have to append it so that I can detect certain properties such as element height.
      document.body.appendChild(modal);
      // HACK(nick-woodward): If we don't stub this then angular will have
      // trouble picking up the element from the DOM.
      sinon.stub(document, 'getElementById').withArgs('modal').returns(modal);
      controller = component.controller('btsSlidey');
      scope.opened = false;
      scope.nestedOpened = false;
      scope.reflowContainer = 'modal';
      scope.$digest();
    }));

    afterEach(() => {
      document.body.removeChild(modal);
      document.getElementById.restore();
    });

    it('should throw an error if MutationObserver is unavailable', () => {
      const MutationObserver = window.MutationObserver;

      delete window.MutationObserver;

      try {
        controller.adjustContainer();
      } catch (error) {
        window.MutationObserver = MutationObserver;
        expect(error.message).to.equal(`Unfortunately, this browser doesn't support the MutationObserver API!`);
      }
    });

    it('should grow with the slideys', () => {
      scope.opened = true;
      scope.$digest();

      expect(modal.offsetHeight).to.equal(600);
      expect(modal.style.height).to.equal('600px');
    });

    it('should shrink back to the previous slidey', (done) => {
      scope.opened = true;
      scope.nestedOpened = true;
      scope.$digest();

      expect(modal.offsetHeight).to.equal(400);
      expect(modal.style.height).to.equal('400px');

      // HACK: This is to cause the animation to partially occur
      setTimeout(() => {
        expect(window.scrollX).to.not.be.ok;

        scope.nestedOpened = false;
        scope.$digest();

        expect(modal.offsetHeight).to.equal(600);
        expect(modal.style.height).to.equal('600px');
        done();
      }, 100);
    });

    it('should never shrink beyond the container', () => {
      scope.opened = true;
      scope.nestedOpened = true;
      scope.$digest();

      expect(modal.offsetHeight).to.equal(400);
      expect(modal.style.height).to.equal('400px');
    });

    it('should support content changes', (done) => {
      scope.opened = true;
      scope.$digest();

      expect(modal.offsetHeight).to.equal(600);
      expect(modal.style.height).to.equal('600px');

      const newChild = document.createElement('div');
      newChild.style.height = '200px';

      controller._content.appendChild(newChild);

      // NOTE: This tests the content MutationObserver, therefore we need
      // to wait for the next event loop, setTimeout accomplishes this
      setTimeout(() => {
        expect(modal.offsetHeight).to.equal(800);
        expect(modal.style.height).to.equal('800px');
        done();
      });
    });

    it('should detect container changes', (done) => {
      expect(controller.containerHeight).to.equal(400);

      const newChild = document.createElement('div');
      newChild.style.height = '200px';
      modal.appendChild(newChild);

      // NOTE: This tests the container MutationObserver, therefore we need
      // to wait for the next event loop, setTimeout accomplishes this
      setTimeout(() => {
        expect(controller.containerHeight).to.equal(600);
        done();
      });
    });

    it('should not detect container changes if opened', (done) => {
      expect(controller.containerHeight).to.equal(400);

      scope.opened = true;
      scope.$digest();

      expect(controller.containerHeight).to.equal(400);

      const newChild = document.createElement('div');
      newChild.style.height = '200px';
      modal.appendChild(newChild);

      // NOTE: This tests the content MutationObserver, therefore we need
      // to wait for the next event loop, setTimeout accomplishes this
      setTimeout(() => {
        expect(controller.containerHeight).to.equal(400);
        done();
      });
    });
  });
});
