// sw.js - Your website's internal ad-blocker
self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // List of common ad domains Doodstream uses
    const adKeywords = [
        'popads', 'adsterra', 'propush', 'onclickads', 
        'propellerads', 'doubleclick', 'syndication'
    ];

    // Check if the request is an ad
    const isAd = adKeywords.some(keyword => url.includes(keyword));

    if (isAd) {
        console.log("Service Worker Blocked Ad:", url);
        // Respond with nothing (blocks the ad request)
        event.respondWith(new Response('', { status: 204 }));
    }
});
