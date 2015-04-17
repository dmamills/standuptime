(function() {

    console.log('ayy standup!');

    var a = new Audio();
    a.src = 'media/luda.mp3';
    a.loop = true;
    a.load();

    var luda = document.getElementById('dancingGif');
    var head = document.getElementsByClassName('luda-head')[0];
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', playAudio);

    function playAudio() {
        if(a.paused)  {
            a.play();
            playButton.innerText = 'STOP';
            luda.style.display = 'block';
            head.style.display = 'block';
        } else {
            a.pause();
            a.currentTime = 0;
            playButton.innerText = 'STANDUP';
            luda.style.display = 'none';
            head.style.display = 'none';
        }
    }

}).call(this);
