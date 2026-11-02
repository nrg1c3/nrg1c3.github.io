/* retired: this app is now Sayvo at https://sayvo.nrg-egypt.com/ */
self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(self.registration.unregister().then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate&&c.navigate('https://sayvo.nrg-egypt.com/')))));
