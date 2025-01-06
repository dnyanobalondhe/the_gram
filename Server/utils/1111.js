const crypto = require('crypto');

// Generate a 256-bit (32-byte) random secret key and encode it in base64
const secretKey = crypto.randomBytes(32).toString('base64');
console.log(secretKey);