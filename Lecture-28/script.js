// import val from 'validator';

// var email = 'xyz@pes.edu';

// if(val.isEmail(email)){
//     console.log('Valid Email');
// }
// else{
//     console.log('Invalid Email');
// }

// var name = 'John Doe';

// if(val.isAlpha(name)){
//     console.log('Valid Name');
// }
// else{
//     console.log('Invalid Name');
// }

// import * as myModule from 'myModule';

// console.log(myModule.constant);

// console.log(myModule.add(2,3));
// console.log(myModule.multiply(2,3));

import http from 'node:http';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(6969, () => {
    console.log('Server started on http://localhost:6969');
});
