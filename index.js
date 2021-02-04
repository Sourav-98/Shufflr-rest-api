const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();


const host = process.env.host || "localhost";
const port = process.env.PORT || 8080;

const myurl = "http://"+host+":"+port+"/";

app.use(cors());
app.use(express.static(path.join(__dirname, "/static")));

app.get('/load_playlist', (req, res)=>{
    var playlist = [
        {
            "id" : 1,
            "track" :  "Angel",
            "artist" :  "Akon",
            "albumCover" :  myurl+"resources/albumCover/Angel.jpg",
            "file" : myurl+"resources/songs/Angel.mp3"
        },
        
        {
            "id" : 2,
            "track" : "As Long As You Love Me" ,
            "artist" : "Backstreet Boys" ,
            "albumCover" : myurl+"resources/albumCover/As_Long_As_You_Love_Me.jpg",
            "file" : myurl+"/resources/songs/As_Long_As_You_Love_Me.mp3"
        },
        {
            "id" : 3,
            "track" : "Back In Black" ,
            "artist" : "AC/DC" ,
            "albumCover" : myurl+"resources/albumCover/Back_In_Black__AC_DC.jpg" ,
            "file" : myurl+"/resources/songs/Back_In_Black__AC_DC.mp3"
        },
        {
            "id" : 4,
            "track" : "Bailamos" ,
            "artist" : "Enrique Iglesias" ,
            "albumCover" : myurl+"resources/albumCover/Bailamos.jpg" ,
            "file" : myurl+"/resources/songs/Bailamos.mp3"
        },
        {
            "id" : 5,
            "track" : "Faded" ,
            "artist" : "Alan Walker" ,
            "albumCover" : myurl+"resources/albumCover/Faded.jpg" ,
            "file" : myurl+"/resources/songs/Faded.mp3"
        },
        {
            "id" : 6,
            "track" : "Highway To Hell" ,
            "artist" : "AC/DC" ,
            "albumCover" : myurl+"resources/albumCover/Highway_to_Hell__AC_DC.jpg" ,
            "file" : myurl+"/resources/songs/Highway_to_Hell__AC_DC.mp3"
        },
        {
            "id" : 7,
            "track" : "I Want It That Way" ,
            "artist" : "Backstreet Boys" ,
            "albumCover" : myurl+"resources/albumCover/I_Want_It_That_Way.jpg" ,
            "file" : myurl+"/resources/songs/I_Want_It_That_Way.mp3"
        },
        {
            "id" : 8,
            "track" : "Ignite" ,
            "artist" : "K-391 ft. Alan Walker" ,
            "albumCover" : myurl+"resources/albumCover/Ignite.jpg" ,
            "file" : myurl+"/resources/songs/Ignite.mp3"
        },
        {
            "id" : 9,
            "track" : "Irresistible" ,
            "artist" : "Fall Out Boy ft. Demi Lovato" ,
            "albumCover" : myurl+"resources/albumCover/Irresistible.jpg" ,
            "file" : myurl+"/resources/songs/Irresistible.mp3"
        },
        {
            "id" : 10,
            "track" : "Just The Way you Are" ,
            "artist" : "Bruno Mars" ,
            "albumCover" : myurl+"resources/albumCover/Just_The_Way_You_Are.jpg" ,
            "file" : myurl+"/resources/songs/Just_The_Way_You_Are.mp3"
        },
        {
            "id" : 11,
            "track" : "Levitate" ,
            "artist" : "Imagine Dragons" ,
            "albumCover" : myurl+"resources/albumCover/Levitate.jpg" ,
            "file" : myurl+"/resources/songs/Levitate.mp3"
        },
        {
            "id" : 12,
            "track" : "Playing With The Boys" ,
            "artist" : "Kenny Loggins" ,
            "albumCover" : myurl+"resources/albumCover/Playing_with_the_Boys.jpg" ,
            "file" : myurl+"/resources/songs/Playing_with_the_Boys.mp3"
        },
        {
            "id" : 13,
            "track" : "Radioactive" ,
            "artist" : "Imagine Dragons" ,
            "albumCover" : myurl+"resources/albumCover/Radioactive.jpg" ,
            "file" : myurl+"/resources/songs/Radioactive.mp3"
        },
        {
            "id" : 14,
            "track" : "Trigger" ,
            "artist" : "Major Lazer & Khalid" ,
            "albumCover" : myurl+"resources/albumCover/Trigger.jpg" ,
            "file" : myurl+"/resources/songs/Trigger.mp3"
        }

    ]
    res.send(playlist)
});


app.listen(port, host);
