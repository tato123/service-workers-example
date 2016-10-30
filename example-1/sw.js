self.addEventListener('install', function (event) {
    // Perform install steps
    console.log('Service worker is operational...beeboop');
});

self.addEventListener('fetch', function(event) {
  
  const requestUrl = new URL(event.request.url);

  if (requestUrl.pathname === '/hello') {
    console.log('Service Worker handling fetch event for', event.request.url);
    const responseBody = {
      msg: 'Hey, you just got back a message from a service worker, no server needed!'      
    };

    const responseInit = {    
      status: 200,
      statusText: 'OK',
      headers: {
        'Content-Type': 'application/json',        
        'X-Mock-Response': 'yes'
      }
    };

    const mockResponse = new Response(JSON.stringify(responseBody), responseInit);    
    event.respondWith(mockResponse);
  }
  else {
      console.log('Service Worker pass-through fetch event for', event.request.url);
  }
  
});