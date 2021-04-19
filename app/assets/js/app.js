'use strict';
(function() {

    const wrapIframe = document.querySelectorAll('.iframe-container');
    const createPreviewPlay = (url, title)=> {
        return `<div class="iframe-container__play"><img src="${url}" alt="${title}"></div>`
    }

    wrapIframe.forEach(item => {
        let itemIframe = item.querySelector('iframe');
        let arraySrc = itemIframe.src.split(/embed\/([^?\/]+)/);
        let arrayTitle = itemIframe.title;
        let arraySrcLength = arraySrc[1];

        console.log(arraySrc)
        console.log(arraySrcLength)

        if (arraySrc.indexOf( 'www.youtube.com' )) {
            let youtubeThumbnail = 'https://i.ytimg.com/vi/';
            let youtubeThumbnailGlued = youtubeThumbnail + arraySrcLength + '/hqdefault.jpg';

            item.innerHTML += createPreviewPlay(youtubeThumbnailGlued, arrayTitle);
        }
    })

    const itemPlay = document.querySelectorAll('.iframe-container__play');
    itemPlay.forEach(item => {
        let times = 0, playY;
        item.addEventListener('click', (e)=> {
            item.style.display = 'none';

            if(times === 0) {
                playY = item.previousElementSibling.src += '?autoplay=1';
                times = 1;
            }
        })
    })

})();
