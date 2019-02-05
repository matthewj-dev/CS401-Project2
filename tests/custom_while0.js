
var imp = require('../imp.js');
var ast = require('../ast.js');


var empty_store = (x) => console.log(`Error: undefined variable ${x}`);

// z := 0; while z <= 1 z := z + 1
var store = imp.interp_C(ast[';'](ast[':=']('z',ast.n(0)),
				  ast.while(ast['<='](ast.x('z'), ast.n(1)),
					    ast[':=']('z', ast["+"](ast['x']('z'),ast['n'](1))))),
		     empty_store);

if (2 == store('z'))
{
    process.exit(0); 
}

process.exit(1);