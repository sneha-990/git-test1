const http = require('http')
http.createServer((req, res) => {
    res.write("Hello World from NodeJS!");
    res.end();
}).listen(5000, () => {
    console.log("Server is running at port 5000");
});