const onLoad = (function () {
    'use strict';

    function onLoad() {
        registerSW()
            .then(() => fetchMessage())
            .catch(err => notAvailable(message));
    }

    function fetchMessage() {
        fetch('/hello')
            .then(response => (response.status === 200 ? response.json() : `${response.status}-${response.statusText}`) )               
            .then(json=> printResponse(JSON.stringify(json, null, 4)))
            .catch(err=> printResponse(err));
    }

    function printResponse(response) {
        console.log('got back', response)
        const div = document.getElementById('response');
        div.innerHTML = `<pre>${response}</pre>`;
    }

    function notAvailable(message) {
        console.error('Service workers is not available', message);
    }

    function registerSW() {
        return new Promise((resolve, reject) => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                    .then(function (reg) {
                        // registration worked
                        console.log(`Registration succeeded. Using scope ${reg.scope}`);
                        resolve();
                    }).catch(function (error) {
                        // registration failed
                        reject(`Registration failed with ${error}`);
                    });
            }
            else {
                reject('Sevice worker not available in browser');
            }
        });
    }
    
    return onLoad;
})();

