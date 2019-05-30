// Create element custom function //

/*
  type: The element to be created
  config: The attributes to be set in key value pairs
  children: The children elements to be appended to the created element. If single argument, it adds it as the innerText value
*/
function createElement(type, config, children) {
  let elm = null;
  // creating element
  if (type !== null && typeof (type) === "string") {
    elm = document.createElement(type);
  }
  else return 1;

  // setting attributes
  if (typeof (config) === "object") {
    for (let key in config) {
      elm[key] = config[key];
    }
  }

  // appending children
  // if a string passed as children
  if(typeof(children) === "string"){
    elm.innerText = children;
  }
  // if an element passed as childern
  else if(
    (children != null) && (typeof(children) === "object") && (children.nodeType===1) && (typeof childen.style === "object") && (typeof children.ownerDocument ==="object")
    ){
    elm.appendChild(children);
  }
  // if multiple elements passed in an array
  else if(Array.isArray(children)){
    children.forEach(child => elm.appendChild(child));
  }

  // returning the created element
  return elm;
}

let helloWorld = createElement("p", {
  className: "paraTag",
  innerText: "Hello "
}, [createElement("span", {className: "span"}, "World"), createElement("span", {className: "span"}, "!")]);

document.body.appendChild(helloWorld);
