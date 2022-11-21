const weak = new WeakSet();
weak.add({ a: "a" }) // takes objects only
a = null // GC'd