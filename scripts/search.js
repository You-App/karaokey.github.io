window.onload = function() {
    var button = document.getElementById("submitButton");
    var songName = document.getElementById("song_input");
    var artistName = document.getElementById("artist_input");

    button.onclick = function () {
        var song = (songName.value || "").replace(/ /g, '-');
        var artist = (artistName.value || "").replace(/ /g, '-');
        var obj = JSON.stringify({
            song: song, 
            artist: artist
        });

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://karaokey-server.herokuapp.com/search', true);
        // xhr.open('POST', 'http://localhost:5000/search', true);
        xhr.setRequestHeader('Content-type','application/json');  
        xhr.send(obj);
        console.log(obj);
        xhr.onreadystatechange = function(response) {
            if (xhr.readyState === 4) {
                var data = this.responseText;

                // if (data is null)
                //     exit

                var queryString = "?song=" + song + "&artist=" + artist;
                window.location.href = "ingame.html" + queryString;
            }
        }
    };

    function clickSubmit (event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("submitButton").click();
        }
    }

    document.getElementById("song_input").addEventListener("keyup", clickSubmit);
    document.getElementById("artist_input").addEventListener("keyup", clickSubmit);
}


function mouseDown(event) {
    if (event.id == "submitButton")
        document.getElementById("nextimage").src = "images/activeNext.png";

}

function mouseUp(event) {
    if (event.id == "submitButton")
        document.getElementById("nextimage").src = "images/move-to-next.png";

}
