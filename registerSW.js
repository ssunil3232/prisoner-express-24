if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vue-nicorn-project/sw.js', { scope: '/vue-nicorn-project/' })})}