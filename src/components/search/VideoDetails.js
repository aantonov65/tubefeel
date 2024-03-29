import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";
import { baseURL } from "../../api/config";
import axios from "axios";
import * as qs from "qs";
import { Buffer } from "buffer";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ReactComponent as XIcon } from "../../assets/icons/x-lg.svg";
import { useNavigate } from "react-router-dom";

const VideoDetails = ({ videoId, title, desc, channel }) => {
  const navigate = useNavigate();
  const userID = localStorage.getItem('userID');
    const [SYToken, setSYToken] = useState("");
    const [successPopupOpen, setSuccessPopupOpen] = useState(false);
    const [errorPopupOpen, setErrorPopupOpen] = useState(false);

  useEffect(() => {
    const spotifyToken = (async function spotifyAuthenticate() {
      var client_id = "a89cff21ee9d4e1d8e1ace87c3bf5b31";
      var client_secret = "6426ec312f5c498a92c3976d0fa94da4";
      const data = { grant_type: "client_credentials" };
      const options = {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
          "content-type": "application/x-www-form-urlencoded",
        },
        data: qs.stringify(data),
        url: "https://accounts.spotify.com/api/token",
      };
      const response = await axios(options);

      const { access_token } = response.data;
      setSYToken(access_token);
    })();
  }, []);

  const handleInsert = () => {
    let titleClean = title
      .replace(/ *[\[\(\{][^)]*[\)\]\}] */g, "")
      .replace(/ *(HD|HQ|720p|1080p|4k) */g, "")
      .replace(/ *(of+icial *)?(music *)?video/g, "")
      .replace(/lyrics?/gi, "")
      .replace(/(feat|ft|featuring)\..*$/gi, "")
      .replace(/with.*$/gi, "");

    axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ` + SYToken,
        },
        params: {
          q: titleClean,
          type: "track",
          limit: 1,
        },
      })
      .then(function (spotifyResponse) {
        let songID = spotifyResponse.data.tracks.items[0].id;
        let songTitle = spotifyResponse.data.tracks.items[0].name;
        let artistName =
          spotifyResponse.data.tracks.items[0].album.artists[0].name;
        let artistID = spotifyResponse.data.tracks.items[0].album.artists[0].id;
        let artistURI =
          spotifyResponse.data.tracks.items[0].album.artists[0].uri;
        let albumName = spotifyResponse.data.tracks.items[0].album.name;
        let albumID = spotifyResponse.data.tracks.items[0].album.id;
        let albumURI = spotifyResponse.data.tracks.items[0].album.uri;
        axios
          .get("https://api.spotify.com/v1/audio-features/" + songID, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ` + SYToken,
            },
          })
          .then(function (spotRes) {
            const {
              id,
              danceability,
              energy,
              key,
              loudness,
              mode,
              speechiness,
              acousticness,
              instrumentalness,
              liveness,
              valence,
              tempo,
              uri,
              track_href,
              duration_ms,
            } = spotRes.data;

            axios.post(baseURL + "/users/historyInsert", {
              spotify_track_id: id,
              trackName: songTitle,
              danceability: danceability,
              energy: energy,
              song_key: key,
              loudness: loudness,
              mode: mode,
              speechiness: speechiness,
              acousticness: acousticness,
              instrumentalness: instrumentalness,
              liveness: liveness,
              valence: valence,
              tempo: tempo,
              uri: uri,
              track_href: track_href,
              duration_ms: duration_ms,
              youtube_id: videoId,
              userID: userID,
              artistName: artistName,
              artistID: artistID,
              artistURI: artistURI,
              albumName: albumName,
              albumID: albumID,
              albumURI: albumURI,
            }).then((res) => {
                if (res.status == 200) {
                    setSuccessPopupOpen(o => !o);
                }
            }).catch((err) => {
                if (err.response.status == 503) {
                    setErrorPopupOpen(o => !o);
                }
            });
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };


    const closeSuccess = () => setSuccessPopupOpen(false);
    const closeError = () => setErrorPopupOpen(false);

  if (!videoId) {
    return;
  }
  return (
    <Row className="details-row bg-light text-black px-5 w-100">
      <Col className="details-video-container col-12 col-md-6 d-flex align-items-center position-relative me-5">
        <VideoPlayer videoId={videoId} title={title} />
      </Col>
      <Col className="details-info-container col-12 col-md-5">
        <h2 className="h1 m-0">{title}</h2>
        <h3>{channel}</h3>
        <p className="h5 mt-2 text-secondary">{desc}</p>
        <button
            className="btn btn-danger text-white mt-2 px-2"
            onClick={handleInsert}>
            Добавете към вашата история
        </button>
        <Popup
          open={successPopupOpen} 
          modal
          nested
          onClose={closeSuccess}>
          {(close) => (
            <div className="py-2 h4 text-center rounded">
              <div className="content mt-3">
                Песента е успешно добавена към Вашата история!
              </div>
              <button
                className="to-history btn btn-danger btn-md h3 text-white mt-3 px-4 d-block mx-auto"
                onClick={() => navigate("/history")}>
                Към историята
              </button>
              <XIcon className="close-icon" onClick={close} />
            </div>
          )}
        </Popup>
        <Popup
          open={errorPopupOpen} 
          modal
          nested
          onClose={closeError}>
          {(close) => (
            <div className="py-2 h4 text-center rounded">
              <div className="content mt-3">
                Не можете да добавяте тази песен повече днес, моля добавете друга песен!
              </div>
              <button
                className="to-history btn btn-danger btn-md h3 text-white mt-3 px-4 d-block mx-auto"
                onClick={closeError}>
                Добави друга песен
              </button>
              <XIcon className="close-icon" onClick={close} />
            </div>
          )}
        </Popup>
      </Col>
    </Row>
  );
};

export default VideoDetails;
