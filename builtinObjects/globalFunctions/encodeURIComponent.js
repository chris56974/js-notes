/** 
 * encodeURIComponent() will encode a component of a URI, like a query string. 
 * It will encode more stuff than encodeURI() will (it will encode the scheme and the URL reserved keywords). 
 * If you're trying to put a URL inside some content, then use this. 
 * If you want to navigate to this link, then use encodeURI instead.
 */

let a = "a string & ?"
let uri = "http://example.com/foo?hey=" + encodeURIComponent(a)
