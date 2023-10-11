const http = require('http');
const fs = require('fs').promises;
const users = {}; // 데이터 저장용

http.createServer( async (req, res) => {
  try{
    if (req.method === 'GET') {
      if (req.url === '/') {
        const data = await fs.readFile('./restFront.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url==='/about'){
        const data = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      }
    } else if (req.method === 'POST') {
      
    } else if (req.method === 'PUT') {
      
    } else if (req.method === 'DELETE') {
     
    }
    res.writeHead(404);
    return res.end('NOT FOUND');   
  }
  catch(err){
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다');
  });