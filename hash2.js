// SHA1
var crypto = require('crypto');
//hash object
var hash =  crypto.createHash('sha1');
// passing data
data = hash.update('Welcome', 'utf-8');
// generate hash in required format
gen_hash = data.digest('hex');
// output
console.log("hash : "+gen_hash);