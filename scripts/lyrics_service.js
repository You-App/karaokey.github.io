var string
var time
var re
var urllib

function get_lyrics(artist,song) {
    var artist = artist.lower();
    var song = song.lower()
    var artist = re.sub('[^A-Za-z0-9]+', "", artist);
    song = re.sub('[^A-Za-z0-9]+', "", song);
    var raw_html = urllib.urlopen("http://azlyrics.com/lyrics/"+str(artist)+"/"+str(song)+".html");
    var html_copy = str(raw_html.read());
    var split = html_copy.split('<!-- Usage of http://azlyrics.com     content by any third-party lyrics provider is prohibited by our licensing agreement. Sorry about that. -->',1)
    var split_html = split[1]
    split = split_html.split('</div>',1)
    var lyrics = split[0]
    lyrics = re.sub('(<.*?>)',"",lyrics)
 
    return song.send(lyrics)
}