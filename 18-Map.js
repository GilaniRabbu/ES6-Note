// ES6 Map

var myMap = new Map();

myMap.set("key1", "Bangladesh");
myMap.set("key2", "Russia");
myMap.set("key3", "Ireland");
myMap.set("key4", "Egypt");
myMap.set("key5", "Algeria");
myMap.set("key6", "Japan");
myMap.set("key7", "Turkey");

console.log(myMap.values());

console.log(myMap.keys());

// Loop For Map Values and Keys
for (let myValue of myMap.values()) {
    console.log(myValue);
}
for (let myKey of myMap.keys()) {
    console.log(myKey);
}

// clear()
// myMap.clear();

// get(key)
console.log(myMap.get("key6"));

// delete(key)
myMap.delete("key1");
for (let myValue of myMap.values()) {
    console.log(myValue);
}

// has(value)
if (myMap.has("key10")) {
    console.log("yes");
} else {
    console.log("no");
}