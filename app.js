/*for in*/
function object() {
    this.color = "red";
}
object.prototype = {a:1, b:2, c:3};

let obj = new object();
for (let i in obj) {
    console.log(i + '->' + obj[i]);// "color" "a" "b" "c"
}
for (let prop in obj) {
    if( obj.hasOwnProperty(prop)){
        console.log(prop);           // "color"
    }
}

/* Object.keys */
console.log(Object.keys(obj));   //["color"]

/* Object.getOwnPropertyNames */
const o = Object.create({}, {
    getFoo: {
        value: function() { return this.foo; },
        enumerable: false
    }
});
o.foo = 1;
o.prototype = {a:1, b:2, c:3};
console.log(Object.getOwnPropertyNames(o).sort()); //["foo", "getFoo", "prototype"]