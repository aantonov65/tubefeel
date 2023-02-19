import React, { useState } from 'react';
import UserContext from './userContext';

const UserProvider = (props) => {
    const [userID, setUserID] = useState(null);

    return (
        <UserContext.Provider value={{ userID, setUserID }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
