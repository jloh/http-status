var base = process.env.PWD
var inputfile = base + "/src/_data/codes.yaml",
  outputfile  = base + "/src/_data/codes.json",
  yaml = require('js-yaml'),
  fs   = require('fs'),
  obj  = yaml.safeLoad(fs.readFileSync(inputfile, { encoding: 'utf-8' }));

// Sort our stuff just in case
sobj = obj.sort(function (a, b) {
  // possible return values
  var a1st = -1; // negative value means left item should appear first
  var b1st = 1; // positive value means right item should appear first
  var equal = 0; // zero means objects are equal

  // Compare codes and determine order
  if (b.code < a.code) {
    return b1st;
  }
  else if (a.code < b.code) {
    return a1st;
  }
  else {
    return equal;
  }
})

// this code if you want to save
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
