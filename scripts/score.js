function parseSong(song) {
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
window.addEventListener("load", function() {
    var uuid = getParameterByName("uuid");
    var obj = JSON.stringify({
        uuid: uuid
    });
    console.log("SCORE sending", obj);

    var playerLyricsBox = document.getElementById("player-lyrics");
    var actualLyricsBox = document.getElementById("actual-lyrics");
    var scoreTextBox = document.getElementById("score-text");
    var imageBox = document.getElementById("rank-image");

    var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'http://localhost:5000/score', true);
    xhr.open('POST', 'https://karaokey-server.herokuapp.com/score', true);
    xhr.setRequestHeader('Content-type','application/json');  
    xhr.send(obj);
    xhr.onreadystatechange = function(response) {
        if (xhr.readyState === 4) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            console.log("??</br>???????" + data.actualLyrics);
            var playerLyrics = data.playerLyrics;
            var actualLyrics = parseSong(data.actualLyrics);
            var artist = titleCase(data.artist.replace(/-/g, ' '));
            var song = titleCase(data.song.replace(/-/g, ' '));
            var score = data.score;
            var max = data.max;

            var percent = Math.round(data.score / data.max * 10000) / 100;
            var scoreText = percent + " % </br> " + score + "/" + max + " points"
            var image = getRank(percent);

            playerLyricsBox.innerHTML = "<p>" + song + " by you</p><p>" + playerLyrics + "</p>";
            actualLyricsBox.innerHTML = "<p>" + song + " by " + artist + "</p>" + actualLyrics;
            scoreTextBox.innerHTML = scoreText;
            imageBox.src = image;
        }
    }
});

function titleCase(str) {
    if (!str)
        return "";

     words = str.toLowerCase().split(' ');
     for(var i = 0; i < words.length; i++) {
        console.log(words[i]);
          var letters = words[i].split('');
          letters[0] = letters[0].toUpperCase();
          words[i] = letters.join('');
     }
     return words.join(' ');
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getRank (score) {
    if (score > 80) 
        return "images/s.png";
    if (score > 60)
        return "images/a.png";
    if (score > 40)
        return "images/b.png";
    if (score > 20)
        return "images/c.png";
    return "images/d.png";
}
function mouseDown(event) {
    if (event.id == "searchBtn")
        document.getElementById("searchImg").src = "images/activeSearch.png";
    if (event.id == "replayBtn")
        document.getElementById("replayImg").src = "images/activeReplay.png";

}

function mouseUp(event) {
    if (event.id == "searchBtn")
        document.getElementById("searchImg").src = "images/activeSearch.png";
    if (event.id == "replayBtn")
        document.getElementById("replayImg").src = "images/activeReplay.png";

}