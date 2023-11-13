oninstall=e=>e.waitUntil(caches.open('v1').then(c=>c.addAll(['/','/favicon-16x16.png','/favicon-32x32.png','/favicon.ico','/icon.png'])));onfetch=e=>e.respondWith(caches.match(e.request))
