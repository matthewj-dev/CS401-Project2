

var imp = require('../imp.js');
var ast = require('../ast.js');


var empty_store = (x) => console.log(`Error: undefined variable ${x}`);

// q := 9 ; m := 3
var store = imp.interp_C(ast[';'](ast[':=']('q', ast['n'](9)), ast[':=']('p', ast['n'](2))),
		     empty_store);

if (2 == store('p'))
{
    process.exit(0); 
}

process.exit(1);




