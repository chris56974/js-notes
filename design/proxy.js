/** 
 * Structural pattern where you use a placeholder class/object (Proxy) that limits access to another class/object. 
 * You might do this because that object is intensive to create or it can only be accessed from a remote location.
 */
function API() {
	this.getValue = function (object) {
		console.log("Calling external API...")
		switch (object) {
			case "A": return 1
			case "B": return 2
			case "C": return 3
		}
	}
}

const api = new API()
api.getValue("A") // 1

function Proxy() {
	this.api = new API()
	this.cache = {}
	this.getValue = function (object) {
		if (this.cache[object] == null) { this.cache[object] = this.api.getValue(object) }
		return this.cache[object]
	}
}

const proxy = new Proxy()
proxy.getValue("A")