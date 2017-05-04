window.addEventListener("load", function() {
    console.log("LOAD");
    var videoDisplay = document.getElementById("video");
    var lyricsDisplay = document.getElementById("lyrics");

    videoDisplay.addEventListener("onclick", iframeClick);

    var song = getParam("song");
    var artist = getParam("artist");
    var obj = JSON.stringify({
        song: song, 
        artist: artist,
        page: "ingame"
    });


    var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'https://karaokey-server.herokuapp.com/search', true);
    xhr.open('POST', 'http://localhost:5000/search', true);
    xhr.setRequestHeader('Content-type','application/json');  
    xhr.send(obj);
    xhr.onreadystatechange = function(response) {
        if (xhr.readyState === 4) {
            var data = JSON.parse(this.responseText);
            uuid = data.uuid;
            setUuid(uuid);
            console.log("UUID", uuid);
            videoDisplay.src = data.video;
            lyricsDisplay.innerHTML = parseSong(data.lyrics);
        }
    }

    initAudio();
});

function startClick(obj) {
    document.getElementById('video').src += "?rel=0&autoplay=1";
    toggleRecording(obj);
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function replay(){
    window.location.reload();
}

function stop(){
    toggleRecording();
    window.location.href = "score.html?uuid="+uuid;
}

function play_vid() {
    $("#video")[0].src += "&autoplay=1";
}
function parseSong(song) {
    if (!song || song.length <= 0)
        return "Oops your song/artist is spelled incorrectly. Try again!"
    var str = "";
    for (var i = 0; i < song.length-1; i++) {
        var curr = song[i];
        var next = song[i+1];

        if (/^[a-zA-Z]/.test(curr) && curr == curr.toLowerCase() && 
            /^[a-zA-Z]/.test(next) && next == next.toUpperCase()) {
            str += curr + "</br>";
            continue;
        } 
        str += curr;
    }
    str += song[song.length-1];
    return str.replace(/\n/g, '</br>');
}

function mouseDown(event) {
    if (event.id == "startBtn")
        document.getElementById("startImg").src = "images/activeStart.png";
    if (event.id == "stopBtn")
        document.getElementById("stopImg").src = "images/activeStop.png";
    if (event.id == "replayBtn")
        document.getElementById("replayImg").src = "images/activeReplay.png";

}

function mouseUp(event) {
    if (event.id == "startBtn")
        document.getElementById("startImg").src = "images/record-button.png";
    if (event.id == "stopBtn")
        document.getElementById("stopImg").src = "images/stop.png";
    if (event.id == "replayBtn")
        document.getElementById("replayImg").src = "images/replay.png";

}

function iframeClick() {
    console.log("iframe");
}