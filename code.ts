function rgbToHex(r, g, b) {
  g = Math.round(g * 255).toString(16);
  r = Math.round(r * 255).toString(16);
  b = Math.round(b * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

let paintStyles = figma.getLocalPaintStyles();
// console.log(paintStyles);
let paintArray = []
paintStyles.forEach((item) => {
  let paintObject = {};
  paintObject['name'] = item.name;
  // @ts-ignore
  // paintObject['color'] = item.paints[0].color;
  paintObject['color'] = rgbToHex(item.paints[0].color.r, item.paints[0].color.g, item.paints[0].color.b).toUpperCase();
  paintObject['ratio'] = 'get ratio() { return getRatio(this.color)}'
  paintArray.push(paintObject);
})
console.log(paintArray);


// var output = '';
// paintArray.forEach((object)=> {
//   for (var property in object) {
//     output += '{' + property + ': ' + '\''+ object[property]+ '\''+' },\n';
//   }
// })
// console.log(output);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
