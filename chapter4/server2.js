const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
  try {
    console.log(req.method);
    console.log(req.url);
    const data = await fs.readFile('./server2.html');
    res.writeHead(200, {'Content-Type' : 'text/'});
    res.end(data);
  }
  catch (err) {
    console.error(err);
    res.writeHead(200, {'Content-Type' : 'text/'});
    res.end(data);
  }
})
.listen(8081, () => {
  console.log('8081 포트에서 서버 대기 중');
})