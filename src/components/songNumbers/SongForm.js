import React, { useContext, useEffect } from "react";
import UserContext from "../../api/userContext";
import { Container } from "react-bootstrap";

const SongForm = ({ data }) => {
    const { selectedSong, setSelectedSong } = useContext(UserContext);

    useEffect(() => {
        setSelectedSong(0);
    }, []);

    const handleSelectChange = (event) => {
        setSelectedSong(event.target.value);
    };

    return (
        <form className="mt-3 px-5">
            <label className="h5 m-0 mt-4">
                <strong>Изберете песен:</strong>
            </label>
            <div className="input-group mb-3 h5">
                <div className="input-group-prepend">
                    <select name="select" id="selectSong" onChange={handleSelectChange}>
                        {data.map((song, index) => (
                            <option value={index}>
                                {song.songName}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </form>
    );
};

export default SongForm;
