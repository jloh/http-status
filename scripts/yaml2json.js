var base = process.env.PWD
var inputfile = base + "/src/_data/codes.yaml",
    outputfile = base + "/src/_data/codes.json",
    yaml = require('js-yaml'),
    fs = require('fs'),
    obj = yaml.safeLoad(fs.readFileSync(inputfile, {encoding: 'utf-8'}));

list = [];

// Munge all our data into a list
for (var group in obj) {
  for (var code in obj[group]) {
    // Don't worry about our single string things like nav
    if (obj[group][code].constructor === Object) {
      // Add our items to our current code
      var real_code = obj[group][code]
      // Add our group
      real_code['group'] = group
      real_code['code']  = code
      if ("nav" in obj[group]) {
        real_code['nav'] = obj[group]["nav"]
      }
      list.push(real_code)
    }
  }
}

// Sort our stuff just in case
sobj = list.sort(function (a, b) {
  // possible return values
  var a1st  = -1; // negative value means left item should appear first
  var b1st  = 1;  // positive value means right item should appear first
  var equal = 0;  // zero means objects are equal

  // Compare codes and determine order
  if (b.code < a.code) {
    return b1st;
  } else if (a.code < b.code) {
    return a1st;
  } else {
    return equal;
  }
})

// Save file to disk
fs.writeFileSync(outputfile, JSON.stringify(sobj, null, 2));
