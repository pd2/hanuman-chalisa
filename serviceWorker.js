const staticDev = "hanuman_chalisa"
const service_worker_version = "v1.0851"
const assets = [
  "/",
  "index.html",
  "style.css",
  "hanuman_chalisa.txt",
  "script.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
