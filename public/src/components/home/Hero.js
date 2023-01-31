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
          Проект, който анализира последно слушаните песни от потребителя в
          платформата YouTube. Данните са представени чрез интерактивни
          диаграми, таблици и статистики. Целта е да се проследи музикалната
          градация и развитие на личността, чрез която да се характеризира и
          проучи емоционалната същност на човека. На всеки 5 минути нашият
          сървър автоматично обновява и записва историята на слушаните песни на
          потребителя.
        </p>
        <Button className="mt-2 p-2" variant="danger" href="/login">
          Влез
        </Button>
      </div>
    </div>
  );
};

export default Hero;
