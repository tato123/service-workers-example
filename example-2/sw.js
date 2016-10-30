self.addEventListener('install', function (event) {
  // Perform install steps
  console.log('Service worker is operational...beeboop');
});

self.addEventListener('fetch', function (event) {

  const requestUrl = new URL(event.request.url);


  if (requestUrl.pathname === '/hello') {
    console.log('Service Worker handling fetch event for', event.request.url);

    // create a new response stream that we will use to constantly output data
    var interval;
    var stream = new ReadableStream({
      start(controller) {
        var MAX_TICKS = 100000;
        var ticks = 0;
        interval = setInterval(() => {
          var encoder = new TextEncoder();
          
          if (ticks < MAX_TICKS) {
            console.log('performing tick');
            controller.enqueue(
              encoder.encode(JSON.stringify({ msg: 'Service worker streaming a response', ticks, MAX_TICKS }))              
            );
            ticks++;
          } else {
            console.log('stopping tick');
            clearInterval(interval);
            controller.close();
          }
        }, 1000);
      },
      cancel() {
        // This is called if the reader cancels,
        //so we should stop generating numbers
        clearInterval(interval);
      }
    });

    event.respondWith(new Response(stream, {
      headers: {'Content-Type': 'application/json'}
    }));
  }
  else {
    console.log('Service Worker pass-through fetch event for', event.request.url);
  }
});