/** 
 * Brenden Eich designed the 1st engine called spider-monkey @ Mozzila. 
 * Turns JS into bytecode that turns into machine code. 
 * ECMA doesn't care how you make your JS work so as long as it works.
 * 
 * An interpreter translates code line by line on the fly. Fast startup but slow thereafter. 
 * JS used to be 100% interpreted, but now uses JIT. 
 * A compiler scans the entire code and tries to figure out what it 
 * does and then spit out optimized machine code. 
 * Slow startup, but fast thereafter. 
 * 
 * JIT Compiler (V8) does both. Interprets and then compiles code when it deems fit to do so. 
 * Parser -> AST -> Interpreter -> [Profiler -> Compiler -> Optimized Code] -> Bytecode.
 * 
 * 1. Parser uses `lexical analysis` to break code into `tokens` that identify meaning.
 * 2. Tokens form an AST "Abstract Syntax Tree"
 * 3. AST fed into interpreter (ignition) 
 * 4. While interpeting, a profiler checks if some pieces should be compiled
 * 5. Interpreter returns bytecode. Compiler returns optimized machine code.
 * 
 * The engine makes optimizations, inline-caching is if the same function returns
 * the same result over and over again. 
 * 
 * It will just cache the result instead of running the function and return that. 
 * The compiler also creates hidden classes for objects that do similar things. 
 * 
 * V8 hates `eval()`, `arguments`, `for in`, `with`, and `delete`.
 */