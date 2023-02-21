import React from "react";
import { Container } from "react-bootstrap";

const SongForm = () => {
  return (
    <form className="mt-3 px-5">
      <label className="h5 m-0 mt-4">
        <strong>Изберете песен:</strong>
      </label>
      <div className="input-group mb-3 h5">
        <div className="input-group-prepend">
          <select name="select" id="selectSong">
            <option value="noSongs">Byala roza</option>
            <option value="noSongs">Moma Yanitsa</option>
            <option value="noSongs">INDUSTRY BABY - EXTENDED</option>
            <option value="noSongs">MONTERO (Call Me By Your Name)</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SongForm;
