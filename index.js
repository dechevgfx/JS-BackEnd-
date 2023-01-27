const http = require("http");
const port = 2000;
const server = http.createServer((req, res) => {
    //връща нашия сървър
    res.write("Hello from NodeJS!"); //
    res.end(); // прекратява respons-a
});
server.listen(port, () =>
    console.log(`Server is listening on port ${port}...`),
);
