/** 
 * It's a behavioural pattern, where class behaviour depends on a class's "state".
 * You might have objects with various different states and a context object whose
 * behaviour changes when its state object changes.
 */

function PageState() {
	PageState.prototype.init = function () { homeState() }; // start here
	d = document

	const homeState = () => d.querySelector("#content").innerHTML = `<p>Home</p>`
	const aboutState = () => d.querySelector("#content").innerHTML = `<p>About</p>`
	const contactState = () => d.querySelector("#content").innerHTML = `<p>Contact</p>`
}

const page = new PageState();
page.init();

const home = document.getElementById("home"),
	about = document.getElementById("about"),
	contact = document.getElementById("contact");

home.addEventListener("click", e => { homeState(); e.preventDefault() });
about.addEventListener("click", e => { aboutState(); e.preventDefault() });
contact.addEventListener("click", e => { contactState(); e.preventDefault() })