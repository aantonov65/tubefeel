import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../api/userContext";
import { Col, Row } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

const SongData = ({ data }) => {
    const { selectedSong, setSelectedSong } = useContext(UserContext);

    const [selectedVidData, setSelectedVidData] = useState({
        "youtube_id": "",
        "songName": "",
        "artistName": "",
        "danceability": "",
        "energy": "",
        "instrumentalness": "",
        "acousticness": "",
    });

    console.log(selectedVidData)
    console.log(data[0])

   /* data.map((song) => {
        sortedData[song.songName] = song;
    });*/
    /*useEffect(() => {
        setSelectedSong(0);
    }, []);*/


    /*if (selectedSong == null) {
        *//*const [defaultSong] = Object.values(sortedData);
        setSelectedSong(Object.values(sortedData)[0]);
        console.log(selectedVidData);*//*
        setSelectedSong(0);
    }*/

    useEffect(() => {
        if (selectedSong !== null && selectedSong !== undefined) {
            console.log(selectedSong);
            console.log(data[0])
            console.log("Selected song changed: ", data[selectedSong]);
            setSelectedVidData(data[selectedSong]);
        } else {
            setSelectedVidData({
                "youtube_id": "",
                "songName": "",
                "artistName": "",
                "danceability": "",
                "energy": "",
                "instrumentalness": "",
                "acousticness": "",
            })
            console.log("gooshuuuu")
        }
    }, [selectedSong]);


    useEffect(() => {
        if (data[0]) {
            setSelectedVidData(data[0]);
            console.log("tui neshto sa runva")
        } 
    }, [data]);

  return (
    <Row className="row align-items-center justify-content-center mt-2 mb-5 px-5">
      <Col className="col-12 col-lg-6">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${selectedVidData["youtube_id"]}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
      </Col>
      <Col className="col-12 col-lg-6 mt-4 skill-right">
        <h3 className="h2">{selectedVidData["songName"]}</h3>
        <h4 id="songAuthor">
          <strong>Артист:</strong> {selectedVidData["artistName"]}
        </h4>
        <p id="messageForUser" className="h5">
          Тук може да видите различните характеристики на избраната от Вас
          песен!
        </p>
        <div className="mt-4">
          <ProgressBar title="Танцувалност" percentage={Math.round(selectedVidData["danceability"]* 100)} />
          <ProgressBar title="Енергичност" percentage={Math.round(selectedVidData["energy"] * 100)} />
          <ProgressBar title="Инструменталност" percentage={Math.round(selectedVidData["instrumentalness"]* 100)} />
          <ProgressBar title="Акустичност" percentage={Math.round(selectedVidData["acousticness"]* 100)} />
        </div>
      </Col>
    </Row>
  );
};

export default SongData;
