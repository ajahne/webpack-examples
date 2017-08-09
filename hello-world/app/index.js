import _ from 'lodash';
import log from './logger';

let component = () => {
  let element = document.createElement('div');

  //loadash is required for this next line to work
  element.innerHTML = _.join(['Hello','Webpack,', 'we have bundled!'], ' ');
  element.innerHTML += '<br>';
  element.innerHTML += log;

  return element;
}

document.body.appendChild(component());
