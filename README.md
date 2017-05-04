# Project title: Karaokey

Contributors: </br>
Chen, Ivan </br>
Chen, Vivian </br>
Hou, Jiawen </br>
Yang, Phoebe </br>

---

# Problem

Remembering lyrics to songs is pretty hard. We need a better way to memorize the words in music.

---

# Solution

We will build an interactive web application where the user can play a game to type out the lyrics to the beats of the song. 

---

# Feature List 

-HTML & css: We will be using HTML host all the content on our website, and css to design the user interface. 

-Javascript: Our interactive application will be built with a js rendering library to display lyrics on the screen. In addition, we will be using javascript to collect user input and save data locally. 

-Git: We will all have access to the group project git repository and each member can contribute to the code.

-The main interface will be on web, and mobile will have to redirect to the web page because typing is much more difficult on mobile.

-We will be using some server-side framework to handle our API calls and gather the lyric and song data.

Choose 3:

-The user will be able to search for songs using the Spotify API. Spotify provides data about the song name and artist, and we can use the Genius lyrics API to grab lyric data about the chosen song.

-We are planning to use the Panda.js game framework to make the game interactive for the user. The song lyrics can be animated scrolling across the screen while the song plays.

-The server can store previously searched songs, user preferences, and a list of the most popular songs. The data will persist on the server through multiple sessions.

---

# Data 

-Unique identifiers will be collected from different users to differentiate between them, and we can log their performance.

-The user can query for songs and artists, and the queries will be stored on our server for future usage. We will be requesting MP3 files from the Spotify API to play on our application, using the data inputted by the user.

-The game will be played by typing into a textbox on the screen. The typed text will be compared to the correct lyrics with string comparison, and we will calculate the accuracy of the user’s text.

---

# Algorithms and Techniques

We will need a way to determine the score accuracy of the text for both character accuracy and tempo accuracy. 
To calculate the accuracy of text, we would start a counter to calculate mistakes that player makes, comparing each word of the original lyric and the line player types. We would also calculate the whole line of lyrics, both letters and black spaces, and bonus is given for completely correct lines  of typing.

The user would “miss”  a word if they typed the word incorrectly or they typed the word at the wrong time. Since it is difficult to type the word at exactly the same moment that the word in the song is played, we decide to compare whether the time the word is typed is within a certain time range (+/- ¼ seconds). 

---

# Initial design mockup:

![Image1](http://i.imgur.com/m4iTzuV.png)
![Image1](http://i.imgur.com/k8FX6xs.png)
![Image1](http://i.imgur.com/KtAja0s.png)   

#Comments by Ming
* The idea is wild, amazing.  One thing I am not getting: your Features list read like a collection of technologies but what do players do?  I mean, seems like a player will need to be typing in lyrics --how will you do that?  That should have been in Features list.

---

# Status Report 1

1) Accomplishments

We set up git branches and necessary files for everyone, and divided up the group tasks for each member. That way we can work on independent branches and merge to master when necessary.

The project direction changed from using keyboard input to using voice/audio input for the song. We will be using the Google Speech Recognition to analyze audio files for text.

We set up a heroku app for the project, and linked a mongodb database to it. Also, we set up a Google Cloud Services project, configured the API authentication, and started investigating the Google Speech Recognition API. 

We are researching the Musixmatch API for getting lyrics, and Spotify API for getting song files.

2) Challenges and issues

We're working on the problem of integrating lyrics with the song. Ideally the lyrics would scroll to the tune of the song, as the music plays. However there isn't an obvious way to sync the lyrics with the song. Our initial solution will to to manually advance the song with a button until we figure pit something better.

One other issue is synchronizing the Spotify/Musixmatch/Google APIs together, because we will be using all of them at the same time. For now we will figure out how each of them work individually and worry about integrating them later.

3) Goals for next week

Be able to search for and play a chosen song on our site.
Retrieve json object containing lyrics and metadata for the chosen song.
Have a javascript microphone recorder and uploader for audio on our site. 

#Comments by Ming
* That challenge: if you can solve it, you can be very rich.  Why not use the same idea as the DOM lab we did?

---

# Status Report 2


1) Accomplishments

This week we built and tested a voice recording demo for desktop web. The demo records sound from the microphone, has an interface with a visualization of the audio, and has an option to save the audio as a .wav file.

We built the heroku server for receiving the audio input. The server converts the .wav file into a .flac, and uploads to Google Cloud Storage. Then it makes a query to the Google Speech Recognition API with the file and its metadata. We can retrieve the recognition results and display them on our webpage.

2) Challenges and issues

Having a mobile interface is proving to be an issue. HTML audio input is not supported on iOS browsers. The current workaround is to display the rest of the webpage: song search, lyrics, etc, and not take in microphone input.

We are scraping data from YouTube as well as metrolyrics.com. One difficulty is getting the correct results from scraping, and dealing with edge cases. For example, obscure songs might not come up first on a YouTube search, and might not fit the url format for metrolyrics. For now we are following the patterns in the data we do have and will make it as reliable as possible.

3) Goals for next week

Next week we will be focusing on getting the scraped data displayed and having the webpage be usable. We will be working on the UI, and connecting input boxes to our backend search function. In addition we want the upload process for our audio file to be smoother, meaning not having to wait ~30 seconds to retrieve data, and have data stream in while playing.

# Status Report 3

1) Accomplishments

This week we have successfully integrated all the various parts of the project into the website. The search functionality is hooked up to our backend scraper for lyrics and videos, and it successfully displays both.

We have also extended the timeout for the upload server to be able to handle larger files to make uploads smoother. The live audio visualizer is also displayed on the background of the game screen now so the user can see the sound waves in action.

We have improved our backend storage by naming and sorting the database by timestamp so that no two files collide, and we can retain the files indefinitely.

2) Challenges and issues

Streaming data from client to our server is still an issue. We are working on a solution to split the audio recording into multiple small files. The advantage of this approach is that uploading small files lets you get speech recognition results back faster, but there may be data lost while cutting the files. 

We are working on a way to compare the lyrics to the transcribed voice. Our solution so far is to use a dynamic programming approach to comparing strings called Levenshtein distance, and will be using that to score the song.

3) Goals for next week

Our goal is to finish up the styling of the website. We will be working on updating our css files to design the UI. Most of the backend and clientside code is finished, and we will be cleaning up/reorganizing for clarity.

# Comments by Ming
* Seems like this team is in great shape.  Good you are doing styling last.
* In the future, I'm making mobile one of the pick 6 items.

# [Lady Gaga - Bad Romance (ft. Ming Chow)](https://www.youtube.com/watch?v=Stto_aAOGag "Lady Gaga - Bad Romance (ft. Ming Chow)") 