/** 
 * Whenever the browser comes across a script tag, it pauses all HTML parsing 
 * It then fetches the JS file, executes it, and then continues parsing the HTML.
 * If you put the script tag at the top, it's not going to be able to select any 
 * of the HTML elements because they're all null (it hasn't been parsed yet).
 * 
 * <script></script> 
 * 
 * Defer will download the script in the background and then execute it once
 * the HTML is finished parsing. The page will be uninteractive until the 
 * script is done executing. It only works for external scripts
 * 
 * <script defer></script>
 * 
 * Async will pause HTML parsing while a script is downloading, but once it's 
 * finished downloading it will pause HTML parsing to run the script. Then it 
 * will go back to parsing the HTML. Only used for things that don't manipulate the DOM
 * and need to run right away (analytics)
 * 
 * <script async></script>
 */