let count=50;
if(count>0){
    count--;
}else {
    count=0;
}
console.log(count);

console.log("for loop");

const key="abc";
for (let i=0;i<key.length;++i){
    console.log(key[i]);
}

console.log("while loop");
let i=0;
while (i<key.length){
    console.log(key[i]);
    ++i;
}

console.log("do-while-loop");

 i=0;
do {
    console.log(key[i]);
    ++i;
}while (i<key.length);

console.log("for-of-loop");
for (const item of key){
    console.log(item);
}

console.log("for-in-loop");
const user={
    name:'Bob',
    age:55
};
for (const key in user){
console.log(`${key}:${user[key]}`);
}
