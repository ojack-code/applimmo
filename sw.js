// Service worker minimal : sert surtout à rendre l'application "installable"
// comme une PWA sur Android (icône seule, sans barre de navigateur).
// Stratégie réseau-en-premier : on va toujours chercher la dernière version
// en ligne, et on ne se rabat sur le cache que si le réseau est indisponible
// (mode hors-ligne). Le numéro de version du cache est incrémenté à chaque
// mise à jour de ce fichier pour forcer le nettoyage de l'ancien cache.
const CACHE_NAME = 'rendement-v2';
const CORE_ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if(event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
