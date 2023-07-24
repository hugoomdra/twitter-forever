var observer = new MutationObserver(function (mutations) {

    const favicons = document.querySelectorAll('link[rel*="icon"]');

    favicons.forEach(function (favicon) {
        favicon.href = chrome.runtime.getURL('./twitter-icon.png');
    });


    let allSvg = document.querySelectorAll('svg');

    allSvg.forEach(function (svg) {

        let path = svg.querySelector('path');

        let svgClass = svg.getAttribute('class');

        if (path) {
            if (path.getAttribute('d') == 'M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0') {
                svgString = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 248 204" class="${svgClass}">
                                <path fill="#1d9bf0" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.2 26.16z"/>
                            </svg>`;

                var newSvg = document.createElement('svg')
                newSvg.innerHTML = svgString;
                svg.replaceWith(newSvg);
            }
        }
    });
})

const config = { subtree: true, childList: true };
observer.observe(document, config);
