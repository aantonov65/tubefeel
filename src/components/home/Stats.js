import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Stat from "./Stat";
import { ReactComponent as MusicIcon } from "../../assets/icons/music-note-beamed.svg";
import { ReactComponent as MicIcon } from "../../assets/icons/mic-fill.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock-fill.svg";
import { ReactComponent as PeopleIcon } from "../../assets/icons/people-fill.svg";
import { baseURL } from "../../api/config";
import axios from "axios";

const Stats = () => {
  useEffect(() => {
    axios.get(baseURL + "/users/count/time").then((res) => {
      let minutes = Math.round(res.data[0].timeInMiliseconds / 1000 / 60);
      setMinutes(minutes);
    });
    axios.get(baseURL + "/users/count/").then((res) => {
      let users = res.data[0].userCount;
      setUsers(users);
    });
    axios.get(baseURL + "/artists/count/").then((res) => {
      let artists = res.data[0].artists;
      setArtistsListened(artists);
    });
    axios.get(baseURL + "/tracks/count/").then((res) => {
      let tracks = res.data[0].tracks;
      setSongsListened(tracks);
    });
  }, []);
  const [songsListened, setSongsListened] = useState(0);
  const [artistsListened, setArtistsListened] = useState(0);
  const [users, setUsers] = useState(0);
  const [minutes, setMinutes] = useState(0);
  return (
    <section className="stats pb-5">
      <Container fluid>
        <Row className="pt-5 pb-3 px-4 d-flex">
          <h2 className="text-center h2 stats__heading">
            Статистики на всички потребители в TubeFeel
          </h2>
          <Stat
            title="Слушани песни"
            count={songsListened}
            icon={<MusicIcon className="stat__icon" />}
          />
          <Stat
            title="Певци и състави"
            count={artistsListened}
            icon={<MicIcon className="stat__icon" />}
          />
          <Stat
            title="Потребители"
            count={users}
            icon={<PeopleIcon className="stat__icon" />}
          />
          <Stat
            title="Минути в системата"
            count={minutes}
            icon={<ClockIcon className="stat__icon" />}
          />
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
