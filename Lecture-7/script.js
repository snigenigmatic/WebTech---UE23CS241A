/*
const fruit = ['apple ', 'banana ', 'orange ', 'grape ', 'kiwi'];
document.write(fruit+'<br>');

// push() method
fruit.push('mango ');
document.write(fruit+'<br>');

// pop() method
// log removed element
document.write(fruit.pop()+'<br>');
document.write(fruit+'<br>');

// at() method
document.write(fruit.at(2)+'<br>');

// shift() method
fruit.shift();
document.write(fruit+'<br>');

// unshift() method
fruit.unshift('mango ');
document.write(fruit+'<br>');

//splice() method
fruit.splice(2, 0, 'lemon ');
document.write(fruit+'<br>');

// slice() method
document.write(fruit.slice(1, 4)+'<br>');

//sort() mathod
document.write(fruit.sort()+'<br>');

//reverse() method
document.write(fruit.reverse()+'<br>');

//concat() method
const fruit1 = ['apple ', 'banana ', 'orange '];
const fruit2 = ['grape ', 'kiwi'];
const fruit3 = fruit1.concat(fruit2);
document.write(fruit3+'<br>');

// at() method
document.write(fruit3.at(2)+'<br>');

// delete() method
delete fruit3[2];
document.write(fruit3+'<br>');

// timer() method
const myTimer = setInterval(myClock, 1000);
function myClock() {
    const d = new Date();
    document.getElementById('demo').innerHTML = d.toLocaleTimeString();
}
myClock();

//slice method
const fruit4 = fruit3.slice(1, 4);
document.write(fruit4+'<br>');
*/

let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
   var mid = Math.floor((l + r) / 2);
   if(s[mid] == '1') {
       ans = mid;
       r = mid - 1;
   }
   else {
       l = mid + 1;
   }
}
console.log(ans);