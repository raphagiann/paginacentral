const express = require('express');
const path = require('path');
const router = express.Router();

const views = path.join(__dirname, '..', 'views');

// Página principal
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Páginas internas
router.get('/sobre',    (req, res) => res.sendFile(path.join(views, 'sobre.html')));
router.get('/servicos', (req, res) => res.sendFile(path.join(views, 'servicos.html')));
router.get('/contato',  (req, res) => res.sendFile(path.join(views, 'contato.html')));
router.get('/painel',   (req, res) => res.sendFile(path.join(views, 'painel.html')));

// API de status
router.get('/api/status', (req, res) => {
  res.json({ status: 'online', server: 'running' });
});

module.exports = router;
