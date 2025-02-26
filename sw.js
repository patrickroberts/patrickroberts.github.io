onfetch=(e,q)=>e.respondWith(caches.open('v1').then(c=>c.match(q=e.request).then(m=>m??fetch(q)).then(s=>s.ok?c.put(q,s.clone()).then(()=>s):s)))
