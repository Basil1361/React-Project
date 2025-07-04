// Semicolons are unecessary to add because normally when HTML -> JS, the code will be 


/*
// 1) when the next line starts with [ or ( :
const foo = 3
const bar = foo
( 1 + 2 ).toString()   // ← this "(" will get sucked onto the previous line!

// is parsed as:
const foo = 3;
const bar = foo(1 + 2).toString();  
//              ^^^ suddenly you’re *calling* foo!

*/