
self.addEventListener("install", event => {
  console.log("Service Worker instalado.");
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// 🔔 Notificación programada simple (ejemplo)
self.addEventListener("sync", event => {
  if (event.tag === "checkMantenimientos") {
    self.registration.showNotification("Control de Mantenimientos", {
      body: "Revisa los equipos, podrían requerir mantenimiento.",
      icon: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
    });
  }
});
=======
self.addEventListener("install", event => {
  console.log("Service Worker instalado.");
  event.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// 🔔 Notificación programada simple (ejemplo)
self.addEventListener("sync", event => {
  if (event.tag === "checkMantenimientos") {
    self.registration.showNotification("Control de Mantenimientos", {
      body: "Revisa los equipos, podrían requerir mantenimiento.",
      icon: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
    });
  }
});
>>>>>>> 5eb71953d04775e8683e66a3bbe7be8d8803d88d
