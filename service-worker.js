self.addEventListener('install', event => {
    console.log('Service Worker installing.');
    // You can pre-cache files here if you want
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activating.');
  });
  
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // You can add custom fetch handling here if needed
  });
  