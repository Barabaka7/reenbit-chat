import React from "react";

export const AvatarBar = ({avatarData}) => {

  const online = avatarData.isOnline ?
        <input type="checkbox" id="isOnline" name="isOnline" value="isOnline" disabled="disabled" checked/> :
        <input type="checkbox" id="isOnline" name="isOnline" value="isOnline" disabled="disabled"/>

    return (
    <div className="avatar">
       <img src={avatarData.avatar} className="avatar" /> 
       {online}
       <span className="contactName">{avatarData.contactName}</span>
    </div>

  );
    };
