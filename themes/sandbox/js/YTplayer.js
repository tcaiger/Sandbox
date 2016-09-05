if(document.getElementById('player')){
    var id = document.getElementById('player').dataset.videoid;
    var tag = document.createElement('script');

    tag.src            = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height : '230',
            width  : '415',
            videoId: id,
            events : {

            }
        });
    }

}