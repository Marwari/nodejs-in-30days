// whirlpool hashing
// input less than 2256 bits
// output 5212 bits
var crypto = require('crypto');
//hash object
var hash =  crypto.createHash('whirlpool');
// passing data
data = hash.update('Welcome', 'utf-8');
// generate hash in required format
gen_hash = data.digest('hex');
// output
console.log("hash : "+gen_hash);