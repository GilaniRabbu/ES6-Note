// ES6 Set
// Set is a collection of data
// Set is almost like array
// But it does not contain any duplicates

let colors = new Set(["Red", "Green", "Blue", "Teal"]);

console.log(colors);

var mySet = new Set();
mySet.add("Red");
mySet.add("Green");
mySet.add("Blue");
mySet.add("Teal");
mySet.add("Cyan");
mySet.add("Yellow");
mySet.add("Black");

// mySet.clear();

// delete(value)
mySet.delete("Teal");

// Set.size
console.log(mySet.size);

// values()
console.log(mySet.values());

// has(value)
if (mySet.has("Cyan")) {
    console.log("Yes");
}
else {
    console.log("No");
}

console.log(mySet);