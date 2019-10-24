var count = 50;
if (count > 0) {
    count--;
}
else {
    count = 0;
}
console.log(count);
console.log("for loop");
var key = "abc";
for (var i_1 = 0; i_1 < key.length; ++i_1) {
    console.log(key[i_1]);
}
console.log("while loop");
var i = 0;
while (i < key.length) {
    console.log(key[i]);
    ++i;
}
console.log("do-while-loop");
i = 0;
do {
    console.log(key[i]);
    ++i;
} while (i < key.length);
console.log("for-of-loop");
for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
    var item = key_1[_i];
    console.log(item);
}
console.log("for-in-loop");
var user = {
    name: 'Bob',
    age: 55
};
for (var key_2 in user) {
    console.log(key_2 + ":" + user[key_2]);
}
