import css from './slidey.css';

export default function() {
  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}
