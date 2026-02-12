// Tên tệp: app.js (hoặc server.js)

const http = require('http');

// QUAN TRỌNG: Server phải lắng nghe trên '0.0.0.0' để chấp nhận kết nối từ bên ngoài container.

const port = 3000; // Cổng này phải khớp với cổng EXPOSE trong Dockerfile

const server = http.createServer((req, res) => {
    // Thiết lập HTTP Header
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Nội dung phản hồi
    res.end('Container Node.js dang chay tren Podman!\n');
});

server.listen(port, () => {
    console.log(`Server Node.js running at http://localhost:${port}/`);
});