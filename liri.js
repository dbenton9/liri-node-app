// requirements
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

// input variables from terminal
var input1 = process.argv[2];

// variable for twitter keys


// if statement runs through process.argv[2] 
// tihs determines what module to use

// 1. 'my-tweets' displays: last 20 tweets
if (input1 === 'my-tweets') {
    
    // Twitter Keys
    var client =  Twitter({
        consumer_key: 'WMeeR7lv6GJNSCbDesmg5Mrru',
        consumer_secret: 'ajrLk5YdSNd2431cIf67ZGbzIRgkQcOpy5UVUYNFYvUoUFEMU4',
        access_token_key: '1692001388-G157CSCUI3r6ngS31GfPBJnMSa84tXXpT1hQfKr',
        access_token_secret: 'wcfn8w1ujOGHvFSS0KjupS7eN8nkzaUfTJOr3iGgXJrCC'
    });
    
    var params = {screen_name: 'soccershelbyb15'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
          for (i=0; i < 20; i++) {
              var j=i+1;
            console.log(j + '. ' + tweets[i].text);
          };
      };
    });
}
// 2. 'spotify-this-song' displays; artist, song, link, album
// if no song default to 'The Sign'
else if (input1 === 'spotify-this-song') {
    var song = process.argv[3];
    var spotify = new Spotify({
        id: 'eb2bfb6ed0414930b9c1b89476f85e5b',
        secret: 'e09144d0426c4c5fa29eb92db14c15c8'
      });
       
    spotify.search({ type: 'track', query: song, limit: 5 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        for (i=0; i < 5; i++) {
            var firstResult = data.tracks.items[i];
            //console.log(firstResult) // first returned object for search
            var j = i+1;
            console.log('------ Song #' + j + '--------')
            console.log("Artist(s): " + firstResult.artists[0].name); // artist
            console.log("Song: " + firstResult.name); // song title
            console.log("Link: " + firstResult.preview_url); // spotify preview link
            console.log("Album " + firstResult.album.name); // album
            console.log('----------------------')
        };
    });
}
// 3. 'movie-this' diplays: title, release year, imdb rating,
// rotten tomatoes rating, country produced, language, plot, actors
// default move is 'Mr. Nobody'
// NOTE: you'll have to use 'Request' use API key '40e9cece'
else if (input1 === 'movie-this') {
    console.log('imdb'); // testing
// !!! see request_refresher.js from 2_oct26_node file !!!

// need to include code for movie using get request
}
// 4. 'do-what-it-says' take the text in random.txt file and run it
else if (input1 === 'do-what-it-says') {
    console.log('do what it says'); // testing
    // need to break text apart from command and input
}
else {
    console.log('please select a valid command: my-tweets, spotify-this-song, movie-this, do-what-it-says');
}