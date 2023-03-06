import React, { useState } from 'react';
import UserContext from './userContext';

const UserProvider = (props) => {
    const [selectedSong, setSelectedSong] = useState(null);

    return (
        <UserContext.Provider value={{ selectedSong, setSelectedSong }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
