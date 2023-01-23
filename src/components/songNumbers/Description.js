import React from "react";
import { Container } from "react-bootstrap";

const Description = () => {
  return (
    <section>
      <Container className="mt-5 px-5">
        <form>
          <h6>
            <strong>Енергичност</strong> показва с число между 0 и 1
            интензивността на песента.
          </h6>
          <h6>
            <strong>Инструменталност</strong> представя колко процента сме
            сигурни, че песента е инструментална и не съдържа думи.
          </h6>
          <h6>
            <strong>Танцувалност</strong> се вижда колко подходяща за танцуване
            е песента.
          </h6>
          <h6>
            <strong>Акустичност</strong> представя колко процента сме сигурни,
            че песента не е електронно подправена.
          </h6>
          <label className="h5 m-0 mt-4">
            <strong>Избери песен:</strong>
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <select name="select" id="selectSong">
                <option value="noSongs">Нямате слушани песни.</option>
              </select>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Description;
