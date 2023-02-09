const express = require("express");
const app = express();
const port = 8000;
const Database = require('./database.js');
const db = new Database();

//API endpoint for getting a spotify artist with the spotify artist ID
app.get("/artist/:spotify_artist_id", (req, res) => {
    db.getArtist(req.params.spotify_artist_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting top 10 artists listened by a user
app.get("/users/top10/artists/:user_id", (req, res) => {
    db.getTop10Artists(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting an album
app.get("/album/:spotify_album_id", (req, res) => {
    db.getAlbum(req.params.spotify_album_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting a track
app.get("/track/:spotify_track_id", (req, res) => {
    db.getTrack(req.params.spotify_track_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting a user's most recent track
app.get("/users/recent/:user_id", (req, res) => {
    db.getMostRecentTrack(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting a user's history
app.get("/users/history/:user_id", (req, res) => {
    db.getHistory(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting the top 20 most positive tracks listened by a user
app.get("/users/positive/:user_id", (req, res) => {
    db.getPositiveSongs(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting the positivity for days
app.get("/users/positivity/day/:user_id", (req, res) => {
    db.getDayValences(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting positivity for months
app.get("/users/positivity/month/:user_id", (req, res) => {
    db.getMonthValences(req.params.spotify_artist_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting the top 10 tracks of a specific user
app.get("/tracks/top10/:user_id", (req, res) => {
    db.getTop10Tracks(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for getting the top 10 tracks of all users
app.get("/tracks/top10/", (req, res) => {
    db.getTop10Tracks().then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for counting songs listened by all users
app.get("/tracks/count/", (req, res) => {
    db.countTracks().then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for counting songs listened by a specific user
app.get("/tracks/count/:user_id", (req, res) => {
    db.countTracks(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for counting the number of users
app.get("/users/count/", (req, res) => {
    db.countUsers().then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for counting artists listened to by all users
app.get("/artists/count/", (req, res) => {
    db.countArtists().then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for counting artists listened to by a specific user
app.get("/artists/count/:user_id", (req, res) => {
    db.countArtists(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for counting total time listened to songs by all users
app.get("/users/count/time", (req, res) => {
    db.countTime().then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

//API endpoint for counting total time listened to songs by a specific user
app.get("/users/count/time/:user_id", (req, res) => {
    db.countTime(req.params.user_id).then((val) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(val);
    });
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
