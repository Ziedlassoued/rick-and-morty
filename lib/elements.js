export function createElement(tagName, props, children) {
  const element = document.createElement(tagName);
  if (props) {
    Object.assign(element, props);
  }
  if (children) {
    element.append(...children);
  }
  return element;
}
