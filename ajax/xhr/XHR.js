/** 
 * XHR "XML HTTP Requests" can retrieve any type of data, not just XML.
 */

// This doesn't do any network stuff yet, it's just config
const xhr = new XMLHttpRequest(); 
xhr.open('GET', 'URL', true); // doesn't send the request yet, can also use data.txt instead of URL

xhr.readyState // 0 - request not initialized
xhr.readyState // 1 - server connection established
xhr.readyState // 2 - request received
xhr.readyState // 3 - processing request
xhr.readyState // 4 - request finished, response ready

xhr.responseType = 'json'

xhr.onload = () => {}
xhr.onprogress = () => {}
xhr.onreadystatechange = () => {}
xhr.onprogress = () => {}
xhr.onerror = () => {}

xhr.send(); // sends the request