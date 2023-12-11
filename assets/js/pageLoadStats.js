(function() {
    function displayPageLoadStats() {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const loadTime2 = window.performance.now();
        const footer = document.getElementById('footer');
        if (footer) {
            const loadTimeInfo = document.createElement('p');
            loadTimeInfo.style.fontSize = '70%';
            loadTimeInfo.style.fontWeight = '200';
            loadTimeInfo.textContent = `Время загрузки страницы: ${loadTime} мс`;
            footer.appendChild(loadTimeInfo);
        }
    }

    // Подписываемся на событие загрузки страницы
    window.addEventListener('load', displayPageLoadStats);
})();
