import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  //loadash is required for this next line to work
  element.innerHTML = _.join(['Hello','Webpack,', 'we have bundled!'], ' ');

  return element;
}

document.body.appendChild(component());
