export default class SlideyController {
  constructor($scope, $element) {
    this.$scope = $scope;
    this.$element = $element;
  }

  $onInit() {
    this.opened = false;
    this.contentWidth = '80%';
    this.$scope.$watch('$ctrl.opened', this._onOpenedChanged.bind(this));
  }

  $postLink() {
    this._wrapper = this.$element[0].querySelector('.slidey-content-wrapper');
    this._content = this.$element[0].querySelector('.slidey-content');
    this._overlay = this.$element[0].querySelector('.slidey-overlay');
    this.setNested(this._nested);
    this._wrapper.addEventListener('transitionend', this._onTransitionEnd.bind(this), {
      passive: true
    });
  }

  $onChanges(changes) {
    if (changes.contentWidth) {
      this.setNested(this._nested);
    }

    if (changes.reflowContainer) {
      this._container = this.reflowContainer ? document.getElementById(this.reflowContainer) : null;
      this.adjustContainer();
    }
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
    if (this.onClose) {
      this.onClose();
    }
  }

  _onOpenedChanged() {
    if (this.opened) {
      this.$element.addClass('opened');
    } else {
      this.$element.removeClass('opened');
    }

    if (this.parentSlidey) {
      this._container = this._container || this.parentSlidey._container;
      this.parentSlidey.setNested(this.opened);
    }
    this.adjustContainer();
  }

  _onTransitionEnd(event) {
    // Bail if it wasn't the transform that changed
    if (event.propertyName !== 'transform') return;

    if (!this.opened && this.onCloseFinished) {
      this.$scope.$apply(() => {
        this.onCloseFinished();
      });
    }
  }

  setNested(nested) {
    this._nested = nested;
    if (!this._wrapper) {
      return;
    }

    if (this._nested) {
      this._contentObserver && this._contentObserver.disconnect();
      this._wrapper.style.width = '100%';
      this.$element.addClass('nested');
    } else {
      this._wrapper.style.width = this.contentWidth;
      this.$element.removeClass('nested');
    }
  }

  adjustContainer() {
    if (!window.MutationObserver) {
      throw new Error('Unfortunately, this browser doesn\'t support the MutationObserver API!');
    }
    if (!this._container) {
      return;
    }
    this._containerObserver && this._containerObserver.disconnect();
    this._contentObserver && this._contentObserver.disconnect();
    if (this.opened) {
      // We need to watch the content for changes to cover instances
      // where we have async calls or are waiting for angular to bind
      this._contentObserver = new MutationObserver((mutations) => {
        if (!this.opened) return;

        this._container.style.height = this.contentHeight;
      });
      this._contentObserver.observe(this._wrapper, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
      this._container.style.height = this.contentHeight;
    } else if (this.parentSlidey && this.parentSlidey.opened) {
      // We're closing to a parent slidey, so we should match its height.
      this._container.style.height = this.parentSlidey.contentHeight;
    } else {
      // We need to watch the container for changes to cover instances
      // where we have async calls or are waiting for angular to bind
      this._containerObserver = new MutationObserver((mutations) => {
        if (this.opened) return;

        this._containerHeight = this._container.scrollHeight;
      });
      this._containerObserver.observe(this._container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
      this._container.style.height = '';
    }
  }

  get containerHeight() {
    if (!this._containerHeight) {
      this._containerHeight = this.parentSlidey && this.parentSlidey._containerHeight || this._container.scrollHeight;
    }
    return this._containerHeight;
  }

  get contentHeight() {
    return this._content.scrollHeight < this.containerHeight ? `${this.containerHeight}px` : `${this._content.scrollHeight}px`;
  }
}

SlideyController.$inject = ['$scope', '$element'];
