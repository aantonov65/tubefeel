const mysql = require('mysql');
const dbOpts = require("./config.js").dbOpts;

let Database = class {
    // Construct the database class and initialize a connection
    constructor() {
        this.con = mysql.createConnection(dbOpts);
    }

 /*   insertTestShit(value) {
        var gosho;
        this.con.query('INSERT INTO `test_shit` (`some_text`) VALUES(?)', [value], function pesho(error, results, fields) {
            if (error) throw error;
            resolve(results.insertId)
        });
        return gosho;
    }*/

    // Get the artist 
    getArtist(spotify_artist_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `artists` WHERE `spotify_id`=?', [spotify_artist_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get most listened artists 
    getTop10Artists(user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT `artists`.`name` AS artist_name, GROUP_CONCAT(DISTINCT `artists`.`spotify_id`) AS spotify_ids, COUNT(`tracks`.`id`) AS listens FROM `users` JOIN `listenhistory` ON `listenhistory`.`user_id` = `users`.`id` JOIN `tracks` ON `listenhistory`.`track_id` = `tracks`.`id` JOIN `artists` ON `tracks`.`artist_id` = `artists`.`id` WHERE `artists`.`name` IS NOT NULL AND `users`.`id`=? GROUP BY `artists`.`id` ORDER BY `listens` DESC LIMIT 10', [user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get the album
    getAlbum(spotify_album_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `albums` WHERE `spotify_id`=?', [spotify_album_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get the track 
    getTrack(spotify_track_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `tracks` WHERE `spotify_id`=?', [spotify_track_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get the most recent track
    getMostRecentTrack(user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `listenhistory` WHERE `user_id`=? ORDER BY `listenhistory`.`date` DESC LIMIT 1', [user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get user listen history 
    getHistory(user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `listenhistory` JOIN `tracks` ON `track_id` = `tracks`.`id` WHERE `user_id`=? ORDER BY `listenhistory`.`date`', [user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get TOP20 most positive tracks listened by the user
    getPositiveSongs(user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT * FROM `listenhistory` JOIN `tracks` ON `track_id` = `tracks`.`id` WHERE `user_id`=?  GROUP BY `track_id` ORDER BY `tracks`.`valence`  DESC LIMIT 20', [user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get positivity for days 
    getDayValences(user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT SUBSTR(`date`, 1, 10) AS `date`, AVG(`tracks`.`valence`) AS averageValence FROM `listenhistory` JOIN `tracks` ON `track_id` = `tracks`.`id` WHERE user_id=? GROUP BY SUBSTR(`date`, 1, 10) ORDER BY `date` ASC', [user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Get positivity for months
    getMonthValences(user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT SUBSTR(`date`, 1, 7) AS `date`, AVG(`tracks`.`valence`) AS averageValence FROM `listenhistory` JOIN `tracks` ON `track_id` = `tracks`.`id` WHERE user_id=? GROUP BY SUBSTR(`date`, 1, 7) ORDER BY `date` ASC', [user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    //  Gets top 10 tracks
    getTop10Tracks(user_id = false) {
        if (user_id !== false) {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT `tracks`.`name`, `tracks`.`spotify_id`, COUNT(`tracks`.`name`) AS listens FROM `listenhistory` JOIN `tracks` ON `track_id` = `tracks`.`id` WHERE `user_id`=? GROUP BY `tracks`.`id` ORDER BY listens DESC LIMIT 10', [user_id], function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        } else {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT `tracks`.`name`, `tracks`.`spotify_id`, COUNT(`tracks`.`name`) AS listens FROM `listenhistory` JOIN `tracks` ON `track_id` = `tracks`.`id` GROUP BY `tracks`.`id` ORDER BY listens DESC LIMIT 10', function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        }
    }

    // Count tracks
    countTracks(user_id = false) {
        if (user_id !== false) {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT COUNT(*) AS tracks FROM `listenhistory` WHERE `user_id`=?', [user_id], function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        } else {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT COUNT(*) AS tracks FROM `listenhistory`', function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        }
    }

    // Count users 
    countUsers() {
        const promise = new Promise((resolve, reject) => {
            this.con.query('SELECT COUNT(`id`) AS `userCount` FROM `users`', function (error, results, fields) {
                if (error) throw error;
                resolve(results);
            });
        });
        return promise;
    }

    // Count artists 
    countArtists(user_id = false) {
        if (user_id !== false) {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT COUNT(DISTINCT(`artists`.`name`)) AS artists FROM `listenhistory` JOIN `tracks` ON `listenhistory`.`track_id` = `tracks`.`id` JOIN `artists` ON `tracks`.`artist_id` = `artists`.`id` WHERE `user_id`=?', [user_id], function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        } else {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT COUNT(*) AS artists FROM `artists`', function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        }
    }

    // Count time spent 
    countTime(user_id = false) {
        if (user_id !== false) {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT SUM(`tracks`.`duration_ms`) AS timeInMiliseconds FROM `listenhistory` JOIN `tracks` ON `listenhistory`.`track_id` = `tracks`.`id` WHERE `user_id`=?', [user_id], function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        } else {
            const promise = new Promise((resolve, reject) => {
                this.con.query('SELECT SUM(`tracks`.`duration_ms`) AS timeInMiliseconds FROM `listenhistory` JOIN `tracks` ON `listenhistory`.`track_id` = `tracks`.`id`', function (error, results, fields) {
                    if (error) throw error;
                    resolve(results);
                });
            });
            return promise;
        }
    }

    // Insert the new user
    insertUser(spotify_user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `users` (`spotify_user_id`) VALUES (?)', [spotify_user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId);
            });
        });
        return promise;
    }

    // Insert song into listenhistory 
    historyInsertSong(track_id, date, user_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `listenhistory` (`track_id`, `date`, `user_id`) VALUES (?, ?, ?)', [track_id, date, user_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId)
            });
        });
        return promise;
    }

    // Insert unknown artist
    insertArtist(artistName, spotify_artist_id, artistURI) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `artists` (`name`, `spotify_id`, `uri`) VALUES (?, ?, ?)', [artistName, spotify_artist_id, artistURI], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId)
            });
        });
        return promise;
    }

    // Insert unknown track
    insertTrack(spotify_track_id, trackName, danceability, energy, song_key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, uri, track_href, duration_ms, artist_id) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `tracks` (`spotify_id`, `name`, `danceability`, `energy`, `song_key`, `loudness`, `mode`, `speechiness`, `acousticness`, `instrumentalness`, `liveness`, `valence`, `tempo`, `uri`, `track_href`, `duration_ms`, `artist_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [spotify_track_id, trackName, danceability, energy, song_key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, uri, track_href, duration_ms, artist_id], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId)
            });
        });
        return promise;
    }

    // Insert unknown album
    insertAlbum(name, artist_id, spotify_id, uri) {
        const promise = new Promise((resolve, reject) => {
            this.con.query('INSERT INTO `albums` (`name`, `artist_id`, `spotify_id`, `uri`) VALUES (?, ?, ?, ?)', [name, artist_id, spotify_id, uri], function (error, results, fields) {
                if (error) throw error;
                resolve(results.insertId)
            });
        });
        return promise;
    }
}

module.exports = Database;