
var runMode = null;

if (typeof process !== 'undefined') {
  runMode = "node";
} else if (typeof window !== 'undefined') {
  runMode = "web";
} else {
  runMode = "unknown";
}

module.exports = runMode;
