import React from "react";

export const AvatarBar = ({avatarData}) => {

  const online = avatarData.isOnline ?
        <input type="checkbox" id="isOnline" name="isOnline" value="isOnline" disabled="disabled" checked/> :
        <input type="checkbox" id="isOnline" name="isOnline" value="isOnline" disabled="disabled"/>

    return (
    <div>
       <img src={avatarData.avatar} className="avatar" /> 
       {online}
       <h3>{avatarData.contactName}</h3>
    </div>

  );
    };
