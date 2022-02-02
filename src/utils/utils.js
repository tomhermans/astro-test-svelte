export const utils = {
  norm: function (value, min, max) {
    return (value - min) / (max - min);
  },

  lerp: function (norm, min, max) {
    return (max - min) * norm + min;
  },

  map: function (value, sourceMin, sourceMax, destMin, destMax) {
    return utils.lerp(
      utils.norm(value, sourceMin, sourceMax),
      destMin,
      destMax
    );
  },

  clamp: function (value, min, max) {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
  },

  distance: function (p0, p1) {
    var dx = p1.x - p0.x,
      dy = p1.y - p0.y;
    return Math.sqrt(dx * dx + dy * dy);
  },

  distanceXY: function (x0, y0, x1, y1) {
    var dx = x1 - x0,
      dy = y1 - y0;
    return Math.sqrt(dx * dx + dy * dy);
  },

  circleCollision: function (c0, c1) {
    return utils.distance(c0, c1) <= c0.radius + c1.radius;
  },

  circlePointCollision: function (x, y, circle) {
    return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
  },

  pointInRect: function (x, y, rect) {
    return (
      utils.inRange(x, rect.x, rect.x + rect.width) &&
      utils.inRange(y, rect.y, rect.y + rect.height)
    );
  },

  inRange: function (value, min, max) {
    return value >= Math.min(min, max) && value <= Math.max(min, max);
  },

  rangeIntersect: function (min0, max0, min1, max1) {
    return (
      Math.max(min0, max0) >= Math.min(min1, max1) &&
      Math.min(min0, max0) <= Math.max(min1, max1)
    );
  },

  rectIntersect: function (r0, r1) {
    return (
      utils.rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width) &&
      utils.rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height)
    );
  },

  degreesToRads: function (degrees) {
    return (degrees / 180) * Math.PI;
  },

  radsToDegrees: function (radians) {
    return (radians * 180) / Math.PI;
  },

  roundToPlaces: function (value, places) {
    var mult = Math.pow(10, places);
    return Math.round(value * mult) / mult;
  },

  roundNearest: function (value, nearest) {
    return Math.round(value / nearest) * nearest;
  },
};

// try and test
// console.log(utils.norm(7, 5, 17)); // 0.16666666666666666

// console.log(utils.lerp(0.1666666, 1, 153)); //26.3333232

// console.log(utils.roundToPlaces(Math.PI, 2)); //3.14
// console.log(utils.roundToPlaces(Math.PI, 3)); //3.142
// console.log(utils.roundToPlaces(Math.PI, 4)); //3.1416

// console.log(utils.inRange(2, 3, 8)); // false
// console.log(utils.inRange(4, 3, 8)); // true

// console.log(utils.roundNearest(29, 4)); // returns 28

// console.log(utils.rangeIntersect(0, 2, 3, 8)); // false

// console.log(utils.rangeIntersect(2, 5, 3, 8)); // true

// JS FUNCTIONS

export default function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

// export const rootstyle = document.documentElement.style;
export function setCustomProp(root, prop, val, unit = "") {
  root.setProperty("--" + prop, val + unit);
}

// try:
// setCustomProp(rootstyle, 'value', utils.roundNearest(29, 4))

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Creation of Elements
export function createElem(varname, tag = div, inner = innertxt) {
  // console.log(varname, tag, inner);
  window["var_" + varname] = document.createElement(tag);
  window["var_" + varname].innerHTML = inner;
  return window["var_" + varname];
  // document.body.appendChild(btn); // do append yourself
}
// test
// let btn = createElem("btn", "button", "button 1");
// btn.addEventListener("click", () => {
//   console.log("clic ", btn.innerText);
// });
// document.body.appendChild(btn);

// let btn1 = createElem("btn1", "button", "button 2");
// btn1.addEventListener("click", () => {
//   console.log("clic ", btn1.innerText);
// });
// document.body.appendChild(btn1);

// test create a div, give it some styling
// let div1 = createElem("div", "div", "inner divtext");
// div1.style.padding = "20px";
// div1.style.outline = "2px solid red";
// document.body.appendChild(div1);

// shuffle array // Fisher-Yates (aka Knuth) Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export function downloadSVG(elId) {
  console.log("downloadSVG", elId);
  const svg = document.getElementById(elId);
  if (!svg.getAttribute("xmlns")) {
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  }
  const svgOuter = svg.outerHTML;
  const blob = new Blob([svgOuter.toString()]);
  const element = document.createElement("a");
  const d = new Date();

  var filename = "svg-" + d.getTime() + "-" + getRandomInt(100, 10000) + ".svg";
  element.download = filename;
  element.href = window.URL.createObjectURL(blob);
  element.click();
  element.remove();
}
