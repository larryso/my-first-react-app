/**
 * in javascript, an execution context is an environment that allows javascript code to be executed.
 * During the execution context, specific code is parsed line by line, the variables and functions are 
 * stored in memory, each time we call a function, an execution context will be created for that function
 * to be executed, it contains current evaluation state fo the code, a reference to the code itself, and
 * possible references to the current lexical environments, execution contexts are managed in a stack.
 * 
 * Lexical environment, each time the javaScript engine creates an execution context, a new lexical
 * environment will be created for that function to store variables during the execution of the function,
 * Lexical environment are created when function are defined, and they are nested, this means the lexical
 * environment of a nex\sted function can see the variables that are decleared in the outer function.
 */

function outer(){
    let x = 10;
    function inner(){
        let y = 20;
        console.log(x, y)
    }
    inner()
}

outer()
/**
 * in this example, the outer() function creates an execution context, the lexical environment for the 
 * outer() function contains the binding for the variable 'x' , the inner() function creates a nested
 * execution context, the lexical environment for the inner() function contains the bindings for the 
 * variables 'x' and 'y'
 * 
 * when the inner() function log out x and y, it sees the value x from outer lexical environment 
 * and see y from the inner lexical environment.
 */