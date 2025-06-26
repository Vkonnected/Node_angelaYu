const buffer = new Buffer.from("noman....");
console.log(buffer);
buffer.write("Aligarh");
console.log(buffer.toJSON());
console.log(buffer.toString());