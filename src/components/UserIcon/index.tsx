import React from 'react';
import './usericon.css';
import profilePicture from "./profilePicture";

function UserIcon({ name, available }: { name: string, available: boolean }) {
    const text = React.useMemo(() => {
        return name.split(" ").map((item: string) => item[0]).join("");
    }, [name]);

    return (
        <div className='usericon-container'>
            {profilePicture.has(name) ? ( // Check if the name exists in the map
                <img src={profilePicture.get(name)} alt={text} className='usericonImage'/>
            ) : (
                <div className='usericon-text'>{text}</div>
            )}
            <div className={`user-status ${available ? "available" : ""}`}></div>
        </div>
    );
}

export default UserIcon;
