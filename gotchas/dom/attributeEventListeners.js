/** 
 * You shouldn't use attribute event listeners like onChange or onClick
 * unless they're a part of a framework that you're using
 * 
 * They're messy if the element has to listen to multiple events at once.
 * Each attribute listener can only have one handler
 * The separation of concerns is not great (you have JS in HTML)
 * 
 * ALSO BAD
 * button.onclick = () => console.log 
 */
