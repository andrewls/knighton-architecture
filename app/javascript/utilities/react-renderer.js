import React from 'react';
import ReactDOM from 'react-dom';
import CaseConverter from './case-converter';
import registerPageLoadHandler from './register-page-load-handler';

// This class is pretty simple. It takes all of the data attributes from the
// class that we're rendering and then passes them into react (in camelCase
// rather than snake-case) to render the object type we specified in the
// constructor
// Since jquery's data api parses JSON, this has the nice effect of easily
// permitting us to pass in JSON to a component, then calling
// new ReactRenderer(ComponentClass).render(element) and having
// React get the data as JS objects, not JSON
// TODO: This still doesn't provide support for rendering children.
// Add support for that if we ever actually need it.
class ReactRenderer {
  constructor(componentType) {
    this.componentType = componentType;
  }

  render(element) {
    if (!element || $(element).length === 0) {
      return;
    }
    const attributes = $(element).attr();
    const props = {};
    for (const attribute in attributes) {
      if (attribute.startsWith('data-') && attributes.hasOwnProperty(attribute)) {
        const propName = attribute.substring(5);
        props[CaseConverter.snakeToCamel(propName)] = $(element).data(propName);
      }
    }
    /* eslint-disable react/no-render-return-value */
    return ReactDOM.render(React.createElement(this.componentType, props), $(element)[0]);
    /* eslint-enable react/no-render-return-value */
  }

  static clearClassMappings() {
    $(document).off('turbolinks:load');
  }

  static establishClassMapping(componentType, className) {
    registerPageLoadHandler(function renderElementsByClass() {
      $(`.${className}`).each((index, element) => {
        new ReactRenderer(componentType).render(element);
      });
    });
  }
}

export default ReactRenderer;
