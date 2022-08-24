import React from "react";

export const AvatarBar = ({avatarData}) => {

  const statusOnline =  <input type="checkbox" checked disabled/>
  const statusOffline = <input type="checkbox" disabled/>
  const status = avatarData.isOnline ? statusOnline : statusOffline;

    return (
    <div className="avatar">
       <img src={avatarData.avatar} className="avatar" /> 
       {status}
       <span className="contactName">{avatarData.contactName}</span>
    </div>

  );
    };
