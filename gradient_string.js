const gradient = require('gradient-string');

console.log(gradient('red', 'blue')('Hello world!'));

// Use the rainbow gradient
console.log(gradient.rainbow('I love gradient-strings!'));



// Use the same gradient on every line
let duck = gradient('orange', 'yellow').multiline([
    "  __",
    "<(o )___",
    " ( ._> /",
    "  `---'",
].join('\n'));
console.log(duck);

// Works with aliases
gradient.atlas.multiline('Multi line\nstring');

// Works with advanced options
gradient('cyan', 'pink').multiline('Multi line\nstring', { interpolation: 'hsv' });


const redToGreen = gradient('red', 'green');
const str = '■'.repeat(48);

// Standard RGB gradient
console.log(redToGreen(str));

// Short HSV gradient: red -> yellow -> green
console.log(redToGreen(str, { interpolation: 'hsv' }));

// Long HSV gradient: red -> magenta -> blue -> cyan -> green
console.log(redToGreen(str, { interpolation: 'hsv', hsvSpin: 'long' }));
