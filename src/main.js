import Vue from 'vue'
import App from './App.vue'

// styles
import 'normalize.css'
import './css/main.scss';

new Vue({
    el: '#app',
    render: h => h(App)
})

// register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// add offline state class to body
window.addEventListener('load', function () {
    const body = document.body;

    function updateOnlineStatus() {
        if (navigator.onLine) {
            body.classList.remove('offline')
            body.classList.add('online')
        } else {
            body.classList.add('offline')
            body.classList.remove('online')
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
})
