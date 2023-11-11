const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Configurar el proxy
  server.use('/api/services', createProxyMiddleware({
    target: 'https://klgd7u2z2d.execute-api.us-east-1.amazonaws.com/Prod/',
    pathRewrite: { '^/api/services': '' },
    changeOrigin: true
  }));

  // Todos los demás request son manejados por Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Listo en http://localhost:${port}`);
  });
});