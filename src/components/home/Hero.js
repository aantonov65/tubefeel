import React from "react";
import { Button } from "react-bootstrap";
import Gradient from "./Gradient";

const Hero = () => {
  return (
    <div className="hero h-75 d-flex align-items-center position-relative overflow-hidden pb-5">
      <Gradient />
      <div className="col-10 col-md-6 m-4 text-center text-md-start mx-auto mx-md-0 px-2 px-md-5 pt-4">
        <h1 className="h1 m-0 me-2 mt-4 mt-sm-0">
          Проследете музикалната си
          <span> градация!</span>
        </h1>
        <p className="h5 font-weight-normal mt-3">
          Добре дошли в TubeFeel!
          <br /> Проект, който анализира последно слушаните Ви песни като
          потребител на платформата YouTube. Всички данни са представени чрез
          интерактивни диаграми, таблици и статистики. Целта на проекта е да се
          проследи музикалната последователност на личността и спрямо нея да се
          характеризира емоционалната му същност.
        </p>
        <Button
          className="home-button mt-2 py-2"
          variant="danger"
          href="/login">
          Влизане
        </Button>
      </div>
    </div>
  );
};

export default Hero;
