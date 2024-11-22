// stream using fs
import fs from 'node:fs';

// var readStream = fs.createReadStream('input.txt');
// var writeStream = fs.createWriteStream('output.txt');

// // Handle errors for readStream
// readStream.on('error', function(err) {
//     console.error('Error reading from input.txt:', err);
// });

// // Handle errors for writeStream
// writeStream.on('error', function(err) {
//     console.error('Error writing to output.txt:', err);
// });

// readStream.pipe(writeStream);

// console.log('Program Ended');

// writeStream
// write a program to use wrtieStream to write data to a file
// var writeStream = fs.createWriteStream('output.txt');
// var data = 'Hello World!';
// writeStream.write(data, 'UTF8');
// writeStream.end();
// writeStream.on('finish', function() {
//     console.log('Write completed.');
// });
// writeStream.on('error', function(err) {
//     console.error('Error writing to output.txt:', err);
// }
// );

// use readStream to read data from a file
// var read = fs.createReadStream('input.txt');
// var data = '';
// read.setEncoding('UTF8');
// read.on('data', function(chunk) {
//     data += chunk;
// });
// read.on('end', function() {
//     console.log(data);
// });
// read.on('error', function(err) {
//     console.error('Error reading from input.txt:', err);
// });
// console.log('Program Ended');


// read and write stream

var read = fs.createReadStream('input.txt');
var write = fs.createWriteStream('output.txt');
read.pipe(write);
console.log('Program Ended');