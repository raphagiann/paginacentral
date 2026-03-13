// Abre a rota em uma nova aba
function abrirAba(rota) {
  window.open(rota, '_blank');
}

// Verifica o status do servidor via API
async function verificarStatus() {
  const badge = document.getElementById('status-badge');
  try {
    const res = await fetch('/api/status');
    const data = await res.json();
    if (data.status === 'online') {
      badge.textContent = '✅ Servidor online';
      badge.classList.add('online');
    }
  } catch {
    badge.textContent = '❌ Servidor offline';
  }
}

verificarStatus();
