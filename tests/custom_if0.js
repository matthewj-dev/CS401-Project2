

var imp = require('../imp.js');
var ast = require('../ast.js');


var empty_store = (x) => console.log(`Error: undefined variable ${x}`);

// q:=3 ; m := q ; if true then q := 8 else skip
var store = imp.interp_C(ast[';'](ast[':=']('q',ast.n(3)), ast[';'](ast[':=']('m','q'), ast.if(ast.true(), ast[':=']('q', ast['n'](8)), ast.skip()))),
		     empty_store);

if (8 == store('q'))
{
    process.exit(0); 
}

process.exit(1);




