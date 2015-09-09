var riot = require('riot'), fs = require('fs');

var example = riot.compile(fs.readFileSync('./example.tag-jade', 'utf8'), { template: 'jade' });

console.log(riot.render('example'));
console.log(riot.render(example));

