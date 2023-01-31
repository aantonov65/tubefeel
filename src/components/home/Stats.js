import React from "react";
import { Container, Row } from "react-bootstrap";
import Stat from "./Stat";
import { ReactComponent as MusicIcon } from "../../assets/icons/music-note-beamed.svg";
import { ReactComponent as MicIcon } from "../../assets/icons/mic-fill.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock-fill.svg";
import { ReactComponent as PeopleIcon } from "../../assets/icons/people-fill.svg";

const Stats = () => {
  return (
    <section className="stats pb-5">
      <Container fluid>
        <Row className="p-5 d-flex">
          <h2 className="text-center h2">
            Статистики на всички потребители в TubeFeel
          </h2>
          <Stat title="Слушани песни" count="13402" icon={<MusicIcon />} />
          <Stat title="Певци и състави" count="392" icon={<MicIcon />} />
          <Stat title="Потребители" count="167" icon={<PeopleIcon />} />
          <Stat title="Минути в системата" count="11634" icon={<ClockIcon />} />
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
